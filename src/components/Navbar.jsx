import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaBehance, FaDribbble, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import About from "./About";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const {loggedInUser} = useContext(AuthContext)
  // console.log(loggedInUser.id);
  
  
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const openDropdown = () => setToggle(!toggle);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Logged Out");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md h-20 w-full px-8 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <figure className="text-lg md:text-3xl font-extrabold tracking-wide">
        <span className="text-orange-500">Q</span>
        <span className="text-gray-800">-Blogs</span>
      </figure>

      {/* Links */}
      <ul className="flex items-center gap-2 md:gap-6 font-medium text-gray-700">
 <li><Link to="/about">About</Link></li>
        <li className="cursor-pointer hover:text-pink-500 transition-colors">
          <FaDribbble size={22} />
        </li>
        <li className="cursor-pointer hover:text-orange-500 transition-colors">
          <Link to={"/"}>
            <FaHome size={22} />
          </Link>
        </li>
        {token ? (
          <li className="relative">
            <button
              onClick={openDropdown}
              className="border border-blue-500 px-5 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all"
            >
              Profile
            </button>

            {/* Dropdown */}
            {toggle && (
              <ul
                onClick={openDropdown}
                className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <Link to={`/userdashboard/${loggedInUser?.id}`}>
                  <li className="px-5 py-3 hover:bg-gray-100 cursor-pointer transition-colors">
                    Dashboard
                  </li>
                </Link>
                <li
                  onClick={handleLogout}
                  className="px-5 py-3 hover:bg-red-100 text-red-600 cursor-pointer transition-colors"
                >
                  Logout
                </li>
              </ul>
            )}
          </li>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="px-5 py-2 rounded-full border border-blue-500 text-blue-500 font-semibold hover:bg-blue-50 transition-all"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                className="px-5 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all shadow-sm"
              >
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;