<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell title="是否赊账" isIcon :icon="{ type: 'c-contacts', color: '#59bffb', 'size': 18 }">
						<radio-group slot="footer" @change="handleCreditChange">
							<radio color="#2db7f5" value=0 :checked="reqData.order.isOnCredit == 0">否</radio>
							<radio color="#2db7f5" value=1 :checked="reqData.order.isOnCredit == 1" style="margin-left: 10px;">是</radio>
						</radio-group>
					</cu-cell>
					<cu-cell v-if="reqData.order.isOnCredit == 0" title="付款帐号" isIcon :icon="{ type: 'c-contacts', color: '#ff9900', 'size': 18 }">
						<radio-group slot="footer" @change="handleCashAccountChange">
							<radio color="#2db7f5" :style="{'margin-left': index !== 0 ? '10px' : '0'}" v-for="(item, index) in cashAccountDict" :value="item.cashaccountid" :checked="reqData.order.payaccountid == item.cashaccountid">{{item.cashaccountname}}</radio>
						</radio-group>
					</cu-cell>
					<cu-cell title="生成入库单" isIcon :icon="{ type: 'c-right', color: '#19be6b', 'size': 18 }">
						<radio-group slot="footer" @change="handleStatusChange">
							<radio color="#2db7f5" value=1 :checked="reqData.order.status == 1">否</radio>
							<radio color="#2db7f5" value=2 :checked="reqData.order.status == 2" style="margin-left: 10px;">是</radio>
						</radio-group>
					</cu-cell>
					<cu-cell title="打印单据" isIcon :icon="{ type: 'c-print', color: '#b37fec', 'size': 18 }">
						<radio-group slot="footer" @change="handlePrintChange">
							<radio color="#2db7f5" value=0 :checked="reqData.order.isprint == 0">否</radio>
							<radio color="#2db7f5" value=1 :checked="reqData.order.isprint == 1" style="margin-left: 10px;">是</radio>
						</radio-group>
					</cu-cell>
					<cu-cell title="优惠金额" isIcon :icon="{ type: 'c-discount', color: '#f29d6e', 'size': 18 }" isLastCell>
						<input slot="footer" type="digit" v-model="reqData.order.discountamount" @blur="handleDisCount" placeholder="0"/>
					</cu-cell>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<view class="footer-text">
				<text>订单金额：</text>
				<text style="color:#ef5a62">￥{{reqData.order.amount}}</text>
			</view>
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" :disabled="disableSubmit" @click="handleSubmit">提交</button>
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
				title: '采购付款',
				reqData: {
					order: {
						billtype: 1,
						isOnCredit: 0,
						payaccountid: '',
						contactunitid: '',
						amount: 0.00,
						isprint: 0,
						status: 1,
						discountamount: ''
					},
					orderlist: []
				},
				cashAccountDict: [],
				disableSubmit: true
			};
		},
		onLoad(options) {
			if (options) {
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
				uni.navigateBack({
					delta: 1
				})
			},
			handleCreditChange(val) {
				this.reqData.order.isOnCredit = val.detail.value
			},
			handleCashAccountChange(val) {
				this.reqData.order.payaccountid = val.detail.value
			},
			handleStatusChange(val) {
				this.reqData.order.status = val.detail.value
			},
			handlePrintChange(val) {
				this.reqData.order.isprint = val.detail.value
			},
			handleDisCount(e) {
				if (e.detail.value) {
					this.reqData.order.discountamount = parseFloat(e.detail.value).toFixed(2)
					this.reqData.order.amount = parseFloat(this.reqData.order.amount - this.reqData.order.discountamount).toFixed(2)
				}
			},
			handleSubmit() {
				this.$refs.loading.open()
				create(api.purPurchaseOrder, this.reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						uni.showToast({
							icon: 'success',
							title: '提交成功'
						})
						setTimeout(()=>{
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
		},
		watch: {
			'reqData.order.payaccountid': {
				handler(val) {
					if (val) {
						this.disableSubmit = false
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
