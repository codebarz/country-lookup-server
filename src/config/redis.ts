import Redis from 'redis';

const client = Redis.createClient({ url: process.env.REDIS_URL });

export default client;
