import { Joi } from 'celebrate';

export default {
  generateToken: {
    body: {
      email: Joi.string().email().required(),
    },
  },
};
