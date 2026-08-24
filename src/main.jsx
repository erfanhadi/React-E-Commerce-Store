import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./../public/css/index.css";
import "./../public/css/fonts.css";
import { RouterProvider } from "react-router";
import router from "./lib/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
