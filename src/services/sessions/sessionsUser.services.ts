import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { compare } from "bcryptjs";
import AppError from "../../errors/appError.errors";

const createSessionsService = async (infoUser: IUserLogin): Promise<string> => {
  const { email, password } = infoUser;

  const userResponse = await AppDataSource.createQueryBuilder()
    .select("users")
    .from(User, "users")
    .addSelect("users.password")
    .where("users.email = :email", { email: email })
    .getOne();

  if (!userResponse) {
    throw new AppError("Email or password not found!", 400);
  }

  const passwordSeach = await compare(password, userResponse.password);

  if (!passwordSeach) {
    throw new AppError("Email or password not found!", 403);
  }

  const token = jwt.sign(
    { email: userResponse.email, isAdm: userResponse.isAdm },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
      subject: userResponse.id,
    }
  );

  return token;
};

export default createSessionsService;
