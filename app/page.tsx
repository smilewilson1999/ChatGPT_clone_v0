'use client';

import Head from 'next/head';
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [message, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<{ message: string; isUser: boolean }[]>([]);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!message) return;

    setChatHistory((prev) => [...prev, { message, isUser: true }]);
    
    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      setChatHistory((prev) => [...prev, { message: data.response, isUser: false }]);
    } catch (error) {
      console.error("Failed to send message", error);
    }

    setMessage('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Chat with GPT</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Chat with GPT</h1>
        <div className={styles.chatHistory}>
          {chatHistory.map((chat, index) => (
            <div key={index} className={chat.isUser ? styles.userMessage : styles.gptMessage}>
              {chat.message}
            </div>
          ))}
        </div>
        <div className={styles.chatBox}>
          <form onSubmit={sendMessage}>
            <input type="text" value={message} onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)} placeholder="Type your message here..." className={styles.inputField} />
            <button type="submit" className={styles.sendButton}>Send</button>
          </form>
        </div>
      </main>
    </div>
  );
}