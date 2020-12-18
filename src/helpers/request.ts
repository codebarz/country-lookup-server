import axios from 'axios';
import { CountryResponseType, CurrenciesResponseType } from '../types/country';

export const getCountryRequest = async (
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

export const getCurrencyRequest = async (
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
