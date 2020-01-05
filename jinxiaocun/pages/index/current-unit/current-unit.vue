<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">				
			</uni-navbar>
			<uni-search-bar @input="handleSearch" placeholder="输入编码、名称、电话" cancelButton="always"></uni-search-bar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<uni-list>
					<uni-list-item :title="item.company" :note="'电话：'+item.mobile" v-for="(item, index) in searchDatas" :key="index" @tap="handleEdit(item)">
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
				title: '客户&供应商',
				datas: null,
				searchDatas: null
			}
		},
		onShow() {
			this.datas = uni.getStorageSync('customerList')
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
					url: './edit/edit?id='+val.id+'&company='+val.company+'&contacts='+val.contacts+'&type='+val.type+'&mobile='+val.mobile+'&address='+val.address+'&street='
								+val.street+'&email='+val.email+'&remarks='+val.remarks
				})
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
	@import '~@/uni.scss';
	.fill {
		width: 100%;
		height: 100%;
	}
	.container {
		height: 100vh;
		width: 100vw;
		.header {
			height: 15%;
		}
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
