<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title"  left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<xw-date title="null" :orderList="orderList" :searchName="searchName" @click_sub="handle_data_sub"></xw-date>
		<view class="total">
			<view class="total-item">
				<text>{{ totalRecords }}</text>
				<text>总数量</text>
			</view>
			<view class="total-item">
				<text¥{{ numberFilter(totalAmount) }}</text>
				<text>总金额</text>
			</view>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill" @scrolltolower="loadData">
				<view v-for="(item, index) in dataList" :key="index" class="list-item2"  @tap="handleDetail()">
					<view class="list-between">
						<view class="item-content">
							<text>{{ item.productname }}</text>
						</view>
						<view class="item-content2">
							<text>库龄：{{ item.totalamount }}</text>
						</view>
					</view>
					<view class="list-between">
						<view class="item-content">
							<text>主计量：{{ item.qty }}{{item.unit}}</text>
						</view>
						<view class="item-content2">
							<text>辅助计量：{{ item.displayqty}}</text>
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
import uniIcon from "@/components/uni-icon/uni-icon.vue";
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import { query } from '@/api/bills.js';
import { api } from '@/config/common.js';
import cuLoading from '@/components/custom/cu-loading.vue';
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
import xwDate from "@/components/xw-date/xw-date.vue";
import { dateFormat, numberFormat } from '@/utils/tools.js';

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
			loadmore:'more',
			pageIndex: 0,
			pageRows: 15,
			title: '库存列表',
			searchName:'商品名称',
			billtype:1,
			totalAmount:'0.00',
			totalRecords:'0',
			dataList: [],
			search_startDate:nowDate,
			search_endDate:nowDate,
			order_name:'',
			order_type:1,
			search_value:'',
			orderList:[{name:'总金额',value:'totalamount'},{name:'库龄',value:'amount'},{name:'金数量',value:'amount'}]
		};
	},
	onLoad() {this.loadData();},
	onShow() {console.log(this.search_startDate);},
	onPullDownRefresh() {
			this.dataList=[];
			this.pageIndex = 0;
			this.loadMore='more';
	        this.loadData();
	        setTimeout(function () {
	            uni.stopPullDownRefresh();
	        }, 1000);
	    },
	methods: {
		numberFilter(number) {
			return numberFormat(number)
		},
		handle_data_sub(val){
			console.log(val);
			this.search_startDate = val.search_startDate;
			this.search_endDate = val.search_endDate;
			this.order_name = this.orderList[val.order_index].value;
			this.order_type = val.order_type;
			this.search_value = val.search_value;
			this.dataList=[];
			this.pageIndex = 0;
			this.loadMore='more';
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
		handleDetail(){
			uni.navigateTo({
				url:'sell-detail'
			})
		},
		loadData() {
			this.loadmore = 'loading',
			this.$refs.loading.open();
			const senddata = {
				pageIndex: this.pageIndex+1,
				pageRows: this.pageRows,
				billtype:this.billtype,
				orderName:this.order_name,
				orderType:this.order_type,
				beginttime:this.search_startDate,
				endtime:this.search_endDate,
				productname:this.search_value
			};
			console.log(senddata);
			query(api.stkStock, senddata)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						if(res.data.data.resultList.length ===0){
							this.loadmore = "noMore"
							return;
						}else{
							this.dataList =this.dataList.concat(res.data.data.resultList);
							this.totalAmount = res.data.data.totalAmount;
							this.totalRecords = res.data.data.pageInfo.totalRecords;
							this.pageIndex = this.pageIndex+1 ;
							this.loadmore = "more"
						}
						
					} else {
						this.loadmore = 'more',
						this.$api.msg(res.data.returnMessage);
					}
				})
				.catch(error => {
					this.loadmore = 'more',
					this.$refs.loading.close();
					this.$api.msg('请求失败fail');
				});
		}
	}
};
</script>
<style lang="scss" scoped>
@import "../bill.scss";
.container {
	font-size: $uni-font-size-base;
	height: 100vh;
	width: 100vw;
	.header {
		height: 10%;
	}
	.total{
		font-size: $uni-font-size-base;
		height: 8%;
		background-color: #FFFFFF;
		 display: flex;
		 flex-direction: row;
		 justify-content: space-around;
		 padding: 16upx 0upx;
		 align-items: center;
		.total-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			
		}
	}
	.main {
		height: calc(80% - 58px);
		padding: 0;
		margin-top: 6px;
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
		.picker {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}
	
}
.uni-loadmore{
	text-align: center;
	font-size: $uni-font-size-base;
}

</style>