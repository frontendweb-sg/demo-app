import { Request, Response, NextFunction } from "express";
import { AuthError } from "../errors/auth-error";
import { BadRequestError } from "../errors/bad-request-error";
import { IRoleDoc, Role } from "../models/role";
import { IUserDoc, User } from "../models/user";
import { Roles } from "../utils/enums";

/**
 * Permission middleware
 * @param roles
 * @returns
 */
interface Map {
  [key: string]: string | undefined;
}
const methods: Map = {
  get: "read",
  post: "create",
  put: "update",
  delete: "delete",
};

export const Permision = (...allowedRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rolesArray = [...allowedRoles, Roles.superadmin];
      const method: string = req.method.toLowerCase();
      const role = (await Role.findOne({
        role: { $in: req.user.role },
      })) as IRoleDoc;

      if (!role) {
        throw new AuthError(
          "You don't have permission to perform this action. or role does not exists."
        );
      }

      const access =
        role.permission.includes(methods[method]!) &&
        rolesArray.includes(role.role);

      if (!access) {
        throw new AuthError("You have no permission for perming this action.");
      }

      next();
    } catch (error) {
      let message = null;
      if (error instanceof Error) message = error?.message;
      console.log("m", message, error);
      next(error);
    }
  };
};
