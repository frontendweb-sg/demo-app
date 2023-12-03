import React, { createContext, useMemo, useContext, useReducer } from "react";
import {
  AppState,
  initialState,
  rootReducer,
  RootStateContext,
} from "@/stores";
import { useConfirm } from "@/hooks/useConfirm";

export const AppContext = createContext<RootStateContext>(
  {} as RootStateContext
);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const { confirmState, handleConfirm, handleConfirmCancel } = useConfirm();

  const store = useMemo<RootStateContext>(
    () => ({
      ...state,
      confirmState,
      dispatch,
      handleConfirm,
      handleConfirmCancel,
    }),
    [state, confirmState, handleConfirm, handleConfirmCancel]
  );

  return (
    <AppContext.Provider value={store as RootStateContext}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = (): RootStateContext => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppStore must be used within an AppProvider");
  }

  return context;
};

export default AppProvider;
