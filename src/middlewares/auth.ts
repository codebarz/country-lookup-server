import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { verify } from '../helpers/authToken';

interface RequestData extends Request {
  token?: any;
}

type tokenData = { email: string };

export default async (req: RequestData, res: Response, next: NextFunction) => {
  let tokenToVerify: string | null = null;
  const signature = req.header('Authorization');
  const content = signature ? signature.split(' ') : false;

  if (content && content.length === 2 && content[0] === 'Bearer') {
    tokenToVerify = content[1]!;
  }

  if (tokenToVerify) {
    try {
      const token = (await verify(tokenToVerify)) as tokenData;

      req.token = token;
      return next();
    } catch (error) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: 'Invalid token' });
    }
  }

  return res
    .status(httpStatus.UNAUTHORIZED)
    .json({ message: 'No token found' });
};
