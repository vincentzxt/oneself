<template>
	<view class="container">
		<view class="header" :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="header2">
			<cu-date :isDate = "false" :initSort = "initSort" @sortUp="handleSortUp" @sortDown="handleSortDown" :initFilter = "initFilter" @filterOk="handleFilterOk" @filterCancel="handleFilterCancel">
				<cu-panel>
					<cu-cell title="客户名称" isLastCell>
						<input class="h50" slot="footer" type="text" v-model="customerName" placeholder="输入客户名称"/>
					</cu-cell>
				</cu-panel>
			</cu-date>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<view class="main-receive-pay">
				<view class="main-receive-pay-header">
					<view class="main-receive-pay-header-block">
						<text class="main-receive-pay-header-block-title">{{numberFilter(datas.reportDetailQueries.debitCustomerCount)}}</text>
						<text class="main-receive-pay-header-block-des">{{totalTitle1}}</text>
					</view>
					<view class="main-receive-pay-header-block">
						<text class="main-receive-pay-header-block-title">￥{{numberFilter(datas.reportDetailQueries.totalReceivableX)}}</text>
						<text class="main-receive-pay-header-block-des">{{totalTitle2}}</text>
					</view>
				</view>
				<view class="main-receive-pay-content">
					<uni-list>
						<uni-list-item 
							:title="item.contactunitname"
							:note="[tableHeader1+': '+item.maxReceiveAge, tableHeader2+': '+numberFilter(item.totalReceivableY)]"
							v-for="(item, index) in datas.reportDetailQueries.reportReceiveAddPayCustomer"
							:key="index"
							@tap = "handleNavTo('./receive-pay-detail', 'pageType='+pageType+'&contactunitName='+item.contactunitname)">
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
	import { queryReceive, queryPay } from '@/api/data.js'
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
				pageType: 1,
				title: '',
				totalTitle1: '',
				totalTitle2: '',
				tableHeader1: '',
				tableHeader2: '',
				datas: {},
				initSort: [
					{ id: 0, name: '金额' },
					{ id: 1, name: '帐龄' }
				],
				initFilter: [
					{ id: 0, name: '所有', checked: true, condition: false },
					{ id: 1, name: '客户', checked: false, condition: true }
				],
				filter: 0,
				customerName: '',
				orderBy: 0
			}
		},
		onLoad(options) {
			this.pageType = parseInt(options.pageType)
			switch(this.pageType) {
				case 1:
					this.title = '应收分析'
					this.totalTitle1 = '欠款客户数'
					this.totalTitle2 = '应收金额'
					this.tableHeader1 = '账龄'
					this.tableHeader2 = '应收总金额'
					break
				case 2:
					this.title = '应付分析'
					this.totalTitle1 = '供应商欠款'
					this.totalTitle2 = '总应付'
					this.tableHeader1 = '账龄'
					this.tableHeader2 = '应付总金额'
					break
			}
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
			handleNavTo(url, params) {
				uni.navigateTo({
					url: url+'?'+params
				})
			},
			getData() {
				let	reqData = {
					customerName: this.customerName,
					orderBy: this.orderBy
				}
				this.$refs.loading.open()
				switch(this.pageType) {
					case 1:
						queryReceive(api.report, reqData).then(res => {
							this.$refs.loading.close()
							if (res.status == 200 && res.data.returnCode == '0000') {
								this.datas = res.data.data
								this.customerName = ''
							}
						}).catch(error => {
							this.$refs.loading.close()
						})
						break
					case 2:
						queryPay(api.report, reqData).then(res => {
							this.$refs.loading.close()
							if (res.status == 200 && res.data.returnCode == '0000') {
								this.datas = res.data.data
								this.customerName = ''
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
						this.datas.reportDetailQueries.reportReceiveAddPayCustomer.sort(this.compare('totalReceivableY', 'up'))
					} else {
						this.datas.reportDetailQueries.reportReceiveAddPayCustomer.sort(this.compare('maxReceiveAge', 'up'))
					}
				} else {
					if (val == 0) {
						this.datas.reportDetailQueries.reportReceiveAddPayCustomer.sort(this.compare('totalReceivableY', 'down'))
					} else {
						this.datas.reportDetailQueries.reportReceiveAddPayCustomer.sort(this.compare('maxReceiveAge', 'down'))
					}
				}
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
						&-title {
							font-size:$uni-font-size-sm;
							font-weight: bold;
						}
						&-des {
							font-size:$uni-font-size-sm;
							color: $uni-text-color-grey;
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
