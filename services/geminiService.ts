import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

let ai: GoogleGenAI | null = null;

try {
  // Safely check for process.env to avoid ReferenceError in browsers
  const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : null;
  
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  } else {
    console.warn("Gemini API Key is missing or process.env is not defined");
  }
} catch (error) {
  console.error("Error initializing GoogleGenAI", error);
}

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Chadwick B. Jones, a Senior Clinical Data Analyst.
Your goal is to professionally and accurately answer questions about Chadwick's experience, skills, and projects based strictly on his resume data provided below.

Resume Context:
${JSON.stringify(RESUME_DATA, null, 2)}

Tone: Professional, insightful, enthusiastic about health-tech and AI.
If asked about something not in the resume, politely state that you don't have that information but can discuss his known skills in SQL, Python, HL7, etc.
Keep answers concise (under 150 words) unless asked for elaboration.
`;

export const streamChatResponse = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<AsyncIterable<string>> => {
  if (!ai) {
    // Return a generator that yields an error message if AI is not initialized
    async function* errorGenerator() {
        yield "I'm sorry, I can't connect to the AI service right now (API Key missing). Please verify your configuration.";
    }
    return errorGenerator();
  }

  try {
      // Ensure roles are strictly typed for the SDK
      const chatHistory = history.map(h => ({
        role: (h.role === 'user' ? 'user' : 'model') as 'user' | 'model',
        parts: h.parts
      }));

      const chat = ai.chats.create({
        model: "gemini-2.5-flash",
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: chatHistory
      });

      const result = await chat.sendMessageStream({ message });
      
      async function* generator() {
        for await (const chunk of result) {
          const text = chunk.text;
          if (text) yield text;
        }
      }

      return generator();
  } catch (error) {
      console.error("Stream Error:", error);
      async function* errorGenerator() {
        yield "I encountered an error processing your request. Please try again.";
      }
      return errorGenerator();
  }
};