declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    MONGO_URI: string;
    ACCESS_TOKEN_SECRET: string;
    BCRYPT_SALT_ROUND: number;
    COUNTRY_API: string;
    COUNTRY_API_KEY: string;
    FIXER_API: string;
    FIXER_ACCESS_KEY: string;
    REQUEST_RATE_LIMIT: number;
    REQUEST_RATE_LIMIT_TIME: number;
    REDIS_URL: string;
  }
}
