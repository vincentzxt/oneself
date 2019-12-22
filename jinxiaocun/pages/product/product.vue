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
					<input v-model="searchKey" :adjust-position="false" type="text" placeholder-class="text-slave2" placeholder="输入编码、名称" confirm-type="search"></input>
				</view>
				<view class="action">
					<button class="cu-btn bg-blue round" @click="handleCancelSearch">取消</button>
				</view>
			</view>
		</view>
		<view class="content">
			<scroll-view :scroll-y="true" class="content-left">
				<view class="cu-list menu">
					<view class="cu-item" :class="item.name==curSelectType?'menuSelect':''" v-for="(item, index) in types" :key="index" @tap="handleSelectType(item.name)">
						<view class="item item-custom-left">
							<text>{{item.name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
			<scroll-view :scroll-y="true" class="content-right">
				<view class="cu-list action">
					<view class="cu-item" v-for="(item, index) in searchDatas" :key="index" @click="handleEdit(item)">
						<view class="item item-custom-right">
							<text>{{item.name}}</text>
							<view class="margin-top-xs text-sm text-slave">
								<text>编码：{{item.code}}</text>
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
			handleCancelSearch() {
				this.searchKey = ''
			}
		},
		watch: {
			searchKey(val) {
				if (val) {
					this.searchDatas = this.datas.filter((item) => {
						return item.name.indexOf(val) !== -1 || item.code.indexOf(val) !== -1
					})
					this.curSelectType = 0
				} else {
					this.searchDatas = this.datas
					this.curSelectType = 0
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
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.content-left {
				width: 30%;
				.item-custom-left {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.menuSelect {
					background-color: #f0faff;
					color: #5cadff;
				}
			}
			.content-right {
				width: 68%;
				.item-custom-right {
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin-left: 10upx;
				}
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
