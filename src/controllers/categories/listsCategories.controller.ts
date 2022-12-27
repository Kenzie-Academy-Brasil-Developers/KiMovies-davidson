import { Request, Response } from "express";
import listsCategoriesServices from "../../services/categories/listsCategories.services";

const listsCategoriesController = async (req: Request, res: Response) => {
  const data = await listsCategoriesServices();

  return res.status(200).json(data);
};

export default listsCategoriesController;
