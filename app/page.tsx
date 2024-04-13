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
  const [abortController, setAbortController] = useState<AbortController | null | undefined>(null);
  

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

    const currentAbortController = new AbortController();
    setAbortController(currentAbortController);
  
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
        signal: currentAbortController.signal,
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();

      
      displayMessageGradually(data.response, false, () => {
        setIsSending(false); // Set to false when verbatim display is complete
      });
      setChatHistory((prev) => [...prev, { message: data.response, isUser: false }]);

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

  const deleteConversation = async (conversationId:number) => {
    try {
      const response = await fetch(`/api/conversation/${conversationId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
    
      setConversations(conversations.filter(conversation => conversation.id !== conversationId));
    } catch (error) {
      console.error("Failed to delete conversation", error);
    }
  };

  const handleStopGeneration = () => {
    if (abortController) {
      abortController.abort();
      setAbortController(null);
      setIsSending(false);
    }
  };

  const createNewConversation = async () => {
    try {
      const response = await fetch('/api/conversations/create', {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newConversation = await response.json();
      setSelectedConversationId(newConversation.id);
      fetchConversations();
    } catch (error) {
      console.error("Failed to create new conversation", error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        <title>ChatGPT Beta</title>
      </Head>

      <div className={styles.sidebar}>
        <Button onClick={createNewConversation} className={styles.newConversationButton} style={{ width: '100%', justifyContent: 'space-between' }}>
          <img src="/chatgpt-ascii-art-v0.png" alt="GPT Icon" className={styles.newConversationIcon_GPT} />
          <img src="/new-post.png" alt="New Post Icon" className={styles.newConversationIcon_Post}/>
        </Button>
        {conversations.map((conversation) => (
          <div key={conversation.id} className={styles.conversationItem} onClick={() => setSelectedConversationId(conversation.id)}>
            <span style={{ marginRight: 'auto' }}>Chat History {conversation.id}</span>
            <Button onClick={(e) => {
              e.stopPropagation();
              const isConfirmed = window.confirm('Are you sure you want to delete this conversation?');
              if (isConfirmed) {
                deleteConversation(conversation.id);
              }
            }} className={styles.deleteButton}>
              -
            </Button>
          </div>
        ))}
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}><img src="/chatgpt-ascii-art.png" alt="ChatGPT ASCII Art" /></h1>
        <div className={styles.chatHistory}>
          {chatHistory.map((chat, index) => (
            <div key={index}
              ref={index === chatHistory.length - 1 ? latestMessageRef : null}
              className={`${styles.message} ${chat.isUser ? styles.userMessage : styles.gptMessage}`}>
              {!chat.isUser ? <img src="/gpt-icon.png" alt="GPT Icon" className={styles.messageIconGPT} /> : null}
              <div className={styles.messageText}>{chat.message}</div>
              {chat.isUser ? <img src="/user-icon.png" alt="User Icon" className={styles.messageIconUser} /> : null}
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
            {isSending && (
              <button className={styles.stopButton} onClick={handleStopGeneration} type="button">
                <img src="/stop-icon.svg" alt="Stop" className={styles.stopIcon} />
              </button>
            )}
            <Button type="submit" className={styles.sendButton} disabled={isSending}>
              {isSending ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}