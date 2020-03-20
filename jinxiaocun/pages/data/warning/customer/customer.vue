<template>
	<view class="container">
		<view class="header" :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<view class="main-warning">
				<view class="main-warning-header">
					<view class="main-warning-header-wrap">
						<view :class="date == 30 ? 'main-warning-header-wrap-link' : 'main-warning-header-wrap-unlink'" @tap="handleSelectDate(30)">30天</view>
					</view>
					<view class="main-warning-header-wrap">
						<view :class="date == 60 ? 'main-warning-header-wrap-link' : 'main-warning-header-wrap-unlink'" @tap="handleSelectDate(60)">60天</view>
					</view>
					<view class="main-warning-header-wrap">
						<view :class="date == 90 ? 'main-warning-header-wrap-link' : 'main-warning-header-wrap-unlink'" @tap="handleSelectDate(90)">90天</view>
					</view>
				</view>
				<view class="main-warning-content">
					<view class="main-warning-content-header">
						<view class="main-warning-content-header-view">
							<view class="table-item1">客户名称</view>
							<view class="table-item2">地址</view>
						</view>
					</view>
					<view 
						class = "main-warning-content-cell"
						v-for = "(item, index) in datas"
						:key = "index"
						:style = "{'background-color': index % 2 !== 0 ? '#ebf7ff' : ''}"
						@tap = "handleNavTo"
						>
						<view class = "main-warning-content-cell-body">
							<view class="table-item1">{{item.contactunitname}}</view>
							<view class="table-item1">{{item.address}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import { api } from '@/config/common.js'
	import { queryWarningCustomer } from '@/api/data.js'
	import { dateFormat, numberFormat } from '@/utils/tools.js'
	export default {
		data() {
			return {
				title: '客户预警分析',
				date: 30,
				datas: []
			}
		},
		onLoad() {
			this.getData()
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
			getData() {
				this.$refs.loading.open()
				queryWarningCustomer(api.report, this.date).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.datas = res.data.data.resultList
						console.log(this.datas)
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
			handleSelectDate(val) {
				this.date = val
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
			width: 50%;
		}
		.table-item2 {
			width: 50%;
		}
		.main {
			margin-top: $uni-spacing-col-base;
			&-warning {
				font-size:$uni-font-size-sm;
				&-header {
					background-color: #ffffff;
					padding: 5px 0;
					width: 750upx;
					display: flex;
					justify-content: space-around;
					align-items: center;
					&-wrap {
						border-radius: 5px;
						height: 70upx;
						width: 245upx;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size:$uni-font-size-sm;
						font-weight: bold;
						&-link {
							width: 100%;
							height: 100%;
							background-color: #51a9f3;
							color: #ffffff;
							display: flex;
							justify-content: center;
							align-items: center;
						}
						&-unlink {
							width: 100%;
							height: 100%;
							background-color: #ffffff;
							color: #51a9f3;
							border: 0.5px solid #51a9f3;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
				}
				&-content {
					margin-top: $uni-spacing-col-base;
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
