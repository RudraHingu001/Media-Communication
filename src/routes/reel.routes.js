import express from 'express';
import {
  createReel,
  getAllReels,
  getReelById,
  updateReel,
  deleteReel,
} from '../controllers/reel.controller.js';

import { protectAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

/* Public */
router.get('/', getAllReels);
router.get('/:id', getReelById);

/* Admin */
router.post('/', protectAdmin, createReel);
router.put('/:id', protectAdmin, updateReel);
router.delete('/:id', protectAdmin, deleteReel);

export default router;
