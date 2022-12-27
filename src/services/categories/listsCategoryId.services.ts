import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";
import AppError from "../../errors/appError.errors";

const listsCategoryIdService = async (id) => {
  const category = await AppDataSource.createQueryBuilder()
    .select("categories")
    .from(Categories, "categories")
    .leftJoinAndSelect("categories.properties", "properties")
    .where("categories.id = :id", { id: id })
    .getOne();

  if (!category) {
    throw new AppError("Invalid access check past id!", 404);
  }

  return category;
};

export default listsCategoryIdService;
