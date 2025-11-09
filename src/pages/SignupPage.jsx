import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignupUser({ ...signupUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await AxiosInstance.post("/users", signupUser);

    if (res.status === 201) {
      toast.success("Signup Success 🎉");
      navigate("/login");
      setSignupUser({
        username: "",
        email: "",
        password: "",
      });
    } else {
      toast.error("Signup Failed ❌");
    }
  };




  return (
    <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center  ">
      <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    }}
  />
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[420px] z-50 p-8 rounded-2xl shadow-2xl flex flex-col gap-6"
      >
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Create Account 🚀
        </h1>
        <p className="text-center text-gray-500 text-sm">
          Join Q-Blogs and start sharing your stories
        </p>

        {/* Username */}
        <TextField
          name="username"
          value={signupUser.username}
          onChange={handleChange}
          label="Username"
          variant="outlined"
          fullWidth
        />

        {/* Email */}
        <TextField
          name="email"
          value={signupUser.email}
          onChange={handleChange}
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
        />

        {/* Password */}
        <TextField
          name="password"
          value={signupUser.password}
          onChange={handleChange}
          label="Password"
          type="password"
          helperText="At least 8 characters"
          variant="outlined"
          fullWidth
        />

        {/* Submit */}
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
          Sign Up
        </Button>

        {/* Already a member */}
        <p className="text-center text-gray-600 text-sm mt-2">
          Already a member?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;