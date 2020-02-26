<template>
	<view class="container">
		<view class="header" :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="header2">
			<cu-date :initDate = "initDate" @dateOk="handleDateOk" :isSort = "false" :initFilter = "initFilter" @filterOk="handleFilterOk" @filterCancel="handleFilterCancel">
				<cu-panel>
					<cu-cell title="客户名称" isLastCell>
						<input class="h50" slot="footer" type="text" v-model="cutomerName" placeholder="输入客户名称"/>
					</cu-cell>
				</cu-panel>
			</cu-date>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<view class="main-sale">
				<view class="main-sale-header">
					<view class="main-sale-header-block" style="background-color: #a1c8f3;">
						<text class="main-sale-header-block-title">{{numberFilter(datas.totalqty)}}</text>
						<text class="main-sale-header-block-des">订单总数</text>
					</view>
					<view class="main-sale-header-block" style="background-color: #c4c4c4;">
						<text class="main-sale-header-block-title">￥{{numberFilter(datas.totalamount)}}</text>
						<text class="main-sale-header-block-des">销售总金额</text>
					</view>
					<view class="main-sale-header-block" style="background-color: #ffcc80;">
						<text class="main-sale-header-block-title">￥{{numberFilter(datas.totalprofit)}}</text>
						<text class="main-sale-header-block-des">总毛利</text>
					</view>
				</view>
				<view class="main-sale-content" v-if="filter == 0">
					<view class="main-sale-content-header">
						<view class="main-sale-content-header-view">
							<view class="table-item1">日期</view>
							<view class="table-item2">单据数</view>
							<view class="table-item3">金额</view>
							<view class="table-item3">毛利</view>
						</view>
					</view>
					<view 
						class = "main-sale-content-cell"
						v-for = "(item, index) in datas.reportDetailQueries"
						:key = "index"
						:style = "{'background-color': index % 2 !== 0 ? '#ebf7ff' : ''}"
						@tap = "handleNavTo"
						>
						<view class = "main-sale-content-cell-body">
							<view class="table-item1">{{item.yearMonth}}</view>
							<view class="table-item2">{{item.billQty}}</view>
							<view class="table-item3">{{numberFilter(item.billAmount)}}</view>
							<view class="table-item3">{{numberFilter(item.billProfit)}}</view>
						</view>
						<view class="main-sale-content-cell-footer">
							<uni-icons type="arrow" size=20 color="#808695"></uni-icons>
						</view>
					</view>
				</view>
				<view class="main-sale-content1" v-if="filter == 1">
					<uni-list>
						<uni-list-item 
							:title="item.cutomerName"
							:note="['金额：'+numberFilter(item.billAmount), '毛利：'+numberFilter(item.billProfit), '订单数：'+item.billQty]"
							v-for="(item, index) in datas.reportDetailQueries"
							:key="index"
							@tap = "handleNavTo(item.cutomerName)">
						</uni-list-item>
					</uni-list>
				</view>	
			</view>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuDate from '@/components/custom/cu-date.vue'
	import { api } from '@/config/common.js'
	import { querySalesDetail, querySalesReturnDetail, queryPurchaseDetail, queryPurchaseReturnDetail } from '@/api/data.js'
	import { dateFormat, numberFormat } from '@/utils/tools.js'
	export default {
		components: {
			uniList,
			uniListItem,
			cuPanel,
			cuCell,
			cuDate
		},
		data() {
			return {
				title: '销售分析',
				datas: [],
				date: '',
				startDate: '',
				endDate: '',
				initFilter: [
					{ id: 0, name: '日期', checked: true, condition: false },
					{ id: 1, name: '客户', checked: false, condition: true }
				],
				filter: 0,
				cutomerName: '',
				detailUrl: ''
			}
		},
		onLoad(options) {
			this.date = options.date
			this.startDate = options.startDate
			this.endDate = options.endDate
			this.title = '销售分析'
			this.detailUrl = '/pages/bill/sell-list/sell-list'
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
				let reqData = {}
				if (this.filter == 0) {
					reqData = {
						startDate: this.startDate,
						endDate: this.endDate,
						groupBy: this.filter
					}
				} else {
					reqData = {
						startDate: this.startDate,
						endDate: this.endDate,
						groupBy: this.filter,
						cutomerName: this.cutomerName
					}
				}
				this.$refs.loading.open()
				querySalesDetail(api.report, reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.datas = res.data.data
						this.cutomerName = ''
					}
				}).catch(error => {
					this.$refs.loading.close()
				})
			},
			numberFilter(number) {
				return numberFormat(number)
			},
			handleNavTo(val = '') {
				let params = ''
				if (this.filter == 0) {
					params = 'startDate='+this.startDate+'&endDate='+this.endDate
				} else if (this.filter == 1){
					params = 'startDate='+this.startDate+'&endDate='+this.endDate+'&cutomerName='+val
				}
				uni.navigateTo({
					url: this.detailUrl+'?'+params
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
				this.filter = val
				this.getData()
			},
			handleFilterCancel() {
				this.cutomerName = ''
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
						width: 230upx;
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
				&-content1 {
					margin-top: $uni-spacing-row-base;
					background-color: #FFFFFF;
				}
			}
		}
	}
</style>
