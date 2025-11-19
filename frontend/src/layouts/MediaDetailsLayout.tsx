import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import type { MangaResult } from '../pages/search/SearchTypes';

// Chainsaw Man Manga ID: 116778

export default function MediaDetailsLayout() {
    const { id } = useParams();
    console.log('ID param:', id);
    const [results, setResults] = useState<MangaResult>();

    useEffect (() => {
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
        <div>
            <div className="flex w-full h-80 mx-auto relative bg-gray-400">
                <img
                    src={results?.image_url} 
                    className="flex w-full h-full object-cover object-[50%_15%]"
                />
                <div className="absolute inset-0 backdrop-blur-sm" />
            </div>
        </div>
    )
}