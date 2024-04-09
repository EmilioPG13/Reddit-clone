import Logo from './images/reddit-logo.png';
import { SearchIcon } from '@heroicons/react/solid';

function App() {

  return (
    <div>
      <header className="flex w-full bg-reddit_dark p-2">
        <div className="mx-4">
          <img src={Logo} alt="Reddit Logo" className="w-8 h-8 "/>
        </div>
        <form action='' className='bg-reddit_dark-brighter px-3 flex rounded-md border border-gray-700'>
          <SearchIcon className="text-gray-300 h-6 w-6 mt-1"/>
          <input type='text' className='bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white' placeholder='Search'/>
        </form>
      </header>
    </div>
      
  )
}

export default App
