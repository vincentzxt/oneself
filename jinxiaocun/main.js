import Vue from 'vue'
import App from './App'
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
import uniIcons from '@/components/uni-icons/uni-icons.vue'

Vue.component('uni-navbar',uniNavBar)
Vue.component('uni-icons',uniIcons)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
