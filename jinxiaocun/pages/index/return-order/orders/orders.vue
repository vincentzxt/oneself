<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
			<uni-search-bar @input="handleSearch" placeholder="输入名称" cancelButton="always"></uni-search-bar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell-group>
						<cu-cell :title="item" v-for="(item, index) in searchDatas" :key="index" isReturn :rName="name" :rDatas="filterItem(item)">
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import { api } from '@/config/common.js'
	import { get } from '@/api/common.js'
	export default {
		components: {
			uniSearchBar,
			cuPanel,
			cuCell,
			cuCellGroup
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
			console.log(options)
			this.businessType = options.businessType
			this.currentUnitId = options.currentUnitId
			if (this.currentUnitId) {
				console.log("1")
				this.$refs.loading.open()
				if (this.businessType == '0') {
					console.log("2")
					get(api.purPurchaseOrder, this.currentUnitId).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							this.datas = res.data.data.resultList
							this.searchDatas = this.datas
						}
					}).catch(error => {
						this.$refs.loading.close()
					})
				} else {
					console.log("3")
					get(api.salesOrder, this.currentUnitId).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							this.datas = res.data.data.resultList
							this.searchDatas = this.datas
						}
					}).catch(error => {
						this.$refs.loading.close()
					})
				}
				console.log(this.datas)
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
			filterItem(item) {
				return { 'name': item }
			},
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.datas.filter((item) => {
						return item.indexOf(val.value) !== -1
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
		}
	}
</style>
