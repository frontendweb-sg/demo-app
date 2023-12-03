import LinkItem from "@/components/common/LinkItem";
import Logo from "../Logo";
import classNames from "classnames";
import { AdminMenu, IMenu } from "./menu";
import { useLocation } from "react-router-dom";
import { FaCog, FaSignOutAlt } from "react-icons/fa";

/**
 * Admin sidebar
 * @returns
 */
const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 border-r relative flex flex-wrap bg-white border-gray-200 p-5 flex-none animated faster">
      <div className="w-full">
        <Logo to="/admin" className="border-b pb-4 mb-4" />
        <div className="relative">
          <p className="uppercase text-xs/[12px] text-gray-600 mb-4 tracking-wider">
            menus
          </p>

          <ul>
            {AdminMenu.map((menu: IMenu) => {
              const Icon = menu.icon;
              return (
                <LinkItem
                  key={menu.id}
                  className={classNames(
                    "rounded-md hover:bg-gray-200 flex items-center capitalize py-2 px-3  text-sm hover:text-rose-600 transition ease-in-out duration-500",
                    {
                      "bg-rose-700 text-white hover:bg-rose-700":
                        location.pathname === `/admin${menu.href}`,
                    }
                  )}
                  to={`/admin${menu.href}`}
                  menu
                >
                  <Icon className="text-xs mr-2" />
                  {menu.label}
                </LinkItem>
              );
            })}
          </ul>
          <p className="uppercase text-xs/[12px] text-gray-600 mb-4 tracking-wider mt-6">
            settings
          </p>
          <ul>
            <LinkItem
              className={classNames(
                "rounded-md hover:bg-gray-200 flex items-center capitalize py-2 px-3  text-sm hover:text-rose-600 transition ease-in-out duration-500",
                {
                  "bg-rose-700 text-white hover:bg-rose-700":
                    location.pathname === `/admin/settings`,
                }
              )}
              to="/admin/settings"
              menu
            >
              <FaCog className="text-xs mr-2" />
              Settings
            </LinkItem>
          </ul>
        </div>
        <div className="absolute flex items-center justify-between border-t border-gray-100 w-full left-0 text-center px-3 py-2 bottom-0">
          <p className="text-xs">Version: 1.0.0</p>
          <button className="text-xs flex items-center text-rose-500">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
