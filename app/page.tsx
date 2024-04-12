'use client';

import Head from 'next/head';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef, FormEvent } from 'react';
import styles from '../styles/Home.module.css';

interface Conversation {
  id: number;
  lastUpdated: string;
}

interface ChatMessage {
  message: string;
  isUser: boolean;
}

export default function Page() {
  const [message, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversationId, setSelectedConversationId] = useState<number | null>(null);
  const [isSending, setIsSending] = useState(false);
  const latestMessageRef = useRef(null);

  const fetchConversations = async () => {
    try {
      const response = await fetch('/api/conversations');
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setConversations(data);
    } catch (error) {
      console.error("Failed to fetch conversations", error);
    }
  };

  // Get the session list when the component is loaded for the first time
  useEffect(() => {
      fetchConversations();
  }, []);

  useEffect(() => {
    // Check if it's the first message in the chat history
    if (chatHistory.length === 1) {
      fetchConversations();
    }
  }, [chatHistory.length]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedConversationId === null) return;

      try {
        const response = await fetch(`/api/conversation/${selectedConversationId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setChatHistory(data.map((msg: any) => ({ message: msg.text, isUser: msg.is_user })));
      } catch (error) {
        console.error("Failed to fetch messages", error);
      }
    };

    fetchMessages();
  }, [selectedConversationId]);

  const displayMessageGradually = (text: string, isUser: boolean, onComplete: () => void) => {
    let displayText = '';
    const intervalId = setInterval(() => {
      if (displayText.length < text.length) {
        displayText += text[displayText.length];
        setChatHistory((prev) => [...prev.slice(0, -1), { message: displayText, isUser }]);
      } else {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      }
    }, 5);
  };

  const sendMessage = async (e: FormEvent) => {
    
    e.preventDefault();
    if (!message || isSending) return;
  
    setIsSending(true);
    setMessage('');
  
    const payload = {
      message,
      conversation_id: selectedConversationId,
    };
  
    setChatHistory((prev) => [...prev, { message, isUser: true }]);
  
    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();

      setChatHistory((prev) => [...prev, { message: data.response, isUser: false }]);
      displayMessageGradually(data.response, false, () => {
        setIsSending(false); // Set to false when verbatim display is complete
      });

      if (selectedConversationId === null) {
        setSelectedConversationId(data.conversation_id);
      }
    } catch (error) {
      console.error("Failed to send message", error);
      setIsSending(false);
    }
  };

  useEffect(() => {
    // Scroll to the latest of the chat history
    if (latestMessageRef.current) {
      (latestMessageRef.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Chat with GPT</title>
      </Head>

      <div className={styles.sidebar}>
        {conversations.map((conversation) => (
          <div key={conversation.id} 
               className={styles.conversationItem} 
               onClick={() => setSelectedConversationId(conversation.id)}>
            Conversation {conversation.id}
          </div>
        ))}
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>ChatGPT Beta</h1>
        <div className={styles.chatHistory}>
          {chatHistory.map((chat, index) => (
            <div key={index} 
              ref={index === chatHistory.length - 1 ? latestMessageRef : null}
              className={chat.isUser ? styles.userMessage : styles.gptMessage}>
              {chat.message}
            </div>
          ))}
        </div>
        <div className={styles.chatBox}>
          <form onSubmit={sendMessage} className={styles.form}>
            <Input type="text" 
                  value={message} 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)} 
                  placeholder="Message ChatGPT..." 
                  className={styles.inputField}
                  disabled={isSending}
            />
            <Button type="submit" className={styles.sendButton} disabled={isSending}>
              {isSending ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}