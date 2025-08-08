import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { PERSONAL_INFO, PROJECTS, SKILLS } from '../constants';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

// Generate a comprehensive context string from constants
const generateSystemContext = () => {
    const skillsList = SKILLS.map(s => s.name).join(', ');
    const projectSummary = PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n');
    
    return `
You are a friendly, professional, and helpful AI assistant for Nosibusiso Precious Mhlohlo's portfolio website. Your purpose is to answer questions from potential employers, recruiters, and collaborators about her skills, experience, and projects.

Your knowledge base is strictly limited to the information provided below. Do not invent information or answer questions outside this scope. If a question is unrelated to Nosibusiso's professional life (e.g., personal opinions, general knowledge), politely decline and state that your purpose is to assist with her portfolio. If you don't have the specific information requested, state that and suggest contacting her directly at ${PERSONAL_INFO.email}.

Keep your answers concise and to the point.

**Nosibusiso Precious Mhlohlo's Information:**

*   **Name:** ${PERSONAL_INFO.name}
*   **Title:** ${PERSONAL_INFO.title}
*   **Location:** Johannesburg, South Africa (willing to relocate for the right opportunity).
*   **Bio/Summary:** ${PERSONAL_INFO.bio}
*   **Career Objectives:** ${PERSONAL_INFO.careerObjectives}
*   **Contact Email:** ${PERSONAL_INFO.email}
*   **LinkedIn:** ${PERSONAL_INFO.linkedin}
*   **GitHub:** ${PERSONAL_INFO.github}

**Experience Details:**
*   **Total IT Support Experience:** 1 year and 3 months.
*   **Previous Role:** IT Support at Preontek, a WIFI company.
*   **Training:** Completed a 1-year work-based IT Support NQF Level 5 learnership at Speccon Holdings.

**Skills:**
Nosibusiso has skills in the following areas: ${skillsList}.

**Projects:**
Here is a summary of her featured projects:
${projectSummary}

When asked for a project link, provide the 'liveDemoUrl' from the project data.
---
Now, begin the conversation by introducing yourself and offering to answer questions about Nosibusiso.
    `;
};


export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const chatRef = useRef<Chat | null>(null);

  useEffect(() => {
    const initializeChat = async () => {
      setError(null);
      setIsLoading(true);
      try {
        if (!process.env.API_KEY) {
          throw new Error('API key is missing. Please ensure it is configured correctly.');
        }
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: generateSystemContext(),
          }
        });
        chatRef.current = newChat;

        // Send an empty message to get the initial greeting
        const response = await newChat.sendMessage({ message: "Hello" });
        const aiGreeting = { text: response.text, sender: 'ai' as const };
        setMessages([aiGreeting]);
      } catch (err) {
        console.error("Chat initialization failed:", err);
        if (err instanceof Error) {
            setError(`Failed to initialize AI assistant: ${err.message}`);
        } else {
            setError("An unknown error occurred during AI initialization.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    initializeChat();
  }, []);

  const sendMessage = async (userInput: string) => {
    if (!chatRef.current) {
        setError("Chat is not initialized.");
        return;
    }

    const newUserMessage: Message = { text: userInput, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await chatRef.current.sendMessage({ message: userInput });
      const aiResponse: Message = { text: response.text, sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
    } catch (err) {
      console.error("Error sending message:", err);
      const errorMessage = "Sorry, I encountered an error. Please try again.";
      setError(errorMessage);
      setMessages(prev => [...prev, { text: errorMessage, sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading, error };
};