<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
			<uni-search-bar @input="handleSearch" placeholder="输入编码、名称" cancelButton="always"></uni-search-bar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="main-left">
				<uni-list>
					<uni-list-item :title="item.name" :class="item.name==curSelectType?'menuSelect':''" :show-arrow="false" v-for="(item, index) in types" :key="index" @tap="handleSelectType(item.name)">
					</uni-list-item>
				</uni-list>
			</scroll-view>
			<scroll-view :scroll-y="true" class="main-right">
				<uni-list>
					<uni-list-item :title="item.name" :note="'编码：'+item.code" v-for="(item, index) in searchDatas" :key="index" @tap="handleEdit(item)">
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
				types: null,
				datas: null,
				searchDatas: null,
				searchKey: '',
				curSelectType: '所有分类'
			}
		},
		onShow() {
			this.types = uni.getStorageSync('productType')
			this.datas = uni.getStorageSync('productList')
			this.searchDatas = this.datas
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
					url: './edit/edit?id='+val.id+'&name='+val.name+'&type='+val.type+'&masterUnit='+val.masterUnit+'&slaveUnit='+val.slaveUnit+
								'&multiple='+val.multiple+'&remarks='+val.remarks
				})
			},
			handleSelectType(name) {
				this.curSelectType = name
				if (name !== '所有分类') {
					this.searchDatas = this.datas.filter((item) => {
						return item.type == name
					})
				} else {
					this.searchDatas = this.datas
				}
			},
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.datas.filter((item) => {
						return item.company.indexOf(val.value) !== -1 || item.code.indexOf(val.value) !== -1 || item.mobile.indexOf(val.value) !== -1
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
		height: 100vh;
		width: 100vw;
		.header {
			height: 18%;
		}
		.main {
			height: 75%;
			display: flex;
			justify-content: space-between;
			.main-left {
				width: 30%;
				.menuSelect {
					background-color: $uni-bg-color-hover;
					color: #fff;
				}
			}
			.main-right {
				width: 68%;
			}
		}
		.footer {
			height: 7%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
	}
</style>
