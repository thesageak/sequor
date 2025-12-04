import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { MangaResult } from '../search/SearchTypes.ts';
import DisplayCard from '../../components/DisplayCard.tsx'

export default function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";
    const [results, setResults] = useState<MangaResult[]>([]);

    useEffect(() => {
        if (!query == null) return;

        async function fetchResults() {
            const response = await axios.get(`http://localhost:3000/api/manga?q=${encodeURIComponent(query)}`);
            console.log(query, response.data);
            setResults(response.data);
        }
        fetchResults();
    }, [query]);
    
    return(
        <>
            <div className="flex flex-row flex-wrap pt-14 pl-5">
                {results.map(result => (
                    <div 
                        key={result.id}>
                        <a href={`manga/${result.id}`}>
                            <DisplayCard
                                title={result.title || result.title_english || result.title_japanese || "Unknown Title"}
                                image_url={result.image_url!}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}