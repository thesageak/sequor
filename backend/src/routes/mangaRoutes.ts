import express from 'express';
import { getMangaById, searchManga } from '../controllers/mangaController';

const router = express.Router();

router.get('/:id', getMangaById);
router.get('/', searchManga);

export default router;