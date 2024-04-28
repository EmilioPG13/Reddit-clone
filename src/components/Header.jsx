import { useState } from 'react';
import Logo from '../images/reddit-logo.png';
import Avatar from '../images/avatar.png';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import linkedInLogo from '../images/linkedIn-logo.png';
import githubLogo from '../images/github-logo.png';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const  toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        setDarkMode(!darkMode);
    };

    return (
        <header className="w-full relative p-2 pb-3.5 mb-2 bg-reddit_light dark:bg-dark_reddit_light text-reddit_text dark:text-dark_reddit_text">
            <div className="flex justify-between">

                {/* This is the left part of the header */}
                <div className='flex'>
                    {/* This is the Reddit logo */}
                    <img src={Logo} alt="Reddit Logo" className="w-8 h-8 ml-3 " />
                    {/* This is a text that says "reddit" */}
                    <h4 className='text-reddit_orange w-13 h-8 ml-1 pt-1 font-verdana font-bold'>reddit</h4> <h4 className='text-sky-500 w-13 h-8 ml-1 pt-1 font-verdana font-bold'>lite</h4>
                </div>
                {/* This is the search bar */}
                <form action='' className='bg-reddit_light-brighter px-3 flex rounded-full border border-reddit_border absolute left-1/2 transform -translate-x-1/2 w-1/2'>
                    <SearchIcon className="text-gray-500 h-6 w-6 mt-1" />
                    <input type='text' className='bg-reddit_light-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white h-9' placeholder='Search' />
                </form>

                {/* This is the right part of the header */}
                
                {/* This is the dark mode button */}
                <div className='flex mr-2'>
                    <button onClick={toggleDarkMode}>
                        {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                    </button>

                    {/* This is a button with an avatar and a dropdown icon */}
                    <button className='ml-4 flex' onClick={toggleDropdown}>
                        <div className='w-8 h-8 bg-gray-600 rounded-md'>
                            <img src={Avatar} alt="Avatar" className="block rounded-md" />
                        </div>
                        <ChevronDownIcon className="text-sky-500 w-5 h-5 mt-2 ml-2" />

                        {/* This is the dropdown Menu */}
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-9 mr-4 w-60 bg-reddit_light-brighter border-reddit_border rounded shadow-lg py-1 z-10">
                            <h5 className='font-semibold text-center mt-2 mb-2 text-sky-700'>Created by Emilio Parra</h5>
                            <hr />
                            <h6 className='mt-2 mb-2 text-gray-700 text-center font-medium'>Contact Information</h6>
                            <a href="https://www.linkedin.com/in/emilio-parra-3813a5107/" target="_blank" className=" px-4 py-2 text-sm hover:bg-gray-500 hover:text-white relative flex items-center">
                                <img src={linkedInLogo} alt="LinkedIn logo" className='h-full object-cover mr-2 max-w-[20px] max-h-[20px]' />
                                LinkedIn
                            </a>
                            <a href="https://github.com/EmilioPG13" target="_blank" className=" px-4 py-2 text-sm hover:bg-gray-500 hover:text-white relative flex items-center">
                                <img src={githubLogo} alt="GitHub logo" className='h-full object-cover mr-2 max-w-[20px] max-h-[20px]' />
                                GitHub
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header