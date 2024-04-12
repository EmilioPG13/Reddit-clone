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