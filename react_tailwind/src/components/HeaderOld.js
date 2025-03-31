import React from 'react';

const Header = (props) => {
    return (
        <header>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
                <a className="logo" href="#">
                    <h3 className="font-bold text-2xl">LOGO</h3>
                </a>
                <input type="checkbox" id="check" />

                <span className="menu flex">
                    <li><a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:shadow-outline">Home</a></li>
                    <li><a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:shadow-outline">About</a></li>
                    <li><a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:shadow-outline">Projects</a></li>
                    <li><a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:shadow-outline">Resources</a></li>
                    <li><a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:shadow-outline">Contact</a></li>

                    <label htmlFor="check" className="close-menu">X</label>
                </span>

                <label htmlFor="check" className="open-menu">
                    <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                </ul>
            </nav>
        </header>
    )
}

export default Header;