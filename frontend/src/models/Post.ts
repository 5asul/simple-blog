import { Comment } from "./Comment";
import { User } from "./User";





export interface Post {
    id: number;
    title: string;
    content: string; // Updated to match the API response
    image: string; // Added to match the API response
    status:number;
    createdAt: string;
    author: User;
    authorId: number;
    comments: Comment[];
  }
  
  