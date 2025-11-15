import {Request, Response} from 'express';
import * as mangaService from '../services/mangaService';

export const getMangaById = async (req: Request, res: Response) => {
    try {
        const manga = await mangaService.fetchMangaDetails(Number(req.params.id));
        if (!manga) {
            return res.status(404).json({ message: 'Manga not found' });
        }
        res.json(manga);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

export const searchManga = async (req: Request, res: Response) => {
    try {
        const query = req.query.q as string
        const search = await mangaService.searchMangaByTitle(query)
        res.json(search)
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}


