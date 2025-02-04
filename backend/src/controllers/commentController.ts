import { Request, Response } from 'express';
import { addCommentService } from '../services/commentService';
import { HTTP_STATUS } from '../constants/statusCodes';

export const addComment = async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;
    try {
      const comment = await addCommentService(req.body, userId);
      res.status(HTTP_STATUS.CREATED).json({ message: 'Comment added', data: comment });
    } catch (error: any) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
    }
  };
  