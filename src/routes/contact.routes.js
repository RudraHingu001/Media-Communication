import express from 'express';
import { createInquiry } from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/', createInquiry);

export default router;
