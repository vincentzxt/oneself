import http from '@/utils/http.js'

export const stockCheck = (url, data = {}) => {
  return http.request({
    url: url + '/StockCheck',
		data: data,
		method: 'post'
  })
}
export const stockQuery = (url, data = {}) => {
  return http.request({
    url: url+'/Query',
		data: data,
		method: 'post'
  })
}