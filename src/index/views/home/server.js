import { baseUrl } from '@/index/axios/index.js';
import axios from 'axios';


/**
 * [postMethods post请求方式 方法名]
 * @param {{obj}}  obj 请求参数 
 */
export const postMethods = (obj) => {
  return axios.post(`${baseUrl}/post` ,obj)
}

/**
 * [getMethods get请求方式 方法名]
 */
export const getMethods = () => {
  return axios.get(`${baseUrl}/get`)
}
