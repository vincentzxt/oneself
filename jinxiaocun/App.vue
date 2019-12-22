<script>
	import Vue from 'vue'
	import { customerList } from '@/static/test-data/customer.js'
	import { productType, productUnit, productList } from '@/static/test-data/product.js'
	
	export default {
		data() {
			return {
				customerList,
				productType,
				productUnit,
				productList
			}
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					Vue.prototype.StatusBar = e.statusBarHeight
					let custom = wx.getMenuButtonBoundingClientRect()
					Vue.prototype.Custom = custom
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight
				}
			}),
			this.getGlobalData()
		},
		methods: {
			getGlobalData() {
				if (this.customerList && this.customerList.length > 0) {
					uni.setStorageSync('customerList', this.customerList)
				}
				if (this.productType && this.productType.length > 0) {
					uni.setStorageSync('productType', this.productType)
				}
				if (this.productUnit && this.productUnit.length > 0) {
					uni.setStorageSync('productUnit', this.productUnit)
				}
				if (this.productList && this.productList.length > 0) {
					uni.setStorageSync('productList', this.productList)
				}
			}
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
</style>
