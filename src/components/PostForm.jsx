import Avatar from "../images/avatar.png"
import PropTypes from 'prop-types';

function PostForm({ subreddit }) {
        return (
        <div className="bg-reddit_dark px-72 py-4 text-gray-400">
            {/* Post Container */}
            <div className="border border-reddit_border p-2 rounded-md flex bg-reddit_dark-brighter">
                {/* Avatar Container */}
                <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
                    <img src={Avatar} alt="" />
                </div>
                {/* Post Form */}
                <div className="ml-4 flex-grow bg-reddit_dark-brightest border border-reddit_border mr-2 rounded-md">
                    <div className="bg-reddit_dark-brightest p-2 px-3 text-sm block w-full rounded-md">
                        {subreddit ? `Selected subreddit: ${subreddit}` : 'No subreddit selected'}
                    </div>
                </div>
            </div>
        </div>
    );
}


PostForm.propTypes = {
    subreddit: PropTypes.string.isRequired,
};

export default PostForm;