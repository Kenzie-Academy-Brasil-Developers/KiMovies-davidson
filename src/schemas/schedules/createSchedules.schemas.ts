import * as yup from "yup";
import { IScheduleRequest } from "../../interfaces/schedules";

const createSchedulesSchemas: yup.SchemaOf<IScheduleRequest> = yup
  .object()
  .shape({
    userId: yup.string().required().uuid(),
    propertyId: yup.string().required().uuid(),
    date: yup.string().required(),
    hour: yup.string().required(),
  });

export default createSchedulesSchemas;
