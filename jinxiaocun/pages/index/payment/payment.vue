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
						<cu-cell title="业务类型" isLink>
							<view style="width:80%;">
								<picker @change="handleTypeChange" :value="reqData.type" :range="typeDict">
									<view class="picker">
										<text v-if="!reqData.type" style="color:#c5c8ce">请选择业务类型</text>
										<text v-else>{{reqData.type}}</text>
									</view>
								</picker>
							</view>
						</cu-cell>
						<cu-cell title="搜索单位">
							<uni-search-bar ref="sc" style="width:65%;" @input="handleSearchCompany" placeholder="输入编码、名称、电话" cancelButton="none"></uni-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="结算单位">
							<input slot="footer" type="text" v-model="reqData.company" placeholder-style="color:#c5c8ce" placeholder="请输入单位名称"/>
						</cu-cell>
						<cu-cell title="收款方式" isLink>
							<view style="width:80%;">
								<picker @change="handleReceivablesChange" :value="reqData.receivables" :range="receivablesDict">
									<view class="picker">
										<text v-if="!reqData.receivables" style="color:#c5c8ce">请选择收款方式</text>
										<text v-else>{{reqData.receivables}}</text>
									</view>
								</picker>
							</view>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="收款金额">
							<input slot="footer" type="text" v-model="reqData.money" placeholder-style="color:#c5c8ce" placeholder="请输入收款金额"/>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="是否使用预付">
							<radio-group @change="handleAdvanceChange">
								<radio color="#2db7f5" value=0 :checked="reqData.isAdvance == 0">否</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.isAdvance == 1" style="margin-left: 10px;">是</radio>
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
					receivables: 0,
					money: 0,
					totalMoney: 0,
					isAdvance: 0,
					discount: 0
				},
				title: '付款单',
				customerDatas: null,
				customerSearchDatas: null,
				searchCustomer: false,
				typeDict: ['普通付款', '直接付款', '预付款'],
				receivablesDict: ['微信', '支付宝', '网银']
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
				this.reqData.type = this.typeDict[val.detail.value]
			},
			handleReceivablesChange(val) {
				this.reqData.receivables = this.receivablesDict[val.detail.value]
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
