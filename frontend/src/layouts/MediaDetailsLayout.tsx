import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import type { MangaResult } from '../pages/search/SearchTypes';
import ContentList from '../components/ContentList.tsx'
import Modal from '../components/Modal.tsx';
import Dropdown from '../components/Dropdown.tsx';

// Chainsaw Man Manga ID: 116778
// JoJo Part 7: 1706
// Frieren: 126287

export default function MediaDetailsLayout() {
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    console.log('ID param:', id);
    const [results, setResults] = useState<MangaResult>();
    const [status, setStatus] = useState("None");
    const statuses = ["None", "Tracking", "Dropped", "Completed"];

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

    useEffect(() => {
        if (!results) return;

        fetch(`http://localhost:3000/api/tracking/${results.id}`)
            .then(res => res.json())
            .then(data => setStatus(data.status))
            .catch(err => {
                console.error('Failed to fetch status:', err);
                setStatus('None');
            });
    }, [results]);


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
                            <button
                                className="flex justify-center items-center text-[1.3rem] bg-seqGray w-45 h-1 p-6 rounded-lg"
                                onClick={e => {
                                    e.stopPropagation();
                                    setIsOpen(v => !v)
                                }}
                            >
                                {status}
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
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex gap-10">
                    <img
                        src={results?.image_url}
                    />
                    <div className="flex-col">
                        <h1 className="text-[1.8rem] font-bold">
                            {results?.title || results?.title_english || results?.title_japanese}
                        </h1>
                        <div>
                            <h2 className=" text-[1.5rem] font-bold mt-3">
                                Status
                            </h2>
                            <Dropdown
                                listings={statuses}
                                selected={status}
                                onSelect={(newStatus) => setStatus(newStatus)}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        className="flex w-40 h-12 justify-center items-center text-[1.5rem] bg-seqGray rounded-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="flex w-40 h-12 justify-center items-center text-[1.5rem] bg-seqBlue rounded-lg"
                        onClick={async () => {
                            await fetch(`/api/tracking/${results?.id}`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ status }),
                            });

                            const res = await fetch(`/api/tracking/user/64a1f2c9b3e9c4a1f2345678`);
                            const data = await res.json();
                            console.log('Tracked manga after update:', data);

                            setIsOpen(false);
                        }}
                    >
                        Update
                    </button>
                </div>
            </Modal>
        </div>
    )
}