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
						<cu-cell title="票据类型" isLink>
							<view style="width:80%;">
								<picker @change="handleBillTypeChange" :value="reqData.billType" :range="billDict">
									<view class="picker">
										<text v-if="!reqData.billType" style="color:#c5c8ce">请选择票据类型</text>
										<text v-else>{{reqData.billType}}</text>
									</view>
								</picker>
							</view>
						</cu-cell>
						<cu-cell title="搜索单位">
							<uni-search-bar ref="sc" style="width:65%;" @input="handleSearchCompany" placeholder="输入编码、名称、电话" cancelButton="none"></uni-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="单位名称">
							<input slot="footer" type="text" v-model="reqData.company" placeholder-style="color:#c5c8ce" placeholder="请输入单位名称"/>
						</cu-cell>
						<cu-cell title="订单" :value="reqData.order" isLink url="" params="name=masterUnit">
						</cu-cell>
						<cu-cell v-if="!searchCustomer" title="发票号">
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
				<cu-panel v-if="searchCustomer">
					<uni-list>
						<uni-list-item :title="item.company" :note="'电话：'+item.mobile" v-for="(item, index) in customerSearchDatas" :key="index" :showArrow="false" @tap="handleSelectCustomer(item)">
						</uni-list-item>
					</uni-list>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
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
					billType: 0,
					company: '',
					order: '',
					billCode: '',
					money: 0.00,
					tax: 0.00,
					taxMoney: 0.00
				},
				title: '费用单',
				customerDatas: null,
				customerSearchDatas: null,
				searchCustomer: false,
				typeDict: ['现金费用', '往来费用'],
				billDict: ['收据', '普通发票', '专用发票']
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
			handleBillTypeChange(val) {
				this.reqData.billType = this.billDict[val.detail.value]
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
			&-btn	{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
