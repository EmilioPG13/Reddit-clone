import { useState, useEffect } from 'react';

function BoardHeader({ subreddit = 'webdev' }) {
    const [bannerURL, setBannerUrl] = useState('');
    const [iconUrl, setIconUrl] = useState('');

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}/about.json`)
            .then(response => response.json())
            .then(data => {
                setBannerUrl(data.data.banner_img);
                setIconUrl(data.data.icon_img);
            });
    }, [subreddit]);

    return (
        <>
            {/* Banner */}
            <div className="h-40 bg-cover mx-80 rounded-lg" style={{ backgroundImage: `url("${bannerURL}")`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
            </div>
            {/* Board Header */}
            <div className="bg-reddit_dark-bright">
                {/* Header Content */}
                <div className="ml-80 relative flex">
                    {/* Board Icon */}
                    <div className="h-20 w-20 rounded-full overflow-hidden relative -top-4 border-4 border-white bg-white">
                        <img src={iconUrl} alt="Board icon"></img>
                    </div>
                    {/* Board Title */}
                    <div className="pt-5 pl-4 font-semibold">
                        <h1 className="text-reddit_text text-4xl">r/{subreddit}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BoardHeader;