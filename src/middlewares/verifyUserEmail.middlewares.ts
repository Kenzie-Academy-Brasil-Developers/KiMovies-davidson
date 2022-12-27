import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import AppError from "../errors/appError.errors";

const verifyUserEmailMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.newInfoUser;

  const userRepository = AppDataSource.getRepository(User);

  const exists = await userRepository.exist({
    where: { email: email },
  });

  if (exists) {
    throw new AppError("Email already created", 409);
  }

  return next();
};

export default verifyUserEmailMiddlewares;
