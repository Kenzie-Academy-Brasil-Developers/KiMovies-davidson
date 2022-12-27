import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import createSchedulesServices from "../../services/schedules/createSchedules.services";

const createSchedulesController = async (req: Request, res: Response) => {
  const newSchedules: IScheduleRequest = req.newSchedules;

  const data = await createSchedulesServices(newSchedules);

  return res.status(201).json(data);
};

export default createSchedulesController;
