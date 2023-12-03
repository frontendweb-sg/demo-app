import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./redux-store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import AppProvider from "./providers/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppProvider>
  </React.StrictMode>
);
