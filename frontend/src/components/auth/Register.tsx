"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface LoginProps {
  toggleLogin: () => void;
  toggleRegister: () => void;
}




 const Register:React.FC<LoginProps> = ({ toggleLogin, toggleRegister }) => {

  const[username,setUsername]=useState<string>("");
  const[email,setEmail]=useState<string>("");
  const[password,setPassword]=useState<string>("");
  const [error,setError]=useState<string | null>(null);

  const router = useRouter();
  const {register,isLoading,logError}=useAuth();

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await register(username,email,password).then(()=>{
        toggleRegister();
      router.push("/dashboard");
      });
      setError(logError)

      
    } catch (error) {
      setError((error as Error).message || "Register failed");
    }
    
    
  };

  const handleLogin = () => {
    toggleRegister();
    toggleLogin();
  };

  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter username..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          {error && <div className="text-red-500 text-xs">{error}</div>}
        </form>
        <button
          onClick={handleLogin} // Navigate to the register page
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Login
        </button>
        <button
          onClick={() => {
            toggleRegister();
          }}
          className="mt-4 w-full text-gray-600 hover:text-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Register; // Change to default export
