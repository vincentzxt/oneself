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
				success: (res) => {
					console.log(res)
				}
			})
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
	page {
		font-size: $uni-font-size-base;
		color: $uni-text-color;
		background-color: $uni-bg-color;
	}
	/*每个页面公共css */
</style>
