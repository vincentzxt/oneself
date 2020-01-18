<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
			<uni-search-bar @input="handleSearch" placeholder="输入订单金额/生成时间" cancelButton="always"></uni-search-bar>
		</view>
		<view class="main">
			<uni-collapse>
				<uni-collapse-item v-if="businessType == 0" :title="item1.purchaseorderid" :name="item1.purchaseorderid" :note="'订单金额：' + item1.amount +'元|订单创建时间：' + item1.createtime" 
				isIcon :icon="{type:'payment', color:'#ff9900', size:15}" v-for="(item1, index1) in searchDatas" :key="index1" @onArrow="handleOnArrow(item1)" @onReturn="handleOnReturn(item1)">
					<view class="product-list">
						<text style="display: inline-block;color:#2d8cf0;width: 30%;">商品名称</text>
						<text style="display: inline-block;color:#2d8cf0;width: 20%;">计量单位</text>
						<text style="display: inline-block;color:#2d8cf0;width:20%;">数量</text>
						<view v-for="(i1, index1) in item1.productList" :key="index1">
							<text style="display: inline-block;width: 30%;">{{i1.productname}}</text>
							<text style="display: inline-block;width: 20%;">{{i1.unit}}</text>
							<text style="display: inline-block;width:20%;">{{i1.qty}}</text>
						</view>
					</view>
				</uni-collapse-item>
				<uni-collapse-item v-else :title="item.salesorderid" :name="item.salesorderid" :note="'订单金额：' + item.amount +'元|订单创建时间：' + item.createtime"
				isIcon :icon="{type:'payment', color:'#ff9900', size:15}" v-for="(item, index) in searchDatas" :key="index" @onArrow="handleOnArrow(item)" @onReturn="handleOnReturn(item)">
					<view class="product-list">
						<text style="display: inline-block;color:#2d8cf0;width: 30%;">商品名称</text>
						<text style="display: inline-block;color:#2d8cf0;width: 20%;">计量单位</text>
						<text style="display: inline-block;color:#2d8cf0;width:20%;">数量</text>
						<view v-for="(i, index) in item.productList" :key="index">
							<text style="display: inline-block;width: 30%;">{{i.productname}}</text>
							<text style="display: inline-block;width: 20%;">{{i.unit}}</text>
							<text style="display: inline-block;width:20%;">{{i.salesqty}}</text>
						</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import { api } from '@/config/common.js'
	import { query, getForReturn } from '@/api/common.js'
	export default {
		components: {
			uniSearchBar,
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				businessType: '',
				currentUnitId: '',
				title: '订单列表',
				datas: null,
				searchDatas: null
			}
		},
		onLoad(options) {
			this.businessType = options.businessType
			this.currentUnitId = options.currentUnitId
			if (this.currentUnitId) {
				this.$refs.loading.open()
				if (this.businessType == '0') {
					query(api.purPurchaseOrder, { contactunitid: this.currentUnitId }).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							this.datas = res.data.data.resultList
							this.$set(this.datas, 'productList', [])
							this.searchDatas = this.datas
							console.log("1")
							console.log(this.datas)
						}
					}).catch(error => {
						this.$refs.loading.close()
					})
				} else {
					query(api.salesOrder, { contactunitid: this.currentUnitId }).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							this.datas = res.data.data.resultList
							this.$set(this.datas, 'productList', [])
							this.searchDatas = this.datas
							console.log("2")
							console.log(this.datas)
						}
					}).catch(error => {
						this.$refs.loading.close()
					})
				}
			}
		},
		onShow() {
		},
		computed: {
			headerHeight() {
				return this.$headerIsSearchHeight
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			getPurchaseOrderById(id, oper) {
				this.$refs.loading.open()
				getForReturn(api.purPurchaseOrder, id).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.searchDatas = this.searchDatas.map((item) => {
							if (item.purchaseorderid == id && !item.productList) {
								this.$set(item, 'productList', res.data.data.detailModels)
							}
							return item
						})
						this.datas = this.datas.map((item) => {
							if (item.purchaseorderid == id && !item.productList) {
								this.$set(item, 'productList', res.data.data.detailModels)
							}
							return item
						})
						if (oper == 'return') {
							let pages =  getCurrentPages()
							let prevPage = pages[pages.length - 2]
							prevPage.setData({
								productList: res.data.data.detailModels,
							})
							uni.navigateBack({
								delta: 1
							})
						}
					}
				}).catch(error => {
					this.$refs.loading.close()
				})
			},
			getSaleOrderById(id, oper) {
				this.$refs.loading.open()
				getForReturn(api.salesOrder, id).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.searchDatas = this.searchDatas.map((item) => {
							if (item.salesorderid == id && !item.productList) {
								this.$set(item, 'productList', res.data.data.detailModels)
							}
							return item
						})
						this.datas = this.datas.map((item) => {
							if (item.salesorderid == id && !item.productList) {
								this.$set(item, 'productList', res.data.data.detailModels)
							}
							return item
						})
						if (oper == 'return') {
							let pages =  getCurrentPages()
							let prevPage = pages[pages.length - 2]
							prevPage.setData({
								productList: res.data.data.detailModels,
							})
							uni.navigateBack({
								delta: 1
							})
						}
					}
				}).catch(error => {
					this.$refs.loading.close()
				})
			},
			handleOnArrow(item) {
				if (!item.productList) {
					if (this.businessType == 0) {
						this.getPurchaseOrderById(item.purchaseorderid, 'load')
					} else {
						this.getSaleOrderById(item.salesorderid, 'load')
					}
				}
			},
			handleOnReturn(item) {
				if (!item.productList) {
					if (this.businessType == 0) {
						this.getPurchaseOrderById(item.purchaseorderid, 'return')
					} else {
						this.getSaleOrderById(item.salesorderid, 'return')
					}
				} else {
					let pages =  getCurrentPages()
					let prevPage = pages[pages.length - 2]
					prevPage.setData({
						productList: item.productList,
					})
					uni.navigateBack({
						delta: 1
					})
				}
			},
			filterItem(item) {
				return { 'name': item }
			},
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.datas.filter((item) => {
						return String(item.amount).indexOf(val.value) !== -1 || item.createtime.indexOf(val.value) !== -1
					})
				} else {
					this.searchDatas = this.datas
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.fill {
		width: 100%;
		height: 100%;
	}
	.container {
		.main {
			margin-top: 5px;
			.product-list {
				font-size: 12px;
				margin-left: 10%;
				margin-bottom: 5px;
			}
		}
	}
</style>
