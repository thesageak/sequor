import { useState } from "react";

export default function Sidebar() {
    const [isMediaOpen, setIsMediaOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <aside 
                className={`
                    relative flex flex-col min-h-screen 
                    border-r-3 border-black bg-gray-800 
                    transition-all duration-200 ${isOpen ? "w-64" : "w-12"}`}
            >
                <button 
                    className="
                        absolute right-0 w-12 
                        border-3 rounded-full border-black bg-gray-900 
                        translate-x-1/2 translate-y-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Toggle
                </button>

                <ul className={`duration-200
                    ${isMediaOpen ? "w-64" : "w-12"} 
                    ${isOpen ? "opacity-100" : "opacity-0 -translate-x-10 overflow-hidden pointer-events-none"}`}>
                    
                    {/*Home*/}
                    <li className="text-white">
                        Home
                    </li>

                    {/*Media*/}
                    <li>
                        <button
                            className="text-white"
                            onClick={() => setIsMediaOpen(!isMediaOpen)}
                        >
                            Media
                        </button>

                        <div
                            className={`${isMediaOpen ? 'max-h-60': 'max-h-0'}`}
                        >
                            <ul>
                                <li className={`${isMediaOpen ? "block" : "hidden"}`}>
                                    Anime
                                </li>
                                <li className={`${isMediaOpen ? "block" : "hidden"}`}>
                                    Manga
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/*Collections*/}
                    <li className="text-white">
                        Collections
                    </li>

                </ul>
            </aside>
        </>
    )
}