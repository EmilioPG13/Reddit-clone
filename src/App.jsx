import Logo from './images/reddit-logo.png';
import {SearchIcon} from '@heroicons/react/solid';


function App() {

  return (
    <div>
      <header className="flex w-full bg-reddit_dark p-2">
        <div className="mx-4">
          <img src={Logo} alt="Reddit Logo" className="w-8 h-8 "/>
        </div>
        <form action=''>
          <SearchIcon className="text-white"/>
          <input type='text' className='bg-gray-800 h-8'/>
        </form>
      </header>
    </div>
      
  )
}

export default App
