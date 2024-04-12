import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from openai import OpenAI
from datetime import datetime
import json
from .db import get_db


# Ensure your OPENAI_API_KEY is set in your environment variables
openai_api_key = os.environ.get("OPENAI_API_KEY")
if not openai_api_key:
    raise ValueError("The OPENAI_API_KEY environment variable is not set.")

client = OpenAI(api_key=openai_api_key)

def create_app(test_config=None):
    """Create and configure an instance of the Flask application."""
    app = Flask(__name__, instance_relative_config=True)
    CORS(app, supports_credentials=True)
    app.config.from_mapping(
        SECRET_KEY="dev",
        DATABASE=os.path.join(app.instance_path, "flaskr.sqlite"),
    )

    if test_config is None:
        app.config.from_pyfile("config.py", silent=True)
    else:
        app.config.update(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/api/conversations', methods=['GET'])
    def list_conversations():
        db = get_db()
        conversations = db.execute('SELECT id, last_updated FROM conversation ORDER BY last_updated DESC').fetchall()
        return jsonify([{'id': conv['id'], 'last_updated': conv['last_updated']} for conv in conversations])

    @app.route('/api/conversation/<int:conversation_id>', methods=['GET'])
    def get_conversation(conversation_id):
        db = get_db()
        messages = db.execute('SELECT text, is_user FROM message WHERE conversation_id = ? ORDER BY id', (conversation_id,)).fetchall()
        return jsonify([{'text': msg['text'], 'is_user': msg['is_user']} for msg in messages])


    @app.route('/api/message', methods=['POST'])
    def message():
        data = request.get_json()
        conversation_id = data.get('conversation_id')
        
        db = get_db()
        
        if conversation_id is None:
            cursor = db.execute('INSERT INTO conversation (last_updated) VALUES (?)', (datetime.now(),))
            conversation_id = cursor.lastrowid
            db.commit()
            
        if not data or 'message' not in data:
            return jsonify({'error': 'Missing message'}), 400
        
        user_message = data['message']

        try:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "system", "content": "You are a helpful assistant."}, 
                          {"role": "user", "content": user_message}],
                temperature=0
            )
            response = json.loads(response.model_dump_json())
            ai_response = response['choices'][0]['message']['content']
        except Exception as e:
            app.logger.error(f"OpenAI API call error: {e}")
            return jsonify({'error': 'Failed to get response from OpenAI API'}), 500

        try:
            db.execute('INSERT INTO message (conversation_id, text, is_user) VALUES (?, ?, TRUE)', (conversation_id, user_message))
            db.execute('INSERT INTO message (conversation_id, text, is_user) VALUES (?, ?, FALSE)', (conversation_id, ai_response))
            db.commit()

        except Exception as e:
            app.logger.error(f"Database operation failed: {e}")
            return jsonify({'error': 'Database operation failed'}), 500

        return jsonify({'response': ai_response, 'conversation_id': conversation_id})

    from . import db
    db.init_app(app)

    return app
