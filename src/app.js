import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import projectRoutes from './routes/project.routes.js';
import categoryRoutes from './routes/category.routes.js';
import contactRoutes from './routes/contact.routes.js';
import reelRoutes from './routes/reel.routes.js';

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3001',
    'https://studio-51-lb9r.vercel.app',
    'https://studio-51-dhmq.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // remove if you don't use cookies
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/reels', reelRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API is running successfully 🚀'
  });
});

export default app;