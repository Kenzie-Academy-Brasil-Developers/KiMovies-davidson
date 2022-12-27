import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import createCategoryService from "../../services/categories/createCategory.services";

const createCategoryController = async (req: Request, res: Response) => {
  const infoCategory: ICategoryRequest = req.newInfoCategory;

  const data = await createCategoryService(infoCategory);

  return res.status(201).json(data);
};

export default createCategoryController;
