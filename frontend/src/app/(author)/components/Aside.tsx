"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEdit, FaPlus,FaHome, FaSignOutAlt, FaTachometerAlt, FaTimes } from "react-icons/fa";

export default function Aside() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router =useRouter();
  const{logout}=useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleHome = () => {
    router.replace("/home")
  }
  const handleLogout = () => {
    logout()
    router.replace("/home")
  }

  return (
    <>
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg w-64 fixed h-full transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0`}
      >
        {/* Sidebar Header with Close Button (Mobile Only) */}
        <div className="p-6 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">Admin Panel</h1>

          {/* Close Button (Mobile Only) */}
          <button
            onClick={toggleSidebar}
            className={`text-gray-600 hover:text-blue-600  focus:outline-none md:hidden`}
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-8">
          <Link
            href="/dashboard"
            className="flex items-center px-6 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
          <Link
            href="/create"
            className="flex items-center px-6 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          >
            <FaPlus className="mr-2" /> Create Post
          </Link>
          <Link
            href="/post-maintenance"
            className="flex items-center px-6 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          >
            <FaEdit className="mr-2" /> Posts Maintenance
          </Link>
        </nav>
        <div className="absolute bottom-14 w-full p-6">
          <button onClick={()=>{handleHome()}} className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center justify-center">
            <FaHome className="mr-2" /> Home
          </button>
        </div>
        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-6">
          <button onClick={()=>{handleLogout()}} className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center justify-center">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 fixed top-0 left-0 z-50">
        <button
          onClick={toggleSidebar}
          className={`text-gray-600 ${isSidebarOpen?"hidden":""}  hover:text-blue-600 focus:outline-none`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}