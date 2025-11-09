import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes/Routing";
import AuthContextProvider from "./context/AuthContext";
import App from "./App"; // ✅ this line

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RouterProvider router={myRoutes} />
  </AuthContextProvider>
);
