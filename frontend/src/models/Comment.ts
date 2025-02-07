import { Post } from "./Post";
import { User } from "./User";


export interface Comment {
    id: number;
    content: string;
    createdAt: string;
    post:Post;
    postId: number;
    author:User;
    authorId: number;
    
  }