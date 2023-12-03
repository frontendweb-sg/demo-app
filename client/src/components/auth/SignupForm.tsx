import Form from "../common/Form";
import Input from "../common/Input";
import FormGroup from "../common/FormGroup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { authSercvie } from "../../services/auth.services";
import { login } from "../../stores/actions/auth";
import { useAppStore } from "../../providers/AppProvider";
import { AppContent } from "../../utils/AppContent";
/**
 * Login form
 * @returns
 */
const RegisterForm = () => {
  const navigate = useNavigate();

  const { dispatch } = useAppStore();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: authSercvie.getSingupObject(),
      async onSubmit(values) {
        try {
          await login(dispatch, values);
          navigate("/users");
        } catch (error) {}
      },
    });
  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-rose-600 mb-2">
          {AppContent.signup}
        </h3>
        <p className="text-sm text-gray-500">
          {AppContent.signupSubtitle}
          <Link
            className="text-rose-600 hover:text-blue-800 font-semibold ml-1"
            to="/auth"
          >
            {AppContent.login}
          </Link>{" "}
        </p>
      </div>
      <Input
        name="name"
        value={values.name}
        errors={errors}
        touched={touched}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Full name"
      />

      <Input
        name="email"
        value={values.email}
        errors={errors}
        touched={touched}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Email id"
      />
      <Input
        placeholder="*******"
        name="password"
        value={values.password}
        errors={errors}
        touched={touched}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <Input
        name="mobile"
        value={values.mobile}
        errors={errors}
        touched={touched}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Mobile no"
      />

      <FormGroup className="flex justify-center mt-6">
        <button
          className="text-white w-full bg-rose-600 hover:bg-rose-800 shadow hover:shadow-lg px-6 py-1 rounded-md"
          type="submit"
        >
          {AppContent.signup}
        </button>
      </FormGroup>
    </Form>
  );
};

export default RegisterForm;
