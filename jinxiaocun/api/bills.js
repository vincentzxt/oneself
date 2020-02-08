import http from '@/utils/http.js'

export const query = (url, data = {}) => {
  return http.request({
    url: url + '/Query',
		data: data,
		method: 'post'
  })
}
export const tokenpost = (url, data = {}) => {
  return http.request({
    url: url,
		data: data,
		method: 'post'
  })
}
export const get = (url, data = {}) => {
  return http.request({
    url: url + '/Get/'+data.id,
		data: data,
		method: 'post'
  })
}