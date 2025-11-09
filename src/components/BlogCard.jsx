import React from "react";
import EditModal from "./EditModal";
import { AxiosInstance } from "../routes/axiosInstance";
import toast from "react-hot-toast";

const BlogCard = (props) => {
  let { id, category, title, description } = props.blog;
  let token = localStorage.getItem("token");

  const deleteBlog = async (blogId) => {
    if (!token) {
      toast.error("Login Required");
      return;
    }
    let res = await AxiosInstance.delete(`/blogs/${blogId}`);
    if (res.status === 200) {
      toast.success("Blog Deleted");
      props.getAllBlogs();
    } else {
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all bg-white p-6 m-3 relative flex flex-col">
      {/* Category */}
      <span className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-2">
        {category}
      </span>

      {/* Title */}
      <h1 className="font-semibold text-xl text-gray-800 mb-2">{title}</h1>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        {description.length > 120
          ? description.substring(0, 120) + "..."
          : description}
      </p>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <EditModal editBlog={props.blog} getAllBlogs={props.getAllBlogs} />

        <button
          onClick={() => deleteBlog(id)}
          className="px-4 py-2 text-sm font-semibold border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;