import { memo } from "react";
export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {};

/**
 * Form component
 */
const Form = memo(function Form({ children, ...rest }: FormProps) {
  return (
    <form {...rest} noValidate>
      {children}
    </form>
  );
});
export default Form;
