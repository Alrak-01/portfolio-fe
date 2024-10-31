import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

function Header() {

    return (
        <header className='whitespace-nowrap flex items-center justify-between font-medium border-b border-stone-300 dark:border-stone-800 py-5 px-2 lg:px-48 sticky top-0 z-100 bg-zinc-200 dark:bg-black'>
            <div className="left">
                <Link to="/" className='flex items-center gap-3 text-md lg:text-xl'>
                    <i className="fa-solid fa-book text-gray-600 lg:text-xl"></i>
                    <p>Tania Rascia</p>
                </Link>
            </div>
            <div className="right">
                <ul className='flex items-center lg:gap-5 text-sm lg:text-base dark:text-gray-100'>
                    <li className='hover:bg-white delay-50 duration-100 transition-color px-2 lg:px-3 py-1 rounded-md hover:shadow-md dark:hover:bg-opacity-10'><Link to="/about">About Me</Link></li>
                    <li className='hover:bg-white delay-50 duration-100 transition-color px-2 lg:px-3 py-1 rounded-md hover:shadow-md dark:hover:bg-opacity-10 cursor-pointer'><ScrollLink  to="skill" smooth={true} duration={100}>Stacks</ScrollLink ></li>
                    {/* <li className='hover:bg-white delay-50 duration-100 transition-color px-2 lg:px-3 py-1 rounded-md hover:shadow-md dark:hover:bg-opacity-10 cursor-pointer'><button onClick={handleSkillClick}>Stacks</button></li> */}

                    <li className='hover:bg-white delay-50 duration-100 transition-color px-2 lg:px-3 py-1 rounded-md hover:shadow-md dark:hover:bg-opacity-10'><Link to="/project">Projects</Link></li>
                    {/* <li className='hover:bg-white delay-50 duration-100 transition-color px-2 lg:px-3 py-1 rounded-md hover:shadow-md dark:hover:bg-opacity-10 cursor-pointer'><button onClick={handleSocialClick}>Socials</button></li> */}
                    <li className='hover:bg-white delay-50 duration-100 transition-color px-2 lg:px-3 py-1 rounded-md hover:shadow-md dark:hover:bg-opacity-10 cursor-pointer'><ScrollLink  to="contact" smooth={true} duration={100}>Socials</ScrollLink ></li>

                    <li>
                        <i className="fa-solid fa-sun bg-white p-2 rounded-lg shadow-md hover:opacity-50 delay-100 duration-100 transition-opacity dark:bg-black"></i>
                    </li>
                </ul>
            </div>
        </header>
  )
}

export default Header