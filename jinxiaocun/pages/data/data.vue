<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" background-color="#2d8cf0" color="#fff" status-bar fixed>
			</uni-navbar>
		</view>
		<view class="main">
			<view class="main-header">
				<view class="main-header-day">
					<text class="main-header-day-text">今日</text>
					<view class="main-header-day-line"></view>
				</view>
				<view class="main-header-yesterday">
					<text>昨日</text>
					<view></view>
				</view>
				<view class="main-header-month">
					<text>本月</text>
					<view></view>
				</view>
			</view>
			<view class="main-statistics">
				<view class="main-statistics-wrap">
					<text class="main-statistics-wrap-title">50</text>
					<text class="main-statistics-wrap-des">销货(元)</text>
				</view>
					<view class="main-statistics-wrap">
						<text class="main-statistics-wrap-title">5</text>
						<text class="main-statistics-wrap-des">退货(元)</text>
					</view>
					<view class="main-statistics-wrap">
						<text class="main-statistics-wrap-title">30</text>
						<text class="main-statistics-wrap-des">利润(元)</text>
					</view>
				</view>
			</view>
			<view class="main-sale">
				<canvas canvas-id="saleLine" id="saleLine" class="main-sale-charts" @touchstart="touchSaleLine"></canvas>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js'
	var scaleLine = null
	export default {
		data() {
			return {
				title: '报表',
				cWidth: '',
				cHeight: '',
				pixelRation: 1
			};
		},
		onLoad() {
			this.cWidth = uni.upx2px(750)
			this.cHeight = uni.upx2px(400)
			this.getDayData()
		},
		onShow() {
			
		},
		methods: {
			showSaleLine(canvasId, chartData){
				scaleLine = new uCharts({
					canvasId: canvasId,
					type: 'line',
			    colors:['#facc14', '#f04864', '#8543e0', '#90ed7d'],
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:this.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
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
				this.showSaleLine("saleLine",saleData)
			}
		},
		touchSaleLine(e) {
			saleLine.showToolTip(e, {
				format: function (item, category) {
					return category + ' ' + item.name + ':' + item.data 
				}
			});
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
				&-day {
					display: flex;
					flex-direction: column;
					justify-content: center;
					&-text {
						color: #f29c6e;
					}
					&-line {
						width: 30px;
						height: 3px;
						background-color: #f29c6e;
						margin-top: $uni-spacing-col-base;
						margin-bottom: $uni-spacing-col-base;
					}
				}
			}
			&-statistics {
				width: 750upx;
				display: flex;
				background-color: #FFFFFF;
				justify-content: space-around;
				align-items: center;
				margin-top: $uni-spacing-col-base;
				&-wrap {
					height: 100upx;
					width: 200upx;
					background-color: $uni-bg-color;
					margin-top: 30upx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					&-title {
						font-size:$uni-font-size-base;
					}
					&-des {
						font-size:$uni-font-size-sm;
						color: $uni-text-color-grey
					}
				}
			}
			&-sale {
				background-color: #FFFFFF;
				width: 750upx;
				height: 400upx;
				&-charts {
					width: 750upx;
					height: 400upx;
					background-color: #FFFFFF;
				}
			}
		}
	}
</style>
