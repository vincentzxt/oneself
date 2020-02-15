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

export const enableProductCategory = (url, id) => {
  return http.request({
    url: url + '/EnableProductCategory/' + id,
		method: 'post'
  })
}

export const disableProductCategory = (url, id) => {
  return http.request({
    url: url + '/DisableProductCategory/' + id,
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
