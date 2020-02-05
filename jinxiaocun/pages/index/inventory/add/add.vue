<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true">
				<view class="product-wrap" v-for="(item, index) in reqData.orderlist" :key="index" :class="index == reqData.orderlist.length - 1 ? 'product-wrap-last' : ''">
					<view class="product-wrap-content1">
						<view>{{item.productname}}</view>
					</view>
					<view class="product-wrap-content2">
						<view style="color: #808695;width:50%;">现有库存：{{item.currentQty}}</view>
						<view style="color: #808695; width:50%;"><text>{{item.status}}：</text><text :style="{color: item.statusColor}">{{Math.abs(item.qty - item.currentQty)}}</text></view>
					</view>
					<view class="product-wrap-content3">
						<text style="color: #808695;">盘点库存：</text>
						<uni-number-box min=0 max=999999 width=180 height=30 valWidth=100 btWidth=40 lineHeight=30 :value="item.qty" @change="handleQtyChange($event, item)"></uni-number-box>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="footer-item" style="color: #2d8cf0;border-color: #2d8cf0;" type="primary" plain @click="handleAdd">添加产品</button>
			<button class="footer-item" style="background-color: #2d8cf0;" type="primary" @click="handleSubmit">提交</button>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	import { api } from '@/config/common.js'
	import { stockCheck } from '@/api/stkstock.js'
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				reqData: {
					orderlist: []
				}
			}
		},
		onLoad(options) {
			for (let item of JSON.parse(options.productList)) {
				let data = {
					productid: item.productid,
					productname: item.productname,
					qty: item.qty,
					currentQty: item.qty,
					status: '帐实相符',
					statusColor: '#808695',
					unit: item.unit,
					ismainunit: 1
				}
				this.reqData.orderlist.push(data)
			}
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
			handleQtyChange(val, item) {
				item.qty = val
				if ((item.qty - item.currentQty) > 0) {
					item.status = '盘盈'
					item.statusColor = '#3dc57a'
				} else if ((item.qty - item.currentQty) < 0) {
					item.status = '盘亏'
					item.statusColor = '#f4613d'
				} else {
					item.status = '帐实相符'
					item.statusColor = '#808695'
				}
			},
			handleAdd() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleSubmit() {
				this.$refs.loading.open()
				stockCheck(api.stkStock, this.reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						uni.showToast({
							icon: 'success',
							title: '提交成功'
						})
						setTimeout(()=>{
							uni.navigateBack({
								delta: 2
							})
						},500)
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fill {
		width: 100%;
		height: 100%;
	}
	.container {
		.header {
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			&-type {
				margin-left: 10px;
				margin-right: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.main {
			display: flex;
			justify-content: space-between;
			margin-top: 5px;
			.product-wrap {
				position: relative;
				background-color: #FFFFFF;
				padding: 10px;
				display: flex;
				flex-direction: column;
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
				&-content1 {
					display: flex;
					align-items: center;
				}
				&-content2 {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
				&-content3 {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
		.footer {
			height: 48px;
			display: flex;
			justify-content: space-between;
			&-item {
				width: 49%;
			}
		}
	}
</style>
