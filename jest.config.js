module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

process.env = Object.assign(process.env, {
  ACCESS_TOKEN_SECRET: 'secret',
  FIXER_API: 'http://data.fixer.io/api',
  FIXER_ACCESS_KEY: 'd35f65e18c278647013d57ede996efab',
  COUNTRY_API: 'https://restcountries.eu/rest/v2',
});
