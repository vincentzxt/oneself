<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell-group>
						<cu-cell title="是否赊账">
							<radio-group @change="handleCreditChange">
								<radio color="#2db7f5" value=0 :checked="isCredit == 0">否</radio>
								<radio color="#2db7f5" value=1 :checked="isCredit == 1" style="margin-left: 10px;">是</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="收款方式" isLink>
							<view style="width:80%;">
								<picker @change="handleReceivablesChange" :value="receivables" :range="receivablesDict">
									<view class="picker">
										<text v-if="!receivables" style="color:#c5c8ce">请选择收款方式</text>
										<text v-else>{{receivables}}</text>
									</view>
								</picker>
							</view>
						</cu-cell>
						<cu-cell title="是否生成出库单">
							<radio-group @change="handleOrderChange">
								<radio color="#2db7f5" value=0 :checked="isOrder == 0">否</radio>
								<radio color="#2db7f5" value=1 :checked="isOrder == 1" style="margin-left: 10px;">是</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="是否打印单据">
							<radio-group @change="handlePrintChange">
								<radio color="#2db7f5" value=0 :checked="isPrint == 0">否</radio>
								<radio color="#2db7f5" value=1 :checked="isPrint == 1" style="margin-left: 10px;">是</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="抹零">
							<input slot="footer" type="text" v-model="reqData.totalPrice"/>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<text class="footer-text">订单金额：￥{{reqData.totalPrice}}</text>
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" @click="handleSubmit">提交</button>
		</view>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			cuPanel,
			cuCell,
			cuCellGroup,
			uniList,
			uniListItem
		},
		data() {
			return {
				reqData: {},
				title: '销售收款',
				receivables: 0,
				isCredit: 0,
				isOrder: 0,
				isPrint: 0,
				receivablesDict: ['微信', '支付宝', '网银']
			};
		},
		onLoad(options) {
			if (options) {
				this.reqData = JSON.parse(options.reqData)
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleCreditChange(val) {
				this.isCredit = val.detail.value
			},
			handleReceivablesChange(val) {
				console.log(val)
				this.receivables = this.receivablesDict[val.detail.value]
			},
			handleOrderChange(val) {
				this.isOrder = val.detail.value
			},
			handlePrintChange(val) {
				this.isPrint = val.detail.value
			},
			handleSubmit() {
				
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
		height: 100vh;
		width: 100vw;
		.header {
			height: 10%;
		}
		.main {
			height: 83%;
			.picker {
				width: 100%;
				display: flex;
				justify-content: flex-end;
			}
		}
		.footer {
			height: 7%;
			display: flex;
			background-color:$uni-split-color;
			&-text {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: $uni-spacing-row-lg;
			}
			&-btn	{
				width: 50%;
				height: 100%;
			}
		}
	}
</style>
