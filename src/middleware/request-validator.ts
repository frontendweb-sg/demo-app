import { RequestValidationError } from "../errors";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

/**
 * Express validator
 * Validating request
 */
export const requestValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const values = validationResult(req);
  if (!values.isEmpty()) {
    throw new RequestValidationError(values.array());
  }
  next();
};
