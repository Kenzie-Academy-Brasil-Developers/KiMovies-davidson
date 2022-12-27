import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError.errors";
import jwt from "jsonwebtoken";
const authUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError("Missing authorization headers", 401);
  }

  const token = authToken.split(" ")[1];

  return jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      throw new AppError(error.message, 401);
    }
    req.authId = decoded;

    return next();
  });
};

export default authUserMiddleware;
