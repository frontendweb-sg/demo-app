import { ReactElement, memo } from "react";
import classNames from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: Color;
  size?: Size;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};
const Button = memo(function Button({
  children,
  color = "primary",
  size,
  className,
  startIcon,
  endIcon,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = classNames("btn", `btn-${color}`, className);
  return (
    <button type={type} className={classes} {...rest}>
      {startIcon} {children} {endIcon}
    </button>
  );
});

export default Button;
