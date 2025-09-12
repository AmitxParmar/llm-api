# LLM Chat API

A Node.js Express API server that provides chat functionality using Google's Gemini AI model.

## Features

- RESTful API endpoint for chat interactions
- Integration with Google Gemini 2.5 Pro model
- Modular architecture with controllers and routes
- Error handling and validation

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your Google API key:
```
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```

3. Start the server:
```bash
npm start
```

## API Endpoints

### POST /api/chat

Send a message to the AI and receive a response.

**Request Body:**
```json
{
  "chat": "Your message here"
}
```

**Response:**
```json
{
  "response": "AI response text here"
}
```

**Error Responses:**

400 Bad Request - Missing chat:
```json
{
  "error": "Chat is required"
}
```

500 Internal Server Error - Generation failed:
```json
{
  "error": "Failed to generate response"
}
```

## Project Structure

```
src/
├── controller/
│   └── chat.controller.ts    # Chat logic and AI integration
├── route/
│   └── chat.route.ts        # Route definitions
└── server.ts                # Main server setup
```

## Dependencies

- `express` - Web framework
- `@google/generative-ai` - Google Gemini AI SDK
- `dotenv` - Environment variable management
- `typescript` - TypeScript support