"use client";

import React, { useState } from "react";

import Cookies from "js-cookie";

import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("@/components/auth/Login"), { ssr: false });
const Register = dynamic(() => import("@/components/auth/Register"), {
  ssr: false,
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const storedUser = Cookies.get("user");
  const storedToken = Cookies.get("token");
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const adminRedirect = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/home" className="text-2xl font-bold text-blue-600">
            MyBlog
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="#hero" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="#posts" className="text-gray-600 hover:text-blue-600">
              Posts
            </Link>
            <Link href="#article" className="text-gray-600 hover:text-blue-600">
              Articles
            </Link>

            <div>
              {storedUser && storedToken ? (
                <button
                  onClick={adminRedirect}
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Admin
                </button>
              ) : (
                <button
                  onClick={toggleLogin}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
          {storedUser && storedToken ? (
                <button
                onClick={adminRedirect}
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 mr-4"
              >
                Admin
              </button>
              ) : (
                <button
                onClick={toggleLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 mr-4"
              >
                Login
              </button>
              )}
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-6 py-4">
            <Link href="#hero" className="text-gray-600 px-9 hover:text-blue-600">
              Home
            </Link>
            <Link href="#posts" className="text-gray-600 px-9 hover:text-blue-600">
              Posts
            </Link>
            <Link href="#article" className="text-gray-600 px-9 hover:text-blue-600">
              Articles
            </Link>
          </div>
        )}
      </nav>

      {/* Login Form Overlay */}
      {isLoginOpen && !isRegisterOpen ? (
        <Login toggleLogin={toggleLogin} toggleRegister={toggleRegister} />
      ) : isRegisterOpen ? (
        <Register toggleRegister={toggleRegister} toggleLogin={toggleLogin} />
      ) : null}
    </>
  );
}
