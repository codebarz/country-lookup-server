import { Response, NextFunction } from 'express';
import client from '../config/redis';
import { RequestData } from './auth';
import moment from 'moment';
import httpStatus from 'http-status';

type RateType = { timeStamp: number; count: number };
type RedisStoreData = Array<RateType>;

const RateLimit = process.env.REQUEST_RATE_LIMIT;
const RateLimitTime = process.env.REQUEST_RATE_LIMIT_TIME;

export default async (req: RequestData, res: Response, next: NextFunction) => {
  try {
    if (!client) {
      throw new Error('redis store client does not exist');
    }
    //Get bearer token to use as redis key
    const token = req.redisKey!;
    //Create current time of request
    const requestTime = moment();
    //Check for token in redis store
    client.get(token, function (err, data): Response<any> | void {
      if (err) {
        throw new Error(err.message);
      }
      if (!data) {
        //Store request log associated with token as Array<Record<string, number>>
        let requestData: RedisStoreData = [];
        let requestLog = {
          timeStamp: requestTime.unix(),
          count: 1,
        };
        requestData.push(requestLog);
        client.set(token, JSON.stringify(requestData));
        next();
      } else {
        //Calculate request made within the last window
        let existingData = JSON.parse(data!) as RedisStoreData;
        let requestTimeWindow = moment()
          .subtract(RateLimitTime, 'minutes')
          .unix();

        let requestWithinWindow = existingData.filter(
          (request) => request.timeStamp > requestTimeWindow,
        );

        let totalRequesWithinWindow = requestWithinWindow.reduce(
          (acc, request) => {
            return acc + request.count;
          },
          0,
        );

        if (totalRequesWithinWindow > RateLimit) {
          return res.status(httpStatus.TOO_MANY_REQUESTS).json({
            error: 'You have exceeded the 5 request per minute limit',
          });
        } else {
          let lastRequestLog = existingData[existingData.length - 1];
          let currentWindowStartTimeStamp = requestTime
            .subtract(RateLimitTime, 'minutes')
            .unix();

          //Check if last request has not passed limit and increment counter
          if (
            lastRequestLog &&
            lastRequestLog.timeStamp > currentWindowStartTimeStamp
          ) {
            lastRequestLog.count++;
          } else {
            existingData.push({
              timeStamp: moment().unix(),
              count: 1,
            });
          }

          client.set(token, JSON.stringify(existingData));
          next();
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
