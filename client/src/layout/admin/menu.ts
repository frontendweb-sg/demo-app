import { MdDashboard } from "react-icons/md";

import type { IconType } from "react-icons";

export interface IMenu {
  id: number;
  label: string;
  href: string;
  icon: IconType;
}
export const AdminMenu: IMenu[] = [
  {
    id: 1,
    label: "Dashboard",
    href: "",
    icon: MdDashboard,
  },
  {
    id: 2,
    label: "Category",
    href: "/category",
    icon: MdDashboard,
  },
  {
    id: 3,
    label: "Products",
    href: "/products",
    icon: MdDashboard,
  },
  {
    id: 4,
    label: "Colors",
    href: "/colors",
    icon: MdDashboard,
  },
  {
    id: 5,
    label: "Sizes",
    href: "/sizes",
    icon: MdDashboard,
  },
];
