import axios from 'axios'
import Qs from 'qs'


/**
 * development 为开发环境
 * 上线的时候会自动选改成空
 */
// let url = process.env.NODE_ENV == 'development' ? 'http://test.58.com:8112' : ''
let url = process.env.NODE_ENV == 'development' ? '/api' : ''
     

/**
 *  axios.interceptors 拦截器
 *  request 统一请求前
 */
axios.interceptors.request.use(
  config => {
    config.transformRequest = (data) => {
        data = Qs.stringify(data);
        return data
  };
    config.withCredentials = true
      return config
  },
  (error)=>{
      return Promise.reject(error)
  });

/**
 *  axios.interceptors 拦截器
 *  request 统一响应后处理
 */
axios.interceptors.response.use(
  (response) =>{
      return response.data;
  }, 
  (error) => {
      console.log(error,'error')
  });

export const baseUrl = `${url}`