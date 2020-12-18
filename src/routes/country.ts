import { Router } from 'express';
import { getCountry } from '../controllers/country';

const router = Router();

router.route('/:country').post(getCountry);

export default router;
