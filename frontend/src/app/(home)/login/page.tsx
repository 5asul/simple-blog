"use client"

import { useRouter } from 'next/navigation'
import React from 'react'




type LoginForm = {
  login: string
  password: string
  remember: boolean
}

export const Login = ({ toggleLogin,toggleRegister }: { toggleLogin: () => void,toggleRegister:()=>void }) => {
  const router = useRouter()

  const handleSubmit = (formValues: LoginForm) => {
    router.push('/dashboard')
    console.log('Form values', formValues)
  }

  const handleRegister = () => {
     toggleLogin()
     toggleRegister()
  };

  const initialValues: LoginForm = {
    login: 'john.doe',
    password: 'bG1sL9eQ1uD2sK3b',
    remember: true,
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={()=>{toggleLogin(); handleSubmit(initialValues)}}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
      <button
          onClick={handleRegister} // Navigate to the register page
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Register
        </button>
        <button
          onClick={() => { toggleLogin()}}
          className="mt-4 w-full text-gray-600 hover:text-blue-600"
        >
          Close
        </button>
    </div>
  </div>
  )
}


