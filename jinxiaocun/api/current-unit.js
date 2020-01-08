import http from '@/utils/http.js'

export const updateAll = (url, data = {}) => {
  return http.request({
    url: url + '/UpdateAll',
		data: data,
		method: 'post'
  })
}