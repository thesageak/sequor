import Sidebar from '../components/Sidebar.tsx'
import Navbar from '../components/Navbar.tsx'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export default function GlobalLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="flex">
                <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
                <main className="flex-1 relative">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}