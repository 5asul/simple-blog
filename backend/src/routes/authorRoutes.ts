import express from 'express';
import { createPost, deletePost, editPost, getDashboard } from '../controllers/postController';
import { addComment } from '../controllers/commentController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

// Authenticated Author Endpoints
router.get('/dashboard', authenticate, getDashboard);
router.post('/posts', authenticate, createPost);
router.put('/posts/:id', authenticate, editPost);
router.delete('/posts/:id', authenticate, deletePost);
router.post('/comments', authenticate, addComment);


export default router;