import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import icon from '../assets/logo.png';
//import { GoPersonFill } from 'react-icons/go';

export const Route = createFileRoute('/_headerFooterLayout')({
    component: LayoutComponent,
})

function LayoutComponent() {

    return (
        <div className="flex flex-col min-h-[100vh] bg-listing-background">
            {/* Navbar */}
            <header
                className="flex flex-row gap-2 h-24 items-center bg-side-color text-white py-6 fixed z-40 w-full"
            >
                {/* Logo or Icon */}
                <a href="/" title="Home" className="flex flex-row transition duration-150 active:scale-100 hover:scale-105">
                    <div className="ml-10 shrink-0">
                        <img src={icon} alt="logo" className="w-12 h-12" />
                    </div>
                </a>

            </header>

            {/* Page Content */}
            <main className="mt-24 flex justify-center">
                <Outlet/>
            </main>

            <footer className="bg-side-color py-8 mt-auto">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
        
                    </div>
                </div>
            </footer>

        </div>
    )
}
