import http from '@/utils/http.js'

export const queryHotSellingProduct = (url, data = {}) => {
  return http.request({
    url: url + '/QueryHotSellingProduct',
		data: data,
		method: 'post'
  })
}

export const querySlowSellingProduct = (url, data = {}) => {
  return http.request({
    url: url + '/QuerySlowSellingProduct',
		data: data,
		method: 'post'
  })
}