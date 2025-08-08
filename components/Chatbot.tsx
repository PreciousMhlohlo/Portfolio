import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../hooks/useChat';
import { ChatBubbleIcon, CloseIcon, SendIcon, UserIcon, BotIcon } from './icons/ChatIcons';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, sendMessage, isLoading, error } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#5A3734] text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5A3734]"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? <CloseIcon className="h-6 w-6" /> : <ChatBubbleIcon className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`fixed bottom-0 right-0 z-40 w-full h-full rounded-t-lg sm:bottom-24 sm:right-6 sm:w-96 sm:h-auto sm:max-h-[70vh] sm:rounded-lg bg-[#F1EFEA] border-2 border-dotted border-[#5A3734] shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-heading"
      >
        <header className="flex items-center justify-between p-4 border-b-2 border-dotted border-[#5A3734]">
          <h2 id="chat-heading" className="font-display text-lg font-bold text-[#5A3734]">AI Assistant</h2>
          <button onClick={() => setIsOpen(false)} className="text-[#5A3734] hover:opacity-70" aria-label="Close">
            <CloseIcon className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'ai' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5A3734]/20 flex items-center justify-center"><BotIcon className="w-5 h-5 text-[#5A3734]" /></div>}
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                  msg.sender === 'user' ? 'bg-[#5A3734] text-white' : 'bg-[#5A3734]/10 text-[#5A3734] border border-dotted border-[#5A3734]/30'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
               {msg.sender === 'user' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5A3734]/20 flex items-center justify-center"><UserIcon className="w-5 h-5 text-[#5A3734]" /></div>}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3 justify-start">
               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5A3734]/20 flex items-center justify-center"><BotIcon className="w-5 h-5 text-[#5A3734]" /></div>
              <div className="bg-[#5A3734]/10 text-[#5A3734] border border-dotted border-[#5A3734]/30 rounded-lg px-4 py-3 flex items-center space-x-1">
                 <span className="w-2 h-2 bg-[#5A3734]/50 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                 <span className="w-2 h-2 bg-[#5A3734]/50 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                 <span className="w-2 h-2 bg-[#5A3734]/50 rounded-full animate-pulse"></span>
              </div>
            </div>
          )}
          {error && <div className="text-red-600 text-xs p-2 bg-red-100/50 border border-red-200 rounded">{error}</div>}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="p-4 border-t-2 border-dotted border-[#5A3734] bg-[#F1EFEA]">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 w-full px-4 py-2 text-sm bg-white border border-[#5A3734]/30 rounded-md focus:ring-2 focus:ring-[#5A3734] focus:outline-none transition"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 bg-[#5A3734] text-white rounded-md disabled:bg-opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-colors"
              aria-label="Send message"
            >
              <SendIcon className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
