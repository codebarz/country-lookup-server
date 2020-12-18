import jwt from 'jsonwebtoken';

export const verify = (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (error, decodedToken) => {
        if (error) {
          if (error instanceof jwt.TokenExpiredError) {
            return reject('Token expired');
          }
          return reject(error);
        }
        return resolve(decodedToken);
      },
    );
  });
};
