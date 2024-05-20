import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../actions';
import Logo from '../images/reddit-logo.png';
import Avatar from '../images/avatar.png';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import linkedInLogo from '../images/linkedIn-logo.png';
import githubLogo from '../images/github-logo.png';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.darkMode);
    const handleDarkModeToggle = () => {
        console.log('Toggling dark mode');
        dispatch(toggleDarkMode());
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.body.classList.add('dark');
        } else {
            document.documentElement.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className={`w-full relative p-2 pb-3.5 mb-2 bg-reddit_light dark:bg-dark_reddit_light text-reddit_text dark:text-dark_reddit_text ${darkMode ? 'dark' : ''}`}>
            <div className="flex justify-between">

                {/* This is the left part of the header */}
                <div className='flex'>
                    {/* This is the Reddit logo */}
                    <img src={Logo} alt="Reddit Logo" className="w-8 h-8 ml-3 " />
                    {/* This is a text that says "reddit" */}
                    <h4 className='text-reddit_orange w-13 h-8 ml-1 pt-1 font-verdana font-bold'>reddit</h4> <h4 className='text-sky-500 w-13 h-8 ml-1 pt-1 font-verdana font-bold'>lite</h4>
                </div>

                {/* This is the right part of the header */}

                {/* This is the dark mode button */}
                <div className='flex mr-2'>
                    <button onClick={handleDarkModeToggle}>
                        {!darkMode ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
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
                        <div className="absolute right-0 mt-9 mr-4 w-60 bg-reddit_light-brighter border-reddit_border dark:bg-dark_reddit_light-brighter dark:border-r-dark_reddit_border  rounded shadow-lg py-1 z-10">
                            <h5 className='font-semibold text-center mt-2 mb-2 text-sky-700'>Created by Emilio Parra</h5>
                            <hr />
                            <h6 className='mt-2 mb-2 text-gray-700 text-center font-medium dark:text-dark_reddit_text-darkest'>Contact Information</h6>
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