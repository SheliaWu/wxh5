import axios from 'axios'
import qs from 'qs'
const online_host = "https://api.xxx.cn/"
export function get (url) {
  return new Promise((resolve, reject) => {
    axios.get(online_host+url)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(online_host+url, qs.stringify(data))
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export default {
  get,
  post
}
