<template>
	<view class="cu-cell" :class="[isLastCell ? 'cu-cell-last' : '', isLink ? 'cu-cell-access' : '']">
		<view class="cu-cell-icon">
			<slot name="icon"></slot>
		</view>
		<view class="cu-cell-bd" @tap="handleTap">
			<view v-if="title || label" class="cu-cell-bd-title">
				<view v-if="title" class="cu-cell-text">{{ title }}</view>
				<view v-if="label" class="cu-cell-desc">
					<text class="cu-cell-desc-item" :style="{'margin-top': index > 1 ? '5px' : '0px'}" v-for="(item, index) in filterLabel" :key="index">{{item}}</text>
				</view>
			</view>
			<slot></slot>
		</view>
		<view catchtap="navigateTo" class="cu-cell-ft">
			<view v-if="value">{{ value }}</view>
			<view v-else>
				<slot name="footer"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'cu-cell',
		props: {
			title: {
				type: String
			},
			label: {
				type: String
			},
			value: {
				type: String
			},
			isLink: {
				type: Boolean,
				value: false
			},
			url: {
				type: String,
				value: ''
			},
			params: {
				type: String,
				value: ''
			},
			isReturn: {
				type: Boolean,
				value: false
			},
			rName: {
				type: String,
				value: ''
			},
			rDatas: {
				type: Object,
				value: {}
			}
		},
		data() {
			return {
				isLastCell: true
			}
		},
		computed: {
			filterLabel() {
				return this.label.split('|')
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
			navigateReturn () {
				let pages =  getCurrentPages()
				let prevPage = pages[pages.length - 2]
				prevPage.setData({
					rName: this.rName,
					datas: this.rDatas
				})
				uni.navigateBack({
					delta: 1
				})
			},
			handleTap () {
				if (this.isLink) {
					this.navigateTo()
				}
				if (this.isReturn) {
					this.navigateReturn()
				}
			},
			updateIsLastCell (isLastCell) {
				this.isLastCell = isLastCell
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cu-cell {
		position: relative;
		padding: 12px 15px;
		display: flex;
		background: #fff;
		align-items: center;
		line-height: 1.4;
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
			margin-right: 5px;
			&:empty{
				display: none
			}
		}
		&-bd{
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex: 1;
			&-title{
				flex: 1;
			}
		}
		&-text{
			line-height: 24px;
			font-size: $uni-font-size-base;
			color: $uni-text-color;
		}
		&-desc{
			line-height: 1.2;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-grey;
			margin-top: $uni-spacing-col-base;
			display: flex;
			flex-wrap: wrap;
			&-item {
				width: 50%;
			}
		}
		&-ft{
			position: relative;
			text-align: right;
			color: $uni-text-color;
		}
		&-access &-ft{
			padding-right: 13px;
			&::after{
				content: " ";
				display: inline-block;
				width: 6px;
				height: 6px;
				position: absolute;
				top: 50%;
				right: 2px;
				border-width: 2px 2px 0 0;
				border-color: $uni-border-color;
				border-style: solid;
				transform: translateY(-50%) matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
			}
		}
	}
</style>
