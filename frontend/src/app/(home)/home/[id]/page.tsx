// pages/posts/[id].tsx
"use client";

import { useParams } from "next/navigation";
import { useAuthor } from "@/hooks/useAuthor";
import Image from "next/image";
import React from "react";

export default function SelectedPostPage() {
  const { id } = useParams(); // Get the post ID from the URL
  const { posts, isLoading } = useAuthor();

  // Find the selected post by ID
  const selectedPost = posts.find((post) => post.id === Number(id));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (!selectedPost) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-16 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <Image
          src={selectedPost.image}
          alt={selectedPost.title}
          className="rounded-lg mb-6 w-full"
          layout="responsive"
          width={800}
          height={400}
        />
        <h1 className="text-3xl font-bold mb-4">{selectedPost.title}</h1>
        <p className="text-gray-600 mb-6">{selectedPost.content}</p>
        <div className="flex items-center space-x-4">
          <Image
            src={ "/image/avatar-default.jpg"} // Fallback image
            alt={selectedPost.author?.username || "Author"}
            className="rounded-full"
            width={50}
            height={50}
          />
          <div>
            <p className="font-semibold">{selectedPost.author?.username}</p>
            <p className="text-sm text-gray-500">{selectedPost.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}