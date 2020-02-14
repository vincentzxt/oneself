<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">				
			</uni-navbar>
			<view class="header">
				<uni-search-bar style="width:80%;" @input="handleSearch" placeholder="速查码/名称/电话"></uni-search-bar>
				<view class="header-item" style="width:20%;" @tap="handleShowMenu">
					<view style="margin-right:5px;">筛选</view>
					<uni-icons v-if="showMenu" type="arrow-down" color="#2d8cf0" size=20></uni-icons>
					<uni-icons v-else type="arrow-up" color="#2d8cf0" size=20></uni-icons>
				</view>
			</view>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<view v-if="showMenu" class="main-menu">
				<view class="main-menu-item" v-for="(item, index) in menuList" :key="index" :style="{'border-bottom': index !== menuList.length-1 ? '0.5px solid #dddee1' : ''}" @tap="handleSelectMenu(index)">
					<view>{{item}}</view>
					<uni-icons v-if="curSelectMenu == index" type='right' color='#2d8cf0' size='20'></uni-icons>
				</view>
			</view>
			<scroll-view :scroll-y="true" class="fill">
				<uni-list>
					<uni-list-item :title="item.contactunitname" :note="['速查码：'+item.querycode, '电话：'+item.bseContactUnitContactModels[0].telephone]" v-for="(item, index) in searchDatas" :key="index" @tap="handleEdit(item)">
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
				searchDatas: null,
				showMenu: false,
				menuList: ['所有','客户','供应商','客户&供应商'],
				curSelectMenu: 0
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
			handleShowMenu() {
				this.showMenu = !this.showMenu
			},
			handleSelectMenu(val) {
				this.curSelectMenu = val
				if (val == 0) {
					this.searchDatas = this.datas
				} else {
					this.searchDatas = this.datas.filter((item)=>{
						return item.contactunittype == val
					})
				}
				this.showMenu = false
			},
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.searchDatas.filter((item) => {
						if (!item.contactunitname) {
							item.contactunitname = ''
						}
						if (!item.querycode) {
							item.querycode = ''
						}
						if (!item.bseContactUnitContactModels[0].telephone) {
							item.bseContactUnitContactModels[0].telephone = ''
						}
						return item.contactunitname.indexOf(val.value) !== -1 || item.querycode.toLowerCase().indexOf(val.value.toLowerCase()) !== -1 || item.bseContactUnitContactModels[0].telephone.indexOf(val.value) !== -1
					})
				} else {
					this.handleSelectMenu(this.curSelectMenu)
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
	.h50 {
		height: 50px;
	}
	.fc {
		display: flex;
		align-items: center;
	}
	.container {
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #ffffff;
			color: #2d8cf0;
			&-item {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.main {
			margin-top: 5px;
			&-menu {
				background-color: #ffffff;
				color: #2d8cf0;
				margin-bottom: 5px;
				display: flex;
				flex-direction: column;
				&-item {
					padding: 15px 20px;
					display: flex;
					justify-content: space-between;
				}
			}
		}
		.footer {
			height: 48px;
		}
	}
</style>
