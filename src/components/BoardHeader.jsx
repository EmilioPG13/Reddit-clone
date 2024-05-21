import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function BoardHeader({ subreddit = 'webdev' }) {
    const [bannerURL, setBannerUrl] = useState('');
    const [iconUrl, setIconUrl] = useState('');
    const defaultIcon = 'https://www.redditstatic.com/icon.png';
    const defaultBanner = 'https://www.investopedia.com/thmb/DNrU2SOx4AYYiLm9wWSJcsgzmEg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Reddit-Logo-e9537b96b55349ac8eb77830f8470c95.jpg';

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}/about.json`)
            .then(response => response.json())
            .then(data => {
                setBannerUrl(data.data.banner_img || defaultBanner);
                setIconUrl(data.data.icon_img || defaultIcon);
            });
    }, [subreddit, defaultBanner, defaultIcon]);

    return (
        <>
            {/* Banner */}
            <div className="w-full lg:w-3/4 md:w-1/2 sm:w-full xs:w-11/12 h-40 bg-contain bg-repeat bg-center mx-auto rounded-lg " style={{ backgroundImage: `url("${bannerURL}")` }}>
            </div>
            {/* Board Header */}
            <div className="bg-reddit_light-bright">
                {/* Header Content */}
                <div className="ml-80 sm:ml-10 relative flex">
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