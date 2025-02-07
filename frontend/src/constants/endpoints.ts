// src/components/constants/endpoints.ts
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL =process.env.NEXT_PUBLIC_API_URL;

export const ENDPOINTS = {
  
    LOGIN: `${BASE_URL}/api/author/login`,
    REGISTER: `${BASE_URL}/api/author/register`,
    POSTS: `${BASE_URL}/api/author`,
    VISITOR_POSTS: `${BASE_URL}/api/visitor/get-posts`,
    MESSAGES: `${BASE_URL}/api/messages`,
  };