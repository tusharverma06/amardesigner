import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import Account from '../assets/Account.svg'
import Menu from '../assets/Menu.svg'
const Navbar = ({ windowWidth }) => {
    // Side Menu Bar in Mobile
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)

    return (
        <nav className='w-full py-6 px-6 flex items-center justify-between sm:justify-around border-b-black border border-opacity-[0.15] text-primary'>
            <div className="flex items-center justify-center gap-16 md:gap-28">
                <div>
                    <img src={Logo} alt="" className='w-28 sm:w-36' />
                </div>
                <div className='hidden sm:block'>
                    <ul className='flex items-center justify-center space-x-6 md:space-x-12 text-primary'>
                        <li className='text-xs font-normal transition-all cursor-pointer md:text-lg hover:text-red-600 hover:scale-110 group duration-400'>Home
                            {/* Underline effect on Hover */}
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                        </li>
                        <li className='text-xs font-normal transition-all cursor-pointer md:text-lg group hover:text-red-600 hover:scale-110 duration-400'>About
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                        </li>
                        <li className='text-xs font-normal transition-all cursor-pointer md:text-lg group hover:text-red-600 hover:scale-110 duration-400'>Contact Us
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                        </li>
                        <li className='text-xs font-normal transition-all cursor-pointer md:text-lg group hover:text-red-600 hover:scale-110 duration-400'>Designs
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div className='relative flex items-center justify-center gap-6 px-2 py-2 border-gray-400 sm:border'>
                    <img src={Menu} alt="" className='hidden w-4 h-4 transition-all cursor-pointer md:w-8 md:h-8 sm:block hover:scale-110 duration-400' />
                    <img
                        src={Account}
                        alt="Profile Icon"
                        onClick={windowWidth > 700 ? null : handleToggle}
                        className='w-6 h-6 transition-all cursor-pointer md:w-8 md:h-8 hover:scale-110 duration-400' />
                </div>
                {/* {isOpen &&
                    <div
                        className="absolute w-1/2 h-64 py-2 text-lg font-medium text-white shadow-xl top-1 right-10 bg-slate-800 rounded-xl">
                        <div>

                            <ul className='flex flex-col items-center justify-center space-y-8'>
                                <li className='text-lg font-normal transition-all cursor-pointer hover:text-red-600 hover:scale-110 duration-400'>Home</li>
                                <li className='text-lg font-normal transition-all cursor-pointer hover:text-red-600 hover:scale-110 duration-400'>About</li>
                                <li className='text-lg font-normal transition-all cursor-pointer hover:text-red-600 hover:scale-110 duration-400'>Contact Us</li>
                                <li className='text-lg font-normal transition-all cursor-pointer hover:text-red-600 hover:scale-110 duration-400'>Designs</li>
                            </ul>
                        </div>
                    </div>
                } */}
            </div>
        </nav>
    )
}

export default Navbar