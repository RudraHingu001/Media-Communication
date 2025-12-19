import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import projectRoutes from './routes/project.routes.js';
import categoryRoutes from './routes/category.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.options('*', cors());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running successfully 🚀' });
});

export default app;
