import RegisterForm from "@/components/auth/SignupForm";
import Logo from "@/layout/Logo";

const Register = () => {
  return (
    <div className="grid md:grid-cols-2 w-full">
      <div className="items-center bg-slate-800 col-span-1 relative flex justify-center">
        <div className="text-white max-w-sm">
          <Logo to="/" />
          <p className="text-sm mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            necessitatibus repellendus eligendi placeat quo eos sapiente
            nesciunt accusantium eaque, debitis molestiae excepturi incidunt
            alias nostrum iusto ullam quas suscipit? Accusantium.
          </p>
        </div>
      </div>

      <div className="bg-white flex items-center justify-center min-h-screen col-span-1">
        <div className="max-w-sm">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
