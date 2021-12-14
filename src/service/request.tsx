import axios from 'axios'

axios.defaults.baseURL = 'http://www.yumingbusan.com/'
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {
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
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
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
