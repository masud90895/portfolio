import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assist/1.png"


const Navbar = () => {
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className=" fixed top-0 w-full z-50">
        <div>
            <div className="relative">

                {/* For large screens */}
                <div className=" bg-gray-50 px-6 py-9">
                    <div className="container mx-auto flex items-center justify-between">
                    <img className='w-[140px] h-[50px]' src={logo} alt="" />
                        <ul className="hidden w-8/12 md:flex items-center justify-end space-x-8">
                            <li>
                                <a  href='#banner' className="  text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a  href='#advantage'  className="  text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    Advantage
                                </a>
                            </li>
                            <li>
                                <a  href='#project' className="  text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href='#contact'  className="  text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="md:w-2/12 lg:hidden justify-end flex items-center space-x-4 xl:space-x-8">
                            
                            <div className="flex ">
                                <button aria-label="show options" onClick={() => setMdOptionsToggle(!mdOptionsToggle)} className="text-black      hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                    <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-black      md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                    <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* For small screen */}
                <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute    z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 p-4">
                    
                        <button  onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                            <svg className="fill-stroke text-gray-800  " width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 p-4">
                        <ul className="flex flex-col space-y-6">
                            <li>
                                <a   className="  flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a   className="  flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                Advantage
                                </a>
                            </li>
                            <li>
                                <a   className="  flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    Education
                                    
                                </a>
                            </li>
                            <li>
                                <a   className="  flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    Projects
                                   
                                </a>
                            </li>
                            <li>
                                <a   className="  flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    Contact
                                   
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Navbar;