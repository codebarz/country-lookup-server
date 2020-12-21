import axios from 'axios';
import { CurrenciesResponseType } from '../types/country';

const getCurrencyRequest = async (
  url: string,
): Promise<CurrenciesResponseType> => {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

export default getCurrencyRequest