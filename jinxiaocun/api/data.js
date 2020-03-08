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

export const querySalesDetail = (url, data = {}) => {
  return http.request({
    url: url + '/QuerySalesDetail',
		data: data,
		method: 'post'
  })
}

export const querySalesReturnDetail = (url, data = {}) => {
  return http.request({
    url: url + '/QuerySalesReturnDetail',
		data: data,
		method: 'post'
  })
}

export const queryPurchaseDetail = (url, data = {}) => {
  return http.request({
    url: url + '/QueryPurchaseDetail',
		data: data,
		method: 'post'
  })
}

export const queryPurchaseReturnDetail = (url, data = {}) => {
  return http.request({
    url: url + '/QueryPurchaseReturnDetail',
		data: data,
		method: 'post'
  })
}

export const queryReceive = (url, data = {}) => {
	console.log(data)
  return http.request({
    url: url + '/QueryReceive',
		data: data,
		method: 'post'
  })
}

export const queryReceiveDetail = (url, data = {}) => {
  return http.request({
    url: url + '/QueryReceiveDetail',
		data: data,
		method: 'post'
  })
}

export const queryPay = (url, data = {}) => {
  return http.request({
    url: url + '/QueryPay',
		data: data,
		method: 'post'
  })
}

export const queryPayDetail = (url, data = {}) => {
  return http.request({
    url: url + '/QueryPayDetail',
		data: data,
		method: 'post'
  })
}