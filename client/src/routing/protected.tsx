import { Navigate, useLocation } from "react-router-dom";

/**
 * Protected route
 * @param param0
 * @returns
 */
const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  let location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Navigate
        to={"/auth?callbackUrl=" + encodeURIComponent(location.pathname)}
        state={location}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
