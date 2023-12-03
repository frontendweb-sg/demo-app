import classNames from "classnames";
import { Link, LinkProps } from "react-router-dom";

/**
 * Logo component
 * @returns
 */
type LogoProps = LinkProps & {
  label?: string;
  className?: string;
};
const Logo = ({
  className,
  to = "/",
  label = "Shopkart",
  ...rest
}: LogoProps) => {
  const classes = classNames(
    "block text-center font-lato text-rose-600 items-center flex italic font-black",
    className
  );
  return (
    <Link className={classes} to={to} {...rest}>
      {label}
    </Link>
  );
};

export default Logo;
