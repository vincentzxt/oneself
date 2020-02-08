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
				<cu-cell title="分类名称">
					<input slot="footer" type="text" v-model="reqData.productcategoryname" placeholder="请输入分类名称"/>
				</cu-cell>
				<cu-cell title="是否启用" isLastCell>
					<radio-group slot="footer" @change="handleStatusChange">
						<radio color="#2db7f5" value=1 :checked="reqData.status == 1">是</radio>
						<radio color="#2db7f5" value=2 :checked="reqData.status == 2" style="margin-left: 10px;">否</radio>
					</radio-group>
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
	import { createProductCategory } from '@/api/product.js'
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
				title: '产品分类',
				datas: [],
				searchDatas: [],
				reqData: {
					productcategoryname: '',
					status: 1
				}
			}
		},
		onLoad(options) {
			this.name = options.name
		},
		onShow() {
			this.datas = uni.getStorageSync('productCategory').productCategories
			this.datas = this.datas.filter((item) => {
				return item !== '所有分类'
			})
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
				prevPage.setData(
					{ 
						rData: { key: 'type', value: val}
					}
				)
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
					productcategoryname: '',
					status: 1
				}
				this.$refs.popup.open()
			},
			handleStatusChange(val) {
				this.reqData.status = val.detail.value
			},
			handleAdd() {
				createProductCategory(api.baseProduct, this.reqData).then(res => {
					this.$refs.popup.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						getGlobalData.getProductCategory().then(res => {
							this.datas = uni.getStorageSync('productCategory').productCategories
							this.datas = this.datas.filter((item) => {
								return item !== '所有分类'
							})
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
	.container {
		.main {
			margin-top: 5px;
		}
		.footer {
			height: 48px;
		}
	}
	
</style>
