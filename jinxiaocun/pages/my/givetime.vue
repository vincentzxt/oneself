<template>
	<view class="container">
	<view class="header">
		<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
		</uni-navbar>
	</view>
	<view class="main">
		<scroll-view :scroll-y="true" class="fill" @scrolltolower="loadData">
		<view v-for="(item,index) in dataList" :key="index" class="list-item">
			<view class="list-between">
				<view>赠送类型：<text>{{item.source}}</text></view>
				<view class="list_bottom_box_item"><text>赠送时长：{{item.daycount}}天</text></view>
			</view>
			<view class="list-between">
					<view class="list_bottom_box_item"><text>赠送时间：{{item.createtime}}</text></view>
			</view>
		</view>
		
		<view class="no_data" v-if="dataList.length===0"><text class="item_text">暂无数据</text></view>
		<uni-load-more v-if="dataList.length >= 10" :status="loadmore"></uni-load-more>
		</scroll-view>
	</view>
<cu-loading ref="loading"></cu-loading>
</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
import { post,tokenpost} from '@/api/user.js';
import { api } from '@/config/common.js';
import cuLoading from '@/components/custom/cu-loading.vue';
export default {
	components: {
		uniLoadMore,
		uniList,
		uniListItem
	},
	data() {
		return {
			loadmore:'more',
			pageIndex: 0,
			pageRows: 15,
			title: '时长',
			dataList: []
		};
	},
	onLoad(){},
	onShow(){
		if(!uni.getStorageSync('userInfo')){
			uni.reLaunch({
				url:'/pages/my/login/login'
			})
		};
		this.loadData();
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
			this.loadmore = 'loading',
			this.$refs.loading.open();
			const senddata = {
				pageIndex: this.pageIndex+1,
				pageRows: this.pageRows
			};
			tokenpost(api.GetMyDayLogList,senddata).then(res => {
				this.$refs.loading.close();
				if (res.status == 200 && res.data.returnCode == '0000') {
					if(res.data.data.resultList.length ===0){
						this.loadmore = "noMore"
						return;
					}else{
						this.dataList =this.dataList.concat(res.data.data.resultList);
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
		.main {
			height: 90%;
			padding: 0;
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
		font-size: 24rpx;
		margin-top: 100rpx;
		color: #CCCCCC;
	}
}
.list-item{
		display: flex;
		flex-direction: column;
		padding: 16upx 24upx;
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