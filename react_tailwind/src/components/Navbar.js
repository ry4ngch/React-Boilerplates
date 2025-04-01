import React, {useState} from 'react';

const Navbar = ({title = "Tailwind CSS"}) => {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-300">
            <div className="flex items-center flex-shrink-0 text-gray-100 mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                </svg>
                <span className="font-semibold text-xl tracking-tight">{title}</span>
            </div>

            <label className="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-gray-100 border-gray-400 hover:text-gray-500 hover:border-gray" htmlFor="menu-toggle">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" onClick={() => setShowNav(!showNav)} />

            <div className={`overflow-hidden lg:overflow-visible w-full h-0 min-h-0 block flex-grow lg:flex lg:items-center lg:w-auto transition-all ease-out duration-500 lg:transition-none lg:h-auto ${showNav ? 'min-h-32' : ''}`} id="menu">
                <div className="flex flex-col lg:flex-row text-sm lg:flex-grow duration-300 ease-out sm:transition-none">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-100 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header" className="block lg:inline-block lg:mt-0 text-gray-100 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header" className="block lg:inline-block lg:mt-0 text-gray-100 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                        Blog
                    </a>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;