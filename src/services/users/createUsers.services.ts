import { IUser, IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import userResponseSchemas from "../../schemas/users/userResponse.schemas";

const createUsersServices = async (
  infoNewUser: IUserRequest
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const userResponse = userRepository.create(infoNewUser);

  await userRepository.save(userResponse);

  const data = await userResponseSchemas.validate(userResponse, {
    stripUnknown: true,
  });

  return data;
};

export default createUsersServices;
