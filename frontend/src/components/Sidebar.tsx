import { useState } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export default function Sidebar({isOpen, setIsOpen} : SidebarProps) {
    const [isMediaOpen, setIsMediaOpen] = useState(false);

    return (
        <div className="fixed left-0">
            <aside 
                className={`
                    relative flex flex-col min-h-screen 
                    border-r-3 border-white bg-seqBlack 
                    transition-all duration-200 ${isOpen ? "w-64" : "w-12"}`}
            >
                <button 
                    className="
                        absolute right-0 w-auto 
                        border-3 rounded-full border-white bg-seqBlack
                        translate-x-1/2 translate-y-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    toggle
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
                                <Link to="/anime">
                                    <li className={`${isMediaOpen ? "block" : "hidden"}`}>
                                        Anime
                                    </li>
                                </Link>
                                <Link to="/manga">
                                    <li className={`${isMediaOpen ? "block" : "hidden"}`}>
                                        Manga
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </li>

                    {/*Collections*/}
                    <li className="text-white">
                        Collections
                    </li>

                </ul>
            </aside>
        </div>
    )
}