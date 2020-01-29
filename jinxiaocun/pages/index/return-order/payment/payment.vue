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
						<cu-cell title="退款帐号" isIcon :icon="{ type: 'c-contacts', color: '#ff9900', 'size': 18 }">
							<radio-group slot="footer" v-if="businessType == 0" @change="handleCashAccountChange">
								<radio color="#2db7f5" :style="{'margin-left': index !== 0 ? '10px' : '0'}" v-for="(item, index) in cashAccountDict" :value="item.cashaccountid" :checked="reqData.order.payaccountid == item.cashaccountid">{{item.cashaccountname}}</radio>
							</radio-group>
							<radio-group slot="footer" v-else @change="handleCashAccountChange">
								<radio color="#2db7f5" :style="{'margin-left': index !== 0 ? '10px' : '0'}" v-for="(item, index) in cashAccountDict" :value="item.cashaccountid" :checked="reqData.order.accountid == item.cashaccountid">{{item.cashaccountname}}</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="生成退货单" isIcon :icon="{ type: 'c-right', color: '#19be6b', 'size': 18 }">
							<radio-group slot="footer" @change="handleStatusChange">
								<radio color="#2db7f5" value=1 :checked="reqData.order.status == 1">否</radio>
								<radio color="#2db7f5" value=2 :checked="reqData.order.status == 2" style="margin-left: 10px;">是</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="打印单据" isIcon :icon="{ type: 'c-print', color: '#b37fec', 'size': 18 }" isLastCell>
							<radio-group slot="footer" @change="handlePrintChange">
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
				<text>订单金额：</text>
				<text style="color:#ef5a62">￥{{reqData.order.amount}}</text>
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
						contactunitid: '',
						payaccountid: '',
						amount: 0.00,
						isprint: 0,
						status: 1
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
				this.reqData.orderlist = data.productList
			}
			this.$refs.loading.open()
			query(api.cashAccount).then(res => {
				this.$refs.loading.close()
				if (res.status == 200 && res.data.returnCode == '0000') {
					this.cashAccountDict = res.data.data.resultList
				}
			}).catch(error => {
				this.$refs.loading.close()
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
				uni.navigateBack({
					delta: 1
				})
			},
			handleCashAccountChange(val) {
				if (this.businessType == 0) {
					this.reqData.order.payaccountid = val.detail.value
				} else {
					this.reqData.order.accountid = val.detail.value
				}
			},
			handleStatusChange(val) {
				this.reqData.order.status = val.detail.value
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
	.container {
		.main {
			margin-top: 5px;
			.picker {
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
