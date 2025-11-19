import Sidebar from '../components/Sidebar.tsx'
import Navbar from '../components/Navbar.tsx'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export default function GlobalLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen">
            <Navbar />
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main className={`flex-1 duration-300 ${isSidebarOpen ? "ml-70" : "ml-18"}`}>
                <Outlet />
            </main>
        </div>
    )
}