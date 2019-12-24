<template>
	<view class="container">
		<view class="header">
			<cu-custom bgColor="bg-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">{{title}}</block>
			</cu-custom>
		</view>
		<view class="content">
			<view style="background-color: blue; width: 50%;height:100%;">
				<text>test</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		onLoad() {
			console.log("view onLoad")
		},
		methods: {
		
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.content {
			background-color: red;
			height: 100upx;
		}
	}
</style>
