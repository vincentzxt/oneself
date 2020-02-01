<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title"  left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<xw-date title="采购日期"  @click_sub="handle_data_sub"></xw-date>
		<view class="total">
			<view><text>总订单：{{totalOrder}}</text></view><view><text>总金额：¥{{totalAmount}}</text></view>
		</view>
		<view class="list-header">
			<view class="item-content">
				<text>客户名称</text>
			</view>
			<view class="item-content2">
				<text>金额</text>
			</view>
			<view class="item-content3">
				<text></text>
			</view>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill" @scrolltolower="loadData">
				<view v-for="(item, index) in dataList" :key="index" class="list-item"  @tap="handleDetail()">
					<view class="list-between">
						<view class="item-content">
							<text>{{ item.contactunitname }}</text>
						</view>
						<view class="item-content2">
							<text>¥{{ item.amount }}</text>
						</view>
						<view class="item-content3">
					<uni-icon type="arrowright" size="15"></uni-icon>
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
			title: '采购单据',
			totalAmount:'0.00',
			totalOrder:'0',
			dataList: [],
			search_startDate:nowDate,
			search_endDate:nowDate
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
		handle_data_sub(val){
			this.search_startDate = val.search_startDate;
			this.search_endDate = val.search_endDate;
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
				beginttime:this.search_startDate,
				endtime:this.search_endDate
			};
			query(api.purPurchaseOrder, senddata)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						if(res.data.data.resultList.length ===0){
							this.loadmore = "noMore"
							return;
						}else{
							this.dataList =this.dataList.concat(res.data.data.resultList);
							this.totalAmount = res.data.data.totalAmount;
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
.fill {
	width: 100%;
	height: 100%;
}
.container {
	font-size: $uni-font-size-base;
	height: 100vh;
	width: 100vw;
	.header {
		height: 10%;
	}
	.total{
		height: 5%;
		background-color: #FFFFFF;
		 display: flex;
		 flex-direction: row;
		 justify-content: space-around;
		 padding: 12upx 0upx;
	}
	.main {
		height: 70%;
		padding: 0;
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
		.picker {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}
	.footer {
		height: 7%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
}
.uni-loadmore{
	text-align: center;
	font-size: $uni-font-size-base;
}

.no_data {
	display: flex;
	//flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	justify-content: center;
	.item_img {
		width: 120rpx;
		height: 120rpx;
	}
	.item_text {
		font-size: 24rpx;
		margin-top: 100rpx;
		color: #cccccc;
	}
}
.list-header {
	    padding: 0upx 24upx;
		display: flex;
		flex-direction: row;
		font-weight: 600;
		.item-content {
			flex: 2;
			font-size: $uni-font-size-sm;
			line-height: 60upx;
		}
		.item-content2 {
			flex: 1;
			font-size: $uni-font-size-sm;
			line-height: 60upx;
		}
		.item-content3 {
			flex: 1;
			font-size: $uni-font-size-sm;
			line-height: 60upx;
		}
	}
.list-item {
	padding: 16upx 24upx;
	background: #fff;
	border-bottom: 0.8upx solid $uni-border-color;
	.list-between {
		display: flex;
		flex-direction: row;
		// justify-content: spac;
		.item-content {
			flex: 2;
			font-size: $uni-font-size-sm;
			line-height: 60upx;
		}
		.item-content2 {
			flex: 1;
			font-size: $uni-font-size-sm;
			line-height: 60upx;
		}
		.item-content3 {
			flex: 1;
			text-align: right;
			font-size: $uni-font-size-sm;
			line-height: 60upx;
		}
	}
}

</style>
