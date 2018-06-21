import axios from 'axios'
import qs from 'qs'
import { getToken, setToken, removeToken } from '@/utils/auth'
let  host = "https://www.junrencar.com";
axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 204 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  // if (res.status === -404) {
  //   alert(res.msg)
  // }
  // if (res.data && (!res.data.success)) {
  //   alert(res.data.error_msg)
  // }
  return res
}

export default {
  post(url, data) {
    let token = getToken()
    console.log(token);
    return axios({
      method: 'post',
      url: `${host}${url}`,
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': `JWT ${token}`
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get(url, params) {
    let token = getToken()
    console.log(token);
    return axios({
      method: 'get',
      url: `${host}${url}`,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `JWT ${token}`
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  delete(url) {
    let token = getToken()
    console.log(token);
    return axios({
      method: 'delete',
      url: `${host}${url}`,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `JWT ${token}`
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  put(url, data) {
    let token = getToken()
    console.log(token);
    return axios({
      method: 'put',
      url: `${host}${url}`,
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': `JWT ${token}`
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
