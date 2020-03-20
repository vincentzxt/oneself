<template>
	<view class="container">
		<view class="header" :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="header2">
			<cu-date :initDate = "initDate" @dateOk="handleDateOk" :isSort = "false" :initFilter = "initFilter" @filterOk="handleFilterOk">
				<cu-panel>
					<cu-cell title="名称" isLastCell>
						<input class="h50" slot="footer" type="text" v-model="contactUnitName" placeholder="输入名称搜索"/>
					</cu-cell>
				</cu-panel>
			</cu-date>
		</view>
		<view class="main">
			<view class="main-sale">
				<view class="main-sale-content">
					<view class="main-sale-content-header">
						<view class="main-sale-content-header-view">
							<view class="table-item1">客户名称</view>
							<view class="table-item2">单据</view>
							<view class="table-item3">金额</view>
						</view>
					</view>
					<view class = "main-sale-content-cell" v-for = "(item, index) in datas.resultList" :key = "index"
						:style = "{'background-color': index % 2 !== 0 ? '#ebf7ff' : ''}">
						<view class = "main-sale-content-cell-body">
							<view class="table-item1">{{contactUnitNameFilter(item.contactUnitName)}}</view>
							<view class="table-item2">{{item.billTypeDisplay}}<uni-icons style="margin-left:5px;" :type="iconType(item.cashAccountType)" :color="iconColor(item.cashAccountType)" size=16></uni-icons></view>
							<view class="table-item3">{{numberFilter(item.amount)}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuDate from '@/components/custom/cu-date.vue'
	import { api } from '@/config/common.js'
	import { queryCashAccountDetailReport } from '@/api/data.js'
	import { dateFormat, numberFormat } from '@/utils/tools.js'
	export default {
		components: {
			cuPanel,
			cuCell,
			cuDate
		},
		data() {
			return {
				title: '收付款详情分析',
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
					{ id: 4, name: '现金', checked: false, condition: false },
					{ id: 5, name: '客户&供应商', checked: false, condition: true },
					{ id: 6, name: '客户', checked: false, condition: true },
					{ id: 7, name: '供应商', checked: false, condition: true }
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
				queryCashAccountDetailReport(api.report, reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.datas = res.data.data
						this.contactUnitName = ''
						this.contactUnitType = 0
					}
				}).catch(error => {
					this.$refs.loading.close()
				})
			},
			numberFilter(number) {
				return numberFormat(number)
			},
			contactUnitNameFilter(val) {
				if (val) {
					return val.slice(0,8)
				}
			},
			iconType(val) {
				switch (val) {
					case 1:
						return 'yinhang'
						break
					case 2:
						return 'weixin'
						break
					case 3:
						return 'zhifubao'
						break
					case 4:
						return 'xianjin'
						break
				}
			},
			iconColor(val) {
				switch (val) {
					case 1:
						return '#fc4949'
						break
					case 2:
						return '#43d86e'
						break
					case 3:
						return '#3cacef'
						break
					case 4:
						return '#feb840'
						break
				}
			},
			handleNavTo(val) {
				let sDate = val.yearMonth + '-01'
				let eDate = val.yearMonth + '-31'
				uni.navigateTo({
					url: './receipt-payment-detail?date=month&startDate='+sDate+'&endDate='+eDate
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
				if (val < 5) {
					if (val == 0) {
						this.cashAccountTypes = [1, 2, 3, 4]
					} else {
						this.cashAccountTypes = [val]
					}
				} else {
					switch(val) {
						case 5:
							this.contactUnitType = 3
							break
						case 6:
							this.contactUnitType = 1
							break
						case 7:
							this.contactUnitType = 2
							break
					}
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
			width: 40%;
		}
		.table-item2 {
			width: 30%;
			border-left:0.5px solid #dddee1;
			padding-left:10px;
		}
		.table-item3 {
			width: 30%;
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
