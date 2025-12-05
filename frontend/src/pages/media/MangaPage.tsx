import { useEffect, useState } from 'react';
import axios from 'axios';
import type { MangaResult } from '../../pages/search/SearchTypes';

export default function MangaPage() {
    const [mangaList, setMangaList] = useState<MangaResult[]>([]);
    const DUMMY_USER_ID = '64a1f2c9b3e9c4a1f2345678';

    useEffect(() => {
        async function fetchTracked() {
            try {
                const response = await axios.get(`http://localhost:3000/api/tracking/user/${DUMMY_USER_ID}`);
                setMangaList(response.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchTracked();
    }, []);

    return (
        <div>
            {
                mangaList.map((manga) => (
                    <div key={manga.id}>
                        <img
                            src={manga.image_url}
                            className="w-full h-48 object-cover rounded-md mb-2"
                        />
                        <h2 className="text-lg font-bold">{manga.title}</h2>
                    </div>
                ))
            }
        </div>
    )
}