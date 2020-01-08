import { query } from '@/api/common.js'
import { queryProductCategory } from '@/api/product.js'
import { api } from '@/config/common.js'

export default {
	curPage: '',
	getCurrentPage() {
		let pages = getCurrentPages()
		this.curPage = pages[pages.length - 1]
	},
	getCurrentUnit() {
		this.getCurrentPage()
		this.curPage.$vm.$refs.loading.open()
		return new Promise((resolve, reject) => {
			query(api.contactUnit).then(res => {
				console.log("#currentUnit#")
				console.log(res)
				this.curPage.$vm.$refs.loading.close()
				if (res && res.data.returnCode == '0000') {
					uni.setStorageSync('currentUnitList', res.data.data.resultList)
				} else {
					uni.setStorageSync('currentUnitList', [])
				}
				resolve('success')
			}).catch(error => {
				this.curPage.$vm.$refs.loading.close()
				uni.setStorageSync('currentUnitList', [])
				reject('error')
			})
		})
	},
	getBaseProduct() {
		this.getCurrentPage()
		this.curPage.$vm.$refs.loading.open()
		return new Promise((resolve, reject) => {
			query(api.baseProduct).then(res => {
				this.curPage.$vm.$refs.loading.close()
				console.log("#baseProduct#")
				console.log(res)
				if (res && res.data.returnCode == '0000') {
					uni.setStorageSync('productList', res.data.data.resultList)
				} else {
					uni.setStorageSync('productList', [])
				}
				resolve('success')
			}).catch(error => {
				this.curPage.$vm.$refs.loading.close()
				uni.setStorageSync('productList', [])
				reject('error')
			})
		})
	},
	getProductCategory() {
		this.getCurrentPage()
		this.curPage.$vm.$refs.loading.open()
		return new Promise((resolve, reject) => {
			queryProductCategory(api.baseProduct).then(res => {
				this.curPage.$vm.$refs.loading.close()
				console.log("#ProductCategory#")
				console.log(res)
				if (res && res.data.returnCode == '0000') {
					uni.setStorageSync('productCategory', res.data.data.productCategories)
				} else {
					uni.setStorageSync('productCategory', [])
				}
				resolve('success')
			}).catch(error => {
				this.curPage.$vm.$refs.loading.close()
				uni.setStorageSync('productCategory', [])
				reject('error')
			})
		})
	}
}