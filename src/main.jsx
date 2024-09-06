import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Dashboard from "../src/pages/dashboard/Dashboard.jsx";
import Olympic from "../src/pages/olympic/Olympic.jsx";
import Profile from "../src/pages/profile/Profile.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/olympic", element: <Olympic /> },
  { path: "/profile", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
);
