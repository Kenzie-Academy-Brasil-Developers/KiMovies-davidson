import { Router } from "express";
import createUsersController from "../../controllers/users/createUsers.controllers";
import deleteUserController from "../../controllers/users/deleteUser.controllers";
import listUsersController from "../../controllers/users/listUsers.controller";
import updateUserController from "../../controllers/users/updateUser.controllers";
import authUserMiddleware from "../../middlewares/authUser.middlewares";
import verifyCreateMiddlewares from "../../middlewares/verifyCreate.middlewares";
import verifyIsAdmMiddlewares from "../../middlewares/verifyIsAdm.middlewares";
import verifyUserEmailMiddlewares from "../../middlewares/verifyUserEmail.middlewares";
import createUserSchemas from "../../schemas/users/createUser.schemas";
import updateUserSchemas from "../../schemas/users/updateUser.schemas";

const createUsersRoutes = Router();

createUsersRoutes.post(
  "",
  verifyCreateMiddlewares(createUserSchemas),
  verifyUserEmailMiddlewares,
  createUsersController
);

createUsersRoutes.get("", authUserMiddleware, listUsersController);

createUsersRoutes.delete(
  "/:id",
  authUserMiddleware,
  verifyIsAdmMiddlewares,
  deleteUserController
);

createUsersRoutes.patch(
  "/:id",
  authUserMiddleware,
  verifyCreateMiddlewares(updateUserSchemas),
  updateUserController
);

export default createUsersRoutes;
