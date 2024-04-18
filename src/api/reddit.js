import axios from 'axios';

export const getTopPosts = () => {
    return axios.get('https://www.reddit.com/r/webdev/top.json')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching data from Reddit API', error);
        });

}

export const getComments = (postId) => {
    return axios.get(`https://www.reddit.com/r/webdev/comments/${postId}.json`)
        .then(response => {
            return response.data[1].data.children;
        })
        .catch(error => {
            console.error('Error fetching comments from Reddit API', error);
        });
}