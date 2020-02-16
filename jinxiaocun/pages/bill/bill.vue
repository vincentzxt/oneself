<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" leftText="一格云单"  background-color="#2d8cf0" color="#fff" status-bar fixed>
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true">
				<view>
					<cu-panel>
						<cu-cell title="销售单据" isLink url="./sell-list/sell-list">
							 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
						<cu-cell title="采购单据" isLink url="./purchase-list/purchase-list">
						 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
						<cu-cell title="销售退货" isLink url="./sell-red-list/sell-red-list">
						 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
						<cu-cell title="采购退货" isLink url="./purchase-red-list/purchase-red-list" isLastCell>
						 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="space"></view>
				<view>
					<cu-panel>
						<cu-cell title="收款单" isLink url="./receipt-list/receipt-list">
						 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
						<cu-cell title="付款单" isLink url="./payment-list/payment-list" isLastCell>
						 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="space"></view>
				<view>
					<cu-panel>
						<cu-cell title="库存列表" isLink url="./stock-list/stock-list">
						 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
						<cu-cell title="库存预警" isLink url="./earlywarn-list/earlywarn-list">
						 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
						<cu-cell title="期初单据" isLink url="./begin-list/begin-list">
						 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
						<cu-cell title="盘点单据" isLink url="./inventory-list/inventory-list" isLastCell>
						 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="space"></view>
				<view>
					<cu-panel>
						<cu-cell title="费用单据" isLink url="./fee-list/fee-list" isLastCell>
						 <view class="h50 fc" slot="footer"></view>
						</cu-cell>
					</cu-panel>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	export default {
		components: {
			cuPanel,
			cuCell
		},
		data() {
			return {
				title: '单据'
			};
		},
		onShow() {
			
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.header {
			
		}
		.space{
			height: 30upx;
		}
		.main {
			margin-top: $uni-spacing-col-base;
			&-mt5 {
				margin-top: 5px;
			}
		}
		.h50{
				height: 72upx;
			}

	}
</style>
