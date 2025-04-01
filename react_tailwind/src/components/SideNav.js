import React, {useState} from "react";

const SideNav = ({title = 'Tailwind CSS'}) => {
    const [showNav, setShowNav] = useState(false);
    
    return (
        <header className="fixed top-0 min-h-screen w-full lg:flex lg:flex-col lg:min-h-auto z-1000">
            <div className="bg-gray-800 text-gray-100 flex justify-between lg:hidden">
                <a href="#" className="block p-4 text-white font-bold">{title}</a>
                <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700" onClick={() => setShowNav(!showNav)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className={`bg-gray-800 text-gray-100 w-64 lg:w-full py-7 px-2 absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out lg:flex lg:flex-row lg:justify-between lg:transition-none ${!showNav ? '-translate-x-full' : ''}`}>
                <a href="" className="text-white flex items-center space-x-2 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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

export default SideNav;