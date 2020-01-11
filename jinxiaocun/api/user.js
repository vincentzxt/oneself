 import http from '@/utils/http.js'
 export const post = (url, data = {}) => {
    return http.request({
      url: url,
  		data: data,
  		method: 'post'
    })
}
 export const tokenget = (url, id=0, data = {}) => {
    return http.request({
      url: url+id,
  		data: data,
  		method: 'post'
    })
}
 export const tokenpost = (url,data = {}) => {
	 // const token = uni.getStorageSync('userInfo').token;
	 // const headers = {
		//  'Content-Type': 'application/json',
		//  'Authorization': "Bearer "+ token
	 // }
    return http.request({
      url: url,
  		data: data,
  		method: 'post'
    })
}