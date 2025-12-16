import express from 'express';
import {
  createProject,
  getAllProjects,
  getProjectsByCategory,
  getProjectById,
  updateProject,
  deleteProject,
} from '../controllers/project.controller.js';

import { protectAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.get('/category/:categoryId', getProjectsByCategory);

// Admin
router.post('/', protectAdmin, createProject);
router.put('/:id', protectAdmin, updateProject);
router.delete('/:id', protectAdmin, deleteProject);

export default router;
