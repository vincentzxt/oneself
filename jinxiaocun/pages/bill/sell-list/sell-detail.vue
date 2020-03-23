<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="main">
			<view class="list">
			<view class="list-cell">
				<view class="list-cell-left">客户名称</view><view class="list-cell-right">{{dataList.contactunitname}}</view>
			</view>
			<view class="list-cell">
				<view class="list-cell-left">下单时间</view><view class="list-cell-right">{{dataList.createtime}}</view>
			</view>
			<view class="list-cell">
				<view class="list-cell-left">总金额</view><view class="list-cell-right">{{numberFilter(dataList.amount)}}</view>
			</view>
			<view class="list-cell">
				<view class="list-cell-left">优惠金额</view><view class="list-cell-right">{{numberFilter(dataList.discountamount)}}</view>
			</view>
			<view class="list-cell">
				<view class="list-cell-left">毛利</view><view class="list-cell-right">{{numberFilter(dataList.grossprofit)}}</view>
			</view>
			<view class="list-cell last-cell">
				<view class="list-cell-left">是否付款</view><view class="list-cell-right"><text v-if="isoncredit==0">已支付</text><text v-else>未支付</text></view>
			</view>
			</view>
			<view class="box">
				<t-table border="1" border-color="#cccccc" :is-check="false">
					<t-tr font-size="14" color="#2d8cf0" align="left">
						<t-th align="center">商品名称</t-th>
						<t-th align="center">数量</t-th>
						<t-th align="center">单位</t-th>
						<t-th align="center">单价</t-th>
						<t-th align="center">小计</t-th>
					</t-tr>
				<t-tr font-size="12" color="#5d6f61" align="right" v-for="(item, index) in dataList.detailModels" :key="index">
					<t-td align="left">{{ item.productname }}</t-td>
					<t-td align="center"><text v-if="item.ismainunit==1">{{item.salesqty}}</text><text v-else>{item.assistunitqty}}</text></t-td>
					<t-td align="center">{{ item.unit }}</t-td>
					<t-td align="center"><text v-if="item.ismainunit==1">{{item.salesunitprice}}</text><text v-else>{{item.assissalesunitprice}}</text></t-td>
					<t-td align="center">{{ numberFilter(item.salesamount) }}</t-td>
				</t-tr>
				</t-table>
			</view>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
import { get } from '@/api/bills.js';
import { api } from '@/config/common.js';
import cuLoading from '@/components/custom/cu-loading.vue';
import { dateFormat, numberFormat } from '@/utils/tools.js';
import tTable from '@/components/t-table/t-table.vue';
import tTh from '@/components/t-table/t-th.vue';
import tTr from '@/components/t-table/t-tr.vue';
import tTd from '@/components/t-table/t-td.vue';
export default {
	components: {
		cuLoading,
		tTable,
		tTh,
		tTr,
		tTd
	},
	data() {
		return {
			title: '销售详情',
			id: 0,
			dataList: {}
		};
	},
	// onLoad() {this.loadData();},
	onShow() {},
	onLoad(option) {
		this.id = option.id;
		this.loadData();
	},
	methods: {
		numberFilter(number) {
			return numberFormat(number);
		},
		handleRefreshPage() {
			console.log('refreshpage');
		},
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			});
		},
		loadData() {
			this.loadmore = 'loading',
			 this.$refs.loading.open();
			const senddata = {
				id: this.id
			};
			get(api.salesOrder, senddata)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.dataList = res.data.data;
					} else {
						this.$api.msg(res.data.returnMessage);
					}
				})
				.catch(error => {
					this.$refs.loading.close();
					this.$api.msg('请求失败fail');
				});
		}
	}
};
</script>
<style lang="scss" scoped>
.fill {
	width: 100%;
	height: 100%;
}
.container {
	font-size: $uni-font-size-sm;
	height: 100vh;
	width: 100vw;
	.header {
		height: 10%;
	}
	.main {
		height: 90%;
		padding: 0upx;
		//margin-top: 10upx;
		.cu-form-group .title {
			min-width: calc(5em + 30px);
		}
		.main-header {
			display: flex;
			height: 140upx;
			background-color: #ffffff;
			justify-content: center;
			align-items: center;
		}
		.box{
			background-color: #FFFFFF;
			margin-top: 16rpx;
		}
		.list{
			padding-left: 24rpx;
			background-color: #FFFFFF;
			.list-cell{
				padding: 24rpx 24rpx 24rpx 0;
				// width: 100%;
				border-bottom: 1px solid $uni-border-color;
				display: flex;
				flex-direction:row;
				justify-content:space-between;
				font-size: $uni-font-size-sm;
				.list-cell-left{
					color: #9e9e9e;
					// flex: 1;
				}
				.list-cell-right{
					// flex:1
				}
				
			}
			.last-cell{
				border: 0px !important;
			}
		}
	}
}
</style>
