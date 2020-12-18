import { Router } from 'express';
import { celebrate as validate } from 'celebrate';
import { generateUserToken } from '../controllers/auth';
import authValidation from '../validations/auth';
const router = Router();

router.route('/login').post(
  [
    validate(authValidation.generateToken, {
      abortEarly: false,
      stripUnknown: true,
    }),
  ],
  generateUserToken,
);

export default router;
