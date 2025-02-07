// src/components/constants/endpoints.ts

const BASE_URL ='http://localhost:5000';

export const ENDPOINTS = {
  
    LOGIN: `${BASE_URL}/api/author/login`,
    REGISTER: `${BASE_URL}/api/author/register`,
    POSTS: `${BASE_URL}/api/author`,
    VISITOR_POSTS: `${BASE_URL}/api/visitor/get-posts`,
    MESSAGES: `${BASE_URL}/api/messages`,
  };