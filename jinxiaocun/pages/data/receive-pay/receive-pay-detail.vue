<template>
	<view class="container">
		<view class="header" :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="header2">
			<cu-date :isSort = "false" :isFilter = "false" :initDate = "initDate" @dateOk="handleDateOk">
			</cu-date>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<view class="main-receive-pay">
				<view class="main-receive-pay-header">
					<view class="main-receive-pay-header-block" style="background-color: #a1c8f3;">
						<text class="main-receive-pay-header-block-title">{{datas.totalSaleBillCount}}</text>
						<text class="main-receive-pay-header-block-des">{{totalTitle1}}</text>
					</view>
					<view class="main-receive-pay-header-block" style="background-color: #ffcc80;">
						<text class="main-receive-pay-header-block-title">￥{{numberFilter(datas.totalReceivable)}}</text>
						<text class="main-receive-pay-header-block-des">{{totalTitle2}}</text>
					</view>
				</view>
				<view class="main-receive-pay-content">
					<view class="main-receive-pay-content-header">
						<view class="main-receive-pay-content-header-view">
							<view class="table-item1">{{tableHeader1}}</view>
							<view class="table-item2">{{tableHeader2}}</view>
							<view class="table-item3">{{tableHeader3}}</view>
						</view>
					</view>
					<view 
						class = "main-receive-pay-content-cell"
						v-for = "(item, index) in datas.reportReceiveCustomerPays"
						:key = "index"
						@tap = "handleNavTo"
						>
						<view class="main-receive-pay-content-cell-header">
							<view class = "main-receive-pay-content-cell-header-ym">
								<view class="table-item0">{{item.ym}}</view>
							</view>
							<view class="main-receive-pay-content-cell-header-footer">
								<uni-icons type="arrow" size=20 color="#808695"></uni-icons>
							</view>
						</view>
						<view
							class = "main-receive-pay-content-cell-body"
							v-for = "(child, indexChild) in item.reportReceiveAddPayCustomer"
							:key = "indexChild"
						>
							<view class="table-item1">{{dateFilter(child.bildate)}}</view>
							<view class="table-item2">{{child.receiveAmount}}</view>
							<view class="table-item3">{{child.salesAmount}}</view>
						</view>
					</view>
				</view>	
			</view>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import cuDate from '@/components/custom/cu-date.vue'
	import { api } from '@/config/common.js'
	import { queryReceiveDetail, queryPayDetail } from '@/api/data.js'
	import { dateFormat, numberFormat } from '@/utils/tools.js'
	export default {
		components: {
			cuDate
		},
		data() {
			return {
				pageType: 1,
				title: '',
				totalTitle1: '',
				totalTitle2: '',
				tableHeader1: '',
				tableHeader2: '',
				tableHeader3: '',
				datas: {},
				date: 'month',
				startDate: '',
				endDate: '',
				customerName: ''
			}
		},
		onLoad(options) {
			this.pageType = parseInt(options.pageType)
			this.customerName = options.contactunitName
			let sDate = new Date()
			let eDate = new Date()
			sDate.setDate(1)
			this.startDate = dateFormat('YYYY-mm-dd', sDate)
			this.endDate = dateFormat('YYYY-mm-dd', eDate)
			switch(this.pageType) {
				case 1:
					this.title = '应收详情分析'
					this.totalTitle1 = '应收单数'
					this.totalTitle2 = '应收总余额'
					this.tableHeader1 = '日期'
					this.tableHeader2 = '应收'
					this.tableHeader3 = '收款'
					this.detailUrl = '/pages/bill/receipt-list/receipt-list'
					break
				case 2:
					this.title = '应付详情分析'
					this.totalTitle1 = '应付单数'
					this.totalTitle2 = '应付总余额'
					this.tableHeader1 = '日期'
					this.tableHeader2 = '应付'
					this.tableHeader3 = '付款'
					this.detailUrl = '/pages/bill/payment-list/payment-list'
					break
			}
			this.getData()
		},
		computed: {
			headerHeight() {
				return this.$headerHeight
			},
			initDate() {
				return {
					title: this.title,
					date: this.date,
					startDate: this.startDate,
					endDate: this.endDate
				}
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleNavTo() {
				let params = 'startDate='+this.startDate+'&endDate='+this.endDate+'&customerName='+this.customerName
				uni.navigateTo({
					url: this.detailUrl+'?'+params
				})
			},
			getData() {
				let	reqData = {
					customerName: this.customerName,
					startDate: this.startDate,
					endDate: this.endDate
				}
				this.$refs.loading.open()
				switch(this.pageType) {
					case 1:
						queryReceiveDetail(api.report, reqData).then(res => {
							this.$refs.loading.close()
							if (res.status == 200 && res.data.returnCode == '0000') {
								this.datas = res.data.data
								console.log(this.datas)
							}
						}).catch(error => {
							this.$refs.loading.close()
						})
						break
					case 2:
						queryPayDetail(api.report, reqData).then(res => {
							this.$refs.loading.close()
							if (res.status == 200 && res.data.returnCode == '0000') {
								this.datas = res.data.data
							}
						}).catch(error => {
							this.$refs.loading.close()
						})
						break
				}
			},
			numberFilter(number) {
				return numberFormat(number)
			},
			dateFilter(date) {
				let arr0 = date.split(' ')
				let arr1 = arr0[0].split('-')
				return arr1[1]+'月'+arr1[2]+'日'
			},
			handleDateOk(val) {
				this.date = val.date
				this.startDate = val.startDate
				this.endDate = val.endDate
				this.getData()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		width: 100vw;
		.fill{
			height: calc(100% - 60px);;
		}
		.h50 {
			height: 50px;
		}
		.header2 {
			margin-top: $uni-spacing-col-base;
		}
		.table-item0 {
			width: 100%;
		}
		.table-item1 {
			width: 23%;
		}
		.table-item2 {
			width: 23%;
			border-left:0.5px solid #dddee1;
			padding-left:10px;
		}
		.table-item3 {
			width: 27%;
			border-left:0.5px solid #dddee1;
			padding-left:10px;
		}
		.main {
			margin-top: $uni-spacing-col-base;
			&-receive-pay {
				font-size:$uni-font-size-sm;
				&-header {
					background-color: #FFFFFF;
					padding: 10px 0;
					width: 750upx;
					display: flex;
					justify-content: space-around;
					align-items: center;
					&-block {
						height: 130upx;
						width: 345upx;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						color: #ffffff;
						&-title {
							font-size:$uni-font-size-sm;
							font-weight: bold;
						}
						&-des {
							font-size:$uni-font-size-sm;
						}
					}
				}
				&-content {
					margin-top: $uni-spacing-row-base;
					background-color: #FFFFFF;
					display: flex;
					flex-direction: column;
					&-header {
						padding: 10px 5px;
						border-bottom:0.5px solid #dddee1;
						background-color: #f8f8f9;
						color: $uni-title-color;
						&-view {
							display: flex;
							align-items: center;
							width: 95%;
						}
					}
					&-cell {
						display: flex;
						flex-direction: column;
						border-bottom:0.5px solid #dddee1;
						&-header {
							padding: 10px 5px;
							background-color:#ebf7ff;
							border-bottom:0.5px solid #dddee1;
							display: flex;
							&-ym {
								display: flex;
								width: 95%;
							}
							&-footer {
								width: 5%;
								display: flex;
								justify-content: center;
								align-items: center;
							}
						}
						&-body {
							padding: 10px 5px;
							width: 95%;
							display: flex;
						}
					}
				}
			}
		}
	}
</style>
