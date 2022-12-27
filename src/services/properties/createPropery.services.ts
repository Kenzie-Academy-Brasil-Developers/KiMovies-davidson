import AppDataSource from "../../data-source";
import Addresses from "../../entities/addresses.entity";
import Categories from "../../entities/categories.entity";
import Properties from "../../entities/properties.entity";
import AppError from "../../errors/appError.errors";
import { IPropertyRequest } from "../../interfaces/properties";
import createAddressesService from "../addresses/createAddresses.services";

const createProperyService = async (
  infoPropery: IPropertyRequest
): Promise<Properties> => {
  const properyRepository = AppDataSource.getRepository(Properties);
  const categoryRequery = AppDataSource.getRepository(Categories);
  const addressRepository = AppDataSource.getRepository(Addresses);

  const addressExist = await addressRepository.findOne({
    where: {
      district: infoPropery.address.district,
      zipCode: infoPropery.address.zipCode,
      city: infoPropery.address.city,
      state: infoPropery.address.state,
      number: infoPropery.address.number,
    },
  });

  if (addressExist) {
    throw new AppError("Address already exists!", 409);
  }

  const categoryExist = await categoryRequery.findOne({
    where: { id: infoPropery.categoryId },
  });

  if (!categoryExist) {
    throw new AppError("Category invalid!", 404);
  }

  const properyResponse = properyRepository.create(infoPropery);

  await properyRepository.save(properyResponse);

  await createAddressesService(infoPropery.address, properyResponse.id);

  await properyRepository.update(
    { id: properyResponse.id },
    { category: categoryExist }
  );

  const properties = await AppDataSource.createQueryBuilder()
    .select("properties")
    .from(Properties, "properties")
    .leftJoinAndSelect("properties.address", "address")
    .leftJoinAndSelect("properties.category", "category")
    .where("properties.id = :id", { id: properyResponse.id })
    .getOne();

  return properties;
};

export default createProperyService;
