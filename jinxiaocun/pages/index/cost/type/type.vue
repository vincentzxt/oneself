<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
			<uni-search-bar @input="handleSearch" placeholder="名称"></uni-search-bar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true" class="fill">
				<uni-list>
					<uni-list-item 
						:title="item.feecategoryname"
						v-for="(item, index) in searchDatas"
						:show-arrow="false"
						:key="item.feecategoryid"
						@clickContent="handleClickContent(item)"
						showSwitch
						:switchChecked="item.status == 1 ? true : false"
						@switchChange="handleStatusChange($event, item)">
					</uni-list-item>
				</uni-list>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" @click="handleShowPopup">添加</button>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="popup-wrap">
				<view class="popup-wrap-header">
					<text style="margin-left:5px;font-weight: bold;">添加费用类型</text>
				</view>
				<view class="popup-wrap-content">
					<cu-cell title="类型名称" isLastCell>
						<input class="h50" slot="footer" type="text" v-model="reqData.feecategoryname" placeholder="请输入类型名称"/>
					</cu-cell>
				</view>
				<view class="popup-wrap-footer">
					<button class="popup-wrap-footer-cancel" type="primary" @tap="handleCancel">取消</button>
					<button class="popup-wrap-footer-add" type="primary" @tap="handleAdd">添加</button>
				</view>
			</view>
		</uni-popup>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import { api } from '@/config/common.js'
	import { queryFeeCategory, createFeeCategory, enableFeeCategory, disableFeeCategory } from '@/api/capfee.js'
	import getGlobalData from '@/utils/business.js'
	export default {
		components: {
			uniSearchBar,
			cuPanel,
			cuCell,
			uniList,
			uniListItem,
			uniPopup
		},
		data() {
			return {
				title: '费用类型',
				datas: [],
				searchDatas: [],
				reqData: {
					feecategoryname: '',
					status: 1
				}
			}
		},
		onLoad() {
		},
		onShow() {
			this.getFeeCategory()
		},
		computed: {
			headerHeight() {
				return this.$headerIsSearchHeight
			},
			mainHeight() {
				return this.$mainIsSearchHeight
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			getFeeCategory() {
				this.$refs.loading.open()
				queryFeeCategory(api.capFee).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.datas = res.data.data.resultList
						this.searchDatas = this.datas
					} else {
						uni.showToast({
							icon: 'none',
							title: res.data.returnMessage
						})
					}
				}).catch(error => {
					this.$refs.loading.close()
					uni.showToast({
						icon: 'none',
						title: error
					})
				})
			},
			handleClickContent(val) {
				if (val.status == 2) {
					uni.showToast({
						icon: 'none',
						title: '请先启用该类型'
					})
				} else {
					let pages = getCurrentPages()
					let prevPage = pages[pages.length - 2]
					prevPage.setData(
						{ 
							rData: val.feecategoryname
						}
					)
					uni.navigateBack({
						delta: 1
					})
				}
			},
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.datas.filter((item) => {
						if (!item.feecategoryname) {
							item.feecategoryname = ''
						}
						return item.feecategoryname.indexOf(val.value) !== -1
					})
				} else {
					this.searchDatas = this.datas
				}
			},
			handleShowPopup() {
				this.reqData = {
					feecategoryname: '',
					status: 1
				}
				this.$refs.popup.open()
			},
			handleStatusChange(val, item) {
				if (val.value) {
					this.$refs.loading.open()
					enableFeeCategory(api.capFee, item.feecategoryid).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							this.getFeeCategory()
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.returnMessage
							})
						}
					}).catch(error => {
						this.$refs.loading.close()
						uni.showToast({
							icon: 'none',
							title: error
						})
					})
				} else {
					this.$refs.loading.open()
					disableFeeCategory(api.capFee, item.feecategoryid).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							this.getFeeCategory()
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.returnMessage
							})
						}
					}).catch(error => {
						this.$refs.loading.close()
						uni.showToast({
							icon: 'none',
							title: error
						})
					})
				}
			},
			handleAdd() {
				if (this.reqData.feecategoryname) {
					this.$refs.loading.open()
					createFeeCategory(api.capFee, this.reqData).then(res => {
						this.$refs.loading.close()
						this.$refs.popup.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							this.getFeeCategory()
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.returnMessage
							})
						}
					}).catch(error => {
						this.$refs.loading.close()
						uni.showToast({
							icon: 'none',
							title: error
						})
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: '请输入类型名称'
					})
				}
			},
			handleCancel() {
				this.$refs.popup.close()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.fill {
		width: 100%;
		height: 100%;
	}
	.h50 {
		height: 50px;
	}
	.fc {
		display: flex;
		align-items: center;
	}
	.container {
		.main {
			margin-top: 5px;
		}
		.footer {
			height: 48px;
		}
		.popup-wrap {
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			border-radius: 5px;
			&-header {
				padding: 15px 10px;
				display: flex;
				align-items: center;
				color: #ffffff;
				background-color: #2d8cf0;
			}
			&-content {
				display: flex;
				padding: 10px 0px;
			}
			&-footer {
				display: flex;
				align-items: center;
				justify-content: space-around;
				padding: 10px;
				border-top: 0.5px solid $uni-border-color;
				&-add {
					background-color: #2d8cf0;
					font-size: $uni-font-size-base;
				}
				&-cancel {
					background-color: #ffffff;
					border-width: 0px;
					font-size: $uni-font-size-base;
					color: #808695;
				}
			}
		}
	}
	
</style>
