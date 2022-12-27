import { Request, Response } from "express";
import listsCategoryIdService from "../../services/categories/listsCategoryId.services";

const listsCategoryIdController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const data = await listsCategoryIdService(id);

  return res.status(200).json(data);
};

export default listsCategoryIdController;
