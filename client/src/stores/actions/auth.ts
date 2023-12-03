import { authSercvie } from "../../services/auth.services";

export enum AuthAction {
  AUTH_LOADING = "auth loading start",
  AUTH_SUCCESS = "user logged in success",
  AUTH_LOGOUT = "user logout",
}

/**
 * Login
 * @param dispatch
 */
let clearTimer: ReturnType<typeof setTimeout>;
export const login = async (dispatch: Function, requestBody: ISignin) => {
  dispatch({ type: AuthAction.AUTH_LOADING, payload: true });
  try {
    const { data } = await authSercvie.login(requestBody);
    const timer = new Date(data.expireTime).getTime();
    localStorage.setItem("expireTime", data.expireTime);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch({ type: AuthAction.AUTH_SUCCESS, payload: data });
    autoLogout(dispatch, timer);
  } catch (error) {
    throw error;
  }
};

/**
 * Logout
 * @param dispatch
 */
const logout = (dispatch: Function) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("expireTime");
  if (clearTimer) clearTimeout(clearTimer);
  dispatch({ type: AuthAction.AUTH_LOGOUT, payload: null });
};

const autoLogout = (dispatch: Function, time: number) => {
  clearTimer = setTimeout(() => {
    logout(dispatch);
  }, time);
};

export const hasUserLoggedIn = (dispatch: Function) => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const token = localStorage.getItem("token");
  const expireTime = JSON.parse(localStorage.getItem("expireTime") as string);

  if (!token || new Date().getTime() > expireTime) {
    console.log("i");
    return logout(dispatch);
  }
  autoLogout(dispatch, expireTime - new Date().getTime());
  dispatch({
    type: AuthAction.AUTH_SUCCESS,
    payload: {
      isLoggedIn: !!token,
      user: user,
      isAdmin: user.role === "admin",
      isUser: user.role === "user",
    },
  });
};
