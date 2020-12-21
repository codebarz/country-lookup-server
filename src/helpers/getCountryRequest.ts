import axios from 'axios';
import { CountryResponseType } from '../types/country';

const getCountryRequest = async (
  url: string,
): Promise<CountryResponseType[]> => {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

export default getCountryRequest;
