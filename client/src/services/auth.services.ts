import axios, { AxiosResponse } from "axios";
const SERVICE_API_URL = import.meta.env.VITE_APP_API_URL + "/auth";

class AuthService {
  getSignObject() {
    return {
      email: "pradeep@gmail.com",
      password: "Admin12345",
    };
  }
  getSingupObject() {
    return {
      name: "",
      email: "",
      password: "",
      mobile: "",
    };
  }

  login(body: ISignin): Promise<AxiosResponse<IUserResponse>> {
    return axios.post(SERVICE_API_URL, body);
  }
  signup(body: ISignup): Promise<AxiosResponse<IUserResponse>> {
    return axios.post(`${SERVICE_API_URL}/signup`, body);
  }
}
const authSercvie = new AuthService();
export { authSercvie };
