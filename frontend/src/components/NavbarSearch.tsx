import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"

export default function NavbarSearch() {
    const navigate = useNavigate()
    const [text, setText] = useState('')

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!text.trim()) 
            return;
        navigate(`/search?q=${encodeURIComponent(text.trim())}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="w-150 p-2 rounded-2xl bg-seqGray text-white" 
                placeholder="Search..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    )

}