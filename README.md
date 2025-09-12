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
  "prompt": "Your message here"
}
```

**Response:**
```json
{
  "response": {
    "candidates": [
      {
        "content": {
          "parts": [
            {
              "text": "AI response text here"
            }
          ],
          "role": "model"
        },
        "finishReason": "STOP",
        "index": 0
      }
    ],
    "usageMetadata": {
      "promptTokenCount": 7,
      "candidatesTokenCount": 374,
      "totalTokenCount": 1622,
      "promptTokensDetails": [
        {
          "modality": "TEXT",
          "tokenCount": 7
        }
      ],
      "thoughtsTokenCount": 1241
    },
    "modelVersion": "gemini-2.5-pro",
    "responseId": "unique_response_id"
  }
}
```

**Error Responses:**

400 Bad Request - Missing prompt:
```json
{
  "error": "Prompt is required"
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