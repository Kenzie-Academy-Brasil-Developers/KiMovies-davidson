import { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";
import AppError from "./appError.errors";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err.message.includes("invalid input syntax")) {
    return res.status(404).json({ message: "invalid input syntax" });
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({ message: err.errors });
  }
  if (err instanceof TypeError) {
    return res.status(403).json({ message: "Email or password not found!" });
  }
  console.error(err);

  return res.status(500).json({ message: "Internal Server Error." });
};

export default errorHandler;
