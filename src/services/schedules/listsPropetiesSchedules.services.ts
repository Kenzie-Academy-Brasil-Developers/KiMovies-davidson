import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entity";
import AppError from "../../errors/appError.errors";

const listsPropetiesSchedulesService = async (id: string) => {
  const schedulesResponse = await AppDataSource.createQueryBuilder()
    .select("properties")
    .from(Properties, "properties")
    .leftJoinAndSelect("properties.schedules", "schedules")
    .leftJoinAndSelect("schedules.user", "user")
    .where("properties.id = :id", {
      id: id,
    })
    .getOne();

  if (!schedulesResponse) {
    throw new AppError("Properties invalid!", 404);
  }

  return schedulesResponse;
};

export default listsPropetiesSchedulesService;
