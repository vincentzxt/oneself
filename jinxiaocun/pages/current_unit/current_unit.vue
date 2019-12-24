<template>
	<view class="container">
		<view class="header">
			<cu-custom bgColor="bg-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">{{title}}</block>
			</cu-custom>
			<view class="cu-bar search bg-white">
				<view class="search-form">
					<text class="cuIcon-search text-disabled"></text>
					<input v-model="searchKey" :adjust-position="false" type="text" placeholder-class="text-disabled" placeholder="输入编码、名称、电话" confirm-type="search"></input>
				</view>
				<view class="action">
					<button class="cu-btn bg-blue" @click="handleCancelSearch">取消</button>
				</view>
			</view>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<view class="cu-list menu sm-border">
					<view class="cu-item arrow" v-for="(item, index) in searchDatas" :key="index" @click="handleEdit(item)">
						<view class="content padding-tb-sm">
							<view>
								<text class="cuIcon-company text-orange"></text>
								<text class="margin-left-sm">{{item.company}}</text>
							</view>
							<view class="text-sub text-sm margin-top-xs">
								<text class="margin-left-xl">电话：{{item.mobile}}</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="cu-btn cuIcon-add bg-blue fill" @click="handleAdd">添加</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '客户&供应商',
				datas: null,
				searchDatas: null,
				searchKey: ''
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
			handleCancelSearch() {
				this.searchKey = ''
			}
		},
		watch: {
			searchKey(val) {
				if (val) {
					this.searchDatas = this.datas.filter((item) => {
						return item.company.indexOf(val) !== -1 || item.code.indexOf(val) !== -1 || item.mobile.indexOf(val) !== -1
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
		}
		.footer {
			height: 7%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
	}
</style>
