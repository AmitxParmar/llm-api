import { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const chatController = async (req: Request, res: Response) => {
  try {
    const { chat } = req.body;

    if (!chat) {
      return res.status(400).json({ error: 'Chat is required' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: chat,
    });
    const text = response.text;

    res.json({ response: text });
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
};