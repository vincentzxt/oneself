<template>
	<view class="container">
		<view class="header">
			<cu-custom bgColor="bg-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">{{title}}</block>
			</cu-custom>
			<view class="cu-bar search bg-white">
				<view class="search-form text-white">
					<text class="cuIcon-search text-disabled"></text>
					<input v-model="searchKey" :adjust-position="false" type="text" placeholder-class="text-disabled" placeholder="输入名称" confirm-type="search"></input>
				</view>
				<view class="action">
					<button class="cu-btn bg-blue" @tap="handleCancelSearch">取消</button>
				</view>
			</view>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<view class="cu-list menu sm-border">
					<view class="cu-item" v-for="(item, index) in searchDatas" :key="index">
						<view class="content" @tap="handleReturnItem(item)">
							<text>{{item.name}}</text>
						</view>
						<view class="action flex justify-center align-center" style="width:20%; height: 140upx;" @tap="handleShowEditModal(item)">
							<text class="cuIcon-edit text-sub"></text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="cuIcon-add cu-btn bg-blue fill" @tap="handleShowAddModal">添加</button>
		</view>
		<view class="cu-modal bottom-modal" :class="showAddModal?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-blue">
					<view class="content">添加计量单位</view>
				</view>
				<form>
					<view class="cu-form-group">
						<view class="title">计量单位名称</view>
						<input type="text" name="addUnitName" v-model="addUnitName" placeholder-class="text-disabled" placeholder="请输入计量单位名称"/>
					</view>
				</form>
				<view class="cu-bar dialog-footer ">
					<view class="action bg-disabled dialog-footer-left"  @tap="handleHideAddModal">取消</view>
					<view class="action bg-blue dialog-footer-right" @tap="handleAdd">确定</view>
				</view>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="showEditModal?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-blue text-white">
						<view class="content">修改计量单位</view>
					</view>
					<form>
						<view class="cu-form-group">
							<view class="title">计量单位名称</view>
							<input type="text" name="editTypeName" v-model="editUnitName" placeholder-class="text-disabled" placeholder="请输入计量单位名称"/>
						</view>
					</form>
					<view class="cu-bar dialog-footer">
						<view class="action bg-disabled dialog-footer-left"  @tap="handleHideEditModal">取消</view>
						<view class="action bg-blue dialog-footer-right" @tap="handleEdit">确定</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '计量单位',
				datas: null,
				searchDatas: null,
				searchKey: '',
				showAddModal: false,
				showEditModal: false,
				addUnitName: '',
				editUnitName: ''
			}
		},
		onLoad(options) {
		},
		onShow() {
			this.datas = uni.getStorageSync('productUnit')
			this.searchDatas = this.datas
		},
		methods: {
			handleShowAddModal() {
				this.addUnitName = ''
				this.$nextTick(function(){
					this.showAddModal = true
				})
			},
			handleReturnItem(val) {
				let pages =  getCurrentPages()
				let prevPage = pages[pages.length - 2]
				prevPage.setData({
					selectUnit: val
				})
				uni.navigateBack({
					delta: 1
				})
			},
			handleShowEditModal(val) {
				this.editUnitName = val.name
				this.$nextTick(function(){
					this.showEditModal = true
				})
			},
			handleHideAddModal() {
				this.showAddModal = false
			},
			handleHideEditModal() {
				this.showEditModal = false
			},
			handleAdd() {
				if (this.addUnitName) {
					this.datas.push({ name: this.addUnitName })
					uni.setStorageSync('productUnit', this.datas)
					this.searchDatas = this.datas
					this.addUnitName = ''
				}
				this.$nextTick(function(){
					this.showAddModal = false
				})
			},
			handleEdit(val) {				
				if (this.editUnitName) {
					for (let item of this.datas) {
						if (item.name == val.name) {
							item.name = this.editUnitName
						}
					}
					uni.setStorageSync('productUnit', this.datas)
					this.searchDatas = this.datas
					this.editUnitName = ''
				}
				this.$nextTick(function(){
					this.showEditModal = false
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
						return item.name.indexOf(val) !== -1
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
	.dialog-footer {
		padding: 0;
		.dialog-footer-left {
			width: 50%;
			height: 100upx;
			margin-left: 0;
		}
		.dialog-footer-right {
			width: 50%;
			height: 100upx;
			margin-right: 0;
		}
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
