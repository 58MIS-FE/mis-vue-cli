import axios from 'axios';
import {baseUrl} from 'mis@/axios';


/**
 */
export const getList = (params) => {
    return axios.get(`${baseUrl}/apimock/5380/getList`,'');
};
/**
*/
export const add = (obj) => {
    return axios.post(`${baseUrl}/apimock/5381/add`,  obj);
};

