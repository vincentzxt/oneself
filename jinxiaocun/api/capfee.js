import http from '@/utils/http.js'

export const queryFeeCategory = (url, data = {"pageIndex": 1, "pageRows": -1}) => {
  return http.request({
    url: url + '/QueryFeeCategory',
		data: data,
		method: 'post'
  })
}

export const createFeeCategory = (url, data = {}) => {
  return http.request({
    url: url + '/CreateFeeCategory',
		data: data,
		method: 'post'
  })
}

export const enableFeeCategory = (url, id) => {
  return http.request({
    url: url + '/EnableFeeCategory/' + id,
		method: 'post'
  })
}

export const disableFeeCategory = (url, id) => {
  return http.request({
    url: url + '/DisableFeeCategory/' + id,
		method: 'post'
  })
}