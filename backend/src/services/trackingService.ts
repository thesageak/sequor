import UserMediaStatus from '../models/UserMediaStatus';

export const setMangaStatus = async (mangaId: number, status: string) => {
  const DUMMY_USER_ID = '64a1f2c9b3e9c4a1f2345678';
  
  const updated = await UserMediaStatus.findOneAndUpdate(
    { userId: DUMMY_USER_ID, mediaId: mangaId, mediaType: 'manga' },
    { status },
    { upsert: true, new: true }
  );

  return updated;
};

export const getMangaStatus = async (mangaId: number) => {
  const DUMMY_USER_ID = '64a1f2c9b3e9c4a1f2345678';

  const entry = await UserMediaStatus.findOne({ userId: DUMMY_USER_ID, mediaId: mangaId, mediaType: 'manga' });
  return entry ? entry.status : 'None';
};