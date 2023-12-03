import AppRoutes from "./routing";
import ConfirmationDialog from "./components/common/ConfirmDialog";
import { useAppStore } from "./providers/AppProvider";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { hasUserLoggedIn } from "./stores/actions/auth";

function App() {
  const { dispatch } = useAppStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      hasUserLoggedIn(dispatch);
    }
  }, [dispatch, hasUserLoggedIn]);

  return (
    <>
      <ConfirmationDialog />
      <ToastContainer />
      <AppRoutes />
    </>
  );
}

export default App;
