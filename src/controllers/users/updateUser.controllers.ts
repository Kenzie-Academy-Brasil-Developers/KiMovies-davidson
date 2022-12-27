import { Request, Response } from "express";
import updateUserService from "../../services/users/updateUser.services";

const updateUserController = async (req: Request, res: Response) => {
  const infoUser = req.newInfoUser;

  const tokenId = req.params.id;

  const data = await updateUserService(infoUser, tokenId);

  return res.status(200).json(data);
};

export default updateUserController;
