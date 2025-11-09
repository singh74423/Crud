import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
// ...other imports

export const myRoutes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        // other routes...
      ],
    },
  ],
  {
    basename: "/Crud", // 👈 Add this line
  }
);
