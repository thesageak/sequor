import express from 'express';
import { getAnimeById, searchAnime } from '../controllers/animeController';

const router = express.Router();

router.get('/anime/:id', getAnimeById);
router.get('/anime', searchAnime);

export default router;