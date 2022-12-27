import * as yup from "yup";
import { IUser } from "../../interfaces/users";

const userResponseSchemas: yup.SchemaOf<IUser> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  isAdm: yup.boolean().notRequired(),
  isActive: yup.boolean().notRequired(),
  id: yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

export default userResponseSchemas;
