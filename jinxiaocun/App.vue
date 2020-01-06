<script>
	import Vue from 'vue'
	import { query } from '@/api/common.js'
	import { queryProductCategory } from '@/api/product.js'
	import { api } from '@/config/common.js'
	export default {
		data() {
			return {
			}
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
				}
			})
			this.getCurrentUnit()
			this.getBaseProduct()
			this.getProductCategory()
		},
		methods: {
			getCurrentUnit() {
				query(api.contactUnit).then(res => {
					if (res && res.data.returnCode == '0000') {
						uni.setStorageSync('currentUnitList', res.data.data.resultList)
					} else {
						uni.setStorageSync('currentUnitList', [])
					}
				}).catch(error => {
					uni.setStorageSync('currentUnitList', [])
					console.log(error)
				})
			},
			getBaseProduct() {
				query(api.baseProduct).then(res => {
					if (res && res.data.returnCode == '0000') {
						uni.setStorageSync('productList', res.data.data.resultList)
					} else {
						uni.setStorageSync('productList', [])
					}
				}).catch(error => {
					uni.setStorageSync('productList', [])
					console.log(error)
				})
			},
			getProductCategory() {
				queryProductCategory(api.baseProduct).then(res => {
					console.log(res)
					if (res && res.data.returnCode == '0000') {
						uni.setStorageSync('productCategory', res.data.data.productCategories)
					} else {
						uni.setStorageSync('productCategory', [])
					}
				}).catch(error => {
					uni.setStorageSync('productCategory', [])
					console.log(error)
				})
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
