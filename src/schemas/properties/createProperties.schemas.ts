import * as yup from "yup";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertiesSchemas: yup.SchemaOf<IPropertyRequest> = yup
  .object()
  .shape({
    value: yup.number().required().min(1).max(9999999999.99),
    size: yup.number().required().min(1),
    address: yup.object().shape({
      district: yup.string().required().max(150),
      zipCode: yup.string().required().max(8),
      number: yup.string().notRequired().max(5),
      city: yup.string().required().max(50),
      state: yup.string().required().max(2),
    }),
    categoryId: yup.string().required(),
  });

export default createPropertiesSchemas;
