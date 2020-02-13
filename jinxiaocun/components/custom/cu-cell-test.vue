<template>
	<view class="cu-cell" :class="isLastCell ? 'cu-cell-last' : ''" @tap="handleCell">
		<view class="cu-cell-wrap">
			<view v-if="isIcon" class="cu-cell-wrap-icon">
				<uni-icons :type="icon.type" :color="icon.color" :size="icon.size"></uni-icons>
			</view>
			<view v-if="isSub" class="cu-cell-wrap-sub">
			</view>
			<view class="cu-cell-wrap-content" :style="{ 'width': contentWidth }">
				<view class="cu-cell-wrap-content-title">
					{{ title }}
				</view>
				<view class="cu-cell-wrap-content-body">
					<slot name="body"></slot>
				</view>
			</view>
			<view class="cu-cell-content-footer">
				<uni-icons v-if="isLink" type="arrow" color="#c5c8ce" size='20'></uni-icons>
				<slot name="footer"></slot>
			</view>
		</view>
		<view class="cu-cell-extend">
			<slot name="extend"></slot>
		</view>
		<view class="cu-cell-note">
			<slot name="note"></slot>
		</view>
		<view class="cu-cell-verify">
			<slot name="verify"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'cu-cell',
		props: {
			title: {
				type: String,
				default: ''
			},
			isIcon: {
				type: Boolean,
				default: false
			},
			icon: {
				type: Object,
				default: () => {
					return {
						type: '',
						color: '',
						size: 0
					}
				}
			},
			isSub: {
				type: Boolean,
				default: false
			},
			isLink: {
				type: Boolean,
				default: false
			},
			url: {
				type: String,
				default: ''
			},
			params: {
				type: String,
				default: ''
			},
			isLastCell: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
			}
		},
		computed: {
			contentWidth: {
				if ((this.isIcon || this.isSub) && isFooter) {
					return 80
				}
			}
		},
		methods: {
			navigateTo () {
				let url = this.url
				if (this.params) {
					url += '?'+this.params
				}
				uni.navigateTo({
					url: url
				})
			},
			handleCell () {
				if (this.isLink) {
					this.navigateTo()
				} else {
					this.$emit('clickCell')
				}
			},
			handleTitle () {
					this.$emit('clickTitle')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cu-cell {
		position: relative;
		padding: 0 15px;
		display: flex;
		background: #fff;
		align-items: center;
		line-height: 18px;
		font-size: $uni-font-size-base;
		overflow: hidden;
		&::after{
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
			border: 0 solid $uni-split-color;
			border-bottom-width: 1px;
			left: 15px;
			right: 0;
		}
		&-last::after{
		    display: none;
		}
		&-icon{
			width: 10%;
			display: flex;
			justify-content: center;
			align-items: center;
			&:empty{
				display: none
			}
		}
		&-sub{
			width: 10%;
		}
		&-bd{
			display: flex;
			align-items: center;
		}
		&-text{
			font-size: $uni-font-size-base;
			color: $uni-text-color;
		}
		&-ft{
			width: 60%;
			position: relative;
			text-align: right;
			color: $uni-text-color;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
		}
	}
</style>
