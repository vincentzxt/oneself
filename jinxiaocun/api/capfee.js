import http from '@/utils/http.js'

export const queryFeeCagetory = (url, data = {"pageIndex": 1, "pageRows": -1}) => {
  return http.request({
    url: url + '/QueryFeeCagetory',
		data: data,
		method: 'post'
  })
}