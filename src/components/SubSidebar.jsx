function SubSidebar() {
    const subreddits = ['webdev', 'javascript', 'reactjs', 'css', 'html5'];

    return (
        <div className="bg-black sticky top-0">
            <aside className="w-72 flex-none mr-6 p-4 border border-reddit_border bg-reddit_dark-brighter rounded-md mb-3">
                <h2 className="text-xl mb-4 text-reddit_text">Suggested Subreddits</h2>
                <ul>
                    {subreddits.map(subreddit => (
                        <li key={subreddit} className="mb-4">
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