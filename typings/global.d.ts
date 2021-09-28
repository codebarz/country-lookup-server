declare module 'countrycitystatejson' {
  export function getCountries(): Array<Country>;
  export function getStatesByShort(T: string): string[];
  export function getCities(country: string, state: string): string[];
}
