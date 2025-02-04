import prisma from '../config/db';

export const addCommentService = async (data: any, userId: number) => {
  return prisma.comment.create({ data: { ...data, authorId: userId } });
};
