<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" leftText="微账通" background-color="#2d8cf0" color="#fff" status-bar fixed>
			</uni-navbar>
		</view>
		<view class="main">
			<view class="main-header">
				<view class="main-header-wrap" :class="date == 'day' ? 'main-header-wrap-hover' : ''" @tap="handleDateChange('day')">
					<text>今日</text>
					<view :class="date == 'day' ? 'main-header-wrap-sline' : 'main-header-wrap-nline'"></view>
				</view>
				<view class="main-header-wrap" :class="date == 'yesterday' ? 'main-header-wrap-hover' : ''" @tap="handleDateChange('yesterday')">
					<text>昨日</text>
					<view :class="date == 'yesterday' ? 'main-header-wrap-sline' : 'main-header-wrap-nline'"></view>
				</view>
				<view class="main-header-wrap" :class="date == 'month' ? 'main-header-wrap-hover' : ''" @tap="handleDateChange('month')">
					<text>本月</text>
					<view :class="date == 'month' ? 'main-header-wrap-sline' : 'main-header-wrap-nline'"></view>
				</view>
			</view>
			<view class="main-sale">
				<view class="main-sale-header">
					<uni-icons type="chart-column" color="#59bffb" size=20></uni-icons>
					<text style="margin-left: 10px">销售情况</text>
				</view>
				<view class="main-sale-content">
					<view class="main-sale-content-block">
						<text class="main-sale-content-block-title">50</text>
						<text class="main-sale-content-block-des">销货(元)</text>
					</view>
					<view class="main-sale-content-block">
						<text class="main-sale-content-block-title">5</text>
						<text class="main-sale-content-block-des">退货(元)</text>
					</view>
					<view class="main-sale-content-block">
						<text class="main-sale-content-block-title">30</text>
						<text class="main-sale-content-block-des">利润(元)</text>
					</view>
				</view>
			</view>
			<view>
				<canvas canvas-id="saleLine" id="saleLine" class="main-sale-charts"></canvas>
			</view>
			<view class="main-recpay">
				<view class="main-recpay-wrap" style="width:45%">
					<view>
						<uni-icons type="receipt" color="#19be6b" size=20></uni-icons>
						<text style="margin-left: 10px">应收金额</text>
					</view>
					<view class="main-recpay-wrap-content">
						<text>￥100</text>
					</view>
				</view>
				<view class="main-recpay-wrap" style="border-left:0.5px solid #f3f3f3;width:55%;">
					<view style="margin-left: 10px;">
						<uni-icons type="payment" color="#ed3f14" size=20></uni-icons>
						<text style="margin-left: 10px">应付金额</text>
					</view>
					<view class="main-recpay-wrap-content">
						<text>￥100</text>
					</view>
				</view>	
			</view>
		</view>
		<view class="main-account">
			<view class="main-account-header">
				<uni-icons type="finance" color="#ff9900" size=20></uni-icons>
				<text style="margin-left: 10px">收款情况</text>
			</view>
			<view class="main-account-content">
				<canvas canvas-id="accountRing" id="accountRing" class="main-account-content-charts"></canvas>
				<view class="main-account-content-lables">
					<text class="main-account-content-lables-lable" v-for="(item, index) in accountRingArr" :key="index">{{item.data}}(元)</text>
				</view>
			</view>
		</view>
		<view class="main-warning">
			<view class="main-warning-header">
				<uni-icons type="yujing-fill" color="#ef5a62" size=20></uni-icons>
				<text style="margin-left: 10px">预警情况</text>
			</view>
			<view class="main-warning-content">
				<view class="main-warning-content-wrap" style="background-color: #f9e6dc;">
					<text class="main-warning-content-wrap-desc">100条</text>
					<text>客户预警</text>
				</view>
				<view class="main-warning-content-wrap" style="background-color: #e8fdd9;">
					<text class="main-warning-content-wrap-desc">50条</text>
					<text>库存预警</text>
				</view>
			</view>
		</view>
		<view class="main-top">
			<view class="main-top-wrap">
				<view class="main-top-wrap-header">
					<uni-icons type="rexiao" color="#f29d6e" size=20></uni-icons>
					<text style="margin-left: 10px">热销商品(top5)</text>
				</view>
				<view class="main-top-wrap-content">
					<view class="main-top-wrap-content-list">
						<view class="main-top-wrap-content-list-item" v-for="(item, index) in top1" :key="index">
							<uni-icons type="circle" color="#f29d6e" size=10></uni-icons>
							<text style="margin-left: 10px;">{{item}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="main-top-wrap">
				<view class="main-top-wrap-header">
					<uni-icons type="zhixiao" color="#51a9f3" size=20></uni-icons>
					<text style="margin-left: 10px">滞销商品(top5)</text>
				</view>
				<view class="main-top-wrap-content">
					<view class="main-top-wrap-content-list">
						<view class="main-top-wrap-content-list-item" v-for="(item, index) in top2" :key="index">
							<uni-icons type="circle" color="#51a9f3" size=10></uni-icons>
							<text style="margin-left: 10px;">{{item}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 5px;background-color: #ffffff;"></view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.min.js'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	var scaleLine = null
	var accountRing = null
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '报表',
				cWidth: '',
				cHeight: '',
				rWidth: '',
				rHeight: '',
				pixelRation: 1,
				date: 'day',
				accountRingArr: [],
				top1: ['牛肉', '大葱', '皮蛋豆腐', '金针菇', '拖鞋'],
				top2: ['猪肉', '白菜', '香肠', '羽绒服', '棉裤']
			};
		},
		onLoad() {
			this.cWidth = uni.upx2px(750)
			this.cHeight = uni.upx2px(400)
			this.rWidth = uni.upx2px(550)
			this.rHeight = uni.upx2px(400)
			this.getDayData()
			this.getAccountData()
		},
		onShow() {
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
						fontColor: '#808695'
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
			showAccountRing(canvasId, chartData) {
				accountRing = new uCharts({
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
						name: '9999',
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
				this.accountRingArr = accountRing.opts.series
			},
			getDayData() {
				let saleData={categories:[], series:[]}
				saleData.categories = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00']
				saleData.series= [
					{
						name: '销售额',
						data: [100, 130, 150, 130, 120, 80],
						color: '#facc14'
					},
					{
						name: '利润',
						data: [50, 80, 100, 80, 50, 30],
						color: '#2fc25b'
					}
				]
				this.showSaleLine("saleLine", saleData)
			},
			getAccountData() {
				let accountData = { series:[] }
				accountData.series = [
					{ name:'现金', data: 600 },
					{ name:'微信', data: 100 },
					{ name:'支付宝', data: 200 },
					{ name:'信用卡', data: 300 }
				]
				this.showAccountRing("accountRing", accountData)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		width: 100vw;
		.header {
			
		}
		.main {
			margin-top: $uni-spacing-col-base;
			&-header {
				background-color: #FFFFFF;
				display: flex;
				justify-content: space-around;
				align-items: center;
				&-wrap {
					display: flex;
					width: 33.33%;
					flex-direction: column;
					align-items: center;
					margin-top: $uni-spacing-col-lg;
					margin-bottom: $uni-spacing-col-lg;
					&-hover {
						color: #f29c6e;
					}
					&-sline {
						width: 30px;
						height: 3px;
						background-color: #f29c6e;
					}
					&-nline {
						width: 30px;
						height: 3px;
						background-color: #FFFFFF;
					}
				}
			}
			&-sale {
				margin-top: $uni-spacing-col-lg;
				background-color: #FFFFFF;
				&-header {
					margin-left: 10px;
					display: flex;
					align-items: center;
					padding: 10px 0;
					font-size: $uni-font-size-sm;
				}
				&-content {
					width: 750upx;
					display: flex;
					justify-content: space-around;
					align-items: center;
					margin-top: $uni-spacing-col-lg;
					&-block {
						height: 100upx;
						width: 200upx;
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
				display: flex;
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
			&-account {
				margin-top: $uni-spacing-col-lg;
				background-color: #FFFFFF;
				&-header {
					margin-left: 10px;
					display: flex;
					align-items: center;
					padding: 10px 0;
					font-size: $uni-font-size-sm;
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
				display: flex;
				justify-content: space-around;
				&-wrap {
					width: 45%;
					display: flex;
					flex-direction: column;
					font-size: $uni-font-size-sm;
					&-header {
						margin-left: 10px;
						display: flex;
						align-items: center;
						padding: 10px 0;
						font-size: $uni-font-size-sm;
						border-bottom: 0.5px solid #f3f3f3;
					}
					&-content {
						&-list {
							margin-left: 40px;
							&-item {
								margin-top: 10px;
							}
						}
					}
				}
			}
		}
	}
</style>
