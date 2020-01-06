import Vue from 'vue'
import App from './App'
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
import uniIcons from '@/components/uni-icons/uni-icons.vue'

Vue.component('uni-navbar',uniNavBar)
Vue.component('uni-icons',uniIcons)

Vue.config.productionTip = false

App.mpType = 'app'
//统一提示方便全局修改
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
Vue.prototype.$api = {msg}; 

const app = new Vue({
    ...App
})
app.$mount()
