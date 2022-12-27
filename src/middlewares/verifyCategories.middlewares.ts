import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Categories from "../entities/categories.entity";
import AppError from "../errors/appError.errors";

const verifyCategoryNameMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.newInfoCategory;

  const userRepository = AppDataSource.getRepository(Categories);

  const exists = await userRepository.exist({
    where: { name: name },
  });

  if (exists) {
    throw new AppError("Category already created", 409);
  }

  return next();
};

export default verifyCategoryNameMiddlewares;
