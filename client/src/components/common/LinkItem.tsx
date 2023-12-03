import { memo } from "react";
import { Link, LinkProps, NavLink, NavLinkProps } from "react-router-dom";
import classNames from "classnames";

export type NavItemProps = NavLinkProps &
  LinkProps & {
    menu?: boolean;
  };
const LinkItem = memo(function NavItem({
  menu,
  children,
  className,
  style,
  ...rest
}: NavItemProps) {
  const classes = classNames("font-medium hover:text-rose-800", className);

  if (menu) {
    return (
      <li>
        <NavLink className={classes} {...rest}>
          {children}
        </NavLink>
      </li>
    );
  }
  return (
    <Link className={classes} {...rest}>
      {children}
    </Link>
  );
});

export default LinkItem;
