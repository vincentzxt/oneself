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
						<cu-cell title="业务类型">
							<radio-group @change="handleTypeChange">
								<radio color="#2db7f5" value=0 :checked="reqData.type == 0">现金费用</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.type == 1" style="margin-left: 10px;">往来费用</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="票据类型">
							<radio-group @change="handleBillTypeChange">
								<radio color="#2db7f5" value=0 :checked="reqData.type == 0">收据</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.type == 1" style="margin-left: 10px;">普通发票</radio>
								<radio color="#2db7f5" value=2 :checked="reqData.type == 2" style="margin-left: 10px;">专用发票</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="发票号">
							<input slot="footer" type="text" v-model="reqData.billCode" placeholder-style="color:#c5c8ce" placeholder="请输入发票号"/>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="费用名称">
							<input slot="footer" type="text" v-model="reqData.account" placeholder-style="color:#c5c8ce" placeholder="请输入费用名称"/>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="金额">
							<input slot="footer" type="text" v-model="reqData.money" placeholder-style="color:#c5c8ce" placeholder="请输入金额"/>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="税额">
							<input slot="footer" type="text" v-model="reqData.tax" placeholder-style="color:#c5c8ce" placeholder="请输入税额"/>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="含税金额">
							<input slot="footer" type="text" v-model="reqData.taxMoney" placeholder-style="color:#c5c8ce" placeholder="请输入含税金额"/>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
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
				reqData: {
					type: 0,
					billType: 0,
					billCode: '',
					money: 0.00,
					tax: 0.00,
					taxMoney: 0.00
				},
				title: '费用单'
			};
		},
		onShow() {
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleTypeChange(val) {
				this.reqData.type = val.detail.value
			},
			handleBillTypeChange(val) {
				this.reqData.billType = val.detail.value
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
			height: 11%;
		}
		.main {
			height: 82%;
		}
		.footer {
			height: 7%;
			display: flex;
			&-btn	{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
