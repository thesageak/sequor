import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import type { MangaResult } from '../pages/search/SearchTypes';
import ContentList from '../components/ContentList.tsx'

// Chainsaw Man Manga ID: 116778

export default function MediaDetailsLayout() {
    const { id } = useParams();
    console.log('ID param:', id);
    const [results, setResults] = useState<MangaResult>();

    useEffect(() => {
        async function fetchResults() {
            try {
                const response = await axios.get(`http://localhost:3000/api/manga/${id}`);
                console.log(response);
                setResults(response.data);
            } catch (error) {
                console.error('Failed to fetch media', error);
            }
        }
        fetchResults();
    }, [id]);

    return (
        <div className="min-h-screen">
            <div className="relative w-full h-95 mx-auto bg-gray-400">
                <img
                    src={results?.image_url}
                    className="flex w-full h-full object-cover object-[50%_15%]"
                />
                <div className="absolute inset-0 backdrop-blur-sm" />
            </div>

            <div className="flex absolute mx-auto inset-0 max-w-7xl m-25">
                <div className="flex justify-center top-25">
                    <img
                        src={results?.image_url}
                        className="w-50 h-76"
                    />

                    <div className="flex flex-col px-4">
                        <h1 className="text-white font-bold text-[2.5rem] text-shadow-lg">
                            {results?.title || results?.title_english || results?.title_japanese}
                        </h1>

                        <h2 className="flex flex-wrap gap-4">
                            {results?.genres?.map((genre: string) => (
                                <div
                                    key={genre}
                                    className="flex items-center bg-seqBlue h-8 w-auto p-2 rounded-md text-lg font-bold"
                                >
                                    {genre}
                                </div>
                            ))}
                        </h2>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <p className="flex-1 mt-20">
                    {results?.synopsis}
                </p>
                <h2 className="flex-1 text-[3rem] font-bold">
                    Chapters
                </h2>
            </div>

        </div>
    )
}