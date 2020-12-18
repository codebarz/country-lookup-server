import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { CountryType } from '../types/country';
import { ResponseInterface } from '../types/response';
import { getCountryRequest, getCurrencyRequest } from '../helpers/request';
import convertCurrencyToSEK from './convertCurrencyToSEK';

export const getCountry = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<ResponseInterface | void> => {
  try {
    const { country } = req.params as CountryType;

    const countryDataRequest = getCountryRequest(
      `${process.env.COUNTRY_API}/name/${country}?fields=name;currencies;population`,
    );

    const currencyRatesRequest = getCurrencyRequest(
      `${process.env.FIXER_API}/latest?access_key=${process.env.FIXER_ACCESS_KEY}`,
    );

    const [countryData, currencyRates] = await Promise.all([
      countryDataRequest,
      currencyRatesRequest,
    ]);

    const payload = countryData.map((country) => {
      const countryCurrencyToSEK = convertCurrencyToSEK(
        country.currencies[0]?.code!,
        'SEK',
        currencyRates.rates,
      );

      let result = { ...country, currencyToSEK: countryCurrencyToSEK };

      return result;
    });

    return res.status(httpStatus.OK).json({ payload });
  } catch (error) {
    next(error);
  }
};
