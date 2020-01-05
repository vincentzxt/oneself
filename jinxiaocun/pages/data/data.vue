<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true">
				<cu-panel>
					<cu-cell title="销售流水" isLink>
						<uni-icons slot="icon" type="sale" color="#ff9900" size="20"></uni-icons>
					</cu-cell>
				</cu-panel>
				<cu-panel>
					<cu-cell title="采购流水" isLink>
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
				title: '库存'
			};
		},
		onShow() {
			
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		width: 100vw;
		.header {
			
		}
		.main {
			margin-top: $uni-spacing-col-base;
		}
	}
</style>
