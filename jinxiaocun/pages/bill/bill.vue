<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" leftText="微账通" background-color="#2d8cf0" color="#fff" status-bar fixed>
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true">
				<cu-panel>
					<cu-cell title="销售单据" isLink url="./sell-list/sell-list">
						<uni-icons slot="icon" type="receipt" color="#19be6b" size="20"></uni-icons>
					</cu-cell>
				</cu-panel>
				<cu-panel>
					<cu-cell title="采购单据" isLink url="./stock-list/stock-list">
						<uni-icons slot="icon" type="sale" color="#ff9900" size="20"></uni-icons>
					</cu-cell>
				</cu-panel>
				<cu-panel>
					<cu-cell title="退货单据" isLink url="./stock-list/stock-list">
						<uni-icons slot="icon" type="receipt" color="#19be6b" size="20"></uni-icons>
					</cu-cell>
				</cu-panel>
				<cu-panel>
					<cu-cell title="收款单" isLink url="./stock-list/stock-list">
						<uni-icons slot="icon" type="receipt" color="#19be6b" size="20"></uni-icons>
					</cu-cell>
				</cu-panel>
				<cu-panel>
					<cu-cell title="付款单" isLink url="./stock-list/stock-list">
						<uni-icons slot="icon" type="sale" color="#ff9900" size="20"></uni-icons>
					</cu-cell>
				</cu-panel>
				<cu-panel>
					<cu-cell title="库存列表" isLink url="./stock-list/stock-list">
						<uni-icons slot="icon" type="receipt" color="#19be6b" size="20"></uni-icons>
					</cu-cell>
				</cu-panel>
				<cu-panel>
					<cu-cell title="库存台账" isLink url="./stock-list/stock-list">
						<uni-icons slot="icon" type="receipt" color="#19be6b" size="20"></uni-icons>
					</cu-cell>
				</cu-panel>
				<cu-panel>
					<cu-cell title="费用单据" isLink url="./stock-list/stock-list">
						<uni-icons slot="icon" type="receipt" color="#19be6b" size="20"></uni-icons>
					</cu-cell>
				</cu-panel>
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
		.main {
			margin-top: $uni-spacing-col-base;
		}
	}
</style>
