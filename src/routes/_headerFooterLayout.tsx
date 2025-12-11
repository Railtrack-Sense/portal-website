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
                    <div className="text-3xl md:max-w-screen max-w-0 ml-5 pt-1 font-bold text-white">Streamline</div>
                </a>

            </header>

            {/* Page Content */}
            <main className="mt-24 flex justify-center">
                <Outlet/>
            </main>

            <footer className="bg-side-color py-8 mt-auto">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <img src={icon} alt="logo" className="w-6 h-6" />
                            <span className="text-xl text-white font-bold">Streamline</span>
                        </div>
                        <div className="flex space-x-6 font-medium text-blue-400">
                            <a
                                className="hover:text-blue-300"
                                href="/about"
                            >
                                About
                            </a>
                            <a
                                className="hover:text-blue-300"
                                href="mailto:contact@streamlineaddons.com"
                            >
                                Email
                            </a>
                            <a
                                className="hover:text-blue-300"
                                href="https://www.facebook.com/people/StreamlineApp/61572840522852/"
                            >
                                Facebook
                            </a>
                            <a
                                className="hover:text-blue-300"
                                href="https://discord.gg/zJGEyPNugg"
                            >
                                Discord
                            </a>
                            <a href="/eula" className="hover:text-blue-300">
                                EULA
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}