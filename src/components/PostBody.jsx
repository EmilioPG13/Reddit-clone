import { useEffect, useState } from 'react';
import { getTopPosts, getComments } from '../api/reddit';
import { ChatAlt2Icon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function PostBody({ subreddit }) {
    const [posts, setPosts] = useState([]);
    const [expandedPostId, setExpandedPostId] = useState(null);
    const [comments, setComments] = useState([]);
    const [expandedCommentsId, setExpandedCommentsId] = useState(null);
    const darkMode = useSelector(state => state.darkMode);

    useEffect(() => {
        getTopPosts(subreddit)
            .then(response => {
                setPosts(response.data.children);
            })
            .catch(error => {
                console.error('Error fetching data from Reddit API', error);
            });
    }, [subreddit]);

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    const togglePostComments = (event, postId) => {
        event.stopPropagation(); // Prevent the event from bubbling up
        getComments(subreddit, postId)
            .then(data => {
                if (data && data.length > 0) {
                    setComments(data.slice(0, 3));
                    setExpandedCommentsId(expandedCommentsId === postId ? null : postId);
                } else {
                    console.error('No comments found for this post');
                }
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
                // eslint-disable-next-line no-undef
                setNetworkError(true);
            });
    };

    return (
        <div className={`post-body ${darkMode ? 'dark:bg-gray-800' : 'bg-white'}`}>
            <div className="px-6 bg-reddit_light text-reddit_text dark:bg-dark_reddit_light dark:text-dark_reddit_text">
                {posts.map(post => (
                    <article key={post.id} className="border border-reddit_border bg-reddit_light-brighter p-2 rounded-md mb-3 dark:border-dark_reddit_border dark:bg-dark_reddit_light-brighter" onClick={() => setExpandedPostId(expandedPostId === post.data.id ? null : post.data.id)}> <div className="flex">
                        <aside className='sidebar flex flex-col items-center justify-start bg-reddit_light-brighter p-2 mr-2 border-r border-reddit_border dark:bg-dark_reddit_light-brighter dark:border-r-dark_reddit_border'>
                            <button className=''>
                                <ChevronUpIcon className="w-5 h-5 text-reddit_text-darkest dark:text-dark_reddit_text-darkest" />
                            </button>
                            <p className='my-'>{post.data.ups}</p>
                            <button>
                                <ChevronDownIcon className='w-5 h-5 text-reddit_text-darkest dark:text-dark_reddit_text-darkest' />
                            </button>
                        </aside>
                        <div>
                            <header className='dark:text-dark_reddit_text'>
                                <h2 className="text-xl font-medium mb-3 dark:text-dark_reddit_text">{post.data.title}</h2>
                            </header>
                            {post.data.url && post.data.url.match(/\.(jpeg|jpg|gif|png)$/) != null && (
                                <img src={post.data.url} alt={post.data.title} className="my-3" />
                            )}
                            <section className="text-reddit_text-darker text-sm leading-relaxed dark:text-dark_reddit_text-darker" onClick={() => setExpandedPostId(expandedPostId === post.data.id ? null : post.data.id)}>
                                <ReactMarkdown className="mb-4">{expandedPostId === post.data.id ? post.data.selftext : truncateText(post.data.selftext, 100)}</ReactMarkdown>
                            </section>

                            <footer className="flex justify-items-start py-1 bg-reddit_light-brighter border-t border-reddit_border dark:bg-dark_reddit_light-brighter dark:border-dark_reddit_border">
                                <button className="mr-4 flex items-center text-reddit_text-darkest dark:text-dark_reddit_text-darkest" onClick={(event) => { event.stopPropagation(); togglePostComments(event, post.data.id) }}>
                                    <ChatAlt2Icon className="w-5 h- mr-1 " />
                                    <p>{post.data.num_comments} Comments</p>
                                </button>

                            </footer>
                        </div>
                    </div>
                        {expandedCommentsId === post.data.id && comments.length > 0 ? comments.map(comment => (
                            <div key={comment.data.id} className='my-4 mx-11 bg-stone-100 dark:bg-dark_reddit_light-brightest transition duration-300 rounded p-2  hover:shadow-lg'>
                                <p><strong>{comment.data.author}</strong> commented {formatDistanceToNow(new Date(comment.data.created_utc * 1000))} ago</p>
                                <hr />
                                <ReactMarkdown>{comment.data.body}</ReactMarkdown>
                            </div>
                        )) : null}
                    </article>
                ))}
            </div>
        </div>
    );
}


PostBody.propTypes = {
    subreddit: PropTypes.string.isRequired,
};

export default PostBody;