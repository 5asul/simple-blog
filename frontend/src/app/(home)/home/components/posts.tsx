"use client";

import { useAuthor } from "@/hooks/useAuthor";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { Login } from "../../(auth)/login/page";
import { Register } from "../../(auth)/register/page";




// const POSTS = [
//   {
//     img: `/image/blogs/blog2.svg`,
//     tag: "Enterprise",
//     title: "The key new features and changes in Tailwind CSS",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "10 September 2022",
//     author: {
//       img: `/image/avatar1.jpg`,
//       name: "Ryan Samuel",
//     },
//   },
//   {
//     img: `/image/blogs/blog6.svg`,
//     tag: "Startups",
//     title: "Lyft launching cross-platform service this week",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "12 September 2022",
//     author: {
//       img: `/image/blogs/blog2.svg`,
//       name: "Nora Hazel",
//     },
//   },
//   {
//     img: `/image/blogs/blog3.svg`,
//     tag: "Trending",
//     title: "6 insights into the French Fashion landscape",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "16 September 2022",
//     author: {
//       img: `/image/avatar2.jpg`,
//       name: "Otto Gonzalez",
//     },
//   },
//   {
//     img: `/image/blogs/blog4.svg`,
//     tag: "Lifestyle",
//     title: "Autodesk looks to future of 3D printing with Project",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "18 September 2022",
//     author: {
//       img: `/image/avatar3.jpg`,
//       name: "Ryan Samuel",
//     },
//   },
//   {
//     img: `/image/blogs/blog5.svg`,
//     tag: "Enterprise",
//     title: "Autodesk looks to future of 3D printing with Project",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "10 September 2022",
//     author: {
//       img: `/image/avatar3.jpg`,
//       name: "Ryan Samuel",
//     },
//   },
//   {
//     img: `/image/blogs/blog6.svg`,
//     tag: "Startups",
//     title: "Lyft launching cross-platform service this week",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "12 September 2022",
//     author: {
//       img: `/image/avatar2.jpg`,
//       name: "Nora Hazel",
//     },
//   },
// ];

export function Posts() {
  const { posts,isLoading} = useAuthor();
  const storedUser = Cookies.get("user");
  const storedToken = Cookies.get("token");
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  
  return (
<>
<section id="posts" className="container mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storedUser&&storedToken?isLoading ? (
            <div className="flex justify-center items-center ml-80 py-6">
              <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            </div>
            ) : posts.map((post) => (
              post.status===2? 
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <Image
              src={post.image}
              alt={post.title}
              className="rounded-lg mb-4 w-full"
              layout="responsive"
              width={100}
              height={50}
              />
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 ">
               {post.content}
              </p>
              <Link
              href={`/home/${post.id}`}
              className="text-blue-500 font-semibold hover:text-blue-700"
              >
              Read More →
              </Link>
            </div>:null
             
            )): (
              <div className="col-span-full flex flex-col items-center justify-center space-y-4 p-8 bg-gray-50 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-700 text-center">
                  Login first to show your posts. If none exist, create a new one!
                </h4>
                <Link
                href={''}
                  onClick={toggleLogin}// Replace with your login route
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Login
                </Link>
                <p className="text-gray-500 text-sm">
                  Do not have an account?{" "}
                  <Link
                    href="" // Replace with your register route
                    onClick={toggleRegister} // Replace with your register route
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Sign up
                  </Link>
                </p>
              </div>)}
        </div>
      </section>
       {/* Login Form Overlay */}
            {isLoginOpen && !isRegisterOpen ? (
              <Login toggleLogin={toggleLogin} toggleRegister={toggleRegister} />
            ) : isRegisterOpen ? (
              <Register toggleRegister={toggleRegister} toggleLogin={toggleLogin} />
            ) : null}
      
</>
  );
}

export default Posts;
