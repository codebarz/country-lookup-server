export type currencyConverterType = (
  countryCurrencySymbol: string,
  finalCurrencySymbol: string,
  rates: { [index: string]: number },
) => number;
