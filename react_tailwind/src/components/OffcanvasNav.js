import React, {useState} from "react";

const OffcanvasNav = ({title = 'Tailwind CSS'}) => {
    const [showNav, setShowNav] = useState(false);
    
    return (
        <header className="w-full lg:flex lg:flex-col lg:min-h-auto z-1000">
            <div className="bg-gray-800 text-gray-100 flex justify-between lg:hidden">
                <a href="#" className="block p-4 text-white font-bold">{title}</a>
                <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 cursor-pointer" onClick={() => setShowNav(!showNav)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className={`absolute min-h-screen lg:min-h-auto z-1000 bg-gray-800 text-gray-100 w-64 lg:w-full py-7 px-2 inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out lg:flex lg:flex-row lg:justify-between lg:transition-none ${!showNav ? '-translate-x-full' : ''}`}>
                <a href="" className="text-white flex items-center space-x-2 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-6 w-6" fill="none" viewBox="0 0 54 54" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                    </svg>
                    <span className="text-2xl font-extrabold">{title}</span>
                </a>
                <nav className="lg:flex lg:flex-row mt-6 lg:mt-auto">
                    <a href="" className="block py-2.5 px-4 rounded transition duration-200  hover:bg-gray-700 hover:text-white">Home</a>
                    <a href="" className="block py-2.5 px-4 rounded transition duration-200  hover:bg-gray-700 hover:text-white">About</a>
                    <a href="" className="block py-2.5 px-4 rounded transition duration-200  hover:bg-gray-700 hover:text-white">Features</a>
                    <a href="" className="block py-2.5 px-4 rounded transition duration-200  hover:bg-gray-700 hover:text-white">Pricing</a>
                </nav>
            </div>

            
        </header>
    )
}

export default OffcanvasNav;