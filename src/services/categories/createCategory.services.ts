import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (
  infoCategory: ICategoryRequest
): Promise<Categories> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categoryResponse = categoryRepository.create(infoCategory);

  await categoryRepository.save(categoryResponse);

  return categoryResponse;
};

export default createCategoryService;
