import { Request, Response } from "express";
import { IUser, IUserRequest } from "../../interfaces/users";
import createUsersServices from "../../services/users/createUsers.services";

const createUsersController = async (req: Request, res: Response) => {
  const infoNewUser: IUserRequest = req.newInfoUser;

  const data: IUser = await createUsersServices(infoNewUser);

  res.status(201).json(data);
};

export default createUsersController;
