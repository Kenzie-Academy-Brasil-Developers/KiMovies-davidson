import { Request, Response } from "express";
import createProperyService from "../../services/properties/createPropery.services";

const createProperyController = async (req: Request, res: Response) => {
  const infoPropery = req.newInfoPropery;

  const data = await createProperyService(infoPropery);

  return res.status(201).json(data);
};

export default createProperyController;
