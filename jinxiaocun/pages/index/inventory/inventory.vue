<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
			<view class="header">
				<view class="header-type" @tap="handleTypeMenuOpen">
					<uni-icons type="type" color="#808695" size=30></uni-icons>
				</view>
				<view style="width:100%">
					<uni-search-bar @input="handleSearch" placeholder="名称"></uni-search-bar>
				</view>
			</view>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<uni-drawer :visible="typeMenu" :mask='false' @close="handleTypeMenuClose" :top="headerHeight+5" bottom=48>
				<scroll-view :scroll-y="true" class="typeMenu">
					<uni-list>
						<uni-list-item :title="item" :class="item==curSelectType?'menuSelect':''" :show-arrow="false" v-for="(item, index) in productCategory" :key="index" @tap="handleSelectType(item)">
						</uni-list-item>
					</uni-list>
				</scroll-view>
			</uni-drawer>
			<scroll-view :scroll-y="true">
				<view class="product-header">
					<view class="product-header-item" @tap="handleSelectAll">全选</view>
					<view class="product-header-item" style="margin-left: 20px;" @tap="handleNoneSelectAll">取消全选</view>
				</view>
				<view class="product-main">
					<view class="product-wrap" v-for="(item, index) in searchDatas" :key="index" @tap="handleClickItem(item)" :class="index == searchDatas.length - 1 ? 'product-wrap-last' : ''">
						<view class="product-wrap-icon">
							<checkbox color="#2db7f5" :checked="item.checked"></checkbox>
						</view>
						<view class="product-wrap-content">
							<view style="width:50%;">{{item.productname}}</view>
							<view style="color: #808695; width:50%;">库存：{{item.qty}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" @click="handleNext">下一步</button>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	import { cloneObj } from '@/utils/tools.js'
	import { api } from '@/config/common.js'
	import { query } from '@/api/common.js'
	export default {
		components: {
			uniSearchBar,
			uniList,
			uniListItem,
			uniDrawer
		},
		data() {
			return {
				title: '盘点',
				productCategory: null,
				datas: null,
				searchDatas: null,
				searchKey: '',
				curSelectType: '所有分类',
				typeMenu: false,
				productList: []
			}
		},
		onLoad() {
			this.productCategory = uni.getStorageSync('productCategory').productCategories
			this.productCategory.unshift('所有分类')
			let reqData = {
				productid: 0,
				productcategory: '',
				brand: '',
				pageIndex: 1,
				pageRows: -1
			}
			this.$refs.loading.open()
			query(api.stkStock, reqData).then(res => {
				this.$refs.loading.close()
				if (res.status == 200 && res.data.returnCode == '0000') {
					this.datas = res.data.data.resultList
					for (let item of this.datas) {
						this.$set(item, 'checked', false)
					}
					console.log(this.datas)
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
			handleSelectType(type) {
				this.curSelectType = type
				if (type !== '所有分类') {
					this.searchDatas = this.datas.filter((item) => {
						return item.productcategory == type
					})
				} else {
					this.searchDatas = this.datas
				}
				this.handleTypeMenuClose()
			},
			handleClickItem(val) {
				if (!val.checked) {
					this.productList.push(val)
					val.checked = true
				} else {
					this.productList = this.productList.filter((item) => {
						return item.productid !== val.productid
					})
					val.checked = false
				}
			},
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.datas.filter((item) => {
						return item.productname.indexOf(val.value) !== -1
					})
				} else {
					this.searchDatas = this.datas
				}
			},
			handleTypeMenuOpen() {
				this.typeMenu = !this.typeMenu
			},
			handleTypeMenuClose() {
				this.typeMenu = false
			},
			handleSelectAll() {
				this.productList = []
				for (let item of this.searchDatas) {
					item.checked = true
					this.productList.push(item)
				}
			},
			handleNoneSelectAll() {
				this.productList = []
				for (let item of this.searchDatas) {
					item.checked = false
				}
			},
			handleNext() {
				uni.navigateTo({
					url: './add/add?productList=' + JSON.stringify(this.productList)
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
		.header {
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			&-type {
				margin-left: 10px;
				margin-right: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.main {
			display: flex;
			justify-content: space-between;
			margin-top: 5px;
			.typeMenu {
				.menuSelect {
					background-color: $uni-bg-color-hover;
					color: #fff;
				}
			}
			.product-header {
				background-color: #FFFFFF;
				display: flex;
				align-items: center;
				padding: 10px 0px 10px 20px;
				&-item {
					color: $uni-color-primary;
				}
			}
			.product-main {
				margin-top: $uni-spacing-col-sm;
				.product-wrap {
					position: relative;
					background-color: #FFFFFF;
					padding: 20px;
					display: flex;
					&::after{
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 200%;
						height: 200%;
						transform: scale(.5);
						transform-origin: 0 0;
						pointer-events: none;
						box-sizing: border-box;
						border: 0 solid $uni-split-color;
						border-bottom-width: 1px;
						left: 15px;
						right: 0;
					}
					&-last::after{
					    display: none;
					}
					&-icon {
						width: 10%;
					}
					&-content {
						width: 90%;
						display: flex;
						align-items: center;
					}
				}
			}
		}
		.footer {
			height: 48px;
		}
	}
</style>
