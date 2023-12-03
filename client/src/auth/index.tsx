import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import Cover from "../components/common/Cover";
import { useAppStore } from "@/providers/AppProvider";

/**
 * Auth root component
 * @returns
 */
const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAppStore();

  useEffect(() => {
    if (auth.isLoggedIn && auth.isAdmin) {
      navigate("/admin");
    }
    if (auth.isLoggedIn && auth.isUser) {
      navigate("/users");
    }
  }, [navigate, auth, location]);

  return (
    <Cover className="flex">
      <Outlet />
    </Cover>
  );
};

export default Auth;
