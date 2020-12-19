declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    MONGO_URI: string;
    ACCESS_TOKEN_SECRET: string;
    BCRYPT_SALT_ROUND: number;
    COUNTRY_API: string;
    FIXER_API: string;
    FIXER_ACCESS_KEY: string;
    REQUEST_RATE_LIMIT: number;
  }
}
