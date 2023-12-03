import { ConfirmState } from "../hooks/useConfirm";
import { combineReducers } from "./combine-reducers";
import { AuthState, authReducer, authState } from "./reducers/auth";
import {
  CategoryState,
  categoryReducer,
  categoryState,
} from "./reducers/category";

export type AppState = {
  auth: AuthState;
  category: CategoryState;
  confirmState: ConfirmState;
};

export type RootStateContext = AppState & {
  dispatch: React.Dispatch<any>;
  handleConfirm: (confirm: ConfirmState) => void;
  handleConfirmCancel: () => void;
};

export const initialState = {
  auth: authState,
  category: categoryState,
  confirmState: {},
};

export const rootReducer = combineReducers({
  category: categoryReducer,
  auth: authReducer,
});

export type AppDispatch = typeof rootReducer;
