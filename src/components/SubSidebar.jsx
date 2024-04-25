import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SubSidebar() {
    const [subredditData, setSubredditData] = useState([]);
    const subreddits = ['javascript', 'reactjs', 'css', 'html5', 'programming', 'python', 'learnprogramming', 'frontend', 'backend', 'node', 'angular', 'vuejs', 'docker', 'aws', 'typescript', 'mongodb', 'rust', 'golang', 'kubernetes'];
    const defaultIcon = 'https://www.redditstatic.com/icon.png';

    useEffect(() => {
        Promise.all(subreddits.map(subreddit =>
            fetch(`/.netlify/functions/proxy?subreddit=${subreddit}`)
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
        <div className="bg-reddit_dark-default sticky top-0 h-screen">
            <aside className="w-72 flex-none mr-6 p-4 border border-reddit_border bg-reddit_dark-brighter rounded-md mb-3">
                <h2 className="text-xl mb-4 text-reddit_text-default">Suggested Subreddits</h2>
                <div className="overflow-y-auto h-[calc(100vh-10rem)]">
                    <ul>
                        {subredditData.map(({ subreddit, icon }) => (
                            <li key={subreddit} className="mb-4 flex items-center">
                                <div className='flex items-center transition duration-300 hover:bg-sky-500/75 rounded p-2 w-full'>
                                    <img src={icon} alt={subreddit} className='w-10 h-10 rounded-full mr-2' />
                                    <Link to={`/r/${subreddit}`} className="text-sky-700">
                                        r/{subreddit}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default SubSidebar;