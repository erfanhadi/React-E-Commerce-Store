/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, redirect } from "react-router-dom";
import AboutUSPage from "../Pages/AboutUS.jsx";
import BlogPage from "../Pages/Blog.jsx";
import CartPage from "../Pages/Cart.jsx";
import ContactUSPage from "../Pages/ContactUS.jsx";
import HomePage from "../Pages/HomePage.jsx";
import ProductPage from "../Pages/Product.jsx";

import AppLayout from "../Components/Layouts/AppLayout.jsx";
import AuthPage from "../Pages/Auth.jsx";
import AuthLayout from "../Components/Layouts/AuthLayout.jsx";
import CMSLayout from "../Components/Layouts/CMSLayout.jsx";
import * as AuthService from "../services/auth.service.js";
import Forbidden from "../Pages/Forbidden.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-us", element: <AboutUSPage /> },
      { path: "contact-us", element: <ContactUSPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "product/:productID", element: <ProductPage /> },
      { path: "blog/:blogID", element: <BlogPage /> },

      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { index: true, element: <AuthPage /> },
        ]
      },

      {path: "forbidden",element: <Forbidden/>},
    ],
  },

  {
    path: "/dashboard",
    element: <CMSLayout />,
    children: [
      {
        path: "moderator",
        loader: async () => {
          try {
            const { data } = await AuthService.getMe();
            if (!data.user.roles.includes("ADMIN")) {
              return redirect("/forbidden");
            };

            return data.user;
          } catch (err) {
            return redirect("/auth");
          }
        },
        children: [
          { index: true, loader: () => redirect("home") },
          { path: "home", element: <div>Home page</div> },
          { path: "orders", element: <div>Orders page</div> },
          { path: "products", element: <div>Products page</div> },
        ]
      },
    ]
  }
]);

export default router;
