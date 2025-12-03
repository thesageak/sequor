import { useState } from 'react'

interface WatchableMediaProps {
    title?: string;
    num: number;
}

export default function ContentList({ title, num }: WatchableMediaProps) {
    return (
        <div className="flex width-full h-10 bg-seqGray">
            <button> eye </button>
            <p>Chapter {num} - {title}</p>
        </div>
    )
}