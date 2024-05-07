import { useEffect, useState, useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import PropTypes from 'prop-types';

function SubSidebar({ setSubreddit }) {
    const [subredditData, setSubredditData] = useState([]);
    const subreddits = ['javascript', 'reactjs', 'css', 'html5', 'programming', 'python', 'learnprogramming', 'frontend', 'backend', 'node', 'angular', 'vuejs', 'docker', 'aws', 'typescript', 'mongodb', 'rust', 'golang', 'kubernetes'];
    const defaultIcon = 'https://www.redditstatic.com/icon.png';
    const { darkMode } = useContext(DarkModeContext);

    useEffect(() => {
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
}, []);

    return (
        <div className={`post-body ${darkMode ? 'dark' : ''}`}>
            <div className="bg-reddit_light-default sticky top-0 h-screen dark:bg-dark_reddit_light-default">
                <aside className="w-72 flex-none mr-6 p-4 border border-reddit_border bg-reddit_light-brighter rounded-md mb-3 dark:border-dark_reddit_border dark:bg-dark_reddit_light-brighter">
                    <h2 className="text-xl mb-4 text-reddit_text-default dark:text-dark_reddit_text-default dark:text-dark_reddit_text">Suggested Subreddits</h2>
                    <div className="overflow-y-auto h-[calc(100vh-10rem)]">
                        <ul>
                            {subredditData.map(({ subreddit, icon }) => (
                                <li key={subreddit} className="mb-4 flex items-center">
                                    <div className='flex items-center transition duration-300 hover:bg-sky-500/75 rounded p-2 w-full '>
                                        <img 
                                            src={icon} 
                                            alt={`${subreddit} icon`}
                                            onError={(e) => { e.target.onerror = null; e.target.src = defaultIcon;}}
                                            className='w-10 h-10 rounded-full mr-2' 
                                        />
                                        <a href={`https://www.reddit.com/r/${subreddit}`} target="_blank" rel="noopener noreferrer" className="text-sky-700">
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