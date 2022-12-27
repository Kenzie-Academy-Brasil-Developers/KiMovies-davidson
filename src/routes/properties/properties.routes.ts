import { Router } from "express";
import createProperyController from "../../controllers/properties/createPropery.controller";
import listsPropertiesController from "../../controllers/properties/listsProperties.controller";
import authUserMiddleware from "../../middlewares/authUser.middlewares";
import verifyCreateMiddlewares from "../../middlewares/verifyCreate.middlewares";
import verifyIsAdmMiddlewares from "../../middlewares/verifyIsAdm.middlewares";
import createPropertiesSchemas from "../../schemas/properties/createProperties.schemas";

const createProperyRoutes = Router();

createProperyRoutes.post(
  "",

  authUserMiddleware,
  verifyCreateMiddlewares(createPropertiesSchemas),
  verifyIsAdmMiddlewares,
  createProperyController
);

createProperyRoutes.get("", listsPropertiesController);

export default createProperyRoutes;
