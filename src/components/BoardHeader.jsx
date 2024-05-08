import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setBannerUrl, setIconUrl } from '../actions';

function BoardHeader({ subreddit = 'webdev' }) {
    const dispatch = useDispatch();
    const bannerURL = useSelector(state => state.bannerUrl);
    const iconUrl = useSelector(state => state.iconUrl)
    const defaultIcon = 'https://www.redditstatic.com/icon.png';
    const defaultBanner = 'https://www.investopedia.com/thmb/DNrU2SOx4AYYiLm9wWSJcsgzmEg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Reddit-Logo-e9537b96b55349ac8eb77830f8470c95.jpg';

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}/about.json`)
            .then(response => response.json())
            .then(data => {
                dispatch(setBannerUrl(data.data.banner_img || defaultBanner));
                dispatch(setIconUrl(data.data.icon_img || defaultIcon));
            });
    }, [subreddit, defaultBanner, defaultIcon, dispatch]);

    return (
        <>
            {/* Banner */}
            <div className="h-40 bg-contain bg-repeat bg-center mx-80 rounded-lg " style={{ backgroundImage: `url("${bannerURL}")` }}>
            </div>
            {/* Board Header */}
            <div className="bg-reddit_light-bright">
                {/* Header Content */}
                <div className="ml-80 relative flex">
                    {/* Board Icon */}
                    <div className="h-20 w-20 rounded-full overflow-hidden relative -top-4 border-4 border-white bg-white">
                        <img src={iconUrl} alt="Board icon"></img>
                    </div>
                    {/* Board Title */}
                    <div className="pt-5 pl-4 font-semibold mb-8">
                        <h1 className="text-reddit_text text-4xl dark:text-dark_reddit_text-darkest">r/{subreddit}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

BoardHeader.propTypes = {
    subreddit: PropTypes.string,
};

export default BoardHeader;