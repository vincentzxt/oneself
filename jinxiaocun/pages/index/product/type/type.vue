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
				name: '',
				title: '产品分类',
				datas: null,
				searchDatas: null
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
