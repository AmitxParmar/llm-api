import express from 'express';
import dotenv from "dotenv";
import chatRoutes from './route/chat.route';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(chatRoutes);

app.listen(port, () => {
  console.log(`LLM API server running on port ${port}`);
});
