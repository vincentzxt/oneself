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
						<cu-cell title="是否赊账">
							<radio-group @change="handleCreditChange">
								<radio color="#2db7f5" value=0 :checked="reqData.order.isOnCredit == 0">否</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.order.isOnCredit == 1" style="margin-left: 10px;">是</radio>
							</radio-group>
						</cu-cell>
						<cu-cell v-if="reqData.order.isOnCredit == 0" title="收款帐号">
							<radio-group @change="handleCashAccountChange">
								<radio color="#2db7f5" v-for="(item, index) in cashAccountDict" :value="item.cashaccountid" :checked="reqData.order.accountId == item.cashaccountid">{{item.cashaccountname}}</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="是否生成出库单">
							<radio-group @change="handleOrderChange">
								<radio color="#2db7f5" value=0 :checked="reqData.order.isOrder == 0">否</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.order.isOrder == 1" style="margin-left: 10px;">是</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="是否打印单据">
							<radio-group @change="handlePrintChange">
								<radio color="#2db7f5" value=0 :checked="reqData.order.isPrint == 0">否</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.order.isPrint == 1" style="margin-left: 10px;">是</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="抹零">
							<input slot="footer" type="text" v-model="reqData.order.amount"/>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<text class="footer-text">订单金额：￥{{reqData.order.amount}}</text>
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
				title: '销售收款',
				reqData: {
					order: {
						isOnCredit: 0,
						accountId: '',
						contactunitid: '',
						amount: 0
					},
					orderlist: []
				},
				cashAccountDict: []
			};
		},
		onLoad(options) {
			if (options) {
				let data = JSON.parse(options.reqData)
				this.reqData.order.contactunitid = data.contactunitid
				this.reqData.order.amount = data.totalPrice
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
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleCreditChange(val) {
				this.reqData.order.isOnCredit = val.detail.value
			},
			handleCashAccountChange(val) {
				this.reqData.order.accountId = val.detail.value
			},
			handleOrderChange(val) {
				this.reqData.order.isOrder = val.detail.value
			},
			handlePrintChange(val) {
				this.reqData.order.isPrint = val.detail.value
			},
			handleSubmit() {
				this.$refs.loading.open()
				create(api.salesOrder, {model: this.reqData }).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						uni.showToast({
							title: '提交成功'
						})
					} else {
						uni.showToast({
							title: '提交失败'
						})
					}
				}).catch(error => {
					this.$refs.loading.close()
					uni.showToast({
						title: '提交失败'
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
	.container {
		height: 100vh;
		width: 100vw;
		.header {
			height: 10%;
		}
		.main {
			height: 83%;
			.picker {
				width: 100%;
				display: flex;
				justify-content: flex-end;
			}
		}
		.footer {
			height: 7%;
			display: flex;
			background-color:$uni-split-color;
			&-text {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: $uni-spacing-row-lg;
			}
			&-btn	{
				width: 50%;
				height: 100%;
			}
		}
	}
</style>
