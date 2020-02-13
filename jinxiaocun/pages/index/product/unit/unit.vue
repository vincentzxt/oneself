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
					<uni-list-item :title="item" v-for="(item, index) in searchDatas" :show-arrow="false" :key="index" @clickItem="handleClickItem(item)">
					</uni-list-item>
				</uni-list>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" @click="handleShowPopup">添加</button>
		</view>
		<uni-popup ref="popup" type="bottom">
			<cu-panel>
				<cu-cell title="计量单位名称">
					<input class="h50" slot="footer" type="text" v-model="reqData.unit" placeholder="计量单位名称"/>
				</cu-cell>
			</cu-panel>
			<button style="background-color: #2d8cf0;" type="primary" @tap="handleAdd">添加</button>
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
	import { createProductUnit } from '@/api/product.js'
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
				name: '',
				title: '计量单位',
				datas: [],
				searchDatas: [],
				reqData: {
					unit: ''
				}
			}
		},
		onLoad(options) {
			this.name = options.name
		},
		onShow() {
			console.log(uni.getStorageSync('productCategory').units)
			for (let item of uni.getStorageSync('productCategory').units) {
				this.datas.push(item.unit)
			}
			this.searchDatas = this.datas
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
			handleClickItem(val) {
				let pages = getCurrentPages()
				let prevPage = pages[pages.length - 2]
				if (this.name == 'unit') {
					prevPage.setData(
						{ 
							rData: { key: 'unit', value: val}
						}
					)
				} else {
					prevPage.setData(
						{ 
							rData: { key: 'subUnit', value: val}
						}
					)
				}
				
				uni.navigateBack({
					delta: 1
				})
			},
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.datas.filter((item) => {
						if (!item) {
							item = ''
						}
						return item.indexOf(val.value) !== -1
					})
				} else {
					this.searchDatas = this.datas
				}
			},
			handleShowPopup() {
				this.reqData = {
					unit: '',
					status: 1
				}
				this.$refs.popup.open()
			},
			handleStatusChange(val) {
				this.reqData.status = val.detail.value
			},
			handleAdd() {
				createProductUnit(api.baseProduct, this.reqData).then(res => {
					this.$refs.popup.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						getGlobalData.getProductCategory().then(res => {
							this.datas = []
							for (let item of uni.getStorageSync('productCategory').units) {
								this.datas.push(item.unit)
							}
							this.searchDatas = this.datas
						})
					} else {
						uni.showToast({
							icon: 'none',
							title: res.data.returnMessage
						})
					}
				}).catch(error => {
					uni.showToast({
						icon: 'none',
						title: error
					})
				})
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
	.container {
		.main {
			margin-top: 5px;
		}
		.footer {
			height: 48px;
		}
	}
	
</style>
