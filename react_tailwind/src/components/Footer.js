import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="md:hidden bg-gray-900 text-white">
                <div className="bg-gray-800 mx-auto px-11">
                    <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
                        <div className="logo w-full mx-5 my-5 justify-center text-center">
                            Logo
                        </div>
                        <div className="social w-full mx-5 my-5 flex justify-center text-center">
                            <a className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="#">
                                <svg viewBox="0 0 24 24" className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" /></svg>
                            </a>
                            <a className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="#">
                                <svg viewBox="0 0 24 24" className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>
                            </a>
                            <a className="block flex items-center text-gray-300 hover:text-white no-underline" href="#">
                                <svg viewBox="0 0 24 24" className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                            </a>
                        </div>
                        <div className="newsletter w-full mx-5 my-5 justify-center text-center">
                            Newsletter Form
                        </div>
                    </div>
                </div>
            
                <div className="container overflow-hidden flex flex-col lg:flex-row mx-auto p-4">
                    <div className="w-full mx-auto p-2">

                        {/* Accordian */}
                        <div className="tab w-full overflow-hidden">
                            <input className="absolute hidden opacity-0" id="tab-multi-one" type="checkbox" name="tabs"/>
                            <div className="label relative">
                                <label className="block py-2 px-3 text-white uppercase font-medium tracking-wide cursor-pointer" htmlFor="tab-multi-one">
                                    Product
                                </label>
                                <div className="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                                    <svg className="icon w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="tab-content overflow-hidden leading-normal">
                                <ul className="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Features</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Integrations</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Pricing</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="tab w-full overflow-hidden">
                            <input className="absolute hidden opacity-0" id="tab-multi-two" type="checkbox" name="tabs"/>
                            <div className="label relative">
                                <label className="block py-2 px-3 text-white uppercase font-medium tracking-wide cursor-pointer" htmlFor="tab-multi-two">
                                    Company
                                </label>
                                <div className="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                                    <svg className="icon w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="tab-content overflow-hidden leading-normal">
                                <ul className="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Privacy Policy</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Return Policy</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Shipping</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="tab w-full overflow-hidden">
                            <input className="absolute hidden opacity-0" id="tab-multi-three" type="checkbox" name="tabs"/>
                            <div className="label relative">
                                <label className="block py-2 px-3 text-white uppercase font-medium tracking-wide cursor-pointer" htmlFor="tab-multi-three">
                                Developers
                                </label>
                                <div className="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                                    <svg className="icon w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="tab-content overflow-hidden leading-normal">
                                <ul className="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Developer API</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Documentation</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Guides</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="tab w-full overflow-hidden">
                            <input className="absolute hidden opacity-0" id="tab-multi-four" type="checkbox" name="tabs"/>
                            <div className="label relative">
                                <label className="block py-2 px-3 text-white uppercase font-medium tracking-wide cursor-pointer" htmlFor="tab-multi-four">
                                Explore
                                </label>
                                <div className="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
                                    <svg className="icon w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="tab-content overflow-hidden leading-normal">
                                <ul className="w-full flex flex-col text-gray-700 list-none p-0 font-thin text-left">
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Pricing</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Product Series</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Support</a></li>
                                    <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="border-t border-gray-800 flex flex-col md:flex-row justify-center items-center p-6 mt-4 text-gray-600">
                    <div>© 2025 Ryan Goh</div>
                    <div>&nbsp;All rights reserved.</div>
                </div>
            </footer>

            { /*Footer Desktop */}
            <footer className="hidden md:block bg-gray-900 text-white">
                <div className="bg-gray-800 mx-auto px-11">
                    <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
                        <div className="logo w-1/5 mx-5 my-5">
                            Logo
                        </div>
                        <div className="social w-1/5 mx-5 my-5 flex flex-start">
                            <a className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="#">
                                <svg viewBox="0 0 24 24" className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                                </svg>
                            </a>
                            <a className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="#">
                                <svg viewBox="0 0 24 24" className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                                </svg>
                            </a>
                            <a className="block flex items-center text-gray-300 hover:text-white no-underline" href="#">
                                <svg viewBox="0 0 24 24" className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                        </div>
                        <div className="newsletter w-1/5 mx-5 my-5">
                            Newsletter Form
                        </div>
                    </div>
                </div>
            
                <div className="container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto p-4">
                    <div className="container block md:flex text-sm mt-6 lg:mt-0">
                        <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Product</li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Features</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Integrations</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Pricing</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">FAQ</a></li>
                        </ul>
                        <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Company</li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Privacy</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Terms of Service</a></li>
                        </ul>
                        <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Developers</li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Developer API</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Documentation</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Tutorials</a></li>
                        </ul>
                        <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Support</li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Contact Us</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Support</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Guides</a></li>
                        </ul>
                        <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Programs</li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Affiliates</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Rewards</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">Resellers</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 flex flex-col md:flex-row justify-center items-center p-6 mt-4 text-gray-600">
                    <div>© 2025 Ryan Goh</div>
                    <div>&nbsp;All rights reserved.</div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;