import { useState, useEffect } from 'react'

interface WatchableMediaProps {
    title?: string;
    num: number;
}

export default function ContentList({title="", num }: WatchableMediaProps) {
    const [isMarked, setIsMarked] = useState(false);
    
    return (
        <div className={`flex justify-start items-center w-full h-12 my-3 bg-seqDarkGray border-4 border-seqDarkGray ${isMarked ? "" : "border-l-seqBlue"} `}>
            <button 
                className="z-20 m-5 p-1 bg-gray-700 hover:bg-amber-100"
                onClick={() => setIsMarked(prev => !prev)}
            > 
                eye
            </button>
            <p className="text-[1.5rem] font-bold -translate-y-0.5">
                Chapter {num} {title}
            </p>
        </div>
    )
}