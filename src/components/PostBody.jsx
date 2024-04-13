import { useEffect, useState } from 'react';
import { getTopPosts } from '../api/reddit';
import { ChatAlt2Icon, ShareIcon } from '@heroicons/react/outline';

function PostBody() {
    const [posts, setPosts] = useState([]);

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

    return (
        <div className="px-6 bg-reddit_dark text-reddit_text ">
            {posts.map(post => (
                <div key={post.data.id} className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
                    <h5 className="text-reddit_text-darkest text-sm mb-1">Posted by {post.data.author} • {post.data.created_utc}</h5>
                    <h2 className="text-xl mb-3">{post.data.title}</h2>
                    <div className="text-reddit_text-darker text-sm leading-6">
                        <p className="mb-4">{post.data.selftext}</p>
                    </div>
                    <div className="flex justify-items-start px-6 py-4 bg-reddit_dark-brighter border-t border-reddit_border">
                        <button className="mr-4 flex items-center text-reddit_text-darkest">
                            <ChatAlt2Icon className="w-5 h-5 mr-1" />
                            <p>{post.data.num_comments} Comments</p>
                        </button>
                        <button className="flex items-center text-reddit_text-darkest">
                            <ShareIcon className="w-5 h-5 mr-1" />
                            <p>Share</p>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostBody;