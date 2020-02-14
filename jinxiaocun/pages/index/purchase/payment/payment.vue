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
					<cu-cell v-if="reqData.order.isOnCredit == 0" title="付款帐号" isLink>
						<view class="h50 fc" slot="footer" style="width:100%;">
							<picker @change="handleCashAccountChange" :value="reqData.order.payaccountid" :range="cashAccountDict" range-key='cashaccountname'>
								<view class="main-picker">
									<text v-if="!reqData.order.payaccountName" style="color:#c5c8ce">选择付款帐号</text>
									<text v-else>{{reqData.order.payaccountName}}</text>
								</view>
							</picker>
						</view>
					</cu-cell>
					<cu-cell title="打印单据">
						<radio-group class="h50 fc" slot="footer" @change="handlePrintChange">
							<radio color="#2db7f5" value=0 :checked="reqData.order.isprint == 0">否</radio>
							<radio color="#2db7f5" value=1 :checked="reqData.order.isprint == 1" style="margin-left: 10px;">是</radio>
						</radio-group>
					</cu-cell>
					<cu-cell title="优惠金额" isLastCell>
						<input class="h50" slot="footer" type="digit" v-model="reqData.order.discountamount" @blur="handleDisCount" placeholder="0"/>
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
				cashAccountDict: []
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
			this.$refs.loading.open()
			query(api.cashAccount).then(res => {
				this.$refs.loading.close()
				if (res.status == 200 && res.data.returnCode == '0000') {
					this.cashAccountDict = res.data.data.resultList
					this.reqData.order.accountid = this.cashAccountDict[0].cashaccountid
					this.reqData.order.accountName = this.cashAccountDict[0].cashaccountname
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
			handleCreditChange(val) {
				this.reqData.order.isOnCredit = val.detail.value
			},
			handleCashAccountChange(val) {
				this.reqData.order.payaccountid = this.cashAccountDict[val.detail.value].cashaccountid
				this.reqData.order.payaccountName = this.cashAccountDict[val.detail.value].cashaccountname
			},
			handlePrintChange(val) {
				this.reqData.order.isprint = val.detail.value
			},
			handleDisCount(e) {
				if (e.detail.value) {
					this.reqData.order.discountamount = parseFloat(e.detail.value).toFixed(2)
					this.reqData.order.amount = parseFloat(this.tmpAmount - this.reqData.order.discountamount).toFixed(2)
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
