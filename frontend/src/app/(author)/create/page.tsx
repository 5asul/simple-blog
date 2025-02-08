// app/admin/create-post/page.tsx
"use client"; // Required for client-side interactivity
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthor } from "@/hooks/useAuthor";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string>("");
  const router = useRouter();
  const { createPosts, isLoading } = useAuthor();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        alert("Image size exceeds 2MB. Please upload a smaller image.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Convert image to Base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPosts(title, content, image);
      router.push("/post-maintenance");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 pt-4">
      <h1 className="text-3xl font-bold mb-6">Create Post</h1>

      {/* Create Post Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        {/* Title Field */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Content Field */}
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows={6}
            placeholder="Write your post content here..."
            required
          />
        </div>

        {/* Image Upload Field */}
        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
            Upload Image
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="image"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-600"
            >
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  ></path>
                </svg>
                <p className="text-gray-500 text-sm mt-2">
                  {image ? "Image selected" : "Click to upload an image ( الرجاء عدم تخطي الحد الاقصى لحجم الصورة وهو :2 ميقا)"}
                </p>
              </div>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
          {image && (
            <div className="mt-4">
              <Image
                src={image}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg"
                width={50}
                height={50}
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {isLoading ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
