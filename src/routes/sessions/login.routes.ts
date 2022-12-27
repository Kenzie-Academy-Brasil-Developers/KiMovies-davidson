import { Router } from "express";
import createSessionsController from "../../controllers/sessions/sessionsUser.controllers";
import verifyCreateMiddlewares from "../../middlewares/verifyCreate.middlewares";
import createSessionsUserSchemas from "../../schemas/sessions/sessionsUser.schemas";

const createSessionsUsersRoutes = Router();

createSessionsUsersRoutes.post(
  "",
  verifyCreateMiddlewares(createSessionsUserSchemas),
  createSessionsController
);

export default createSessionsUsersRoutes;
