import * as yup from "yup";
import { IUserRequest } from "../../interfaces/users";

const createUserSchemas: yup.SchemaOf<IUserRequest> = yup.object().shape({
  name: yup
    .string()
    .required("Required name field!")
    .max(50, "Maximum 50 characters")
    .min(3, "Minimum 3 characters")
    .trim(),
  email: yup
    .string()
    .required("Required email field!")
    .max(50, "Maximum 50 characters")
    .email("Email invalid!"),
  password: yup
    .string()
    .required("Required password field!")
    .min(6, "Password minimum 6 characters")
    .trim(),
  isAdm: yup.boolean().required("Required is admin field!"),
});

export default createUserSchemas;
