import { useEffect, useState, useContext, useRef } from 'react';
import { DarkModeContext } from './DarkModeContext';
import PropTypes from 'prop-types';
import { MenuIcon } from '@heroicons/react/solid';

function SubSidebar({ setSubreddit }) {
    const [subredditData, setSubredditData] = useState([]);
    const subreddits = ['webdev', 'javascript', 'reactjs', 'css', 'html5', 'programming', 'python', 'learnprogramming', 'frontend', 'backend', 'node', 'angular', 'vuejs', 'docker', 'aws', 'typescript', 'mongodb', 'rust', 'golang', 'kubernetes'];
    const defaultIcon = 'https://www.redditstatic.com/icon.png';
    const { darkMode } = useContext(DarkModeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    }

    useEffect(() => {
    // Fetch subreddit data
    Promise.all(subreddits.map(subreddit =>
        fetch(`/api/r/${subreddit}/about.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.data) {
                    let icon = data.data.icon_img;
                    if (icon === '') {
                        icon = defaultIcon;
                    }
                    return { subreddit, icon };
                } else {
                    throw new Error('Invalid data format');
                }
            })
            .catch(error => {
                console.error('Error fetching subreddit data:', error);
                return { subreddit, icon: defaultIcon };
            })
    ))
        .then(data => setSubredditData(data)); // Set the state with the fetched data

    // Add event listener for clicks outside of the sidebar
    window.addEventListener('mousedown', handleClickOutside);
    
    // Remove event listener when the component is unmounted
    return () => {
        window.removeEventListener('mousedown', handleClickOutside);
    };
}, [subreddits]);

return (
    <div ref={sidebarRef} className={`post-body ${darkMode ? 'dark' : ''}`}>
        <button className="lg:hidden p-0 absolute top-3 right-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="h-8 w-8" />
        </button>
        <div className="px-6 bg-reddit_light text-reddit_text dark:bg-dark_reddit_light dark:text-dark_reddit_text w-full max-w-2xl mx-auto">
            <aside className={`w-72 lg:block md:mr-0 flex-none mr-6 p-4 border border-reddit_border bg-reddit_light-brighter rounded-md mb-3 dark:border-dark_reddit_border dark:bg-dark_reddit_light-brighter transform top-0 right-0 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:relative lg:mr-6 lg:p-4 lg:border lg:border-reddit_border lg:bg-reddit_light-brighter lg:rounded-md lg:mb-3 dark:border-dark_reddit_border dark:bg-dark_reddit_light-brighter ${isMenuOpen ? '' : 'hidden'}`}>
                <h2 className="text-xl mb-4 text-reddit_text-default dark:text-dark_reddit_text-default dark:text-dark_reddit_text">Suggested Subreddits</h2>
                    <div className="overflow-y-auto h-[calc(100vh-10rem)]">
                        <ul>
                            {subredditData.map(({ subreddit, icon }) => (
                                <li key={subreddit} className="mb-4 flex items-center">
                                    <div className='flex items-center transition duration-300 hover:bg-sky-500/75 rounded p-2 w-full '>
                                        <img
                                            src={icon}
                                            alt={`${subreddit} icon`}
                                            onError={(e) => { e.target.onerror = null; e.target.src = defaultIcon; }}
                                            className='w-10 h-10 rounded-full mr-2'
                                        />
                                        <a
                                            href={`https://www.reddit.com/r/${subreddit}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sky-700"
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent the link from opening in a new tab
                                                setSubreddit(subreddit); // Update the subreddit state in App.jsx
                                            }}
                                        >
                                            r/{subreddit}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div >
        </div >
    );
}

SubSidebar.propTypes = {
    setSubreddit: PropTypes.func.isRequired,
};

export default SubSidebar;