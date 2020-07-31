import constants from '../constants/constant';
const axios = require('axios');

export function getJson(jsonFile) {
    return axios.get(`${constants.COVID19URL}/${jsonFile}`);
}