'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import { type ModelMessage } from 'ai';
import model from '@/ai/model';

import { Input } from '../ui/input';
import { Button } from '../ui/button';

import { Spinner } from '../ui/spinner';
import GeneratedCodeRenderer from '../GeneratedCodeRenderer/GeneratedCodeRenderer';

import styles from './V0Chat.module.css';

interface v0ChatProps {
  handleModel: typeof model;
}

interface ChatHistory {
  type: 'user' | 'response';
  textContent?: string;
  componentContent?: JSX.Element;
  componentTextString?: string;
}

export default ({ handleModel }: v0ChatProps) => {

  const [prompt, promptSetter] = useState('');
  const [chatHistory, chatHistorySetter] = useState<Array<ChatHistory>>([]);
  const [messages, messagesSetter] = useState<Array<ModelMessage>>([]);
  const [isLoading, isLoadingSetter] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      const config = { childList: true };
  
      const callback = (mutationsList: MutationRecord[], observer: MutationObserver) => {
        for (let mutation of mutationsList) {
          if (mutation.type === "childList" && chatRef.current) {
            chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
          }
        }
      };
  
      const observer = new MutationObserver(callback);
      observer.observe(chatRef.current, config);
    }
  }, []);

  const handleSubmit = async () => {
    if (!prompt.length) return;

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    isLoadingSetter(true);
    chatHistorySetter(prev => [
      ...prev,
      {
        type: 'user',
        textContent: prompt
      }
    ]);

    const response = await handleModel([
      ...messages,
      {
        role: 'user',
        content: prompt
      }
    ]);

    if (response?.components) {
      chatHistorySetter(prev => [
        ...prev,
        {
          type: 'response',
          componentContent: response?.components,
          componentTextString: response.componentTextString
        }
      ]);
    }
    messagesSetter(prev => [
      ...prev,
      ...response.messages
    ]);

    isLoadingSetter(false);
  };

  const handleDownloadGeneratedCode = (generatedTextCode: string) => {
    const fileContent = generatedTextCode;
    const fileName = "generatedCode.jsx";
    const fileType = "text/plain";

    const blob = new Blob([fileContent], { type: fileType });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className={styles.container}>
      <div
        ref={chatRef}
        className={styles.chatContainer}
      >
        {chatHistory.map(message => {
          switch (message.type) {
            case 'user':
              return (
                <div className={styles.userInputMessage}>{message.textContent}</div>
              );
            case 'response':
              return (
                <div className={styles.generatedUIContainer}>
                  <button
                    className={styles.downloadGeneratedCodeButton}
                    role="button"
                    onClick={() => handleDownloadGeneratedCode(message?.componentTextString ?? '')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>file-download</title><g fill="oklch(62.7% 0.265 303.9)"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.2426 2C19.1818 2 18.1644 2.42143 17.4142 3.17157L7.17157 13.4142C6.42153 14.1643 6 15.1812 6 16.2422V40C6 43.3137 8.68629 46 12 46H25.3253C22.967 43.7264 21.5 40.5345 21.5 37C21.5 30.0964 27.0964 24.5 34 24.5C37.0431 24.5 39.8322 25.5874 42 27.3949V7.9991C42 4.68516 39.3135 2 36 2H20.2426ZM20 16V5L9 16H20Z" fill="oklch(62.7% 0.265 303.9)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5 37C43.5 42.2467 39.2467 46.5 34 46.5C28.7533 46.5 24.5 42.2467 24.5 37C24.5 31.7533 28.7533 27.5 34 27.5C39.2467 27.5 43.5 31.7533 43.5 37ZM35.5 37.3787L37.6449 35.2338L39.7662 37.3551L34.0001 43.1213L28.2306 37.3518L30.352 35.2305L32.5 37.3786V32H35.5V37.3787Z" fill="oklch(62.7% 0.265 303.9)"></path></g></svg>
                  </button>
                  <GeneratedCodeRenderer>
                    {message.componentContent}
                  </GeneratedCodeRenderer>
                </div>
              )
            default:
              return (<></>);
          }
        })}
        {isLoading && (
          <div>Loading...</div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Create a signup form with an email and password input."
          onChange={e => promptSetter(e.target.value)}
        />
        <Button
          className={styles.submitButton}
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading && (
            <Spinner/>
          )}
          <p>Submit</p>
        </Button>
      </div>
    </div>
  )

};