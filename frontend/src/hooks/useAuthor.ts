"use client"


import { useState, useCallback, useEffect } from 'react';
import { Post } from '../models/Post';
import { useAuth } from './useAuth';
import { Comment } from '@/models/Comment';
import { User } from '@/models/User';






export const useAuthor = () => {
  
  const [posts, setPosts] = useState<Post[]>([]);
  const[comments,setComments] = useState<Comment[]>([]);
  const[users,setUsers] = useState<User[]>([]);
  const { token } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  
  console.log('Token in useChatRooms:', token); // Log the token value

  const createPosts = async (title: string, content:string, image:string) => {
    if (!token) {
      console.error('Token not found in useChatRooms');
      return;
    }
  
    try {
      setIsLoading(true);
      const response = await fetch('/api/author/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content, image}),
      });
  
      // Read the response as text first
      const responseText = await response.text();
      console.log("Raw response:", responseText); // Debugging output
      setIsLoading(false);
      if (!response.ok) {
        console.error(`Error creating chat room, status: ${response.status}`);
        throw new Error(`Failed to create chat room: ${response.status}`);
      }
  
      // Check if response is JSON before parsing
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = JSON.parse(responseText);
        console.log("Backend Response:", data);
  
        // Update the chat rooms state
        setPosts((prevPosts) => [...prevPosts, data.data]);
      } else {
        console.error("Unexpected response format:", responseText);
      }
    } catch (error) {
      console.error('Error creating chat room:', error);
    }
  };


const fetchPost = async (id: string) => {
  if (!token) {
    console.error('Token is missing');
    return null;
  }

  try {
    const response = await fetch(`/api/chat-room/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      setIsLoading(true)
      throw new Error(`Failed to fetch chat room: ${response.status}`);
    }
    setIsLoading(false)
    const data = await response.json();
    const messages= data.data.messages;
    const users = data.data.users;
    setComments(messages||[]);
    setUsers(users||[]);

    return data; // Return the entire data object
  } catch (error) {
    console.error('Error fetching chat room:', error);
    return null;
  }
};

  const fetchPosts = useCallback(async () => {
    try {
      setIsLoading(true); // Set loading to true

      const response = await fetch('/api/author',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`,        },
      });
      const result = await response.json(); // Extract the response
      const chatRooms = result.data; // Access the `data` array
      setPosts(chatRooms || []); // Fallback to empty array if `data` is undefined
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
      setPosts([]); // Set to empty array on error
    } finally {
      setIsLoading(false); // Set loading to false
    }
  },[token])

  useEffect(() => {
    if (token) {
      fetchPosts();
      
    }
  }, [token,fetchPosts]);




  const deletePost = async (id: string) => {
    setIsLoading(true);
    setError(null);
    if (!token) {
      console.error('Token is missing');
      return null;
    }

    try {
      const response = await fetch(`/api/author/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to delete chat room');
      }
      await fetchPosts();

      return result; // Return the result for further handling
    } catch (error) {
      console.error('Error deleting chat room:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const updatePostStatus = async (id: string, status:number ) => {
    setIsLoading(true);
    if (!token) {
      console.error('Token is missing');
      return null;
    }
  
    try {
      const response = await fetch(`/api/author/edit/${id}`, {
        method: 'PUT', // You can also use PATCH if that's more appropriate for partial updates
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || 'Failed to update post status');
      }

      await fetchPosts();
      
  
      return result;
    } catch (error) {
      console.error('Error updating post status:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { error ,token,updatePostStatus,fetchPosts,deletePost,isLoading,comments,users,posts, createPosts, fetchPost };
};


