import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosInstance } from "../routes/axiosInstance";
import toast from "react-hot-toast";

const UserDashboard = () => {
  const [user, setUser] = useState({});
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  let { id } = useParams();

  async function getAuthUser() {
    try {
      let { data } = await AxiosInstance(`/users/${id}`);
      setUser(data);
    } catch (error) {
      toast.error("Failed to fetch user");
    }
  }

  useEffect(() => {
    getAuthUser();
  }, [id]);

  const handleCreateBlog = async (e) => {
    e.preventDefault();

    try {
      let token = localStorage.getItem("token");
      if (!token) {
        toast.error("Login required");
        return;
      }

      let res = await AxiosInstance.post(
        "/blogs",
        { title, category, description, userId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 201) {
        toast.success("Blog Created!");
        setTitle("");
        setCategory("");
        setDescription("");
      }
    } catch (error) {
      toast.error("Error creating blog");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="flex">
        {/* Sidebar */}
        <aside className="p-5 w-[20%] bg-white shadow-xl h-[calc(100vh-80px)]">
          <div className="text-2xl font-semibold bg-gray-50 p-3 rounded-xl text-center mb-6">
            Create Blog
          </div>
          <div className="bg-orange-100 text-orange-700 p-3 rounded-lg text-sm font-medium">
            <p>User ID:</p>
            <p className="font-bold text-lg">{user?.id || id}</p>
          </div>
        </aside>

        {/* Main Content */}
        <article className="p-5 h-[calc(100vh-80px)] w-full">
          <h1 className="text-center font-extrabold text-4xl mb-10 text-gray-800">
            Welcome {user?.username || "User"} 👋
          </h1>

          {/* Create Blog Form */}
          <form
            onSubmit={handleCreateBlog}
            className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
              Add New Blog
            </h2>

            {/* Title */}
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-gray-700">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter blog title"
                required
              />
            </div>

            {/* Category */}
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-gray-700">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter blog category"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Write your blog description..."
                rows="6"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all shadow-md"
            >
              🚀 Publish Blog
            </button>
          </form>
        </article>
      </section>
    </div>
  );
};

export default UserDashboard;
