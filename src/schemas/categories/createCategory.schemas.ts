import * as yup from "yup";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategorySchemas: yup.SchemaOf<ICategoryRequest> = yup
  .object()
  .shape({
    name: yup.string().max(150).required(),
  });

export default createCategorySchemas;
