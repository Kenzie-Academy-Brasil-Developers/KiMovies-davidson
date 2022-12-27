import { Router } from "express";
import createSchedulesController from "../../controllers/schedules/createSchedules.controllers";
import listsPropertiesSchedulesController from "../../controllers/schedules/listsPropertiesSchedules.controllers";
import authUserMiddleware from "../../middlewares/authUser.middlewares";
import verifyCreateMiddlewares from "../../middlewares/verifyCreate.middlewares";
import verifyIsAdmMiddlewares from "../../middlewares/verifyIsAdm.middlewares";
import createSchedulesSchemas from "../../schemas/schedules/createSchedules.schemas";

const createSchedulesRoutes = Router();

createSchedulesRoutes.post(
  "",
  authUserMiddleware,
  verifyCreateMiddlewares(createSchedulesSchemas),
  createSchedulesController
);

createSchedulesRoutes.get(
  "/properties/:id",
  authUserMiddleware,
  verifyIsAdmMiddlewares,
  listsPropertiesSchedulesController
);

export default createSchedulesRoutes;
