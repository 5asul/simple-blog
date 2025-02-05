"use client";

import React from "react";


const ARTICLES = [
  {
    img: "/image/blogs/blog-1.png",
    title: "Blockchain Development: How to learn",
    desc: "This article offers valuable insights into the skills, resources, and steps needed to embark on a journey in blockchain development.",
  },
  {
    img: "/image/blogs/blog-2.png",
    title: "How to become a full stack developer - Roadmap",
    desc: "For those aspiring to become full stack developers, this roadmap is your ultimate guide. This article outlines the key milestones.",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Join the Web 3 Conference 2023 - Registration details",
    desc: "This article provides essential registration details for this exciting event where experts gather to explore the latest developments",
  },
];

export function Articles() {
  return (
    <section className="container mx-auto my-16 px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Featured Article"
          className="rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Featured Article Title</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a
          href="#"
          className="text-blue-500 font-semibold hover:text-blue-700"
        >
          Read More →
        </a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Popular Article"
          className="rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Popular Article Title</h2>
        <p className="text-gray-600 mb-4">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <a
          href="#"
          className="text-blue-500 font-semibold hover:text-blue-700"
        >
          Read More →
        </a>
      </div>
    </div>
  </section>
  );
}
export default Articles;
