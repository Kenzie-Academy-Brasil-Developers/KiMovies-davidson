import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError.errors";

const listUsersServices = async (isAdm: boolean): Promise<User[]> => {
  if (isAdm) {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find({
      withDeleted: true,
    });

    return users;
  }
  throw new AppError("Not authorized!", 403);
};

export default listUsersServices;
