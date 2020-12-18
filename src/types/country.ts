export type CountryType = { country: string };
export type CountryResponseType = {
  name: string;
  population: number;
  currencies: CountryCurrency[];
  exchangeRateToSEK: number;
};
type CountryCurrency = { code: string; name: string; symbol: string };
export type CurrenciesResponseType = {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: { [index: string]: number };
};
