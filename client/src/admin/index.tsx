import Cover from "@/components/common/Cover";
import AdminHeader from "@/layout/admin/Header";
import AdminSidebar from "@/layout/admin/Sidebar";
import { Outlet } from "react-router-dom";

/**
 * Admin layout component
 * @returns
 */
const Admin = () => {
  return (
    <Cover className="bg-gray-50 flex flex-row flex-wrap">
      <AdminSidebar />
      <div className="bg-gray-100 flex-1">
        <AdminHeader />
        <div className="flex-1  p-4">
          <Outlet />
        </div>
      </div>
    </Cover>
  );
};

export default Admin;
