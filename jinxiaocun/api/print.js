import http from '@/utils/http.js'

export const printSalesOrder = (url, data = {}) => {
  return http.request({
    url: url + '/PrintSalesOrder',
		data: data,
		method: 'post'
  })
}