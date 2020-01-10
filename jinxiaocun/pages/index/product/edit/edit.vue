<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell-group>
						<cu-cell title="产品名称">
							<input slot="footer" type="text" v-model="reqData.productname" placeholder-style="color:#c5c8ce" placeholder="请输入产品名称"/>
						</cu-cell>
						<cu-cell title="产品速查码">
							<input slot="footer" type="text" v-model="reqData.querycode" placeholder-style="color:#c5c8ce" placeholder="请输入产品名称"/>
						</cu-cell>
						<cu-cell title="建议零售价">
							<input slot="footer" type="digit" v-model="reqData.price" placeholder-style="color:#c5c8ce" placeholder="请输入建议零售价"/>
						</cu-cell>
						<cu-cell title="新产品分类">
							<input slot="footer" type="text" v-model="reqData.productcategory" placeholder-style="color:#c5c8ce" placeholder="请输入产品分类"/>
						</cu-cell>
						<cu-cell title="产品分类" :value="reqData.productcategory" isLink url="../type/type" params="name=type">
						</cu-cell>
						<cu-cell title="新主计量单位">
							<input slot="footer" type="text" v-model="reqData.unit" placeholder-style="color:#c5c8ce" placeholder="请输入计量单位"/>
						</cu-cell>
						<cu-cell title="主计量单位" :value="reqData.unit" isLink url="../unit/unit" params="name=unit">
						</cu-cell>
						<cu-cell v-if="reqData.unit" title="新辅计量单位">
							<input slot="footer" type="text" v-model="reqData.subunit" placeholder-style="color:#c5c8ce" placeholder="请输入计量单位"/>
						</cu-cell>
						<cu-cell v-if="reqData.unit" title="辅计量单位" :value="reqData.subunit" isLink url="../unit/unit" params="name=subunit">
						</cu-cell>
						<cu-cell v-if="reqData.unit && reqData.subunit" title="计量单位倍率">
							<input slot="footer" type="digit" v-model="reqData.unitmultiple" placeholder-style="color:#c5c8ce" placeholder="请输入计量单位倍率"/>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" :disabled="disableSubmit" @tap="handleSubmit">提交</button>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import { update } from '@/api/common.js'
	import { api } from '@/config/common.js'
	import getGlobalData from '@/utils/business.js'
	export default {
		components: {
			cuPanel,
			cuCell,
			cuCellGroup
		},
		data() {
			return {
				title: '修改产品',
				reqData: {
					productid: 0,
					productname: '',
					querycode: '',
					price: 0,
					productcategory: '',
					unit: '',
					subunit: '',
					unitmultiple: 0,
					remarks: '',
				},
				disableSubmit: true
			}
		},
		onLoad(options) {
			let item = JSON.parse(options.item)
			this.reqData.productid = item.productid
			this.reqData.productname = item.productname
			this.reqData.querycode = item.querycode
			this.reqData.price = item.price
			this.reqData.productcategory = item.productcategory
			this.reqData.unit = item.unit
			this.reqData.subunit = item.subunit
			this.reqData.unitmultiple = item.unitmultiple
			this.reqData.remarks = item.remarks
		},
		onShow() {
			let pages =  getCurrentPages()
			let curPage = pages[pages.length - 1]
			if (curPage.data.rName && curPage.data.datas) {
				if (curPage.data.rName == 'type') {
					this.reqData.productcategory = curPage.data.datas.name
				} else if(curPage.data.rName == 'unit') {
					this.reqData.unit = curPage.data.datas.name
				} else if (curPage.data.rName == 'subunit') {
					this.reqData.subunit = curPage.data.datas.name
				}
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleSubmit() {
				update(api.baseProduct, {model: this.reqData }).then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						getGlobalData.getBaseProduct().then(res => {
							getGlobalData.getProductCategory().then(res => {
								uni.navigateBack({
									delta: 1
								})
							}).catch(err => {
								uni.navigateBack({
									delta: 1
								})
							})
						}).catch(err => {
							uni.navigateBack({
								delta: 1
							})
						})
					} else {
						uni.showToast({
							title: '修改失败'
						})
					}
				}).catch(error => {
					uni.showToast({
						title: '修改失败'
					})
				})
			}
		},
		watch:{
			reqData: {
				handler(val) {
					if (val.productname) {
						this.disableSubmit = false
					} else {
						this.disableSubmit = true
					}
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fill {
		width: 100%;
		height: 100%;
	}
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	.container {
		height: 100vh;
		width: 100vw;
		.header {
			height: 10%;
		}
		.main {
			height: 83%;
			.cu-form-group .title {
				min-width: calc(6em + 30px);
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
