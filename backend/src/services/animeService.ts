import axios from 'axios';

const JIKAN_API_BASE_URL = 'https://api.jikan.moe/v4';

export interface Title {
    en: string;
    jp: string;
}

export interface Anime {
    id: number;
    titles: Title[];
    episodes: number;
    image_url: string;
    synopsis: string;
    genres?: string[];
}

export const fetchAnimeDetails = async (mal_id: number): Promise<Anime[]> => {
    try {
        const response = await axios.get(`${JIKAN_API_BASE_URL}/anime/${mal_id}`);
        return response.data.data;
    } catch (error) {
        console.log('Error fetching anime info:', error);
        return [];
    }
}

export const searchAnimeByTitle = async (title: string): Promise<Anime[]> => {
    try {
        const response = await axios.get(`${JIKAN_API_BASE_URL}/anime`, {
            params: { q: title }
        });
        return response.data.data;
    } catch (error) {
        console.log('Error searching manga by title:', error);
        return [];
    }
}

export const parseAnimeData = (data: any): Anime => {
    return {
        id: data.mal_id,
        titles: data.title,
        episodes: data.episodes,
        image_url: data.images.jpg.image_url,
        synopsis: data.synopsis,
        genres: data.genres ? data.genres.map((genre: any) => genre.name) : []
    }
}
