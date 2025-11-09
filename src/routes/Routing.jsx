import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import UserDashboard from "../pages/UserDashboard";
import About from "../components/About";

export const myRoutes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <h2>Page Not Found 😢</h2>, // optional
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/userdashboard/:id",
          element: <UserDashboard />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <Navigate to="/" />, // optional catch-all redirect
        },
      ],
    },
  ],
  {
    basename: "/Crud", // 👈 THIS LINE IS THE FIX
  }
);
