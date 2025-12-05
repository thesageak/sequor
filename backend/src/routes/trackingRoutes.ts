import { Router } from 'express';
import * as trackingController from '../controllers/trackingController';

const router = Router();

router.get('/user/:userId', trackingController.getTrackedManga);
router.get('/:mangaId', trackingController.getStatus);
router.post('/:mangaId', trackingController.setStatus);

export default router;