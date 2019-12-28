<template>
	<view class="cu-panel">
		<view v-if="title" class="cu-panel-title" :class="hideTop ? 'cu-panel-title-hide-top' : ''">{{ title }}</view>
		<view class="cu-panel-content" :class="hideBorder ? 'cu-panel-without-border' : ''">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'cu-pan',
		props: {
			title: {
				type: String,
				value: ''
			},
			hideTop: {
				type: Boolean,
				value: false
			},
			hideBorder: {
				type: Boolean,
				value: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cu-panel {
		position: relative;
		overflow: hidden;
		&-title {
			font-size: $uni-font-size-base;
			line-height: 1;
			color: $uni-title-color;
			padding: 20px 16px 10px;
			&-hide-top{
				padding-top: 0;
			}
		}
		&-content{
			position: relative;
			background: #fff;
			overflow: hidden;
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 200%;
				height: 200%;
				transform: scale(.5);
				transform-origin: 0 0;
				pointer-events: none;
				box-sizing: border-box;
				border: 0 solid $uni-border-color;
				border-top-width: 1px;
				border-bottom-width: 1px;
			}
	  }
		&-without-border{
			border: 0 none;
		}
	}
</style>
