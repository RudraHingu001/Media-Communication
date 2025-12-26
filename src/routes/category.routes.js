import express from 'express';
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from '../controllers/category.controller.js';

import { protectAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', protectAdmin, createCategory);
router.get('/', getCategories);
router.put('/:id', protectAdmin, updateCategory);
router.delete('/:id', protectAdmin, deleteCategory);

export default router;
