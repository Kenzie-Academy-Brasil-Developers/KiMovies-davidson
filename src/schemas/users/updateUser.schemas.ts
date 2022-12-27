import * as yup from "yup";
import { IUserUpdate } from "../../interfaces/users";

const updateUserSchemas: yup.SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().notRequired().email(),
  password: yup.string().notRequired().trim().min(6),
  name: yup.string().notRequired().trim().min(3),
});

export default updateUserSchemas;
