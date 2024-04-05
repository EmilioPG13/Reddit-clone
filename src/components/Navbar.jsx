// Remove the unused import statement for 'React'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaRegEnvelope, FaBell, FaCaretDown } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

function Navbar() {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <ul className="flex items-center flex-shrink-0 text-white mr-6">
                <li className='mr-4'>
                    <Link to="/">Reddit</Link>
                </li>
                <li className='mr-4'>
                    <Link to="/search bar">Search Reddit</Link>
                </li>
                <li className='flex items-center'>
                    <Link to="/page1" className='mr-4'><FaRegEnvelope /></Link>
                    <a href='#' onClick={() => {/*code to open chat*/}} className='mr-4'><FaBell /></a>
                    <Link to="/page2" className='mr-4'><AiOutlineUser /></Link>
                    <button onClick={() => setDropdownOpen1(!dropdownOpen1)} className='mr-4'>
                        <FaCaretDown />
                        {dropdownOpen1 && (
                            <div className='absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl'>
                                <Link to="/action-1" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">Action 1</Link>
                                <Link to="/action-2" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">Action 2</Link>
                                <Link to="/action-3" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">Action 3</Link>
                            </div>
                        )}
                    </button>
                    <button onClick={() => setDropdownOpen2(!dropdownOpen2)}>
                        <FaCaretDown />
                        {dropdownOpen2 && (
                            <div className='absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl'>
                                <Link to="/action-4" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">Action 4</Link>
                                <Link to="/action-5" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">Action 5</Link>
                                <Link to="/action-6" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">Action 6</Link>
                            </div>
                        )}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;