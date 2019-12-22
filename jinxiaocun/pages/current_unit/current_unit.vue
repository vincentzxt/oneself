<template>
	<view class="container">
		<view class="header">
			<cu-custom bgColor="bg-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">{{title}}</block>
			</cu-custom>
			<view class="cu-bar search bg-white">
				<view class="search-form round">
					<text class="cuIcon-search text-slave2"></text>
					<input v-model="searchKey" :adjust-position="false" type="text" placeholder-class="text-slave2" placeholder="输入编码、名称、电话" confirm-type="search"></input>
				</view>
				<view class="action">
					<button class="cu-btn bg-blue round" @click="handleCancelSearch">取消</button>
				</view>
			</view>
		</view>
		<view class="content">
			<scroll-view :scroll-y="true" class="fill">
				<view class="cu-list icon-action">
					<view class="cu-item" v-for="(item, index) in searchDatas" :key="index" @click="handleEdit(item)">
						<view class="icon">
							<text class="cuIcon-company"></text>
						</view>
						<view class="item item-custom">
							<text>{{item.company}}</text>
							<view class="margin-top-xs text-sm text-slave">
								<text>电话：{{item.mobile}}</text>
							</view>
						</view>
						<view class="action">
							<text class="cuIcon-arrow"></text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="cuIcon-add cu-btn bg-green fill" @click="handleAdd">添加</button>
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
				uni.navigateBack()
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
		.content {
			height: 75%;
			.item-custom {
				display: flex;
				flex-direction: column;
				justify-content: center;
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
