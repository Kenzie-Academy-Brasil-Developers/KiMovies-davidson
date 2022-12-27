import { Request, Response } from "express";
import listUsersServices from "../../services/users/listUsers.services";

const listUsersController = async (req: Request, res: Response) => {
  const isAdm: boolean = req.authId.isAdm;

  const users = await listUsersServices(isAdm);

  return res.status(200).json(users);
};

export default listUsersController;
