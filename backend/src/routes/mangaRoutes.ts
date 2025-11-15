import express from 'express';
import { getMangaById, searchManga } from '../controllers/mangaController';

const router = express.Router();

router.get('/manga/:id', getMangaById);
router.get('/manga', searchManga);

export default router;