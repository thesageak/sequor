import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import type { MangaResult } from '../pages/search/SearchTypes';
import ContentList from '../components/ContentList.tsx'

// Chainsaw Man Manga ID: 116778
// JoJo Part 7: 1706
// Frieren: 126287

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
                console.log(response.data.chapter);
            } catch (error) {
                console.error('Failed to fetch media', error);
            }
        }
        fetchResults();
    }, [id]);

    return (
        <div className="min-h-screen">
            <div className="absolute w-full h-95 mx-auto bg-gray-400 -z-10 top-0">
                <img
                    src={results?.image_url}
                    className="flex w-full h-full object-cover object-[50%_15%]"
                />
                <div className="absolute inset-0 backdrop-blur-sm" />
            </div>

            <div className="flex-col mx-auto max-w-7xl m-25 sm:px-25">
                <div className="flex">
                    <img
                        src={results?.image_url}
                        className="w-60 h-86"
                    />
                    <div className="flex flex-col px-8">
                        <h1 className="text-white font-bold text-[clamp(1.5rem,2vw,3rem)] text-shadow-lg">
                            {results?.title || results?.title_english || results?.title_japanese}
                        </h1>
                        <h2 className="flex flex-wrap gap-3 mt-2">
                            {results?.genres?.map((genre: string) => (
                                <div
                                    key={genre}
                                    className="flex items-center bg-seqBlue h-8 w-auto p-2 rounded-md text-lg font-bold"
                                >
                                    {genre}
                                </div>
                            ))}
                        </h2>
                        <div className="absolute translate-y-74">
                            <button className="flex justify-center items-center text-[1.3rem] bg-seqGray w-45 h-1 p-6 rounded-lg">
                                Track
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="flex-1 mt-8 mb-4">
                        {results?.synopsis}
                    </p>
                    <h2 className="flex-1 text-[3rem] font-bold">
                        Chapters
                    </h2>
                    {
                        Array.from({ length: results?.chapters || 1 }, (_, i) => i + 1).reverse().map((chapter) => (
                            <ContentList num={chapter} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}