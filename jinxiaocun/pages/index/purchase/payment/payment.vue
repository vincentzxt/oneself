<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell title="是否赊账">
						<radio-group class="h50 fc" slot="footer" @change="handleCreditChange">
							<radio color="#2db7f5" value=0 :checked="reqData.order.isOnCredit == 0">否</radio>
							<radio color="#2db7f5" value=1 :checked="reqData.order.isOnCredit == 1" style="margin-left: 10px;">是</radio>
						</radio-group>
					</cu-cell>
					<cu-cell v-if="reqData.order.isOnCredit == 0"
						title="付款帐号">
						<view class="cash-account-list fc" slot="footer">
							<view :class="reqData.order.payaccountid == item.cashaccountid ? 'cash-account-list-item-select' : 'cash-account-list-item-noselect'"
										v-for="(item, index) in cashAccountDict"
										:key="index"
										:style="{'margin-top':index>1 ? '10px' : '0'}"
										@tap="handleSelectCashAccount(item)">
							{{item.cashaccountname}}</view>
						</view>
					</cu-cell>
					<cu-cell title="打印单据">
						<radio-group class="h50 fc" slot="footer" @change="handlePrintChange">
							<radio color="#2db7f5" value=0 :checked="reqData.order.isprint == 0">否</radio>
							<radio color="#2db7f5" value=1 :checked="reqData.order.isprint == 1" style="margin-left: 10px;">是</radio>
						</radio-group>
					</cu-cell>
					<cu-cell title="抹零" isLastCell :notes="showDisCount" notesColor="#f97d5f">
						<switch class="h50 fc" slot="footer" color="#2db7f5" :checked="discount == 1 ? true : false" @change="handleDisCount"/>
					</cu-cell>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<view class="footer-text">
				<text>订单金额：</text>
				<text style="color:#f4613d">￥{{reqData.order.amount}}</text>
			</view>
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" @click="handleSubmit">提交</button>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { api } from '@/config/common.js'
	import { query, create } from '@/api/common.js'
	import getGlobalData from '@/utils/business.js'
	export default {
		components: {
			cuPanel,
			cuCell,
			cuCellGroup,
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '采购付款',
				reqData: {
					order: {
						billtype: 1,
						isOnCredit: 0,
						payaccountid: '',
						payaccountName: '',
						contactunitid: '',
						contactunitname: '',
						telephone: '',
						amount: 0.00,
						isprint: 0,
						discountamount: ''
					},
					orderlist: []
				},
				tmpAmount: 0.00,
				cashAccountDict: [],
				discount: 0,
				showDisCount: ''
			};
		},
		onLoad(options) {
			if (options) {
				let data = JSON.parse(options.reqData)
				this.reqData.order.contactunitid = data.contactunitid
				this.reqData.order.contactunitname = data.contactunitname
				this.reqData.order.telephone = data.telephone
				this.reqData.order.amount = parseFloat(data.totalPrice).toFixed(2)
				this.tmpAmount = this.reqData.order.amount
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
				let pages =  getCurrentPages()
				let prevPage = pages[pages.length - 2]
				prevPage.setData({
					commandType: 'return'
				})
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
						this.reqData.order.payaccountid = this.cashAccountDict[0].cashaccountid
						this.reqData.order.payaccountName = this.cashAccountDict[0].cashaccountname
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
			handleCreditChange(val) {
				this.reqData.order.isOnCredit = val.detail.value
			},
			handleSelectCashAccount(val) {
				this.reqData.order.payaccountid = val.cashaccountid
				this.reqData.order.payaccountName = val.cashaccountname
			},
			handlePrintChange(val) {
				this.reqData.order.isprint = val.detail.value
			},
			handleDisCount(val) {
				if (val.detail.value) {
					this.reqData.order.discountamount = '0.' + this.tmpAmount.split('.')[1]
					this.reqData.order.amount = this.tmpAmount.split('.')[0] + '.00'
				} else {
					this.reqData.order.discountamount = '0.00'
					this.reqData.order.amount = this.tmpAmount
				}
			},
			handleSubmit() {
				this.$refs.loading.open()
				create(api.purPurchaseOrder, this.reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						getGlobalData.getCurrentUnit().then(res => {
							uni.showToast({
								icon: 'success',
								title: '提交成功'
							})
							setTimeout(()=>{
								let pages =  getCurrentPages()
								let prevPage = pages[pages.length - 2]
								prevPage.setData({
									commandType: 'success'
								})
								uni.navigateBack({
									delta: 1
								})
							},500)
						}).catch(err => {
							uni.showToast({
								icon: 'success',
								title: '提交成功'
							})
							setTimeout(()=>{
								let pages =  getCurrentPages()
								let prevPage = pages[pages.length - 2]
								prevPage.setData({
									commandType: 'success'
								})
								uni.navigateBack({
									delta: 1
								})
							},500)
						})
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
		},
		watch: {
			'reqData.order.discountamount': {
				handler(val) {
					if (val && val !== '0.00') {
						this.showDisCount = '抹零金额：￥' + this.reqData.order.discountamount
					} else {
						this.showDisCount = ''
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
	.container {
		.main {
			margin-top: 5px;
			&-picker {
				width: 100%;
				display: flex;
				justify-content: flex-end;
			}
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
				width: 60%;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: $uni-spacing-row-lg;
			}
			&-btn	{
				width: 40%;
				height: 100%;
			}
		}
	}
</style>
