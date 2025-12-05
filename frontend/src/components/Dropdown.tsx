import { useState } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function Dropdown({listings, selected, onSelect} : { listings: string[], selected: string, onSelect: (value: string) => void }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button 
                className="flex justify-between items-center w-55 h-10 px-2 bg-seqGray text-[1.2rem]"
                onClick={() => setOpen(!open)}
            >
                {selected}
                { !open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon/>}
            </button>
            {open && (
                <div className="flex-col"> 
                    {listings.map((l) => (
                        <button
                            key={l}
                            onClick={() => {
                                onSelect(l);
                                setOpen(false);
                            }}
                            className="flex items-center w-55 h-10 px-2 text-[1.2rem] bg-seqGray hover:bg-seqBlue"
                        >
                            {l}
                        </button>
                    ))

                    }
                </div>
            )}
        </div>
    )
}