import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";

const listsCategoriesServices = async () => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categoryResponse = await categoryRepository.find();

  return categoryResponse;
};

export default listsCategoriesServices;
