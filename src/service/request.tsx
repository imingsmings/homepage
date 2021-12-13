import axios from 'axios'

// 请求根路径
const devBaseURL = 'http://www.yumingbusan.com:4000/'
const proBaseURL = 'http://127.0.0.1:3000'
// @ts-ignore
const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

// 全局配置
axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = 5000
// axios.defaults.withCredentials = true

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 对请求增加时间戳
  if (config.method === 'post') {
    config.data = {
      ...config.data,
      timestamp: new Date().getTime()
    }
  } else if (config.method === 'get') {
    config.params = {
      ...config.params,
      timestamp: new Date().getTime()
    }
  }
  config.url = config.url?.replace('/api', '')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 请求方法封装
const Request = {
  get: (path = '', data = {}) => {
    return new Promise((resolve, reject) => {
      axios.get(path, {
        params: data
      })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  post: (path = '', data = {}) => {
    return new Promise((resolve, reject) => {
      axios.post(path, data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  delete: (path = '', data = {}) => {
    return new Promise((resolve, reject) => {
      axios.delete(path, data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  put: (path = '', data = {}) => {
    return new Promise((resolve, reject) => {
      axios.put(path, data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  all: (list:any[]) => {
    return new Promise((resolve, reject) => {
      axios.all(list)
        .then(axios.spread((...result) => {
          // 两个请求现在都执行完成
          resolve(result)
        }))
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default Request
