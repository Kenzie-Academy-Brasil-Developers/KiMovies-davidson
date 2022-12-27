import { Request, Response } from "express";
import listsPropetiesSchedulesService from "../../services/schedules/listsPropetiesSchedules.services";

const listsPropertiesSchedulesController = async (
  req: Request,
  res: Response
) => {
  const id: string = req.params.id;

  const data = await listsPropetiesSchedulesService(id);

  return res.status(200).json(data);
};

export default listsPropertiesSchedulesController;
