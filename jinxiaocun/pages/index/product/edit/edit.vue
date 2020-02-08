<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell title="产品名称">
						<input slot="footer" type="text" v-model="reqData.productname" placeholder-style="color:#c5c8ce" placeholder="请输入产品名称" disabled />
					</cu-cell>
					<cu-cell title="产品速查码">
						<input slot="footer" type="text" v-model="reqData.querycode" placeholder-style="color:#c5c8ce" placeholder="用于开单快速搜索" focus />
					</cu-cell>
					<cu-cell title="建议零售价">
						<input slot="footer" type="digit" v-model="reqData.price" placeholder-style="color:#c5c8ce" placeholder="请输入建议零售价"/>
					</cu-cell>
					<cu-cell title="产品分类">
						<text slot="footer">{{reqData.productcategory}}</text>
					</cu-cell>
					<cu-cell v-if="reqData.unit" title="主计量单位">
						<text slot="footer">{{reqData.unit}}</text>
					</cu-cell>
					<cu-cell v-if="reqData.subunit" title="辅计量单位">
						<text slot="footer">{{reqData.subunit}}</text>
					</cu-cell>
					<cu-cell v-if="reqData.subunit" title="计量单位转换率">
						<view slot="footer" class="unitmultiple-wrap">
							<view class="unitmultiple-wrap-content1">
								<text>1{{reqData.subunit}} = </text>
							</view>
							<view class="unitmultiple-wrap-content2">
								<input class="unitmultiple-wrap-content2-input" type="digit" v-model="reqData.unitmultiple" placeholder-style="color:#c5c8ce" placeholder="0" disabled />
								<text>{{reqData.unit}}</text>
							</view>
						</view>
					</cu-cell>
					<cu-cell title="库存预警数量" isLastCell>
						<input slot="footer" type="digit" v-model="reqData.warningStockQty" placeholder-style="color:#c5c8ce" placeholder="0"/>
					</cu-cell>
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
					warningStockQty: 0,
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
			this.reqData.warningStockQty = item.warningStockQty
			this.reqData.remarks = item.remarks
		},
		onShow() {
			let pages =  getCurrentPages()
			let curPage = pages[pages.length - 1]
			if (curPage.data.rData) {
				if (curPage.data.rData.key == 'type') {
					this.reqData.productcategory = curPage.data.rData.value
				} else if(curPage.data.rData.key == 'unit') {
					this.reqData.unit = curPage.data.rData.value
				} else if (curPage.data.rData.key == 'subUnit') {
					this.reqData.subunit = curPage.data.rData.value
				}
			}
		},
		computed: {
			headerHeight() {
				return this.$headerHeight
			},
			mainHeight() {
				return this.$mainHeight
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleUnitChange() {
				if (this.reqData.unit && this.reqData.subunit) {
					let tmp = this.reqData.unit
					this.reqData.unit = this.reqData.subunit
					this.reqData.subunit = tmp
				}
			},
			handleSubmit() {
				update(api.baseProduct, this.reqData).then(res => {
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
		.main {
			margin-top: 5px;
			.cu-form-group .title {
				min-width: calc(6em + 30px);
			}
			.unit-wrap {
				display: flex;
				align-items: center;
				&-change {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 10%;
				}
			}
			.unitmultiple-wrap {
				display: flex;
				align-items: center;
				&-content2 {
					display: flex;
					align-items: center;
					margin-left: 5px;
					&-input {
						width: 70px;
						border: 0.5px solid $uni-border-color;
						text-align: center;
						margin-right: 5px;
					}
				}
			}
		}
		.footer {
			height: 48px;
		}
	}
</style>
