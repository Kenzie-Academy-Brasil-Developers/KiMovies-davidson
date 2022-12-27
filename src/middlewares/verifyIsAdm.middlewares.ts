import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError.errors";

const verifyIsAdmMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const isAdm = req.authId.isAdm;

  if (!isAdm) {
    throw new AppError("Not authorized!", 403);
  }

  return next();
};

export default verifyIsAdmMiddlewares;
