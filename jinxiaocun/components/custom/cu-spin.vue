<template>
	<view class="cu-spin" :class="[fix ? 'cu-spin-fix' : '', fullscreen ? 'cu-spin-fullscreen' : '']">
		<div class="cu-spin-main">
			<view class="cu-spin-dot"></view>
			<div class="cu-spin-text"><slot></slot></div>
		</div>
	</view>
</template>

<script>
	export default {
		name: 'cu-spin',
		props: {
			fix: {
				type: Boolean,
				value: false
			},
			fullscreen: {
				type: Boolean,
				value: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	$spin-dot-size: 20px;
	.cu-spin {
		color: $uni-color-primary;
		vertical-align: middle;
		text-align: center;
		&-dot {
			position: relative;
			display: block;
			border-radius: 50%;
			background-color: $uni-color-primary;
			
			animation: ancu-spin-bounce 1s 0s ease-in-out infinite;
	   }
		&-fix {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 8;
			
			background-color: rgba(255,255,255,.9);
		}
		&-fullscreen{
			z-index: 2010;
			&-wrapper{
				position: fixed;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
			}
		}
		&-fix &-main {
			position: absolute;
			top: 50%;
			left: 50%;
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		&-fix &-dot {
			display: inline-block;
		}
		&-text,
		&-show-text &-dot {
			display: none;
		}
		&-show-text &-text {
			display: block;
			font-size: $uni-font-size-base;
		}
	}
	@keyframes ancu-spin-bounce {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
