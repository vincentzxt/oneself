<template>
	<view class="container">
		<view class="header" :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="header2">
			<cu-date :initDate = "initDate" @dateOk="handleDateOk" :initSort = "initSort" @sortUp="handleSortUp" @sortDown="handleSortDown" :initFilter = "initFilter" @filterOk="handleFilterOk" @filterCancel="handleFilterCancel">
				<cu-panel>
					<cu-cell title="单位名称" isLastCell>
						<input class="h50" slot="footer" type="text" v-model="customerName" placeholder="输入单位名称"/>
					</cu-cell>
				</cu-panel>
			</cu-date>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<view class="main-hotsell">
				<view class="main-hotsell-content">
					<view class="main-hotsell-content-header">
						<view class="main-hotsell-content-header-view">
							<view class="table-item1">商品名称</view>
							<view class="table-item2">销售数量</view>
							<view class="table-item2">销售金额</view>
						</view>
					</view>
					<view 
						class = "main-hotsell-content-cell"
						v-for = "(item, index) in datas"
						:key = "index"
						:style = "{'background-color': index % 2 !== 0 ? '#ebf7ff' : ''}"
						@tap = "handleNavTo"
						>
						<view class = "main-hotsell-content-cell-body">
							<view class="table-item1">{{item.productName}}</view>
							<view class="table-item2">{{item.qty}}</view>
							<view class="table-item2">{{numberFilter(item.amount)}}</view>
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
	import { queryHotSellingProduct } from '@/api/data.js'
	import { dateFormat, numberFormat } from '@/utils/tools.js'
	export default {
		components: {
			cuPanel,
			cuCell,
			cuDate
		},
		data() {
			return {
				title: '热销商品分析',
				date: 'custom',
				days: 30,
				startDate: '',
				endDate: '',
				datas: [],
				initSort: [
					{ id: 0, name: '数量' },
					{ id: 1, name: '金额' }
				],
				initFilter: [
					{ id: 0, name: '产品分类', checked: true, condition: false },
					{ id: 1, name: '往来单位', checked: false, condition: true }
				],
				customerName: ''
			}
		},
		onLoad(options) {
			let sDate = new Date()
			let eDate = new Date()
			sDate.setDate(sDate.getDate() - 29)
			this.startDate = dateFormat('YYYY-mm-dd', sDate)
			this.endDate = dateFormat('YYYY-mm-dd', eDate)
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
			handleNavTo(url, params) {
				uni.navigateTo({
					url: url+'?'+params
				})
			},
			getData() {
				let	reqData = {
					startDate: this.startDate,
					endDate: this.endDate,
					customerName: this.customerName
				}
				this.$refs.loading.open()
				queryHotSellingProduct(api.report, reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.datas = res.data.data.resultList
						this.customerName = ''
					}
				}).catch(error => {
					this.$refs.loading.close()
				})
			},
			numberFilter(number) {
				return numberFormat(number)
			},
			compare(prop, type) {
				if (type == 'up') {
					return (obj1, obj2) => {
						let val1 = obj1[prop]
						let val2 = obj2[prop]
						if (val1 < val2) {
							return -1
						} else if (val1 > val2) {
							return 1
						} else {
							return 0
						}
					}
				} else {
					return (obj1, obj2) => {
						let val1 = obj1[prop]
						let val2 = obj2[prop]
						if (val1 > val2) {
							return -1
						} else if (val1 < val2) {
							return 1
						} else {
							return 0
						}
					}
				}
			},
			sortData(type, val) {
				this.initSort = this.initSort.map((item)=>{
					if (item.id == val) {
						item.checked = true
					} else {
						item.checked = false
					}
					return item
				})
				if (type == 'up') {
					if (val == 0) {
						this.datas.sort(this.compare('qty', 'up'))
					} else {
						this.datas.sort(this.compare('amount', 'up'))
					}
				} else {
					if (val == 0) {
						this.datas.sort(this.compare('qty', 'down'))
					} else {
						this.datas.sort(this.compare('amount', 'down'))
					}
				}
			},
			handleDateOk(val) {
				this.date = val.date
				this.startDate = val.startDate
				this.endDate = val.endDate
				this.getData()
			},
			handleSortUp(val) {
				this.sortData('up', val)
			},
			handleSortDown(val) {
				this.sortData('down', val)
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
				this.getData()
			},
			handleFilterCancel() {
				this.customerName = ''
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
			
		}
		.table-item1 {
			width: 50%;
		}
		.table-item2 {
			width: 25%;
			border-left:0.5px solid #dddee1;
			padding-left:10px;
		}
		.main {
			border-top:0.5px solid #dddee1;
			&-hotsell {
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
						background-color: #7abcf3;
						color: #ffffff;
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
