import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import AppError from "../../errors/appError.errors";
import AppDataSource from "../../data-source";
import updateUserSchemas from "../../schemas/users/updateUser.schemas";

const updateUserService = async (infoUser: IUserUpdate, tokenId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userResponse = await userRepository.find({
    select: ["email", "id", "name", "password"],
    withDeleted: true,
    where: { id: tokenId },
  });

  if (!userResponse.length) {
    throw new AppError("Updating users is not allowed", 404);
  }

  if (!Object.keys(infoUser).length) {
    throw new AppError("Updating users is not allowed", 401);
  }
  const userNew = await updateUserSchemas.validate(infoUser, {
    stripUnknown: true,
  });

  const updateUser = userRepository.create({
    ...userResponse[0],
    ...userNew,
  });

  await userRepository.save(updateUser);

  delete updateUser.password;

  return updateUser;
};

export default updateUserService;
