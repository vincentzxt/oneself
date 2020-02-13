<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
						<cu-cell title="公司Logo">
							<text slot="footer"></text>
						</cu-cell>
						<cu-cell title="版本号">
							<text slot="footer">v1.1</text>
						</cu-cell>
						<cu-cell title="微博账号">
							<text slot="footer">wbb2909</text>
						</cu-cell>
						<cu-cell title="微信公众号">
							<text slot="footer">yigeyundan</text>
						</cu-cell>
				</cu-panel>
				
			</scroll-view>
		</view>
		<view class="footer">
			　<text>Copyright @一格云单 All Rights Reserved</text>
		</view>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import { api } from '@/config/common.js';
	export default {
		components: {
			cuPanel,
			cuCell,
			cuCellGroup
		},
		data() {
			return {
				title: '关于我们'
			};
		},
		onShow() {
		},
		onLoad(option){
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
	.fill {
		width: 100%;
		height: 100%;
	}
	.container {
		font-size: $uni-font-size-base;
		background-color: #FFFFFF;
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
			text-align: center;
			font-size: $uni-font-size-sm;
		}
	}
	.uni-list-cell {
		display: flex;
		flex-direction: column;
	    justify-content: flex-start
	}
</style>
