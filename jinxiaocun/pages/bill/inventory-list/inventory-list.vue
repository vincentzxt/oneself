<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<xw-date title="盘点日期" :orderList="orderList" :searchName="searchName" @click_sub="handle_data_sub"></xw-date>
		<view class="total">
			<view class="total-item">
				<text>{{ totalRecords }}</text>
				<text>总单据数</text>
			</view>
			<view class="total-item">
				<text>{{ totalQty1 }}</text>
				<text>盘亏总数</text>
			</view>
			<view class="total-item">
				<text>{{ totalQty2 }}</text>
				<text>盘盈总数</text>
			</view>
		</view>
	
		<view class="main">
			<scroll-view :scroll-y="true" class="fill" @scrolltolower="loadData">
				<view v-for="(item, index) in dataList" :key="index" class="list-item" @tap="handleDetail(item.inventoryorderid)">
					<view class="list-between">
						<view class="item-content">
							<text>订单编号：{{ item.inventoryorderid }}</text>
						</view>
						<view class="item-content2">
							<text>盘盈数量：{{ item.totalQty2 || 0 }}</text>
						</view>
					</view>
					<view class="list-between">
						<view class="item-content">
							<text>日期：{{ item.createtime }}</text>
						</view>
						<view class="item-content2">
							<text>盘亏数量：{{ item.totalQty1 || 0 }}</text>
						</view>
					</view>
				</view>
				<view class="no_data" v-if="dataList.length === 0"><text class="item_text">暂无数据</text></view>
				<uni-load-more v-if="dataList.length >= 10" :status="loadmore"></uni-load-more>
			</scroll-view>
		</view>

		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import { tokenpost } from '@/api/bills.js';
import { api } from '@/config/common.js';
import cuLoading from '@/components/custom/cu-loading.vue';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
import xwDate from '@/components/xw-date/xw-date.vue';

export default {
	components: {
		uniLoadMore,
		uniList,
		uniListItem,
		uniIcon,
		xwDate
	},
	data() {
		const date = new Date();
		const year = date.getFullYear();
		var month_short = date.getMonth() + 1;
		const month = month_short < 10 ? '0' + month_short : month_short;
		const day_short = date.getDate();
		const day = day_short < 10 ? '0' + day_short : day_short;
		const nowDate = year + '-' + month + '-' + day;
		return {
			loadmore: 'more',
			pageIndex: 0,
			pageRows: 15,
			title: '盘点单据',
			searchName: '名称',
			totalAmount: '0.00',
			totalRecords: '0',
			totalQty1:0,
			totalQty2:0,
			totalGrossProfit: '0',
			dataList: [],
			search_startDate: nowDate,
			search_endDate: nowDate,
			order_name: 'createtime',
			order_type: 1,
			search_value: '',
			orderList: [{ name: '盘点日期', value: 'createtime' }, { name: '金额', value: 'amount' }]
		};
	},
	onLoad() {
		this.loadData();
	},
	onShow() {
		console.log(this.search_startDate);
	},
	onPullDownRefresh() {
		this.dataList = [];
		this.pageIndex = 0;
		this.loadMore = 'more';
		this.loadData();
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		handle_data_sub(val) {
			console.log(val);
			this.search_startDate = val.search_startDate;
			this.search_endDate = val.search_endDate;
			this.order_name = this.orderList[val.order_index].value;
			this.order_type = val.order_type;
			this.search_value = val.search_value;
			this.dataList = [];
			this.pageIndex = 0;
			this.loadMore = 'more';
			this.loadData();
		},
		handleRefreshPage() {
			console.log('refreshpage');
		},
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			});
		},
		handleDetail(val){
			uni.navigateTo({
				url:'inventory-detail?id='+val
			})
		},
		loadData() {
			(this.loadmore = 'loading'), this.$refs.loading.open();
			const senddata = {
				pageIndex: this.pageIndex + 1,
				pageRows: this.pageRows,
				orderName: this.order_name,
				orderType: this.order_type,
				beginttime: this.search_startDate,
				endtime: this.search_endDate,
				contactunitname:this.search_value
			};
			tokenpost(api.QueryInventory, senddata)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						if (res.data.data.resultList.length === 0) {
							this.loadmore = 'noMore';
							return;
						} else {
							this.dataList = this.dataList.concat(res.data.data.resultList);
							this.totalAmount = res.data.data.totalAmount;
							this.totalRecords = res.data.data.pageInfo.totalRecords;
							this.totalQty1 = res.data.data.totalQty1;
							this.totalQty2 = res.data.data.totalQty2;
							this.pageIndex = this.pageIndex + 1;
							this.loadmore = 'more';
						}
					} else {
						this.loadmore = 'more';
						 this.$api.msg(res.data.returnMessage);
					}
				})
				.catch(error => {
					this.loadmore = 'more';
					 this.$refs.loading.close();
					this.$api.msg('请求失败fail');
				});
		}
	}
};
</script>
<style lang="scss" scoped>
@import '../bill.scss';
</style>
