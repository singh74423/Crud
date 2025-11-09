import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-3xl p-10 text-center transition transform hover:scale-[1.02] duration-300">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">About Our Blog</h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to <span className="font-semibold text-indigo-600">MyBlog</span> — a simple yet powerful
          platform where you can <span className="font-medium">Create, Read, Update, and Delete</span> your posts.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          This blog was built with modern web technologies to help developers learn and practice CRUD operations.
          Our goal is to make writing and managing content easy and enjoyable for everyone.
        </p>
        <p className="text-gray-600 text-lg">
          Whether you're sharing ideas, tutorials, or stories — our blog gives you the space to express yourself
          freely and creatively.
        </p>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
