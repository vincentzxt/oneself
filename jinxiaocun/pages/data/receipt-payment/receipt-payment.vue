<template>
	<view class="container">
		<view class="header" :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="header2">
			<cu-date :initDate = "initDate" @dateOk="handleDateOk" :isSort = "false" :initFilter = "initFilter" @filterOk="handleFilterOk">
			</cu-date>
		</view>
		<view class="main">
			<view class="main-sale">
				<view class="main-sale-header">
					<view class="main-sale-header-block" style="background-color: #a1c8f3;">
						<text class="main-sale-header-block-title">{{numberFilter(datas.totalBalance)}}</text>
						<text class="main-sale-header-block-des">总余额</text>
					</view>
					<view class="main-sale-header-block" style="background-color: #c4c4c4;">
						<text class="main-sale-header-block-title">￥{{numberFilter(datas.totalRecieved)}}</text>
						<text class="main-sale-header-block-des">总收款</text>
					</view>
					<view class="main-sale-header-block" style="background-color: #ffcc80;">
						<text class="main-sale-header-block-title">￥{{numberFilter(datas.totalPayment)}}</text>
						<text class="main-sale-header-block-des">总付款</text>
					</view>
				</view>
				<view class="main-sale-content">
					<view class="main-sale-content-header">
						<view class="main-sale-content-header-view">
							<view class="table-item1">日期</view>
							<view class="table-item2">收款</view>
							<view class="table-item3">付款</view>
							<view class="table-item3">余额</view>
						</view>
					</view>
					<view class = "main-sale-content-cell" v-for = "(item, index) in datas.resultList" :key = "index"
						:style = "{'background-color': index % 2 !== 0 ? '#ebf7ff' : ''}"
						@tap = "handleNavTo(item)">
						<view class = "main-sale-content-cell-body">
							<view class="table-item1">{{item.yearMonth}}</view>
							<view class="table-item2">{{numberFilter(item.payment)}}</view>
							<view class="table-item3">{{numberFilter(item.recived)}}</view>
							<view class="table-item3">{{numberFilter(item.balance)}}</view>
						</view>
						<view class="main-sale-content-cell-footer">
							<uni-icons type="arrow" size=20 color="#808695"></uni-icons>
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
	import { queryCashAccountReport } from '@/api/data.js'
	import { dateFormat, numberFormat } from '@/utils/tools.js'
	export default {
		components: {
			cuDate
		},
		data() {
			return {
				title: '收付款分析',
				datas: [],
				date: '',
				startDate: '',
				endDate: '',
				cashAccountTypes: [1, 2, 3, 4],
				contactUnitType: 0,
				contactUnitName: '',
				billType: 0,
				initFilter: [
					{ id: 0, name: '所有', checked: true, condition: false },
					{ id: 1, name: '银行卡', checked: false, condition: false },
					{ id: 2, name: '微信', checked: false, condition: false },
					{ id: 3, name: '支付宝', checked: false, condition: false },
					{ id: 4, name: '现金', checked: false, condition: false }
				]
			}
		},
		onLoad(options) {
			this.date = options.date
			this.startDate = options.startDate
			this.endDate = options.endDate
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
			getData() {
				let reqData = {
					startDate: this.startDate,
					endDate: this.endDate,
					cashAccountTypes: this.cashAccountTypes,
					contactUnitType: this.contactUnitType,
					contactUnitName: this.contactUnitName,
					billType: this.billType
				}
				this.$refs.loading.open()
				queryCashAccountReport(api.report, reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.datas = res.data.data
					}
				}).catch(error => {
					this.$refs.loading.close()
				})
			},
			numberFilter(number) {
				return numberFormat(number)
			},
			handleNavTo(val) {
				console.log(val)
				let sDate = val.yearMonth + '-01'
				let eDate = val.yearMonth + '-31'
				uni.navigateTo({
					url: './receipt-payment-detail?date=custom&startDate='+sDate+'&endDate='+eDate
				})
			},
			handleDateOk(val) {
				this.date = val.date
				this.startDate = val.startDate
				this.endDate = val.endDate
				this.getData()
			},
			handleFilterOk(val) {
				this.initFilter = this.initFilter.map((item)=>{
					if (item.id == val) {
						item.checked = true
					} else {
						item.checked = false
					}
					return item
				})
				if (val == 0) {
					this.cashAccountTypes = [1, 2, 3, 4]
				} else {
					this.cashAccountTypes = [val]
				}
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
			&-sale {
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
						padding: 10px 5px;
						border-bottom:0.5px solid #dddee1;
						&-body {
							width: 95%;
							display: flex;
						}
						&-footer {
							width: 5%;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
				}
			}
		}
	}
</style>
