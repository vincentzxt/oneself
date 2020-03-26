<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<view class="content">
				<uni-icons type="c-success" color="#3bc620" size=70></uni-icons>
				<text>单据创建成功，是否打印单据？</text>
			</view>
			<view class="btn">
				<button class="btn-btn1" type="primary" @click="handlePrint">打印单据</button>
				<button class="btn-btn2" type="primary" @click="handleNext">继续开单</button>
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="popup-wrap">
				<view class="popup-wrap-header">
					<uni-icons type="tips" color="#ffffff" size=20></uni-icons>
					<text style="margin-left:10px;">提示</text>
				</view>
				<view class="popup-wrap-content">
					<text>没有发现可用打印机,是否马上去设置？</text>
				</view>
				<view class="popup-wrap-footer">
					<button class="popup-wrap-footer-cancel" type="primary" @tap="handleCancelSet">取消</button>
					<button class="popup-wrap-footer-add" type="primary" @tap="handleGoSet">设置</button>
				</view>
			</view>
		</uni-popup>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import { api } from '@/config/common.js'
	import { printSalesOrder } from '@/api/print.js'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				title: '打印单据',
				reqData: {
					model: '',
					isPrint: 1
				},
				returnPage: ''
			};
		},
		onLoad(options) {
			this.reqData.model = options.orderId
			this.returnPage = options.returnPage
		},
		computed: {
			headerHeight() {
				return this.$headerHeight
			},
			mainHeight() {
				return this.$mainHeight
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handlePrint() {
				this.$refs.loading.open()
				printSalesOrder(api.Print, this.reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200) {
						switch(res.data.returnCode) {
							case '0000':
								uni.showToast({
									icon: 'success',
									title: '打印单据成功'
								})
								setTimeout(()=>{
									uni.navigateTo({
										url: this.returnPage
									})
								},500)
								break
							case '101':
								this.$refs.popup.open()
								break
							default: 
								uni.showToast({
									icon: 'none',
									title: res.data.returnMessage
								})
								setTimeout(()=>{
									uni.navigateTo({
										url: this.returnPage
									})
								},500)
						}
					} else {
						uni.showToast({
							icon: 'none',
							title: res.data.returnMessage
						})
					} 
				}).catch(error => {
					this.$refs.loading.close()
					uni.showToast({
						icon: 'none',
						title: error
					})
				})
			},
			handleNext() {
				uni.navigateTo({
					url: this.returnPage
				})
			},
			handleCancelSet() {
				this.$refs.popup.close()
				uni.navigateTo({
					url: this.returnPage
				})
			},
			handleGoSet() {
				uni.navigateTo({
					url: '/pages/my/print/print'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.main {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 60upx;
			font-size: 16pt;
		}
		.btn {
			display: flex;
			&-btn1 {
				background-color: #2d8cf0;
			}
			&-btn2 {
				background-color: #2d8cf0;
				margin-left: 40upx;
			}
		}
		.popup-wrap {
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			border-radius: 5px;
			width: 600upx;
			&-header {
				display: flex;
				padding: 10px 10px;
				background-color: #2d8cf0;
				color: #ffffff;
			}
			&-content {
				display: flex;
				padding: 15px 10px;
				border-top: 0.5px solid $uni-border-color;
			}
			&-footer {
				display: flex;
				align-items: center;
				justify-content: space-around;
				padding: 10px;
				border-top: 0.5px solid $uni-border-color;
				&-add {
					background-color: #2d8cf0;
					font-size: $uni-font-size-base;
				}
				&-cancel {
					background-color: #ffffff;
					border-width: 0px;
					font-size: $uni-font-size-base;
					color: #808695;
				}
			}
		}
	}
</style>
