"use client";

import { useRouter } from "next/navigation";
import React from "react";

type RegisterForm = {
  login: string;
  password: string;
  remember: boolean;
};

export const Register = ({
  toggleRegister,
  toggleLogin,
}: {
  toggleRegister: () => void;
  toggleLogin: () => void;
}) => {
  const router = useRouter();

  const handleSubmit = (formValues: RegisterForm) => {
    router.push("/dashboard");
    console.log("Form values", formValues);
  };

  const handleLogin = () => {
    toggleRegister();
    toggleLogin();
  };

  const initialValues: RegisterForm = {
    login: "john.doe",
    password: "bG1sL9eQ1uD2sK3b",
    remember: true,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form>
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
            onClick={() => {
              toggleRegister();
              handleSubmit(initialValues);
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
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
