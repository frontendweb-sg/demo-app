import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Auth from "@/auth";
import Signin from "@/auth/login";
import Register from "@/auth/register";
import Admin from "@/admin";
import AdminDashbord from "@/admin/dashboard";
import AdminCategory from "@/admin/category";
import AdminSize from "@/admin/size";
import AdminColor from "@/admin/color";
import AdminProducts from "@/admin/products";
import AdminPages from "@/admin/pages";
import AdminSettings from "@/admin/settings";
import Users from "@/users";
import UserDashboard from "@/users/dashboard";
import UserProfile from "@/users/profile";
import ErrorPage from "@/pages/Error";
import RootLayout from "@/layout/public";
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { index: true, element: <Signin /> },
      { path: "signup", element: <Register /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { index: true, element: <AdminDashbord /> },
      { path: "category", element: <AdminCategory /> },
      { path: "colors", element: <AdminColor /> },
      { path: "sizes", element: <AdminSize /> },
      { path: "sizes", element: <AdminSize /> },
      { path: "products", element: <AdminProducts /> },
      { path: "pages", element: <AdminPages /> },
      { path: "settings", element: <AdminSettings /> },
    ],
  },
  {
    path: "/users",
    element: <Users />,
    children: [
      { index: true, element: <UserDashboard /> },
      { path: "profile", element: <UserProfile /> },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={appRoutes} />;
};
export default AppRoutes;
