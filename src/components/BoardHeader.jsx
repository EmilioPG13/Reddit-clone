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
            <div className="h-40 lg:w-3/4 md:w-1/2 sm:w-full xs:w-11/12 bg-contain bg-repeat bg-center mx-auto rounded-lg " style={{ backgroundImage: `url("${bannerURL}")` }}>
            </div>
            {/* Board Header */}
            <div className="bg-reddit_light-bright">
                {/* Header Content */}
                <div className="relative mx-auto max-w-screen-lg flex items-center lg:pl-32 md:pl-32 xl:pl-1 2xl:ml-80">
                    <div className="w-full lg:w-3/4 md:w-1/2 sm:w-full xs:w-11/12 flex items-center pl-8 md:pl-16 lg:pl-8">
                        {/* Board Icon */}
                        <div className="h-20 w-20 rounded-full overflow-hidden relative -top-4 border-4 border-white bg-white">
                            <img src={iconUrl} alt="Board icon" className="object-cover rounded-full"></img>
                        </div>
                        {/* Board Title */}
                        <div className="pl-4 font-semibold">
                            <h1 className="text-reddit_text text-4xl dark:text-dark_reddit_text-darkest">r/{subreddit}</h1>
                        </div>
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