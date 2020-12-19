import Redis from 'redis';

const client = Redis.createClient({ host: process.env.REDIS_URL });

export default client;
