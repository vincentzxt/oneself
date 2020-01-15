<template>
	<view class="container">
	<view class="header">
		<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
		</uni-navbar>
	</view>
	<view class="main">
		<view v-for="(item,index) in dataList" :key="index" class="list-item">
			<view class="list-between">
				<view>订单号：<text>{{item.ordercode}}</text></view>
				<view><text>¥{{item.orderamount}}</text></view>
			</view>
			<view class="list-between">
					<text>订单状态</text>
					<text class="payment" v-bind:class="item.orderstatus==0?'payment-blue':'payment-green'">{{OrderStatusList[item.orderstatus]}}</text>
			</view>
			<view class="list-center">
				<text>{{item.description}}</text>
			</view>
			<view class="list-between">
					<view class="list_bottom_box_item"><text>开始日期：{{item.startDate}}</text></view>
					<view class="list_bottom_box_item"><text>到期日期：{{item.expireDate}}</text></view>
			</view>
		</view>
		<view class="no_data" v-if="dataList.length===0"><text class="item_text">暂无数据</text></view>
	</view>
</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
// import adCell from '@/component/ADCell/ADCell.vue';
import { post,tokenpost} from '@/api/user.js';
import { api } from '@/config/common.js';
export default {
	components: {
		// adCell
		uniList,
		uniListItem
	},
	data() {
		return {
			title: '我的订单',
			dataList: [{
				ordercode:'SC2020010230003',
				orderamount:'600',
				payment:'微信',
				description:'可以通过微信开发者工具切换pages.json中condition配置的页面，或者关闭微信开发者工具，然后再从HBuilderX中启动指定页面',
				orderstatus:0,
				startDate:'2019-11-20',
				expireDate:'2020-11-20'
			},
			{
				ordercode:'SC2020010230004',
				orderamount:'800',
				payment:'微信',
				description:'可以通过微信开发者工具切换pages.json中condition配置的页面，或者关闭微信开发者工具，然后再从HBuilderX中启动指定页面',
				orderstatus:1,
				startDate:'2019-11-20',
				expireDate:'2020-11-20'
			}],
			OrderStatusList:['待支付','已支付']
		};
	},
	onLoad(){},
	onShow(){
		if(!uni.getStorageSync('userInfo')){
			uni.reLaunch({
				url:'/pages/my/login/login'
			})
		};
		// this.loadData();
	},
	methods: {
		handleRefreshPage() {
			console.log('refreshpage');
		},
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			})
		},
		//设置
		handleSet(){
			uni.navigateTo({
				url: '../my/set'
			});
		},
		loadData(){
			tokenpost(api.GetOrderList).then(res => {
				if (res.status == 200 && res.data.returnCode == '0000') {
				  this.dataList = res.data.data.resultList
				} else {
					this.$api.msg(res.data.returnMessage) 
				}
				this.loading =false;
			}).catch(error => {
				this.loading =false;
				this.$api.msg('请求失败fail') 
			})
			
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
		height: 100vh;
		width: 100vw;
		.header {
			height: 10%;
		}
		.main {
			font-size: $uni-font-size-base;
			height: 83%;
			padding: 15upx;
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

.no_data{
	
	display: flex;
	//flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	justify-content: center;
	.item_img{
		width: 120rpx;
		height: 120rpx;
	}
	.item_text{
		// font-size: 24rpx;
		margin-top: 100rpx;
		color: #CCCCCC;
	}
}
.list-item{
		display: flex;
		flex-direction: column;
		padding: 10upx 24upx;
		background: #fff;
		margin-bottom: 16upx;
		.list-center{
			margin-top: 10upx;
			padding-top:10upx;
			padding-bottom:5upx;
			border-top: $uni-split-color 1px solid;
		}
		.list-between{	
			padding-top:5upx;
			padding-bottom:5upx;
			display:flex;
			justify-content: space-between;
			.payment-blue{
				background-color:#2d8cf0;
				border-radius: 30upx;
				padding: 5upx 16upx;
				color: #FFFFFF;
			}
			.payment-green{
				background-color:#90EE90;
				border-radius: 30upx;
				padding: 5upx 16upx;
				color: #FFFFFF;
			}
		};
	}	
	</style>