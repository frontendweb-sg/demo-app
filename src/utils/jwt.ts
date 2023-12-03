import JWT, { JwtPayload, SignOptions } from "jsonwebtoken";
import { AuthError } from "../errors";

export interface JwtOptions extends SignOptions {}
export const DEFAULT_OPTIONS: JwtOptions = {
  expiresIn: "1h",
};

interface JwtPayloadExtends extends JwtPayload {
  email: string;
  id: string;
}
export class Jwt {
  static genToken(payload: JwtPayload, options: JwtOptions = DEFAULT_OPTIONS) {
    return JWT.sign(payload, process.env.SECRET_KEY!, options);
  }

  static verifyToken(token: string) {
    return JWT.verify(
      token,
      process.env.SECRET_KEY!,
      function cb(error, decode) {
        if (error) throw new AuthError("Auth token is expired!");
        return decode as JwtPayloadExtends;
      }
    );
  }
}
