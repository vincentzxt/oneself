<template>
	<view class="cu-cell" :class="[isLastCell ? 'cu-cell-last' : '', disabled ? 'cu-cell-disabled' : '']" @tap="handleCell">
		<view class="cu-cell-wrap">
			<view v-if="isIcon" class="cu-cell-wrap-icon">
				<uni-icons :type="icon.type" :color="icon.color" :size="icon.size"></uni-icons>
			</view>
			<view v-if="isSub" class="cu-cell-wrap-sub">
			</view>
			<view class="cu-cell-wrap-bd" :style="{ 'width': isIcon || isSub ? '25%' : '35%' }" @tap="handleBd">
				<view v-if="notNull" class="cu-cell-wrap-bd-notnull">*</view>
				<view class="cu-cell-wrap-bd-title">{{ title }}</view>
			</view>
			<view class="cu-cell-wrap-ft">
				<view class="cu-cell-wrap-ft-item">
					<slot name="footer"></slot>
					<view @tap="handleExtend">
						<uni-icons v-if="isLink" type="arrow" color="#c5c8ce" size='20'></uni-icons>
						<uni-icons v-if="isExtendIcon" :type="extendIcon.type" :color="extendIcon.color" :size='extendIcon.size'></uni-icons>
						<text v-if="isExtendText">{{extendText}}</text>
					</view>
				</view>
				<view class="cu-cell-wrap-ft-item">
					<slot name="footer2"></slot>
				</view>
			</view>
		</view>
		<view v-if="notes" class="cu-cell-notes">
			<view v-if="isIcon || isSub" style="width:10%;"></view>
			<view :style="{ 'width': isIcon || isSub ? '90%' : '100%' }">{{notes}}</view>
		</view>
		<view v-if="disVerMessage" class="cu-cell-verify">
			<view v-if="isIcon || isSub" style="width:10%;"></view>
			<view :style="{ 'width': isIcon || isSub ? '90%' : '100%' }">{{verify}}</view>
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
			disabled: {
				type: Boolean,
				default: false
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
			},
			isSub: {
				type: Boolean,
				default: false
			},
			notes: {
				type: String,
				default: ''
			},
			disVerMessage: {
				type: Boolean,
				default: false
			},
			verify: {
				type: String,
				default: ''
			},
			notNull: {
				type: Boolean,
				default: false
			},
			isExtendIcon: {
				type: Boolean,
				default: false
			},
			extendIcon: {
				type: Object,
				default: () => {
					return {
						type: '',
						color: '',
						size: 0
					}
				}
			},
			isExtendText: {
				type: Boolean,
				default: false
			},
			extendText: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
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
			handleBd () {
				this.$emit('clickTitle')
			},
			handleExtend () {
				this.$emit('clickExtend')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cu-cell {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		padding: 10px 0px;
		&-disabled{
			color: $uni-text-color-grey;
		}
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
		&-wrap {
			display: flex;
			padding: 0 15px;
			background: #fff;
			align-items: center;
			line-height: 18px;
			font-size: $uni-font-size-base;
			overflow: hidden;
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
				&-notnull {
					color:#f4613d;
					margin-right:2px;
				}
			}
			&-text{
				font-size: $uni-font-size-base;
			}
			&-ft{
				width: 65%;
				display: flex;
				flex-direction: column;
				&-item {
					display: flex;
					position: relative;
					justify-content: space-between;
					align-items: center;
					line-height: 1.5;
				}
			}
		}
		&-notes {
			padding: 0 15px;
			display: flex;
			font-size: $uni-font-size-min;
			margin-top: 5px;
			color: #f7d767;
		}
		&-verify {
			padding: 0 15px;
			display: flex;
			font-size: $uni-font-size-min;
			margin-top: 5px;
			color: #f4613d;
		}
	}
</style>
