"use client";




function Hero() {
  return (
    <header className="mt-5 bg-white p-8">
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-xl mb-8">
            Discover the latest insights, tutorials, and stories.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Explore Articles
          </button>
        </div>
      </section>
  </header>
  );
}
export default Hero;
