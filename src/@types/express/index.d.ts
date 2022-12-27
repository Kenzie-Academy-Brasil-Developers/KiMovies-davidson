import { ICategoryRequest } from "../../interfaces/categories";
import { IPropertyRequest } from "../../interfaces/properties";
import { IScheduleRequest } from "../../interfaces/schedules";
import { IUserLogin, IUserRequest } from "../../interfaces/users";

declare global {
  namespace Express {
    interface Request {
      newInfoUser: IUserRequest;
      newInfoCategory: ICategoryRequest;
      newInfoPropery: IPropertyRequest;
      newSchedules: IScheduleRequest;
      authId: string | jwt.JwtPayload;
      newSessions: IUserLogin;
    }
  }
}

export {};
