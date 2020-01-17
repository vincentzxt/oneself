<template>
	<view :class="{ 'uni-collapse-cell-disabled': disabled,'uni-collapse-cell-notdisabled': !disabled, 'uni-collapse-cell-open': isOpen,'uni-collapse-cell-hide':!isOpen }"
	 class="uni-collapse-cell">
		<view class="uni-collapse-cell-header">
			<view v-if="isIcon" class="uni-collapse-cell-header-icon">
				<uni-icons :type="icon.type" :color="icon.color" :size="icon.size"></uni-icons>
			</view>
			<view class="uni-collapse-cell-header-body" @click="onReturn">
				<text class="uni-collapse-cell-header-body-title">{{ title }}</text>
				<view v-if="note" class="uni-collapse-cell-header-body-note">
					<text v-for="(item, index) in fiterNote" :key="index">{{ item }}</text>
				</view>
			</view>
			<view class="uni-collapse-cell-header-arrow" @click="onArrow">
				<uni-icons v-if="!isOpen" class="uni-collapse-cell-header-arrow-animation" color="#bbb" size="20" type="arrow-down" />
				<uni-icons v-if="isOpen" class="uni-collapse-cell-header-arrow-animation" color="#bbb" size="20" type="arrow-up" />
			</view>
		</view>
		<view :class="{'uni-collapse-cell-content-hide':!isOpen}" class="uni-collapse-cell-content">
			<view class="uni-collapse-cell-wrapper uni-collapse-cell-animation" :style="{'transform':isOpen?'translateY(0)':'translateY(-50%)','-webkit-transform':isOpen?'translateY(0)':'translateY(-50%)'}">
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	export default {
		name: 'UniCollapseItem',
		components: {
			uniIcons
		},
		props: {
			title: {
				// 列表标题
				type: String,
				default: ''
			},
			name: {
				// 唯一标识符
				type: [Number, String],
				default: 0
			},
			note: {
				type: String,
				default: ''
			},
			disabled: {
				// 是否禁用
				type: Boolean,
				default: false
			},
			showAnimation: {
				// 是否显示动画
				type: Boolean,
				default: false
			},
			open: {
				// 是否展开
				type: Boolean,
				default: false
			},
			isIcon: {
				// 缩略图
				type: Boolean,
				default: false
			},
			icon: {
				type: Object,
				default: () => {
					return {
						type: '',
						color: '',
						size: ''
					}
				}
			}
		},
		data() {
			return {
				isOpen: false
			}
		},
		computed: {
			fiterNote() {
				if (this.note) {
					return this.note.split('|')
				}
			}
		},
		watch: {
			open(val) {
				this.isOpen = val
			}
		},
		inject: ['collapse'],
		created() {
			this.isOpen = this.open
			this.nameSync = this.name ? this.name : this.collapse.childrens.length
			this.collapse.childrens.push(this)
			if (String(this.collapse.accordion) === 'true') {
				if (this.isOpen) {
					let lastEl = this.collapse.childrens[this.collapse.childrens.length - 2]
					if (lastEl) {
						this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = false
					}
				}
			}
		},
		methods: {
			onArrow() {
				if (this.disabled) {
					return
				}
				this.isOpen = !this.isOpen
				this.$emit("onArrow")
			},
			onReturn() {
				if (this.disabled) {
					return
				}
				this.$emit("onReturn")
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/uni.scss';

	.uni-collapse-cell {
		flex-direction: column;
		border-color: $uni-border-color;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}

	.uni-collapse-cell-hover {
		background-color: $uni-bg-color-hover;
	}

	.uni-collapse-cell-disabled {
		background-color: $uni-bg-color-hover;
		// opacity: 0.3;
	}

	.uni-collapse-cell-hide {
		height: 68px;
	}

	.uni-collapse-cell-animation {
		// transition: transform 0.3s ease;
		transition-property: transform;
		transition-duration: 0.3s;
		transition-timing-function: ease;
	}
	
	.uni-collapse-cell-header {
		position: relative;
		display: flex;
		width: 100%;
		box-sizing: border-box;
		height: 68px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px 0;
	}

	.uni-collapse-cell-header-icon {
		width: 10%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
	
	.uni-collapse-cell-header-body {
		width: 70%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.uni-collapse-cell-header-body-title {
		
	}
	
	.uni-collapse-cell-header-body-note {
		display: flex;
		flex-wrap: wrap;
		font-size: 12px;
		color: $uni-text-color-grey;
	}
	
	.uni-collapse-cell-header-arrow {
		width: 20%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-left: 0.5px solid $uni-split-color;
	}
	
	.uni-collapse-cell-content {
		overflow: hidden;
	}

	.uni-collapse-cell-wrapper {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.uni-collapse-cell-content-hide {
		height: 0px;
		line-height: 0px;
	}
</style>
