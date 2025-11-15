interface BaseResult {
    id: number;
    title: string;
    synopsis: string;
    image_url?: string;
    genres?: string[];
    type: "manga" | "anime";
}

export interface MangaResult extends BaseResult {
    chapters: number;
    title_english?: string;
    title_japanese?: string;
}