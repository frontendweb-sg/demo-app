import { redirect, Outlet } from "react-router-dom";
import { useEffect } from "react";

import { useAppStore } from "@/providers/AppProvider";

const Users = () => {
  const { auth } = useAppStore();

  useEffect(() => {
    if (!auth.isLoggedIn) redirect("/auth");
  }, [auth, redirect]);

  return (
    <div>
      Users {JSON.stringify(auth)} <Outlet />
    </div>
  );
};

export default Users;
