<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">				
			</uni-navbar>
			<uni-search-bar @input="handleSearch" placeholder="输入速查码、名称、电话" cancelButton="always"></uni-search-bar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<uni-list>
					<uni-list-item :title="item.contactunitname" :note="'电话：'+item.bseContactUnitContactModels[0].telephone" v-for="(item, index) in searchDatas" :key="index" @tap="handleEdit(item)">
					</uni-list-item>
				</uni-list>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" @click="handleAdd">添加</button>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import getGlobalData from '@/utils/business.js'
	export default {
		components: {
			uniSearchBar,
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '客户&供应商',
				datas: null,
				searchDatas: null
			}
		},
		onLoad() {
		},
		onShow() {
			this.datas = uni.getStorageSync('currentUnitList')
			this.searchDatas = this.datas
		},
		onPullDownRefresh() {
			getGlobalData.getCurrentUnit()
			this.datas = uni.getStorageSync('currentUnitList')
			this.searchDatas = this.datas
			uni.stopPullDownRefresh()
		},
		computed: {
			headerHeight() {
				return this.$statusBarHeight + 88
			},
			mainHeight() {
				return 
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
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.datas.filter((item) => {
						return item.contactunitname.indexOf(val.value) !== -1 || item.querycode.indexOf(val.value) !== -1 || item.bseContactUnitContactModels[0].telephone.indexOf(val.value) !== -1
					})
				} else {
					this.searchDatas = this.datas
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/uni.scss';
	.fill {
		width: 100%;
		height: 100%;
	}
	.container {
		height: 100vh;
		width: 100vw;
		.main {
			height: 78%;
		}
		.footer {
			height: 7%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
	}
</style>
