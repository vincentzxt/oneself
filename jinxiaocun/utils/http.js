import axios from '@/js-sdk/uni-axios'
import { api } from '@/config/common.js'

// 创建自定义接口服务实例
const http = axios.create({
    baseURL: api.baseUrl,
    timeout: 6000,
    // #ifdef H5
    withCredentials: true,
    // #endif
    headers: {
        'Content-Type': 'application/json',
        //'X-Requested-With': 'XMLHttpRequest',
    },
})

// 拦截器 在请求之前拦截
http.interceptors.request.use(config => {
	let userInfo = uni.getStorageSync('userInfo')
	if (userInfo.token) {
		config.headers.Authorization = 'Bearer ' + userInfo.token
	}
    // code...
    // 获取本地存储的Cookie
    // const cookie = uni.getStorageSync('cookie')
    // 设置Cookie
    // config.headers.Cookie = cookie
    return config
})

// 拦截器 在请求之后拦截
http.interceptors.response.use(response => {
    // code...
    // 获取cookie
    // let headerStr = JSON.stringify(response.headers)
    // let cookie = (/(?:Set-Cookie).+;/.exec(headerStr)[0]).replace(/Set-Cookie|:|"/g, "")
    // if (cookie) {
        // uni.setStorage({
            // key: 'cookie',
            // data: cookie.split(';')[0]
        // })
    // }
	// 
	const url =response.config.url;
	if(url.includes("GetUserInfo")== false){
		if (response.status == 200){
			if(response.data.returnCode == '401'){		
				uni.reLaunch({
					url: '/pages/my/login/login'
				});
			}
			if(response.data.returnCode == '402'){
				uni.reLaunch({
					url: '/pages/my/login/login'
				});
			}
		}
	}
    return response;
}, error => {
    return Promise.reject(error.message)
})

export default http