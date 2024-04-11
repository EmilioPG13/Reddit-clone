import Logo from '../images/reddit-logo.png';
import Avatar from '../images/avatar.png';
import { BellIcon, ChatIcon, PlusIcon, SearchIcon, ChevronDownIcon, MenuIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <header className="w-full bg-reddit_dark p-2">
            <div className="mx-1 my-1 flex">
                <button className='px-2 py-1'>
                    <MenuIcon className='text-gray-400 w-6 h-6 ml-[-4px]' />
                </button>
                <img src={Logo} alt="Reddit Logo" className="w-8 h-8 mr-3 " />
                <h4 className='text-white w-8 h-8 mr-4 pt-1 font-verdana font-bold'>reddit</h4>
                <form action='' className='bg-reddit_dark-brighter px-3 flex rounded-md border border-reddit_border mx-4 flex-grow'>
                    <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
                    <input type='text' className='bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white' placeholder='Search' />
                </form>

                <button className='px-2 py-1 '>
                    <ChatIcon className='text-gray-400 w-6 h-6 mx-2' />
                </button>
                <button className='px-2 py-1 flex items-center justify-center'>
                    <PlusIcon className='text-gray-400 w-6 h-6 mx-2' />
                    <p className='text-white'>Create</p>
                </button>
                <button className='px-2 py-1 '>
                    <BellIcon className='text-gray-400 w-6 h-6 mx-2' />
                </button>

                <button className='ml-4 flex'>
                    <div className='w-8 h-8 bg-gray-600 rounded-md'>
                        <img src={Avatar} alt="Avatar" className="block rounded-md" />
                    </div>
                    <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 ml-2" />
                </button>
            </div>
        </header>
    )
}

export default Header