import Searchbar from "./NavbarSearch" 

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 flex min-w-full h-14 bg-seqBlack border-b-3 border-white">
            <h1 className="flex justify-start items-center p-3 -translate-y-1 text-white text-4xl">Sequor</h1>
            <div className="flex grow justify-center items-center">
                <Searchbar />
            </div>
        </div>
    )
}