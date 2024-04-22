import Logo from '../images/reddit-logo.png';
import Avatar from '../images/avatar.png';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <header className="w-full bg-reddit_dark relative p-2 pb-3.5">
            <div className="flex justify-between">
                 {/* This is the left part of the header */}
                <div className='flex'>
                    {/* This is the Reddit logo */}
                    <img src={Logo} alt="Reddit Logo" className="w-8 h-8 ml-3 " />
                    {/* This is a text that says "reddit" */}
                    <h4 className='text-reddit_orange w-13 h-8 ml-1 pt-1 font-verdana font-bold'>reddit</h4> <h4 className='text-sky-500 w-13 h-8 ml-1 pt-1 font-verdana font-bold'>lite</h4>
                </div>
                {/* This is the search bar */}
                <form action='' className='bg-reddit_dark-brighter px-3 flex rounded-full border border-reddit_border absolute left-1/2 transform -translate-x-1/2 w-1/2'>
                    <SearchIcon className="text-gray-500 h-6 w-6 mt-1" />
                    <input type='text' className='bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white h-9' placeholder='Search' />
                </form>
                {/* This is the right part of the header */} 
                <div className='flex'>
                    {/* This is a button with an avatar and a dropdown icon */} 
                    <button className='ml-4 flex'>
                        <div className='w-8 h-8 bg-gray-600 rounded-md'>
                            <img src={Avatar} alt="Avatar" className="block rounded-md" />
                        </div>
                        <ChevronDownIcon className="text-gray-600 w-5 h-5 mt-2 ml-2" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header