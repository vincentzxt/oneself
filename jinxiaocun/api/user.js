 import http from '@/utils/http.js'
 export const post = (url, data = {}) => {
    return http.request({
      url: url,
  		data: data,
  		method: 'post'
    })
}