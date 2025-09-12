import express, { Router } from 'express';
import { chatController } from '../controller/chat.controller';

const router:Router = express.Router();

router.post('/api/chat', chatController);

export default router;
