<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true" class="fill">
				<view>
					<cu-panel>
						<cu-cell v-if="!searchCurrentUnit"
							title="退款帐号">
							<view v-if="businessType == 0" class="cash-account-list fc" slot="footer">
								<view :class="reqData.order.payaccountid == item.cashaccountid ? 'cash-account-list-item-select' : 'cash-account-list-item-noselect'"
											v-for="(item, index) in cashAccountDict"
											:key="index"
											:style="{'margin-top':index>1 ? '10px' : '0'}"
											@tap="handleSelectCashAccount(item)">{{item.cashaccountname}}
								</view>
							</view>
							<view v-else class="cash-account-list fc" slot="footer">
								<view :class="reqData.order.accountid == item.cashaccountid ? 'cash-account-list-item-select' : 'cash-account-list-item-noselect'"
											v-for="(item, index) in cashAccountDict"
											:key="index"
											:style="{'margin-top':index>1 ? '10px' : '0'}"
											@tap="handleSelectCashAccount(item)">{{item.cashaccountname}}
								</view>
							</view>
						</cu-cell>
						<cu-cell title="打印单据" isLastCell>
							<radio-group class="h50 fc" slot="footer" @change="handlePrintChange">
								<radio color="#2db7f5" value=0 :checked="reqData.order.isprint == 0">否</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.order.isprint == 1" style="margin-left: 10px;">是</radio>
							</radio-group>
						</cu-cell>
					</cu-panel>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<view class="footer-text">
				<view class="footer-text-item">
					<text>小计数量：</text>
					<text style="color:#ef5a62">{{reqData.order.totalCount}}</text>
				</view>
				<view class="footer-text-item">
					<text>小计金额：</text>
					<text style="color:#ef5a62">￥{{reqData.order.amount}}</text>
				</view>
			</view>
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" @click="handleSubmit">提交</button>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { api } from '@/config/common.js'
	import { query, create } from '@/api/common.js'
	export default {
		components: {
			cuPanel,
			cuCell,
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '采购退款',
				businessType: 0,
				reqData: {
					order: {
						billtype: 2,
						accountid: '',
						accountName: '',
						contactunitid: '',
						payaccountid: '',
						payaccountName: '',
						amount: 0.00,
						totalCount: 0,
						isprint: 0,
						status: 0
					},
					orderlist: []
				},
				cashAccountDict: []
			};
		},
		onLoad(options) {
			if (options) {
				this.businessType = options.businessType
				if (this.businessType == 1) {
					this.title = '销售退款'
				}
				let data = JSON.parse(options.reqData)
				this.reqData.order.contactunitid = data.contactunitid
				this.reqData.order.amount = parseFloat(data.totalPrice).toFixed(2)
				this.reqData.order.totalCount = data.totalCount
				this.reqData.orderlist = data.productList
			}
			this.getCashAccount()
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
			getCashAccount() {
				this.$refs.loading.open()
				query(api.cashAccount).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.cashAccountDict = res.data.data.resultList
						if (this.businessType == 0) {
							this.reqData.order.payaccountid = this.cashAccountDict[0].cashaccountid
							this.reqData.order.payaccountName = this.cashAccountDict[0].cashaccountname
						} else {
							this.reqData.order.accountid = this.cashAccountDict[0].cashaccountid
							this.reqData.order.accountName = this.cashAccountDict[0].cashaccountname
						}
					} else {
						uni.showToast({
							icon: 'none',
							title: res.data.returnMessage
						})
					}
				}).catch(error => {
					this.$refs.loading.close()
					uni.showToast({
						icon: 'none',
						title: error
					})
				})
			},
			handleSelectCashAccount(val) {
				if (this.businessType == 0) {
					this.reqData.order.payaccountid = val.cashaccountid
					this.reqData.order.payAccountName = val.cashaccountname
				} else {
					this.reqData.order.accountid = val.cashaccountid
					this.reqData.order.accountName = val.cashaccountname
				}
			},
			handlePrintChange(val) {
				this.reqData.order.isprint = val.detail.value
			},
			handleSubmit() {
				if (this.businessType == 0) {
					this.$refs.loading.open()
					create(api.purPurchaseOrder, this.reqData).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							uni.showToast({
								icon: 'success',
								title: '提交成功'
							})
							setTimeout(()=>{
								let pages =  getCurrentPages()
								let prevPage = pages[pages.length - 2]
								prevPage.setData({
									commandType: 'success',
								})
								uni.navigateBack({
									delta: 1
								})
							},500)
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.returnMessage
							})
						}
					}).catch(error => {
						this.$refs.loading.close()
						uni.showToast({
							icon: 'none',
							title: error
						})
					})
				} else {
					this.$refs.loading.open()
					create(api.salesOrder, this.reqData).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							uni.showToast({
								icon: 'success',
								title: '提交成功'
							})
							setTimeout(()=>{
								let pages =  getCurrentPages()
								let prevPage = pages[pages.length - 2]
								prevPage.setData({
									commandType: 'success',
								})
								uni.navigateBack({
									delta: 1
								})
							},500)
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.returnMessage
							})
						}
					}).catch(error => {
						this.$refs.loading.close()
						uni.showToast({
							icon: 'none',
							title: error
						})
					})
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
	.h50 {
		height: 50px;
	}
	.fc {
		display: flex;
		align-items: center;
	}
	.container {
		.main {
			margin-top: 5px;
			.cash-account-list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				&-item-select {
					width:40%;
					padding:5px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #fdeeeb;
					color: #f4613d;
					border-radius: 50px;
					border: 0.5px solid #f4613d;
				}
				&-item-noselect {
					width:40%;
					padding:5px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $uni-bg-color;
					color: #808695;
					border-radius: 50px;
				}
			}
		}
		.footer {
			height: 48px;
			display: flex;
			background-color:$uni-split-color;
			&-text {
				width: 50%;
				height: 100%;
				display: flex;
				justify-content: center;
				flex-direction: column;
				font-size: $uni-font-size-sm;
				margin-left: 20upx;
				&-item {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-left: $uni-spacing-row-lg;
				}
			}
			&-btn	{
				width: 50%;
				height: 100%;
			}
		}
	}
</style>
