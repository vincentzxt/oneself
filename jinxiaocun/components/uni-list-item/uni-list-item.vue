<template>
	<!-- #ifdef APP-NVUE -->
	<cell>
	<!-- #endif -->
	<view :style="{opacity: disabled ? '0.5' : '1'}" :hover-class="disabled || showSwitch ? '' : 'uni-list-item--hover'"
	 class="uni-list-item" @click="handleClickItem">
		<view class="uni-list-item__container" :class="{'uni-list-item--first':isFirstChild}">
			<view v-if="thumb" class="uni-list-item__icon">
				<image :src="thumb" class="uni-list-item__icon-img" />
			</view>
			<view v-else-if="showExtraIcon" class="uni-list-item__icon">
				<uni-icons :color="extraIcon.color" :size="extraIcon.size" :type="extraIcon.type" class="uni-icon-wrapper" />
			</view>
			<view class="uni-list-item__content" @tap="handleClickContent">
				<slot />
				<text class="uni-list-item__content-title">{{ title }}</text>
				<view v-if="note" class="uni-list-item__content-note">
					<text class="uni-list-item__content-note-item" 
								:style="{'margin-top': index > 1 ? '5px' : '0'}"
								v-for="(item, index) in note" :key="index">{{item}}</text>
				</view>
			</view>
			<view v-if="showBadge || showArrow || showSwitch ||showText || showIcon" class="uni-list-item__extra" @tap="handleClickFt">
				<uni-badge v-if="showBadge" :type="badgeType" :text="badgeText"  style="padding-bottom: 5px;"/>
				<text v-if="showText" class="uni-list-item__content-content">{{content}}</text>
				<switch v-if="showSwitch" :checked="switchChecked" @change.stop="onSwitchChange" />
				<uni-icons v-if="showArrow" :size="20" class="uni-icon-wrapper" color="#c5c8ce" type="arrow" />
				<uni-icons v-if="showIcon" :size="icon.size" class="uni-icon-wrapper" :color="icon.color" :type="icon.type" />
			</view>
		</view>
	</view>
	<!-- #ifdef APP-NVUE -->
	</cell>
	<!-- #endif -->
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	import uniBadge from '../uni-badge/uni-badge.vue'
	export default {
		name: 'UniListItem',
		components: {
			uniIcons,
			uniBadge
		},
		props: {
			title: {
				type: String,
				default: ''
			}, // 列表标题
			content: {
				type: String,
				default: ''
			}, // 列表标题
			note: {
				type: Array,
				default: () => {
					return []
				}
			}, // 列表描述
			disabled: {
				// 是否禁用
				type: [Boolean, String],
				default: false
			},
			showArrow: {
				// 是否显示箭头
				type: [Boolean, String],
				default: true
			},
			showBadge: {
				// 是否显示数字角标
				type: [Boolean, String],
				default: false
			},
			showText: {
				// 是否显示数字角标
				type: [Boolean, String],
				default: false
			},
			showSwitch: {
				// 是否显示Switch
				type: [Boolean, String],
				default: false
			},
			switchChecked: {
				// Switch是否被选中
				type: [Boolean, String],
				default: false
			},
			badgeText: {
				// badge内容
				type: String,
				default: ''
			},
			badgeType: {
				// badge类型
				type: String,
				default: 'success'
			},
			thumb: {
				// 缩略图
				type: String,
				default: ''
			},
			showExtraIcon: {
				// 是否显示扩展图标
				type: [Boolean, String],
				default: false
			},
			extraIcon: {
				type: Object,
				default () {
					return {
						type: '',
						color: '',
						size: 0
					}
				}
			},
			showIcon: {
				type: [Boolean, String],
				default: false
			},
			icon: {
				type: Object,
				default () {
					return {
						type: '',
						color: '',
						size: 0
					}
				}
			}
		},
		inject: ['list'],
		data() {
			return {
				isFirstChild: false
			}
		},
		mounted() {
			if (!this.list.firstChildAppend) {
				this.list.firstChildAppend = true
				this.isFirstChild = true
			}
		},
		methods: {
			handleClickItem() {
				this.$emit('clickItem')
			},
			handleClickContent() {
				this.$emit('clickContent')
			},
			handleClickFt() {
				this.$emit('clickFt')
			},
			onSwitchChange(e) {
				this.$emit('switchChange', e.detail)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/uni.scss';

	$list-item-pd: $uni-spacing-col-lg $uni-spacing-row-base;

	.uni-list-item {
		font-size: $uni-font-size-lg;
		position: relative;
		flex-direction: column;
		justify-content: space-between;
		padding-left: $uni-spacing-row-lg;
	}

	.uni-list-item--disabled {
		opacity: 0.5;
	}
	
	.uni-list-item--enabled {
		opacity: 1;
	}

	.uni-list-item--hover{
		background-color: $uni-bg-color-hover;
		text,uni-icons {
			color: #FFFFFF;
		}
	}

	.uni-list-item__container {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: $list-item-pd;
		padding-left: 0;
		flex: 1;
		position: relative;
		justify-content: space-between;
		align-items: center;
		border-top-color: $uni-border-color;
		border-top-style: solid;
		border-top-width: 1px;
	}

	.uni-list-item--first {
		border-top-width: 0px;
	}

	.uni-list-item__content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		overflow: hidden;
		flex-direction: column;
		padding-top: 10upx;
	}

	.uni-list-item__content-title {
		font-size: $uni-font-size-base;
		overflow: hidden;
		padding-top: 10upx;
		//vertical-align: center;
		line-height: $uni-font-size-base;
	}
    .uni-list-item__content-content{
		color: #555555;
		font-size: $uni-font-size-base;
	}
	.uni-list-item__content-note {
		margin-top: 20rpx;
		color: $uni-text-color-grey;
		font-size: $uni-font-size-sm;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		&-item {
			width: 50%;
		}
	}

	.uni-list-item__extra {
		// width: 25%;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		padding-right: $uni-spacing-row-lg;
	}

	.uni-list-item__icon {
		width: 10%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.uni-list-item__icon-img {
		height: $uni-img-size-sm;
		width: $uni-img-size-sm;
	}
</style>
