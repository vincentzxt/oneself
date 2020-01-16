import Vue from 'vue'
import App from './App'
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
import uniIcons from '@/components/uni-icons/uni-icons.vue'
import cuLoading from '@/components/custom/cu-loading.vue'

Vue.component('uni-navbar',uniNavBar)
Vue.component('uni-icons',uniIcons)
Vue.component('cu-loading',cuLoading)

Vue.config.productionTip = false

App.mpType = 'app'
//统一提示方便全局修改
const login_check = function (){
	if(!uni.getStorageSync('userInfo')){
		uni.reLaunch({
			url:'/pages/my/login/login'
		})
	};
}
const login_status = function (){
	if(!uni.getStorageSync('userInfo')){
		 return false;
	}else{
		return true;
	};
}
const login =function(){
	uni.navigateTo({
		url: '/pages/my/login/login'
	});
}
const msg = (title,  icon='none',duration=2000, mask=false)=>{
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
} 
Vue.prototype.$api = {msg,login_status,login,login_check}; 

const app = new Vue({
    ...App
})
app.$mount()
