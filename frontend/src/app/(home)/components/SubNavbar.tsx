"use client";

import React, { useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Login = dynamic(() => import("@/components/auth/Login"), { ssr: false });
const Register = dynamic(() => import("@/components/auth/Register"), {
  ssr: false,
});

export default function SubNavbar() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const storedUser = Cookies.get("user");
  const storedToken = Cookies.get("token");
  const router = useRouter();



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
            
          </div>
        </div>

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
