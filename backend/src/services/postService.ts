import prisma from '../config/db';


export const createPostService = async (data: any, userId: number) => {
  return prisma.blogPost.create({ data: { ...data, authorId: userId } });
};

export const deletePostService = async (postId: string, userId: number) => {
  return prisma.blogPost.delete({ where: { id: Number(postId), authorId: userId } });
};

export const editPostService = async (postId: string, data: any, userId: number) => {
  return prisma.blogPost.update({ where: { id: Number(postId), authorId: userId }, data });
};

export const getAllPostsService = async () => {
  return prisma.blogPost.findMany();
};

export const getDashboardService = async (userId: number) => {
  return prisma.blogPost.findMany({ where: { authorId: userId } });
};