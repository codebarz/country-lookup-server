import { Router } from 'express';
import { getCountry, convertCurrency } from '../controllers/country';
import checkToken from '../middlewares/auth';
import limitRequestRate from '../middlewares/rateLimiting';
import countryValidation from '../validations/country';
import { celebrate as validate } from 'celebrate';

const router = Router();

router.route('/:country').get(checkToken, limitRequestRate, getCountry);
router.route('/convertcurrency').post(
  checkToken,
  limitRequestRate,
  [
    validate(countryValidation.currencyConversion, {
      abortEarly: false,
      stripUnknown: true,
    }),
  ],
  convertCurrency,
);

export default router;
