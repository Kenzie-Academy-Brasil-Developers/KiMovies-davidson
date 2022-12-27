import { Request, Response } from "express";
import deleteUserServices from "../../services/users/deleteUser.services";

const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await deleteUserServices(id);

  return res.status(204).send();
};

export default deleteUserController;
