<template>
	<view class="cu-searchbar">
		<view :style="{borderRadius:radius+'px',backgroundColor: bgColor}" class="cu-searchbar__box" @click="searchClick">
			<!-- #ifdef MP-ALIPAY -->
			<view class="cu-searchbar__box-icon-search">
				<uni-icons color="#c5c8ce" size="18" type="search" />
			</view>
			<!-- #endif -->
			<!-- #ifndef MP-ALIPAY -->
			<uni-icons color="#c5c8ce" class="cu-searchbar__box-icon-search" size="18" type="search" />
			<!-- #endif -->
			<input v-if="show" :focus="showSync" :maxlength="maxlength" @confirm="confirm" class="cu-searchbar__box-search-input"
			 confirm-type="search" type="text" v-model="searchVal" />
			<text v-else class="cu-searchbar__text-placeholder">{{ placeholder }}</text>
			<view v-if="show && (clearButton==='always'||clearButton==='auto'&&searchVal!=='')" class="cu-searchbar__box-icon-clear" @click="clear">
				<uni-icons color="#c5c8ce" class="" size="24" type="clear" />
			</view>
		</view>
		<text @click="cancel" class="cu-searchbar__cancel" v-if="cancelButton ==='always' || show && cancelButton ==='auto'">{{cancelText}}</text>
	</view>
</template>

<script>
	import uniIcons from "../uni-icons/uni-icons.vue";
	export default {
		name: "UniSearchBar",
		components: {
			uniIcons
		},
		props: {
			placeholder: {
				type: String,
				default: "请输入搜索内容"
			},
			radius: {
				type: [Number, String],
				default: 5
			},
			clearButton: {
				type: String,
				default: "auto"
			},
			cancelButton: {
				type: String,
				default: "auto"
			},
			cancelText: {
				type: String,
				default: '取消'
			},
			bgColor: {
				type: String,
				default: "#F8F8F8"
			},
			maxlength: {
				type: [Number, String],
				default: 100
			}
		},
		data() {
			return {
				show: false,
				showSync: false,
				searchVal: ""
			}
		},
		watch: {
			searchVal() {
				this.$emit("input", {
					value: this.searchVal
				})
			}
		},
		methods: {
			searchClick() {
				if (this.show) {
					return
				}
				this.searchVal = ""
				this.show = true;
				this.$nextTick(() => {
					this.showSync = true;
				})
			},
			clear() {
				this.searchVal = ""
			},
			cancel() {
				this.$emit("cancel", {
					value: this.searchVal
				});
				this.searchVal = ""
				this.show = false
				this.showSync = false
				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
			},
			confirm() {
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				this.$emit("confirm", {
					value: this.searchVal
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	$cu-searchbar-height: 50px;
	.cu-searchbar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		position: relative;
		background-color: #FFFFFF;
		align-items: center;
	}

	.cu-searchbar__box {
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		overflow: hidden;
		position: relative;
		flex: 1;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		height: $cu-searchbar-height;
		padding: 5px 5px 5px 0px;
		border-width: 0px;
		border-style: solid;
		margin-right: 5px;
	}

	.cu-searchbar__box-icon-search {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		width: 32px;
		justify-content: center;
		align-items: center;
		color: $uni-text-color-placeholder;
	}

	.cu-searchbar__box-search-input {
		flex: 1;
		font-size: $uni-font-size-base;
		color: $uni-text-color;
	}

	.cu-searchbar__box-icon-clear {
		align-items: center;
		line-height: 24px;
		padding-left: 5px;
	}

	.cu-searchbar__text-placeholder {
		font-size: $uni-font-size-base;
		color: $uni-text-color-placeholder;
		margin-left: 5px;
	}

	.cu-searchbar__cancel {
		line-height: $cu-searchbar-height;
		font-size: 14px;
		color: $uni-color-link;
	}
</style>
