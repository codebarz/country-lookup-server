import { currencyConverterType } from '../types/helpers';

/**
 * http://data.fixer.io/api have their currency conversion API on paid plan
 * but give currency conversion in EUROs by default
 * so dividing 1 Euro to Country currency conversion by 1 Euro to SEK conversion
 * would give equivalent 1 country currency to SEK conversion
 *
 * @param countryCurrencySymbol
 * @param finalConversionSymbol
 * @param rates
 */

const convertCurrencyToSEK: currencyConverterType = (
  countryCurrencySymbol,
  finalConversionSymbol,
  rates,
) => {
  const currencyToSEK =
    rates[countryCurrencySymbol]! / rates[finalConversionSymbol]!;
  return currencyToSEK;
};

export default convertCurrencyToSEK;
