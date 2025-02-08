"use client"

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface LoginProps {
  toggleLogin: () => void;
  toggleRegister: () => void;
}




const Login:React.FC<LoginProps> = ({ toggleLogin, toggleRegister }) => {
  
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()
  const { login, logError, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
  
    try {
      await login(email, password);
      toggleLogin();
      router.push('/dashboard');
    } catch (error) {
      setError((error as Error).message || logError);
    }
  };

  const handleRegister = () => {
     toggleLogin()
     toggleRegister()
  };

  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
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
            disabled={isLoading} // Disable input while loading
            required
          />
        </div>
        <div className="mb-6">
          <label 
          
          className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            placeholder="Enter your password"
            disabled={isLoading} // Disable input while loading
          />
        </div>
        <button
          type='submit'
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
        {error && (
  <div className="mt-4 p-2 bg-red-100 text-red-600 text-sm rounded-lg text-center">
    {error}
  </div>
)}
      </form>
      <button
          onClick={handleRegister} // Navigate to the register page
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          aria-label="Register"
        >
          Register
        </button>
        <button
          onClick={() => { toggleLogin()}}
          className="mt-4 w-full text-gray-600 hover:text-blue-600"
          aria-label="Close"
        >
          Close
        </button>
    </div>
  </div>
  )
}

export default Login; // Change to default export


