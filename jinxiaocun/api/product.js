import http from '@/utils/http.js'

export const queryProductCategory = (url, data = {}) => {
  return http.request({
    url: url + '/QueryProductCategory',
		data: data,
		method: 'post'
  })
}

export const createProductCategory = (url, data = {}) => {
  return http.request({
    url: url + '/CreateProductCategory',
		data: data,
		method: 'post'
  })
}

export const createProductUnit = (url, data = {}) => {
  return http.request({
    url: url + '/CreateProductUnit',
		data: data,
		method: 'post'
  })
}
