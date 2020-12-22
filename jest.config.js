module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

//Set up Jest Envars
process.env = Object.assign(process.env, {
  ACCESS_TOKEN_SECRET: 'secret',
  REDIS_URL: 'redis://localhost',
  REQUEST_RATE_LIMIT: 5,
  REQUEST_RATE_LIMIT_TIME: 1,
  BCRYPT_SALT_ROUNDS: 12,
});
