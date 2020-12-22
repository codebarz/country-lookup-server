import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { AuthType } from '../types/auth';
import { sign } from 'jsonwebtoken';
import { ResponseInterface } from '../types/response';

export const generateUserToken = async (
  req: Request,
  res: Response,
): Promise<ResponseInterface | void> => {
  try {
    const data = req.body;

    const { email } = data as AuthType;

    const token = sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1d',
    });

    return res.status(httpStatus.OK).json({ token });
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: 'Unable to login at this time', error: error.message });
  }
};
