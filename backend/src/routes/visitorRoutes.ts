import express from 'express';
import { getAllPosts } from '../controllers/postController';
import { registerUser, loginUser } from '../controllers/authController';
const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;