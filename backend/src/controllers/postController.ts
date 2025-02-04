import { Request, Response } from 'express';
import { createPostService, deletePostService, editPostService, getAllPostsService, getDashboardService } from '../services/postService';
import { HTTP_STATUS } from '../constants/statusCodes';

// Post Controllers
export const createPost = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  try {
    const post = await createPostService(req.body, userId);
    res.status(HTTP_STATUS.CREATED).json({ message: 'Post created', data: post });
  } catch (error: any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  try {
    await deletePostService(req.params.id, userId);
    res.status(HTTP_STATUS.NO_CONTENT).json({ message: 'Post deleted' });
  } catch (error: any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};

export const editPost = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  try {
    const post = await editPostService(req.params.id, req.body, userId);
    res.status(HTTP_STATUS.OK).json({ message: 'Post updated', data: post });
  } catch (error: any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};

export const getAllPosts = async (_req: Request, res: Response) => {

  try {
    const posts = await getAllPostsService();
    res.status(HTTP_STATUS.OK).json({ data: posts });
  } catch (error: any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};

export const getDashboard = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  try {
    const dashboard = await getDashboardService(userId);
    res.status(HTTP_STATUS.OK).json({ data: dashboard });
  } catch (error: any) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
  }
};