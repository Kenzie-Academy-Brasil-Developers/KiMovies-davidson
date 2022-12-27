import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entity";

const listsPropertiesServices = async () => {
  const properyRepository = AppDataSource.getRepository(Properties);

  const properyResponse = await properyRepository.find();

  return properyResponse;
};

export default listsPropertiesServices;
