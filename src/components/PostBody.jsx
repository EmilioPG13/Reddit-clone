import { useEffect, useState } from 'react';
import { getTopPosts, getComments } from '../api/reddit';
import { ChatAlt2Icon, ShareIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';

function PostBody() {
    const [posts, setPosts] = useState([]);
    const [expandedPostId, setExpandedPostId] = useState(null);
    const [displayComments, setDisplayComments] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getTopPosts()
            .then(response => {
                console.log(response);
                setPosts(response.data.children);
            })
            .catch(error => {
                console.error('Error fetching data from Reddit API', error);
            });
    }, []);

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    const togglePostComments = (postId) => {
        if (!displayComments) {
            getComments(postId)
                .then(data => setComments(data.slice(0, 3)));
        }
        setDisplayComments(!displayComments);
    };

    return (
        <div className="px-6 bg-reddit_dark text-reddit_text ">
            {posts.map(post => (
                <article key={post.data.id} className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md mb-3" onClick={() => setExpandedPostId(expandedPostId === post.data.id ? null : post.data.id)}>                    <div className="flex">
                    <aside className='sidebar flex flex-col items-center justify-start bg-reddit_dark-brighter p-2 mr-2 border-r border-reddit_border'>
                        <button className=''>
                            <ChevronUpIcon className="w-5 h-5 text-reddit_text-darkest" />
                        </button>
                        <p className='my-'>{post.data.ups}</p>
                        <button>
                            <ChevronDownIcon className='w-5 h-5 text-reddit_text-darkest' />
                        </button>
                    </aside>
                    <div>
                        <header>
                            <h2 className="text-xl font-medium mb-3">{post.data.title}</h2>
                        </header>
                        {post.data.url && post.data.url.match(/\.(jpeg|jpg|gif|png)$/) != null && (
                            <img src={post.data.url} alt={post.data.title} className="my-3" />
                        )}
                        <section className="text-reddit_text-darker text-sm leading-relaxed" onClick={() => setExpandedPostId(post.data.id)}>
                            <p className="mb-4">{expandedPostId === post.data.id ? post.data.selftext : truncateText(post.data.selftext, 100)} </p>
                        </section>

                        <footer className="flex justify-items-start py-1 bg-reddit_dark-brighter border-t border-reddit_border">
                            <button className="mr-4 flex items-center text-reddit_text-darkest" onClick= {() => togglePostComments(post.data.id)}>
                                <ChatAlt2Icon className="w-5 h- mr-1" />
                                <p>{post.data.num_comments} Comments</p>
                            </button>
                            <button className="flex items-center text-reddit_text-darkest">
                                <ShareIcon className="w-5 h-5 mr-1" />
                                <p>Share</p>
                            </button>
                        </footer>
                    </div>
                </div>
                {displayComments && expandedPostId === post.data.id ? comments.map(comment => <p key={comment.data.id}>{comment.data.body}</p>) : null}
                </article>
            ))}
        </div>
    );
}

export default PostBody;