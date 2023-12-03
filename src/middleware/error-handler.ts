import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

/**
 * Error handler
 * @param error
 * @param req
 * @param res
 * @param next
 * @returns
 */
const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("err", error);
  if (error instanceof CustomError) {
    return res.status(error.statusCode).send({ errors: error.renderError() });
  }

  res.send({
    error: "Something went wrong",
  });
};

export { errorHandler };
