import * as yup from "yup";
import { IUserLogin } from "../../interfaces/users";

const createSessionsUserSchemas: yup.SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().required("Required email field!").email("Email invalid!"),
  password: yup.string().required("Required password field!"),
});

export default createSessionsUserSchemas;
