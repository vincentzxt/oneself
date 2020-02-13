<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell title="产品名称" notNull disabled>
						<view class="h50 fc" slot="footer">{{reqData.productname}}</view>
					</cu-cell>
					<cu-cell title="速查码">
						<input class="h50" slot="footer" type="text" v-model="reqData.querycode" placeholder-style="color:#c5c8ce" placeholder="用于开单快速搜索" focus/>
					</cu-cell>
					<cu-cell title="零售价">
						<input class="h50" slot="footer" type="digit" v-model="reqData.price" placeholder-style="color:#c5c8ce" placeholder="0.00" @blur="handlePriceBlur"/>
					</cu-cell>
					<cu-cell title="分类" disabled>
						<view class="h50 fc" slot="footer">{{reqData.productcategory}}</view>
					</cu-cell>
					<cu-cell title="主计量单位" notNull disabled>
						<view class="h50 fc" slot="footer">{{reqData.unit}}</view>
					</cu-cell>
					<cu-cell v-if="reqData.isMultiUnit" title="多计量" disabled>
						<switch class="h50 fc" slot="footer" color="#2db7f5" @change="handleMultiUnitSwitch" disabled/>
					</cu-cell>
					<cu-cell v-if="reqData.isMultiUnit" title="辅计量单位" notNull disabled>
						<view class="h50 fc" slot="footer">{{reqData.subunit}}</view>
					</cu-cell>
					<cu-cell v-if="reqData.isMultiUnit && reqData.subunit" title="转换率" notNull disabled isExtendIcon :extendIcon="{ type: 'lr-change', color: '#808695', size: 20 }">
						<view slot="footer" class="unitmultiple-wrap">
							<view class="unitmultiple-wrap-content1">
								<text>1{{reqData.subunit}} = </text>
							</view>
							<view class="unitmultiple-wrap-content2">
								<view class="unitmultiple-wrap-content2-input h50 fcc">{{reqData.unitmultiple}}</view>
								<text>{{reqData.unit}}</text>
							</view>
						</view>
					</cu-cell>
					<cu-cell title="库存预警" isExtendText :extendText="reqData.unit">
						<view class="fc" slot="footer">
							<input class="h50 fc" slot="footer" type="number" v-model="reqData.warningstockqty" placeholder-style="color:#c5c8ce" placeholder="0"/>
						</view>
					</cu-cell>
					<cu-cell title="停用/启用" isLastCell>
						<switch class="h50 fc" slot="footer" color="#2db7f5" :checked="reqData.status == 1 ? true : false" @change="handleStatusChange"/>
					</cu-cell>
				</cu-panel>
				<view class="main-remarks">
					<textarea style="height: 80px;margin-left:15px;" maxlength="-1" v-model="reqData.remarks" placeholder-style="color:#c5c8ce" placeholder="备注"></textarea>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" @tap="handleSubmit">提交</button>
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
	import { floatFormat } from '@/utils/tools.js'
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
					isMultiUnit: 0,
					unit: '',
					subunit: '',
					unitmultiple: 0,
					warningstockqty: 0,
					remarks: '',
					status: 1
				},
				verify: {
					productname: { okVerify: false, disVerMessage: false, message: '产品名称不能为空' },
					unit: { okVerify: false, disVerMessage: false, message: '主计量单位不能为空' },
					subUnit: { okVerify: false, disVerMessage: false, message: '多计量模式下，辅计量单位不能为空' },
					unitmultiple: { okVerify: false, disVerMessage: false, message: '多计量模式下，转换率不能为空，且必须大于1' }
				}
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
			this.reqData.warningstockqty = item.warningstockqty
			this.reqData.remarks = item.remarks
			this.reqData.status = item.status
			this.reqData.isMultiUnit = item.isMultiUnit
			
			this.verify.productname.okVerify = true
			this.verify.unit.okVerify = true
			this.verify.subUnit.okVerify = true
			this.verify.unitmultiple.okVerify = true
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
			handleMultiUnitSwitch(val) {
				if (val.detail.value) {
					this.reqData.isMultiUnit = 1
				} else {
					this.reqData.isMultiUnit = 0
				}
			},
			handleUnitChange() {
				if (this.reqData.unit && this.reqData.subunit) {
					let tmp = this.reqData.unit
					this.reqData.unit = this.reqData.subunit
					this.reqData.subunit = tmp
				}
			},
			handleStatusChange(val) {
				if (val.detail.value) {
					this.reqData.status = 1
				} else {
					this.reqData.status = 2
				}
			},
			handlePriceBlur() {
				if (this.reqData.price) {
					this.reqData.price = floatFormat(this.reqData.price)
				}
			},
			handleVerify(val) {
				switch(val) {
					case 'productname':
						if (!this.reqData.productname) {
							this.verify.productname.okVerify = false
							this.verify.productname.disVerMessage = true
						} else {
							this.verify.productname.okVerify = true
							this.verify.productname.disVerMessage = false
						}
						break
					case 'unit':
						if (!this.reqData.unit) {
							this.verify.unit.okVerify = false
							this.verify.unit.disVerMessage = true
						} else {
							this.verify.unit.okVerify = true
							this.verify.unit.disVerMessage = false
						}
						break
					case 'subUnit':
						if (!this.reqData.subunit) {
							this.verify.subUnit.okVerify = false
							this.verify.subUnit.disVerMessage = true
						} else {
							this.verify.subUnit.okVerify = true
							this.verify.subUnit.disVerMessage = false
						}
						break
					case 'unitmultiple':
						if (!this.reqData.unitmultiple) {
							this.verify.unitmultiple.okVerify = false
							this.verify.unitmultiple.disVerMessage = true
						} else {
							if (parseInt(this.reqData.unitmultiple) <= 1) {
								this.verify.unitmultiple.okVerify = false
								this.verify.unitmultiple.disVerMessage = true
							} else {
								this.verify.unitmultiple.okVerify = true
								this.verify.unitmultiple.disVerMessage = false
							}
						}
						break
				}
			},
			checkVerify() {
				let result = true
				for (let item in this.verify) {
					if (!this.verify[item].okVerify) {
						if (item == 'subUnit') {
							if (this.reqData.isMultiUnit) {
								this.verify[item].disVerMessage = true
								result = false
							} else {
								this.verify[item].disVerMessage = false
							}
						}	else if (item == 'unitmultiple') {
							if (this.reqData.isMultiUnit) {
								this.verify[item].disVerMessage = true
								result = false
							} else {
								this.verify[item].disVerMessage = false
							}
						} else {
							this.verify[item].disVerMessage = true
							result = false
						}
					}
				}
				return result
			},
			handleSubmit() {
				if (this.checkVerify()) {
					if (!this.reqData.price) {
						this.reqData.price = '0.00'
					}
					if (!this.reqData.warningstockqty) {
						this.reqData.warningstockqty = 0
					}
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
								icon: 'none',
								title: res.data.returnMessage
							})
						}
					}).catch(error => {
						uni.showToast({
							icon: 'none',
							title: error
						})
					})
				}
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
	.h50 {
		height: 50px;
	}
	.fc {
		display: flex;
		align-items: center;
	}
	.fcc {
		display: flex;
		justify-content: center;
		align-items: center;
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
			&-remarks {
				background-color: #ffffff;
				margin-top: 5px;
				padding-top: 5px;
			}
			.unitmultiple-wrap {
				display: flex;
				align-items: center;
				&-content2 {
					display: flex;
					align-items: center;
					margin-left: 5px;
					&-input {
						width: 190upx;
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
