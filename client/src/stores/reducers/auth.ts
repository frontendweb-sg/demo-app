import { AuthAction } from "../actions/auth";

export type AuthState = {
  loading: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
  isUser: boolean;
  user: IUser | null;
  redirectUrl?: string;
};

export const authState: AuthState = {
  loading: false,
  isLoggedIn: false,
  isAdmin: false,
  isUser: false,
  user: null,
  redirectUrl: "/",
};

type AuthActions =
  | { type: AuthAction.AUTH_LOADING; payload: boolean }
  | { type: AuthAction.AUTH_SUCCESS; payload: any }
  | { type: AuthAction.AUTH_LOGOUT; payload: null };

const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  const { type, payload } = action;
  switch (type) {
    case AuthAction.AUTH_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case AuthAction.AUTH_LOGOUT:
      return {
        ...state,
        isAdmin: false,
        isUser: false,
        user: null,
      };
    case AuthAction.AUTH_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export { authReducer };
