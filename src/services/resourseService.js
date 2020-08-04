import constants from '../constants/constant';
const axios = require('axios');

export function getNews(obj) {
    let url = `${constants.NEWSAPIURL}/${obj.category}?country=${obj.country}&token=${constants.NEWSAPIKEY}`;
    // if (obj.category && obj.category !== 'all') {
    //     url = `${url}&category=${obj.category}`
    // }
    return axios.get(url);
}