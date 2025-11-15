import {Request, Response} from 'express';
import * as animeService from '../services/animeService';

export const getAnimeById = async (req: Request, res: Response) => {
    try {
        const anime = await animeService.fetchAnimeDetails(Number(req.params.mal_id));
        res.json(anime);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

export const searchAnime = async (req: Request, res: Response) => {
    try {
        const query = req.query.q as string
        const search = animeService.searchAnimeByTitle(query)
        res.json(search)
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}


