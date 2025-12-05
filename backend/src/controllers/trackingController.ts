import { Request, Response } from 'express';
import * as trackingService from '../services/trackingService';
import UserMediaStatusModel from '../models/UserMediaStatus';
import MangaModel from '../models/Manga';

export const getStatus = async (req: Request, res: Response) => {
  const mangaId = Number(req.params.mangaId);
  const status = await trackingService.getMangaStatus(mangaId);
  res.json({ status });
};

export const setStatus = async (req: Request, res: Response) => {
  const mangaId = Number(req.params.mangaId);
  const { status } = req.body;
  const updated = await trackingService.setMangaStatus(mangaId, status);
  res.json(updated);
};

export const getTrackedManga = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const tracked = await UserMediaStatusModel.find({ userId });
    
    // Populate manga details
    const mangaIds = tracked.map(t => t.mediaId);
    const mangaList = await MangaModel.find({ id: { $in: mangaIds } });
    
    // Merge status into manga info
    const result = mangaList.map(m => {
      const statusObj = tracked.find(t => t.mediaId === m.id);
      return { ...m.toObject(), status: statusObj?.status || 'None' };
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};