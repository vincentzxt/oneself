import http from '@/utils/http.js'

export const query = (url, data = {}) => {
  return http.request({
    url: url + '/Query',
		data: data,
		method: 'post'
  })
}

export const get = (url, id, data = {}) => {
  return http.request({
    url: url + '/id',
		data: data,
		method: 'post'
  })
}