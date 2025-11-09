import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState, useContext } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { setLoggedInUser } = useContext(AuthContext);

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const [allRegistredUser, setAllRegisteredUser] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  async function getAllUsers() {
    let res = await AxiosInstance.get("/users");
    setAllRegisteredUser(res.data);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let authUser = allRegistredUser.find(
      (ele) =>
        ele.email === loginUser.email && ele.password === loginUser.password
    );

    if (authUser) {
      localStorage.setItem("token", Date.now());
      setLoggedInUser(authUser)
      navigate("/");
      toast.success("Login success 🎉");
    } else {
      navigate("/signup");
      toast.error("Login failed ❌");
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center ">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[400px] p-8 rounded-2xl z-50 shadow-2xl flex flex-col gap-6"
      >
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-500 text-sm">
          Login to continue exploring blogs
        </p>

        {/* Email */}
        <TextField
          name="email"
          value={loginUser.email}
          onChange={handleChange}
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
        />

        {/* Password */}
        <TextField
          name="password"
          value={loginUser.password}
          onChange={handleChange}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />

        {/* Forgot password */}
        <p className="text-sm text-right text-blue-600 hover:underline cursor-pointer">
          Forgot Password?
        </p>

        {/* Submit button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            padding: "10px",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
          }}
        >
          Login
        </Button>

        {/* Signup redirect */}
        <p className="text-center text-gray-600 text-sm mt-2">
          Not a member?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;