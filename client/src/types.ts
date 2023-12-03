type AppCommon = {};
type AppProps = {
  children?: React.ReactNode | React.ReactElement;
  className?: string;
};
type Display = "flex" | "block" | "inline" | "inline-flex";
type Height = "25" | "50" | "75" | "100" | "auto";
type Width = "25" | "50" | "75" | "100" | "auto";
type Align = "left" | "right" | "center" | "justify" | "auto";
type Theme = "light" | "dark";
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "block";
type Status =
  | "new"
  | "edit"
  | "update"
  | "delete"
  | "default"
  | "approved"
  | "rejected"
  | "pending"
  | "active"
  | "inactive";
type alignItems =
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "stretch"
  | "initial"
  | "inherit";
type justifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";

type Color =
  | "primary"
  | "secondary"
  | "info"
  | "danger"
  | "warning"
  | "light"
  | "gray"
  | "success";

type Direction =
  | "top-left"
  | "top-center"
  | "top-right"
  | "center"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "span";

interface ISignin {
  email: string;
  password: string;
}

interface ISignup {
  name: string;
  email: string;
  password: string;
  mobile: string;
}

interface IUser {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  image: string;
  role: string;
  verify: boolean;
  resetToken: null | string;
  active: boolean;
  accessToken: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

interface IUserResponse {
  expireTime: string;
  token: string;
  user: IUser;
}

interface ICategory {
  id?: null | string;
  title: string;
  slug: string;
  active: boolean;
  description?: string;
  image?: string;
}
