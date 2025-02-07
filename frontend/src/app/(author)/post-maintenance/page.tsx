"use client";
import { useAuthor } from "@/hooks/useAuthor";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function PostsMaintenancePage() {
  const { posts, isLoading, deletePost, updatePostStatus } = useAuthor();
  const [deleting, setDeleting] = useState<number | null>(null);
  const router = useRouter();

  const handleStatusChange = async (id: number, newStatus: number) => {
    try {
      await updatePostStatus(String(id), newStatus);
      router.refresh();
    } catch (error) {
      console.error("Error updating post status:", error);
      alert("Failed to update post status. Please try again.");
    }
  };

  const getStatusLabel = (status: number) => {
    switch (status) {
      case 1:
        return "Draft";
      case 2:
        return "Published";
      case 3:
        return "Archived";
      default:
        return "Unknown";
    }
  };

  const handleDeletePost = async (roomId: number) => {
    setDeleting(roomId);
    try {
      await deletePost(String(roomId));
      router.refresh();
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post. Please try again.");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Posts Maintenance</h1>

      {/* Posts Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="text-center py-6">
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                  </div>
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {post.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.image && (
                      <Image
                        src={`data:image/png;base64,${post.image}`}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg"
                        width={50}
                        height={50}
                      />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        post.status === 1
                          ? "bg-yellow-100 text-yellow-800"
                          : post.status === 2
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {getStatusLabel(post.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center space-x-4">
                    <select
                      value={String(post.status)}
                      onChange={(e) =>
                        handleStatusChange(post.id, Number(e.target.value))
                      }
                      className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="1">Draft</option>
                      <option value="2">Published</option>
                      <option value="3">Archived</option>
                    </select>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="text-red-600 hover:text-red-800"
                      disabled={deleting === post.id}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}