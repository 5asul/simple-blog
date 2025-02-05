// components


// sections
import Hero from "./(home)/home/hero";
import Posts from "./(home)/home/posts";
import Articles from "./(home)/home/articles";

import Navbar from "./(home)/components/Navbar";
import Footer from "./(home)/components/Footer";

export default function Campaign() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
    <Navbar />
    <Hero />
    <Posts />
    <Articles />
    <Footer />
    </div> 
  );
}


