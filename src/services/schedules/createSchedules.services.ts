import SchedulesUserProperties from "../../entities/schedulesUserProperties.entity";
import AppDataSource from "../../data-source";
import AppError from "../../errors/appError.errors";
import { IScheduleRequest } from "../../interfaces/schedules";
import Properties from "../../entities/properties.entity";
import { User } from "../../entities/user.entity";

const createSchedulesServices = async (newSchedules: IScheduleRequest) => {
  const { date, hour, userId, propertyId } = newSchedules;

  const verifyNewDate = new Date(`${date} ${hour}`);

  if (verifyNewDate.getDay() === 0 || verifyNewDate.getDay() === 6) {
    throw new AppError("Book visit only on weekdays", 400);
  }

  if (verifyNewDate.getHours() >= 18 || verifyNewDate.getHours() < 8) {
    throw new AppError("Scheduling visits only during business hours!", 400);
  }

  const schedulesRepository = AppDataSource.getRepository(
    SchedulesUserProperties
  );

  const properyRepository = AppDataSource.getRepository(Properties);

  const userRepository = AppDataSource.getRepository(User);

  const properyExist = await properyRepository.findOne({
    where: { id: propertyId },
  });

  if (!properyExist) {
    throw new AppError("Propery invalid!", 404);
  }

  const userExist = await userRepository.findOne({
    where: { id: userId },
  });

  if (!userExist) {
    throw new AppError("User invalid!", 404);
  }

  const verifyHourPropery = await AppDataSource.createQueryBuilder()
    .select("schedules_user_properties")
    .from(SchedulesUserProperties, "schedules_user_properties")
    .leftJoinAndSelect("schedules_user_properties.properties", "properties")
    .where("schedules_user_properties.date = :date", {
      date: date,
    })
    .andWhere("schedules_user_properties.hour = :hour", {
      hour: hour,
    })
    .andWhere("properties.id = :id", {
      id: propertyId,
    })
    .getMany();

  if (verifyHourPropery.length) {
    throw new AppError("It is not possible to book on this date!", 409);
  }

  const verifyDateUserPropery = await AppDataSource.createQueryBuilder()
    .select("user")
    .from(User, "user")
    .leftJoinAndSelect("user.schedules", "schedules")
    .leftJoinAndSelect("schedules.properties", "properties")
    .where("schedules.date = :date", {
      date: date,
    })
    .andWhere("schedules.hour = :hour", {
      hour: hour,
    })
    .andWhere("user.id = :id", { id: userId })
    .getMany();

  if (verifyDateUserPropery.length) {
    throw new AppError("It is not possible to book on this date!", 409);
  }

  const schedulesResponse = schedulesRepository.create(newSchedules);

  await schedulesRepository.save(schedulesResponse);

  await schedulesRepository.update(
    { id: schedulesResponse.id },
    {
      user: userExist,
      properties: properyExist,
    }
  );

  return { message: "Successfully created schedule" };
};

export default createSchedulesServices;
