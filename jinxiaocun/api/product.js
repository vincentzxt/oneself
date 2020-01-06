import http from '@/utils/http.js'

export const queryProductCategory = (url, data = {}) => {
  return http.request({
    url: url + '/queryProductCategory',
		data: data,
		method: 'post'
  })
}