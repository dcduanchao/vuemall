
import Axios from 'axios'

const request = Axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return error
  }
)
request.interceptors.response.use(
  response => {
    // console.log(response);
    return response.data;
  },
  error => {
    return error
  }
)


export default request

// export function request(config) {
//   const instance = Axios.create({
//     baseURL: 'http://127.0.0.1:9090',
//     timeout: 5000
//   })
//   return instance(config);

// }