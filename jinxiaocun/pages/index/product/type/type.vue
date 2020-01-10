<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
			<uni-search-bar @input="handleSearch" placeholder="输入名称" cancelButton="always"></uni-search-bar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell-group>
						<cu-cell :title="item" v-for="(item, index) in searchDatas" :key="index" isReturn :rName="name" :rDatas="filterItem(item)">
							<view style="color:#808695" slot="footer" @tap="handleOpenEdit(item)">
								<uni-icons type="edit" color="#2d8cf0"></uni-icons>
							</view>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary"  @tap="handleOpenAdd">添加</button>
		</view>
		<uni-popup ref="add" type="bottom">
			<cu-panel>
				<cu-cell title="分类名称">
					<input slot="footer" type="text" v-model="addTypeName" placeholder-style="color:#c5c8ce" placeholder="请输入分类名称"/>
				</cu-cell>
			</cu-panel>
			<button style="background-color: #2d8cf0;" type="primary" @tap="handleAdd">提交</button>
		</uni-popup>
		<uni-popup ref="edit" type="bottom">
			<cu-panel>
				<cu-cell title="分类名称">
					<input slot="footer" type="text" v-model="editTypeName" placeholder-style="color:#c5c8ce" placeholder="请输入分类名称"/>
				</cu-cell>
			</cu-panel>
			<button style="background-color: #2d8cf0;" type="primary" @tap="handleEdit">提交</button>
		</uni-popup>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	export default {
		components: {
			uniSearchBar,
			uniPopup,
			cuPanel,
			cuCell,
			cuCellGroup
		},
		data() {
			return {
				name: '',
				title: '产品分类',
				datas: null,
				searchDatas: null,
				addTypeName: '',
				editTypeName: ''
			}
		},
		onLoad(options) {
			this.name = options.name
		},
		onShow() {
			this.datas = uni.getStorageSync('productCategory')
			this.datas = this.datas.filter((item) => {
				return item !== '所有分类'
			})
			this.searchDatas = this.datas
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			filterItem(item) {
				return { 'name': item }
			},
			handleOpenAdd() {
				this.addTypeName = ''
				this.$nextTick(function(){
					this.$refs.add.open()
				})
			},
			handleOpenEdit(val) {
				this.editTypeName = val.name
				this.$nextTick(function(){
					this.$refs.edit.open()
				})
			},
			handleAdd() {
				if (this.addTypeName) {
					this.datas.push(this.addTypeName)
					uni.setStorageSync('productType', this.datas)
					this.searchDatas = this.datas.filter((item) => {
						return item !== '所有分类'
					})
					this.addTypeName = ''
				}
				this.$nextTick(function(){
					this.showAddModal = false
				})
			},
			handleEdit(val) {				
				if (this.editTypeName) {
					for (let item of this.datas) {
						if (item.name == val.name) {
							item.name = this.editTypeName
						}
					}
					uni.setStorageSync('productType', this.datas)
					this.searchDatas = this.datas.filter((item) => {
						return item.name !== '所有分类'
					})
					this.editTypeName = ''
				}
				this.$nextTick(function(){
					this.showEditModal = false
				})
			},
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.datas.filter((item) => {
						return item.name.indexOf(val.value) !== -1
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
