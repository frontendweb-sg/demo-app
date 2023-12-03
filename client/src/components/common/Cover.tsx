import classNames from "classnames";
import { memo } from "react";

/**
 * Screen component with sticky footer
 */
type ScreenProps = React.HTMLAttributes<HTMLDivElement> & {};
const Cover = memo(function Cover({
  children,
  className,
  ...rest
}: ScreenProps) {
  return (
    <div className={classNames("min-h-screen", className)} {...rest}>
      {children}
    </div>
  );
});
export default Cover;
