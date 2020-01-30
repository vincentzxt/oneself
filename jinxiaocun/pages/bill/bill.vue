<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" leftText="微账通" background-color="#2d8cf0" color="#fff" status-bar fixed>
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true">
				<view>
					<cu-panel>
						<cu-cell title="销售单据" isLink url="./sell-list/sell-lis" isIcon :icon="{ type: 'c-product', color: '#f29d6e', 'size': 18 }" isLastCell>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="main-mt5">
					<cu-panel>
						<cu-cell title="采购单据" isLink url="./stock-list/stock-list" isIcon :icon="{ type: 'c-product', color: '#f29d6e', 'size': 18 }" isLastCell>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="main-mt5">
					<cu-panel>
						<cu-cell title="退货单据" isLink url="./stock-list/stock-list" isIcon :icon="{ type: 'c-product', color: '#f29d6e', 'size': 18 }" isLastCell>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="main-mt5">
					<cu-panel>
						<cu-cell title="收款单" isLink url="./stock-list/stock-list" isIcon :icon="{ type: 'c-product', color: '#f29d6e', 'size': 18 }" isLastCell>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="main-mt5">
					<cu-panel>
						<cu-cell title="付款单" isLink url="./stock-list/stock-list" isIcon :icon="{ type: 'c-product', color: '#f29d6e', 'size': 18 }" isLastCell>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="main-mt5">
					<cu-panel>
						<cu-cell title="库存列表" isLink url="./stock-list/stock-list" isIcon :icon="{ type: 'c-product', color: '#f29d6e', 'size': 18 }" isLastCell>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="main-mt5">
					<cu-panel>
						<cu-cell title="库存台账" isLink url="./stock-list/stock-list" isIcon :icon="{ type: 'c-product', color: '#f29d6e', 'size': 18 }" isLastCell>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="main-mt5">
					<cu-panel>
						<cu-cell title="费用单据" isLink url="./stock-list/stock-list" isIcon :icon="{ type: 'c-product', color: '#f29d6e', 'size': 18 }" isLastCell>
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
		.main {
			margin-top: $uni-spacing-col-base;
			&-mt5 {
				margin-top: 5px;
			}
		}
	}
</style>
