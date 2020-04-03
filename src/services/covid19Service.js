import constants from '../constants/constant.url';
const axios = require('axios');

export function getJson(jsonFile) {
    return axios.get(`${constants.covid19Url}/${jsonFile}`);
}