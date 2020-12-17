import { Router } from 'express';
import { sampleController } from '../controllers/sample';

const router = Router();

router.get('/', async function (_req, res, _next) {
  const message = await sampleController();

  res.status(200).json({ message });
});

export default router;
