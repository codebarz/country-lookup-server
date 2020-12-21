import { Joi } from 'celebrate';

export default {
  currencyConversion: {
    body: {
      code: Joi.string().required(),
      amount: Joi.number().min(0).required(),
    },
  },
};
