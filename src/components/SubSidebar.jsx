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
            fetch(`https://www.reddit.com/r/${subreddit}/about.json`)
                .then(response => response.json())
                .then(data => {
                    let icon = data.data.icon_img;
                    if (icon === '') {
                        icon = defaultIcon;
                    }
                    return { subreddit, icon };
                })
        ))
            .then(setSubredditData);
    }, [subreddits]);

    return (
        <div className={`post-body ${darkMode ? 'dark' : ''}`}>
            <div className="bg-reddit_light-default sticky top-0 h-screen dark:bg-dark_reddit_light-default">
                <aside className="w-72 flex-none mr-6 p-4 border border-reddit_border bg-reddit_light-brighter rounded-md mb-3 dark:border-dark_reddit_border dark:bg-dark_reddit_light-brighter">
                    <h2 className="text-xl mb-4 text-reddit_text-default dark:text-dark_reddit_text-default dark:text-dark_reddit_text">Suggested Subreddits</h2>
                    {subredditData.map(({ subreddit, icon }) => (
                        <div key={subreddit} className='flex items-center transition duration-300 hover:bg-sky-500/75 rounded p-2 w-full'>
                            <img src={icon} alt={subreddit} className='w-10 h-10 rounded-full mr-2' />
                            <a onClick={() => setSubreddit(subreddit)} className="text-sky-700 cursor-pointer">
                                r/{subreddit}
                            </a>
                        </div>
                    ))}
                </aside>
            </div >
        </div >
    );
}

SubSidebar.propTypes = {
    setSubreddit: PropTypes.func.isRequired,
};

export default SubSidebar;