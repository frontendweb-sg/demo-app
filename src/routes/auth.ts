import express from "express";
import { body } from "express-validator";
import { login, signup } from "../controllers/auth";
import { User } from "../models/user";
import { BadRequestError } from "../errors";
import { requestValidator } from "../middleware/request-validator";

const route = express.Router();

/**
 * Method               GET
 * Access               Public
 * Url                  https://localhost:3001/api/auth
 */
route.post(
  "/",
  [
    body("email", "Email is required!")
      .notEmpty()
      .isEmail()
      .withMessage("Invalid email address")
      .custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (!user) {
          throw new BadRequestError(
            "Email is not associated with us, please register"
          );
        }
        return user;
      }),
    body("password", "Password is required!").notEmpty(),
  ],
  requestValidator,
  login
);

/**
 * Signup route
 */
route.post(
  "/signup",
  [
    body("name", "Name is required!").notEmpty(),
    body("email", "Email is required")
      .isEmail()
      .withMessage("Invalid email")
      .custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) {
          throw new BadRequestError("Email already existed!");
        }
        return user;
      }),
    body("password", "Password is requried")
      .notEmpty()
      .isAlphanumeric()
      .withMessage("Password Must be alpha numeric"),
    body("mobile", "Mobile is requried"),
  ],
  requestValidator,
  signup
);

export { route as authRoute };
