import axios from 'axios';

export const getTopPosts = (subreddit) => {
    return axios.get(`https://www.reddit.com/r/${subreddit}/top.json`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching data from Reddit API', error);
        });
}

export const getComments = (subreddit, postId) => {
    return axios.get(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`)
        .then(response => {
            return response.data[1].data.children;
        })
        .catch(error => {
            console.error('Error fetching comments from Reddit API', error);
        });
}