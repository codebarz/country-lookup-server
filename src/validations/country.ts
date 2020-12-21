import { Joi } from 'celebrate';

export default {
  currencyConversion: {
    body: {
      code: Joi.string().trim().required(),
      amount: Joi.number().min(0).required(),
      convertToCode: Joi.string().trim().required(),
    },
  },
};
