import Axios from 'axios';

const instanceApiRequest = Axios.create({
    baseURL: 'https://www.balldontlie.io/api/v1/',
    timeout: 10000,
    headers: {
        'Cache-Control': 'no-cache'
    }
});


const hitPost = async (url, data) => {
    const res = await instanceApiRequest.post(url, data);
    return res;
};

const hitGet = async (url, data) => {
    const res = await instanceApiRequest.get(url, data);
    return res;
};

export const getPlayer = async () => {
    const url = '/players';
    const response = await hitGet(url);
    return response;
};