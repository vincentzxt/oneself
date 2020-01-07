<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<cu-upimg count=2></cu-upimg>
		</view>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuUpimg from '@/components/custom/cu-upimg.vue'
	export default {
		components: {
			cuPanel,
			cuCell,
			cuUpimg
		},
		data() {
			return {
				title: '报表'
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
