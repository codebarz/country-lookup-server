import { Router } from 'express';
import { getCountry } from '../controllers/country';
import checkToken from '../middlewares/auth';

const router = Router();

router.route('/:country').post(checkToken, getCountry);

export default router;
