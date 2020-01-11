<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
			<uni-search-bar @input="handleSearch" placeholder="输入速查码/名称" cancelButton="always"></uni-search-bar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true" class="main-left">
				<uni-list>
					<uni-list-item :title="item" :class="item==curSelectType?'menuSelect':''" :show-arrow="false" v-for="(item, index) in productCategory" :key="index" @tap="handleSelectType(item)">
					</uni-list-item>
				</uni-list>
			</scroll-view>
			<scroll-view :scroll-y="true" class="main-right">
				<uni-list>
					<uni-list-item :title="item.productname" :note="'速查码：'+item.querycode" v-for="(item, index) in searchDatas" :key="index" @tap="handleEdit(item)">
					</uni-list-item>
				</uni-list>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" @click="handleAdd">添加</button>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniSearchBar,
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '产品',
				productCategory: null,
				datas: null,
				searchDatas: null,
				searchKey: '',
				curSelectType: '所有分类'
			}
		},
		onShow() {
			this.productCategory = uni.getStorageSync('productCategory').productCategories
			this.productCategory.unshift('所有分类')
			this.datas = uni.getStorageSync('productList')
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
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleAdd() {
				uni.navigateTo({
					url: './add/add'
				})
			},
			handleEdit(val) {
				uni.navigateTo({
					url: './edit/edit?item=' + JSON.stringify(val)
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
			},
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.datas.filter((item) => {
						return item.productname.indexOf(val.value) !== -1 || item.querycode.indexOf(val.value) !== -1
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
			display: flex;
			justify-content: space-between;
			margin-top: 5px;
			.main-left {
				width: 30%;
				.menuSelect {
					background-color: $uni-bg-color-hover;
					color: #fff;
				}
			}
			.main-right {
				width: 69%;
			}
		}
		.footer {
			height: 48px;
		}
	}
</style>
