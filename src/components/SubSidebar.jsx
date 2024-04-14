import { useEffect, useState } from 'react';

function SubSidebar() {
    const [subredditData, setSubredditData] = useState([]);
    const subreddits = ['webdev', 'javascript', 'reactjs', 'css', 'html5', 'programming', 'python', 'learnprogramming', 'frontend', 'backend', 'node', 'angular', 'vuejs', 'docker', 'aws', 'typescript', 'mongodb', 'rust', 'golang', 'kubernetes'];

    useEffect(() => {
        Promise.all(subreddits.map(subreddit =>
        fetch(`https://www.reddit.com/r/${subreddit}/about.json`)
        .then(response => response.json())
        .then(data => ({ subreddit, icon: data.data.icon_img }))
    ))
    .then(setSubredditData);
    }, []);

    return (
        <div className="bg-black sticky top-0">
            <aside className="w-72 flex-none mr-6 p-4 border border-reddit_border bg-reddit_dark-brighter rounded-md mb-3">
                <h2 className="text-xl mb-4 text-reddit_text">Suggested Subreddits</h2>
                <ul>
                    {subredditData.map(({ subreddit, icon }) => (
                        <li key={subreddit} className="mb-4 flex items-center">
                            <img src={icon} alt={subreddit} className='w-10 h-10 rounded-full mr-2' />
                            <a href={`https://www.reddit.com/r/${subreddit}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            r/{subreddit}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}

export default SubSidebar;