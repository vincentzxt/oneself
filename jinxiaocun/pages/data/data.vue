<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" leftText="微账通" background-color="#2d8cf0" color="#fff" status-bar fixed>
			</uni-navbar>
		</view>
		<cover-view></cover-view>
		<view class="main">
			<view class="main-sale">
				<view class="main-sale-header">
					<uni-icons type="chart-column" color="#59bffb" size=20></uni-icons>
					<text style="margin-left: 10px">销售情况</text>
				</view>
				<view class="main-sale-content">
					<view class="main-sale-content-block">
						<text class="main-sale-content-block-title">{{datas.salesAmount}}</text>
						<text class="main-sale-content-block-des">今日销货(元)</text>
					</view>
					<view class="main-sale-content-block">
						<text class="main-sale-content-block-title">{{datas.salesReturnAmount}}</text>
						<text class="main-sale-content-block-des">今日退货(元)</text>
					</view>
					<view class="main-sale-content-block">
						<text class="main-sale-content-block-title">{{datas.grossProfit}}</text>
						<text class="main-sale-content-block-des">今日利润(元)</text>
					</view>
				</view>
			</view>
			<view>
				<canvas canvas-id="saleLine" id="saleLine" class="main-sale-charts"></canvas>
			</view>
			<view class="main-recpay">
				<view class="main-recpay-header">
					<uni-icons type="chart-column" color="#59bffb" size=20></uni-icons>
					<text style="margin-left: 10px">收付情况</text>
				</view>
				<view class="main-recpay-content">
					<view class="main-recpay-content-wrap" style="border-bottom:0.5px solid #f3f3f3;width:45%">
						<view>
							<uni-icons type="receipt" color="#19be6b" size=20></uni-icons>
							<text style="margin-left: 10px">应收金额</text>
						</view>
						<view class="main-recpay-content-wrap-content">
							<text>￥{{datas.receivableAmount}}</text>
						</view>
					</view>
					<view class="main-recpay-content-wrap" style="border-left:0.5px solid #f3f3f3;border-bottom:0.5px solid #f3f3f3;width:45%;">
						<view style="margin-left: 10px;">
							<uni-icons type="payment" color="#ed3f14" size=20></uni-icons>
							<text style="margin-left: 10px">应付金额</text>
						</view>
						<view class="main-recpay-content-wrap-content">
							<text>￥{{datas.payableAmount}}</text>
						</view>
					</view>
					<view class="main-recpay-content-wrap" style="width:45%">
						<view>
							<uni-icons type="receipt" color="#19be6b" size=20></uni-icons>
							<text style="margin-left: 10px">已收金额</text>
						</view>
						<view class="main-recpay-content-wrap-content">
							<text>￥{{datas.receivedAmount}}</text>
						</view>
					</view>
					<view class="main-recpay-content-wrap" style="border-left:0.5px solid #f3f3f3;width:45%;">
						<view style="margin-left: 10px;">
							<uni-icons type="payment" color="#ed3f14" size=20></uni-icons>
							<text style="margin-left: 10px">已付金额</text>
						</view>
						<view class="main-recpay-content-wrap-content">
							<text>￥{{datas.paymentAmount}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="main-account">
			<swiper class="main-account-swiper" :indicator-dots="true" :autoplay="true">
				<swiper-item>
					<view class="main-account-header">
						<uni-icons type="finance" color="#ed3f14" size=20></uni-icons>
						<text style="margin-left: 10px">收款情况</text>
					</view>
					<view class="main-account-content">
						<canvas canvas-id="receivableRing" id="receivableRing" class="main-account-content-charts"></canvas>
						<view class="main-account-content-lables">
							<text class="main-account-content-lables-lable" v-for="(item, index) in receivableRingArr" :key="index">{{item.data}}(元)</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="main-account-header">
						<uni-icons type="finance" color="#ff9900" size=20></uni-icons>
						<text style="margin-left: 10px">付款情况</text>
					</view>
					<view class="main-account-content">
						<canvas canvas-id="paymentRing" id="paymentRing" class="main-account-content-charts"></canvas>
						<view class="main-account-content-lables">
							<text class="main-account-content-lables-lable" v-for="(item, index) in paymentRingArr" :key="index">{{item.data}}(元)</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>	
		<view class="main-warning">
			<view class="main-warning-header">
				<uni-icons type="yujing-fill" color="#ef5a62" size=20></uni-icons>
				<text style="margin-left: 10px">预警情况</text>
			</view>
			<view class="main-warning-content">
				<view class="main-warning-content-wrap" style="background-color: #f9e6dc;">
					<text class="main-warning-content-wrap-desc">{{datas.warningContactUnitQty}}条</text>
					<text>客户预警</text>
				</view>
				<view class="main-warning-content-wrap" style="background-color: #e8fdd9;">
					<text class="main-warning-content-wrap-desc">{{datas.warningStockQty}}条</text>
					<text>库存预警</text>
				</view>
			</view>
		</view>
		<view class="main-top">
			<view class="main-top-wrap">
				<view class="main-top-wrap-header">
					<view>
						<uni-icons type="rexiao" color="#f29d6e" size=20></uni-icons>
						<text style="margin-left: 10px">热销商品(top5)</text>
					</view>
					<view class="main-top-wrap-header-footer">
						<view class="main-top-wrap-header-footer-item" style="margin-right: 10px; border: 0.5px solid #f29d6e;" 
									:style="{'background-color': hotDate == 30 ? '#f29d6e' : '', 'color': hotDate == 30 ? '#ffffff' : ''}"
									@tap="handleClickHotDate(30)">30天</view>
						<view class="main-top-wrap-header-footer-item" style="margin-right: 10px; border: 0.5px solid #f29d6e;" 
									:style="{'background-color': hotDate == 60 ? '#f29d6e' : '', 'color': hotDate == 60 ? '#ffffff' : ''}"
									@tap="handleClickHotDate(60)">60天</view>
						<view class="main-top-wrap-header-footer-item" style="border: 0.5px solid #f29d6e;"
									:style="{'background-color': hotDate == 90 ? '#f29d6e' : '', 'color': hotDate == 90 ? '#ffffff' : ''}"
									@tap="handleClickHotDate(90)">90天</view>
					</view>
				</view>
				<view class="main-top-wrap-content">
					<view class="main-top-wrap-content-list">
						<view class="main-top-wrap-content-list-item" v-for="(item, index) in hotSellingProduct" :key="index">
							<uni-icons type="circle" color="#f29d6e" size=10 style="width:10%;"></uni-icons>
							<view class="main-top-wrap-content-list-item-text" style="width:90%;">
								<text style="display:inline-block;width:50%;">{{item.productName}}</text>
								<text style="display:inline-block;width:25%;">{{item.qty}}{{item.unit}}</text>
								<text style="display:inline-block;width:25%;">￥{{item.amount}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="main-top">
			<view class="main-top-wrap">
				<view class="main-top-wrap-header">
					<view>
						<uni-icons type="zhixiao" color="#51a9f3" size=20></uni-icons>
						<text style="margin-left: 10px">滞销商品(top5)</text>
					</view>
					<view class="main-top-wrap-header-footer">
						<view class="main-top-wrap-header-footer-item" style="margin-right: 10px; border: 0.5px solid #51a9f3;" 
									:style="{'background-color': slowDate == 30 ? '#51a9f3' : '', 'color': slowDate == 30 ? '#ffffff' : ''}"
									@tap="handleClickSlowDate(30)">30天</view>
						<view class="main-top-wrap-header-footer-item" style="margin-right: 10px; border: 0.5px solid #51a9f3;" 
									:style="{'background-color': slowDate == 60 ? '#51a9f3' : '', 'color': slowDate == 60 ? '#ffffff' : ''}"
									@tap="handleClickSlowDate(60)">60天</view>
						<view class="main-top-wrap-header-footer-item" style="border: 0.5px solid #51a9f3;"
									:style="{'background-color': slowDate == 90 ? '#51a9f3' : '', 'color': slowDate == 90 ? '#ffffff' : ''}"
									@tap="handleClickSlowDate(90)">90天</view>
					</view>
				</view>
				<view class="main-top-wrap-content">
					<view class="main-top-wrap-content-list">
						<view class="main-top-wrap-content-list-item" v-for="(item, index) in slowSellingProduct" :key="index">
							<uni-icons type="circle" color="#51a9f3" size=10 style="width:10%;"></uni-icons>
							<view class="main-top-wrap-content-list-item-text" style="width:90%;">
								<text style="display:inline-block;width:50%;">{{item.productName}}</text>
								<text style="display:inline-block;width:50%;">{{item.qty}}{{item.unit}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 2px;background-color: #ffffff;"></view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.min.js'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { api } from '@/config/common.js'
	import { query } from '@/api/common.js'
	import { queryHotSellingProduct, querySlowSellingProduct } from '@/api/data.js'
	var scaleLine = null
	var receivableRing = null
	var paymentRing = null
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				datas: {},
				title: '报表',
				cWidth: '',
				cHeight: '',
				rWidth: '',
				rHeight: '',
				pixelRation: 1,
				date: 'day',
				receivableRingArr: [],
				paymentRingArr: [],
				receivableRingTotal: 0,
				paymentRingTotal: 0,
				hotSellingProduct: [],
				slowSellingProduct: [],
				hotDate: 30,
				slowDate: 30
			};
		},
		onShow() {
			this.cWidth = uni.upx2px(750)
			this.cHeight = uni.upx2px(400)
			this.rWidth = uni.upx2px(550)
			this.rHeight = uni.upx2px(400)
			this.$refs.loading.open()
			query(api.report).then(res => {
				this.$refs.loading.close()
				if (res.status == 200 && res.data.returnCode == '0000') {
					this.datas = res.data.data
					this.hotSellingProduct = this.datas.hotSellingProduct
					this.slowSellingProduct = this.datas.slowSellingProduct
					this.getDayData()
					this.getAccountData()
				}
			}).catch(error => {
				this.$refs.loading.close()
			})
		},
		methods: {
			handleDateChange(val) {
				this.date = val
			},
			showSaleLine(canvasId, chartData){
				scaleLine = new uCharts({
					canvasId: canvasId,
					type: 'line',
			    colors: ['#51a9f3', '#ef5a62', '#90dc5d', '#f7d767', '#5cdbd3', '#f29d6e', '#b37fec'],
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:10,
						lineHeight:11,
						margin:0,
						fontColor:'#808695'
					},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:this.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						disableGrid:true,
						axisLineColor:'#808695',
						fontColor: '#808695',
						rotateLabel: true
					},
					yAxis: {
						gridType:'solid',
						gridColor:'#f3f3f3',
						axisLineColor:'#808695',
						fontColor: '#808695'
					},
					width:this.cWidth * this.pixelRation,
					height: this.cHeight * this.pixelRation,
					extra: {
						line:{
							type: 'straight'
						}
					}
				})
			},
			showReceivableRing(canvasId, chartData) {
				receivableRing = new uCharts({
					canvasId: canvasId,
					type: 'ring',
					fontSize:11,
					colors: ['#51a9f3', '#ef5a62', '#90dc5d', '#f7d767', '#5cdbd3', '#f29d6e', '#b37fec'],
					legend:{
					    show:true,
					    position:'right',
					    float:'center',
					    itemGap:10,
					    padding:5,
					    lineHeight:26,
					    margin:5,
					    borderWidth :1,
							fontSize: 14
					  },
					title: {
						name: this.receivableRingTotal,
						color: '#1c2438',
						fontSize: 20,
						offsetY:-8
					},
					subtitle: {
						name: '收款金额(元)',
						color: '#808695',
						fontSize: 12,
						offsetY:-3
					},
					extra: {
						pie: {
							offsetAngle: -45,
							ringWidth: 10,
							labelWidth:15
						}
					},
					background:'#FFFFFF',
					pixelRatio:1,
					series: chartData.series,
					animation: true,
					width: this.rWidth * this.pixelRation,
					height: this.rHeight * this.pixelRation,
					dataLabel: false
				})
				this.receivableRingArr = receivableRing.opts.series
			},
			showPaymentRing(canvasId, chartData) {
				paymentRing = new uCharts({
					canvasId: canvasId,
					type: 'ring',
					fontSize:11,
					colors: ['#51a9f3', '#ef5a62', '#90dc5d', '#f7d767', '#5cdbd3', '#f29d6e', '#b37fec'],
					legend:{
					    show:true,
					    position:'right',
					    float:'center',
					    itemGap:10,
					    padding:5,
					    lineHeight:26,
					    margin:5,
					    borderWidth :1,
							fontSize: 14
					  },
					title: {
						name: this.paymentRingTotal,
						color: '#1c2438',
						fontSize: 20,
						offsetY:-8
					},
					subtitle: {
						name: '付款金额(元)',
						color: '#808695',
						fontSize: 12,
						offsetY:-3
					},
					extra: {
						pie: {
							offsetAngle: -45,
							ringWidth: 10,
							labelWidth:15
						}
					},
					background:'#FFFFFF',
					pixelRatio:1,
					series: chartData.series,
					animation: true,
					width: this.rWidth * this.pixelRation,
					height: this.rHeight * this.pixelRation,
					dataLabel: false
				})
				this.paymentRingArr = paymentRing.opts.series
			},
			getDayData() {
				let saleData={categories:[], series:[]}
				saleData.series = [
					{
						name: '销售额',
						data: [],
						color: '#facc14'
					},
					{
						name: '利润',
						data: [],
						color: '#2fc25b'
					}
				]
				for (let item of this.datas.last7DaySalesList) {
					let dateArr = item.dateDisplay.split('-')
					saleData.categories.push(dateArr[1]+'.'+dateArr[2])
					saleData.series[0].data.push(parseInt(item.salesAmount))
					saleData.series[1].data.push(parseInt(item.grossProfit))
				}
				this.showSaleLine("saleLine", saleData)
			},
			getAccountData() {
				let receivableData = { series:[] }
				let paymentData = { series:[] }
				for (let item of this.datas.receivedList) {
					receivableData.series.push({ name: item.cashaccounttypedisplay, data: item.amount })
					this.receivableRingTotal += item.amount
				}
				for (let item of this.datas.paymentList) {
					paymentData.series.push({ name: item.cashaccounttypedisplay, data: item.amount })
					this.paymentRingTotal += item.amount
				}
				this.showReceivableRing("receivableRing", receivableData)
				this.showPaymentRing("paymentRing", paymentData)
			},
			handleClickHotDate(val) {
				this.hotDate = val
				let reqData = {
					sellingStatisticalDays: this.hotDate
				}
				this.$refs.loading.open()
				queryHotSellingProduct(api.report, reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.hotSellingProduct = res.data.data.resultList
					}
				}).catch(error => {
					this.$refs.loading.close()
				})
			},
			handleClickSlowDate(val) {
				this.slowDate = val
				let reqData = {
					sellingStatisticalDays: this.slowDate
				}
				this.$refs.loading.open()
				querySlowSellingProduct(api.report, reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.slowSellingProduct = res.data.data.resultList
					}
				}).catch(error => {
					this.$refs.loading.close()
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		width: 100vw;
		.main {
			margin-top: $uni-spacing-col-base;
			&-sale {
				background-color: #FFFFFF;
				&-header {
					margin-left: 10px;
					display: flex;
					align-items: center;
					padding: 10px 0;
					font-size: $uni-font-size-sm;
					border-bottom: 0.5px solid #f3f3f3;
				}
				&-content {
					width: 750upx;
					display: flex;
					justify-content: space-around;
					align-items: center;
					margin-top: $uni-spacing-col-lg;
					&-block {
						height: 130upx;
						width: 230upx;
						background-color: $uni-bg-color;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						&-title {
							font-size:$uni-font-size-base;
							color:$uni-title-color;
						}
						&-des {
							font-size:$uni-font-size-sm;
							color: $uni-text-color-grey;
						}
					}
				}
				&-charts {
					width: 750upx;
					height: 400upx;
					background-color: #FFFFFF;
				}
			}
			&-recpay {
				margin-top: $uni-spacing-col-lg;
				background-color: #FFFFFF;
				font-size: $uni-font-size-sm;
				&-header {
					margin-left: 10px;
					display: flex;
					align-items: center;
					padding: 10px 0;
					border-bottom: 0.5px solid #f3f3f3;
				}
				&-content {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					&-wrap {
						margin-left: 10px;
						display: flex;
						flex-direction: column;
						padding: 10px 0;
						&-content {
							display: flex;
							justify-content: center;
							font-size: $uni-font-size-base;
							color: $uni-title-color;
							margin-top: 10px;
						}
					}
				}
			}
			&-account {
				margin-top: $uni-spacing-col-lg;
				background-color: #FFFFFF;
				&-swiper {
					width: 750upx;
					height: 500upx;
				}
				&-header {
					margin-left: 10px;
					display: flex;
					align-items: center;
					padding: 10px 0;
					font-size: $uni-font-size-sm;
					border-bottom: 0.5px solid #f3f3f3;
				}
				&-content {
					display: flex;
					align-items: center;
					&-charts {
						width: 550upx;
						height: 400upx;
						background-color: #FFFFFF;
					}
					&-lables {
						width: 200upx;
						display: flex;
						flex-direction: column;
						align-items: flex-end;
						margin-top: 10upx;
						margin-right: 20upx;
						&-lable {
							font-size: 14px;
							margin-bottom: 13upx;
						}
					}
				}
			}
			&-warning {
				margin-top: $uni-spacing-col-lg;
				background-color: #FFFFFF;
				&-header {
					margin-left: 10px;
					display: flex;
					align-items: center;
					padding: 10px 0;
					font-size: $uni-font-size-sm;
					border-bottom: 0.5px solid #f3f3f3;
				}
				&-content {
					display: flex;
					justify-content: space-around;
					font-size: $uni-font-size-sm;
					&-wrap {
						display: flex;
						flex-direction: column;
						align-items: center;
						width: 45%;
						padding: 20upx 0;
						margin-bottom: 10px;
						&-desc {
							color: $uni-title-color;
							margin-bottom: 10upx;
						}
					}
				}
			}
			&-top {
				margin-top: $uni-spacing-col-lg;
				background-color: #FFFFFF;
				&-wrap {
					display: flex;
					flex-direction: column;
					font-size: $uni-font-size-sm;
					&-header {
						margin: 0px 10px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 10px 0;
						border-bottom: 0.5px solid #f3f3f3;
						&-footer {
							display: flex;
							align-items: center;
							&-item {
								width: 100upx;
								height: 50upx;
								line-height: 1.5;
								border-radius: 5px;
								display: flex;
								justify-content: center;
								align-items: center;
							}
						}
					}
					&-content {
						margin-bottom: 10px;
						&-list {
							margin-left: 40px;
							&-item {
								margin-top: 10px;
								display: flex;
								align-items: center;
							}
						}
					}
				}
			}
		}
	}
</style>
