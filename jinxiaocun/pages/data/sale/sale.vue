<template>
	<view class="container">
		<view class="header" :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="header2">
			<view class="header2-left">
				<view class="header2-left-wrap" :class="date == 'day' ? 'header2-left-wrap-hover' : ''" @tap="handleDateChange('day')">
					<text>今日</text>
					<view :class="date == 'day' ? 'header2-left-wrap-sline' : 'header2-left-wrap-nline'" style="width:35px;"></view>
				</view>
				<view class="header2-left-wrap" :class="date == 'yesterday' ? 'header2-left-wrap-hover' : ''" @tap="handleDateChange('yesterday')">
					<text>昨日</text>
					<view :class="date == 'yesterday' ? 'header2-left-wrap-sline' : 'header2-left-wrap-nline'" style="width:35px;"></view>
				</view>
				<view class="header2-left-wrap" :class="date == 'week' ? 'header2-left-wrap-hover' : ''" @tap="handleDateChange('week')">
					<text>本周</text>
					<view :class="date == 'week' ? 'header2-left-wrap-sline' : 'header2-left-wrap-nline'" style="width:35px;"></view>
				</view>
				<view class="header2-left-wrap" :class="date == 'month' ? 'header2-left-wrap-hover' : ''" @tap="handleDateChange('month')">
					<text>本月</text>
					<view :class="date == 'month' ? 'header2-left-wrap-sline' : 'header2-left-wrap-nline'" style="width:35px;"></view>
				</view>
				<view class="header2-left-wrap" :class="date == 'year' ? 'header2-left-wrap-hover' : ''" @tap="handleDateChange('year')">
					<text>本年</text>
					<view :class="date == 'year' ? 'header2-left-wrap-sline' : 'header2-left-wrap-nline'" style="width:35px;"></view>
				</view>
				<view class="header2-left-wrap" :class="date == 'custom' ? 'header2-left-wrap-hover' : ''" @tap="handleShowPopDate">
					<text>自定义</text>
					<view :class="date == 'custom' ? 'header2-left-wrap-sline' : 'header2-left-wrap-nline'" style="width:50px;"></view>
				</view>
			</view>
			<view class="header2-right" @tap="handleClickFilter">
				<uni-icons type="filter" size=18 color='#495060'></uni-icons>
			</view>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<view class="main-sale">
				<view class="main-sale-header">
					<view class="main-sale-header-block">
						<text class="main-sale-header-block-title">{{numberFilter(1000)}}</text>
						<text class="main-sale-header-block-des">订单总数</text>
					</view>
					<view class="main-sale-header-block">
						<text class="main-sale-header-block-title">￥{{numberFilter(1000000)}}</text>
						<text class="main-sale-header-block-des">销售总金额</text>
					</view>
					<view class="main-sale-header-block">
						<text class="main-sale-header-block-title">￥{{numberFilter(1000000)}}</text>
						<text class="main-sale-header-block-des">总毛利</text>
					</view>
				</view>
				<view class="main-sale-content">
					<view class="main-sale-content-cell" style="border-bottom:0.5px solid #dddee1;">
						<view class="main-sale-content-cell-body">
							<view style="width:21%;">2012-04</view>
							<view style="width:29%;border-left:0.5px solid #dddee1;padding-left:10px;">单据数：10</view>
							<view style="width:50%;border-left:0.5px solid #dddee1;padding-left:10px;">￥500.00 / ￥100.00</view>
						</view>
						<view class="main-sale-content-cell-footer">
							<uni-icons type="arrow" size=20 color="#808695"></uni-icons>
						</view>
					</view>
					<view class="main-sale-content-cell" style="border-bottom:0.5px solid #dddee1;background-color: #ecf3fb;">
						<view class="main-sale-content-cell-body">
							<view style="width:21%;">2012-03</view>
							<view style="width:29%;border-left:0.5px solid #dddee1;padding-left:10px;">单据数：10</view>
							<view style="width:50%;border-left:0.5px solid #dddee1;padding-left:10px;">￥500.00 / ￥100.00</view>
						</view>
						<view class="main-sale-content-cell-footer">
							<uni-icons type="arrow" size=20 color="#808695"></uni-icons>
						</view>
					</view>
					<view class="main-sale-content-cell" style="border-bottom:0.5px solid #dddee1;">
						<view class="main-sale-content-cell-body">
							<view style="width:21%;">2012-02</view>
							<view style="width:29%;border-left:0.5px solid #dddee1;padding-left:10px;">单据数：10</view>
							<view style="width:50%;border-left:0.5px solid #dddee1;padding-left:10px;">￥500.00 / ￥100.00</view>
						</view>
						<view class="main-sale-content-cell-footer">
							<uni-icons type="arrow" size=20 color="#808695"></uni-icons>
						</view>
					</view>
					<view class="main-sale-content-cell" style="background-color: #ecf3fb;">
						<view class="main-sale-content-cell-body">
							<view style="width:21%;">2012-01</view>
							<view style="width:29%;border-left:0.5px solid #dddee1;padding-left:10px;">单据数：10</view>
							<view style="width:50%;border-left:0.5px solid #dddee1;padding-left:10px;">￥500.00 / ￥100.00</view>
						</view>
						<view class="main-sale-content-cell-footer">
							<uni-icons type="arrow" size=20 color="#808695"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>
		<cu-date ref="popDate" :title="'销售日期'" @onChange="handleDateCustomChange"></cu-date>
		<cu-popups theme="dark" v-model="showFilter" :popData="filterData" @tapPopup="tapPopup" :x="350" :y="headerHeight + 50" placement="top-end"></cu-popups>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import cuDate from '@/components/custom/cu-date.vue'
	import cuPopups from '@/components/custom/cu-popups.vue'
	import { api } from '@/config/common.js'
	import { query } from '@/api/common.js'
	import { dateFormat, numberFormat } from '@/utils/tools.js'
	export default {
		components: {
			uniList,
			uniListItem,
			cuDate,
			cuPopups
		},
		data() {
			return {
				datas: {},
				title: '销售分析',
				date: '',
				startDate: '',
				endDate: '',
				showFilter: false,
				filterData: [{title:'客户分组'}]
			}
		},
		onLoad(options) {
			this.date = options.date
			this.startDate = options.startDate
			this.endDate = options.endDate
		},
		computed: {
			headerHeight() {
				return this.$headerHeight
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			numberFilter(number) {
				return numberFormat(number)
			},
			handleNavTo(url, params) {
				uni.navigateTo({
					url: url+'?'+params
				})
			},
			getData(startDate, endDate) {
				this.$refs.loading.open()
				let reqData = {
					startDate: startDate,
					endDate: endDate
				}
				query(api.report, reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.datas = res.data.data
					}
				}).catch(error => {
					this.$refs.loading.close()
				})
			},
			handleDateChange(val) {
				this.date = val
				let sDate = new Date()
				let eDate = new Date()
				switch(val) {
					case 'day':
						this.startDate = dateFormat('YYYY-mm-dd', sDate) + ' 00:00:00'
						this.endDate = dateFormat('YYYY-mm-dd', eDate) + ' 23:59:59'
						break
					case 'yesterday':
						sDate.setDate(sDate.getDate() - 1)
						this.startDate = dateFormat('YYYY-mm-dd', sDate) + ' 00:00:00'
						eDate.setDate(eDate.getDate() - 1)
						this.endDate = dateFormat('YYYY-mm-dd', eDate) + ' 23:59:59'
						break
					case 'week':
						let w = sDate.getDay()
						w = w == 0 ? 6 : w - 1
						sDate.setDate(sDate.getDate() - w)
						this.startDate = dateFormat('YYYY-mm-dd', sDate) + ' 00:00:00'
						this.endDate = dateFormat('YYYY-mm-dd', eDate) + ' 23:59:59'
						break
					case 'month': 
						sDate.setDate(1)
						this.startDate = dateFormat('YYYY-mm-dd', sDate) + ' 00:00:00'
						this.endDate = dateFormat('YYYY-mm-dd', eDate) + ' 23:59:59'
						break
					case 'year':
						sDate.setMonth(0)
						sDate.setDate(1)
						this.startDate = dateFormat('YYYY-mm-dd', sDate) + ' 00:00:00'
						this.endDate = dateFormat('YYYY-mm-dd', eDate) + ' 23:59:59'
						break
				}
				this.getData(this.startDate, this.endDate)
			},
			handleShowPopDate() {
				this.date = 'custom'
				this.$refs.popDate.open()
			},
			handleDateCustomChange(val) {
				this.startDate = val.startDate + ' 00:00:00'
				this.endDate = val.endDate + ' 23:59:59'
				this.getData(this.startDate, this.endDate)
			},
			handleClickFilter() {
				this.showFilter = !this.showFilter
				console.log("###")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		width: 100vw;
		.fill{
			//padding-top: 20px;
			height: calc(100% - 60px);;
		}
		.header2 {
			background-color: #FFFFFF;
			margin-top: $uni-spacing-col-base;
			padding-left: 5px;
			display: flex;
			align-items: center;
			font-size: $uni-font-size-sm;
			&-left {
				display: flex;
				justify-content: space-around;
				align-items: center;
				width: 90%;
				&-wrap {
					display: flex;
					width: 16.6%;
					flex-direction: column;
					align-items: center;
					margin-top: $uni-spacing-col-lg;
					margin-bottom: $uni-spacing-col-lg;
					&-hover {
						color: #f29c6e;
					}
					&-sline {
						height: 3px;
						background-color: #f29c6e;
					}
					&-nline {
						height: 3px;
						background-color: #FFFFFF;
					}
				}
			}
			&-right {
				width: 10%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding-right: 15px;
			}
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
						background-color: $uni-bg-color;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						&-title {
							color: #f29c6e;
						}
						&-des {
							color: $uni-text-color-grey;
						}
					}
				}
				&-content {
					margin-top: $uni-spacing-row-base;
					background-color: #FFFFFF;
					display: flex;
					flex-direction: column;
					&-cell {
						display: flex;
						padding: 10px 5px;
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
