import { Request, Response } from "express";
import listsPropertiesServices from "../../services/properties/listsProperties.services";

const listsPropertiesController = async (req: Request, res: Response) => {
  const data = await listsPropertiesServices();

  return res.status(200).json(data);
};

export default listsPropertiesController;
