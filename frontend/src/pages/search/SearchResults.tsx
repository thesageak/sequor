import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { MangaResult } from '../search/SearchTypes.ts';
import DisplayCard from '../../components/DisplayCard.tsx'

export default function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [results, setResults] = useState<MangaResult[]>([]);

    useEffect(() => {
        if (!query) return;

        async function fetchResults() {
            const response = await axios.get(`http://localhost:3000/api/manga?q=${query}`);
            setResults(response.data);
        }
        fetchResults();
    }, [query]);
    
    return(
        <>
            <h1>Search Results for "{query}"</h1>
            <div className="flex flex-row flex-wrap">
                {results.map(result => (
                    <div 
                        key={result.id}>
                        <DisplayCard
                            title={result.title || result.title_english || result.title_japanese}
                            image_url={result.image_url!}
                         />
                    </div>
                ))}
            </div>
        </>
    )
}