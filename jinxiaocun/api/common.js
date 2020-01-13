import http from '@/utils/http.js'

export const query = (url, data = {}) => {
  return http.request({
    url: url + '/Query',
		data: data,
		method: 'post'
  })
}

export const get = (url, id) => {
  return http.request({
    url: url + '/Get/' + id,
		method: 'post'
  })
}

export const update = (url, data = {}) => {
  return http.request({
    url: url + '/Update',
		data: data,
		method: 'post'
  })
}

export const create = (url, data = {}) => {
  return http.request({
    url: url + '/Create',
		data: data,
		method: 'post'
  })
}