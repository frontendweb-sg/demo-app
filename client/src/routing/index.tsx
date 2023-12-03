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

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
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
// import { Routes, Route } from "react-router-dom";
// import Auth from "../auth";
// import Signin from "../auth/login";
// import Signup from "../auth/signup";
// import Home from "../screens/home";
// import Admin from "../admin";
// import AdminDashbord from "../admin/dashboard";
// import ProtectedRoute from "./protected";

// import NotFound from "../screens/NotFound";
// import UserProfile from "../users/profile";

// const User = lazy(() => import("../users"));
// const UserDashboard = lazy(() => import("../users/dashboard"));

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/">
//         <Route index element={<Home />} />
//         <Route path="auth" element={<Auth />}>
//           <Route index element={<Signin />} />
//           <Route path="/auth/signup" element={<Signup />} />
//         </Route>

//         <Route
//           path="admin"
//           element={
//             <ProtectedRoute>
//               <Admin />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<AdminDashbord />} />
//         </Route>

//         <Route
//           path="users"
//           element={
//             <ProtectedRoute>
//               <User />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<UserDashboard />} />
//           <Route path="/users/profile" element={<UserProfile />} />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;
