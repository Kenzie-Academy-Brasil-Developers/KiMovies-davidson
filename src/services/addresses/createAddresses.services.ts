import AppDataSource from "../../data-source";
import Addresses from "../../entities/addresses.entity";
import Properties from "../../entities/properties.entity";
import { IAddressRequest } from "../../interfaces/properties/index";

const createAddressesService = async (
  newAddress: IAddressRequest,
  userId: string
) => {
  const addressRepository = AppDataSource.getRepository(Addresses);
  const properyRepository = AppDataSource.getRepository(Properties);

  const addressResponse = addressRepository.create(newAddress);

  await addressRepository.save(addressResponse);

  await properyRepository.update({ id: userId }, { address: addressResponse });
};

export default createAddressesService;
