import { AuthError } from "../errors";
import { IUserDoc, User } from "../models/user";
import { Roles } from "../utils/enums";
import { Jwt } from "../utils/jwt";
import { Password } from "../utils/password";
import { Request, Response, NextFunction } from "express";

/**
 * Login controller
 * @param req
 * @param res
 * @param next
 */
const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = (await User.findOne({ email })) as IUserDoc;
    const verify = Password.compare(password, user.password!);
    if (!verify) throw new AuthError("Invalid password");

    const token = Jwt.genToken({
      email: user.email,
      id: user.id,
    });

    const expireTime = new Date().getTime() + 60 * 60 * 1000;
    return res.status(200).send({
      token,
      expireTime: expireTime,
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Signup controller
 * @param req
 * @param res
 * @param next
 */
const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, mobile, role } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      mobile,
      role: role ?? Roles.user,
    }) as IUserDoc;

    const result = (await newUser.save()) as IUserDoc;
    return res.status(201).send(result);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

export { login, signup };
