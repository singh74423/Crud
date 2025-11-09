import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import UserDashboard from "../pages/UserDashboard";
import About from "../components/About";

export let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path :"/userdashboard/:id",
        element : <UserDashboard/>
      },
        {
        path :"about",
        element : <About/>
      }
    ],
  },
]);