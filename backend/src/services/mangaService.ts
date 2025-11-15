import axios from 'axios';

const JIKAN_API_BASE_URL = 'https://api.jikan.moe/v4';

export interface Manga {
    id: number;
    titles: string;
    title_english?: string;
    title_japanese?: string;
    chapters: number;
    image_url: string;
    synopsis: string;
    genres?: string[];
}

export const parseMangaData = (data: any): Manga => {
    return {
        id: data.mal_id,
        titles: data.title,
        title_english: data.title_english || null,
        title_japanese: data.title_japanese || null,
        chapters: data.chapters,
        image_url: data.images.jpg.image_url,
        synopsis: data.synopsis,
        genres: data.genres ? data.genres.map((genre: any) => genre.name) : []
    }
}

export const fetchMangaDetails = async (mal_id: number): Promise<Manga> => {
    try {
        const response = await axios.get(`${JIKAN_API_BASE_URL}/manga/${mal_id}`);
        return parseMangaData(response.data.data);
    } catch (error) {
        console.log('Error fetching manga info:', error);
        return {} as Manga;
    }
}

export const searchMangaByTitle = async (title: string): Promise<Manga[]> => {
    try {
        const response = await axios.get(`${JIKAN_API_BASE_URL}/manga`, {
            params: { q: title }
        });

        return response.data.data.map((item: any) => parseMangaData(item));
    } catch (error) {
        console.log('Error searching manga by title:', error);
        return [];
    }
}

