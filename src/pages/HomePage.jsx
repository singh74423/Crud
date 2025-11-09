import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AxiosInstance } from "../routes/axiosInstance";
import BlogCard from "../components/BlogCard";

const HomePage = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  async function getAllBlogs() {
    let res = await AxiosInstance.get("/blogs");
    console.log(res.data);
    setAllBlogs(res.data); // storing all blogs to state
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      <section>
        {allBlogs.length === 0 ? (
          <h2>No Blogs available...</h2>
        ) : (
          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {allBlogs.map((blog, idx) => (
              <BlogCard key={idx} blog={blog} getAllBlogs={getAllBlogs} />
            ))}
          </article>
        )}
      </section>
    </div>
  );
};

export default HomePage;