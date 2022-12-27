import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import createSessionsService from "../../services/sessions/sessionsUser.services";

const createSessionsController = async (req: Request, res: Response) => {
  const inforUser: IUserLogin = req.newSessions;

  const token = await createSessionsService(inforUser);

  return res.status(200).json({ token });
};

export default createSessionsController;
