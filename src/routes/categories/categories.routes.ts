import { Router } from "express";
import createCategoryController from "../../controllers/categories/createCategory.controllers";
import listsCategoriesController from "../../controllers/categories/listsCategories.controller";
import listsCategoryIdController from "../../controllers/categories/listsCategoryId.controller";
import authUserMiddleware from "../../middlewares/authUser.middlewares";
import verifyCategoryNameMiddlewares from "../../middlewares/verifyCategories.middlewares";
import verifyCreateMiddlewares from "../../middlewares/verifyCreate.middlewares";
import verifyIsAdmMiddlewares from "../../middlewares/verifyIsAdm.middlewares";
import createCategorySchemas from "../../schemas/categories/createCategory.schemas";

const createCategoryRoutes = Router();

createCategoryRoutes.post(
  "",
  authUserMiddleware,
  verifyIsAdmMiddlewares,
  verifyCreateMiddlewares(createCategorySchemas),
  verifyCategoryNameMiddlewares,
  createCategoryController
);

createCategoryRoutes.get("", listsCategoriesController);

createCategoryRoutes.get("/:id/properties", listsCategoryIdController);

export default createCategoryRoutes;
