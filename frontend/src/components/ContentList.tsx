import { useState, useEffect } from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface WatchableMediaProps {
    title?: string;
    num: number;
}

export default function ContentList({title="", num }: WatchableMediaProps) {
    const [isMarked, setIsMarked] = useState(false);
    
    return (
        <div className={`flex justify-start items-center w-full h-12 my-3 bg-seqDarkGray border-4 border-seqDarkGray ${isMarked ? "" : "border-l-seqBlue"} `}>
            <button 
                className="z-20 m-3 p-1"
                onClick={() => setIsMarked(prev => !prev)}
            > 
                {!isMarked ? (
                    <VisibilityIcon />
                ) : (
                    <VisibilityOffIcon />
                )}
            </button>
            <p className="text-[1.5rem] font-bold -translate-y-0.5">
                Chapter {num} {title}
            </p>
        </div>
    )
}