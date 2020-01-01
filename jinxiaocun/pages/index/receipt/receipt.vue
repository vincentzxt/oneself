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
								<radio color="#2db7f5" value=0 :checked="reqData.type == 0">普通收款</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.type == 1" style="margin-left: 10px;">直接收款</radio>
								<radio color="#2db7f5" value=2 :checked="reqData.type == 2" style="margin-left: 10px;">预收款</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="搜索单位">
							<uni-search-bar ref="sc" style="width:60%;" @input="handleSearchCompany" placeholder="输入编码、名称、电话" cancelButton="none"></uni-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="结算单位">
							<input slot="footer" type="text" v-model="reqData.company" placeholder-style="color:#c5c8ce" placeholder="请输入单位名称"/>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="收款方式">
							<radio-group @change="handleReceivablesMethodChange">
								<radio color="#2db7f5" value=0 :checked="reqData.receivablesMethod == 0">微信</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.receivablesMethod == 1" style="margin-left: 10px;">支付宝</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.receivablesMethod == 2" style="margin-left: 10px;">网银</radio>
							</radio-group>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="收款金额">
							<input slot="footer" type="text" v-model="reqData.money" placeholder-style="color:#c5c8ce" placeholder="请输入收款金额"/>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="是否使用预收">
							<radio-group @change="handleAdvanceChange">
								<radio color="#2db7f5" value=0 :checked="reqData.isAdvance == 0">是</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.isAdvance == 1" style="margin-left: 10px;">否</radio>
							</radio-group>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="折让">
							<input slot="footer" type="text" v-model="reqData.discount" placeholder-style="color:#c5c8ce" placeholder="请输入折让金额"/>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
				<cu-panel v-if="searchCustomer">
					<uni-list>
						<uni-list-item :title="item.company" :note="'电话：'+item.mobile" v-for="(item, index) in customerSearchDatas" :key="index" :showArrow="false" @tap="handleSelectCustomer(item)">
						</uni-list-item>
					</uni-list>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<text class="footer-text">结款金额：￥{{reqData.totalMoney}}</text>
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" @click="handleSubmit">提交</button>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniSearchBar,
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
					company: '',
					receivablesMethod: 0,
					money: 0,
					totalMoney: 0,
					isAdvance: 0,
					discount: 0
				},
				title: '收款单',
				customerDatas: null,
				customerSearchDatas: null,
				searchCustomer: false,
			};
		},
		onShow() {
			this.customerDatas = uni.getStorageSync('customerList')
			this.customerSearchDatas = this.customerDatas
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
			handleSearchCompany(val) {
				if (val.value) {
					this.customerSearchDatas = this.customerDatas.filter((item) => {
						return item.company.indexOf(val.value) !== -1 || item.code.indexOf(val.value) !== -1 || item.mobile.indexOf(val.value) !== -1
					})
					this.searchCustomer = true
				} else {
					this.customerSearchDatas = this.customerDatas
					this.searchCustomer = false
				}
			},
			handleSelectCustomer(val) {
				this.reqData.company = val.company
				this.searchCustomer = false
				this.$refs.sc.clear()
			},
			handleAdvanceChange(val) {
				this.reqData.isAdvance = val.detail.value
			},
			handleReceivablesMethodChange(val) {
				this.reqData.receivablesMethod = val.detail.value
			},
			handleSubmit() {
				
			}
		},
		watch: {
			'reqData.money': {
				handler(val) {
					this.reqData.totalMoney = val - this.reqData.discount
				},
				deep: true
			},
			'reqData.discount': {
				handler(val) {
					this.reqData.totalMoney = this.reqData.totalMoney - val
				},
				deep: true
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
