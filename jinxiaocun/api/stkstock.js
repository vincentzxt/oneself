import http from '@/utils/http.js'

export const stockCheck = (url, data = {}) => {
  return http.request({
    url: url + '/StockCheck',
		data: data,
		method: 'post'
  })
}