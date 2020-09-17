import axios from 'axios';
import {baseUrl} from 'tp@/axios';


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

