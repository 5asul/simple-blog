"use client";

import React, { useState } from "react";
import { Login } from "../(auth)/login/page";
import { Register } from "../(auth)/register/page";
import Link from "next/link";

export default function SubNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
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
           
            
            <button
              onClick={toggleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 mr-4"
            >
              Login
            </button>
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
            <Link
              href="#"
              className="block text-gray-600 hover:text-blue-600 mb-2"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-gray-600 hover:text-blue-600 mb-2"
            >
              Articles
            </Link>
            <Link
              href="#"
              className="block text-gray-600 hover:text-blue-600 mb-2"
            >
              About
            </Link>
            <Link href="#" className="block text-gray-600 hover:text-blue-600">
              Contact
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
