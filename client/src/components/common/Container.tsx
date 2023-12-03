import classNames from "classnames";
export type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};

const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div className={classNames("container mx-auto px-4", className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
