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
				<view class="item-content1">客户名称：{{item.companyName }}</view>
				<view class="item-content2">类型：{{item.sourcetype}}</view>
			</view>
			<view class="list-between">
				<view  class="item-content1">时间：{{item.createtime}}</view>
				<view  class="item-content2">积分：{{item.integral}}</view>
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
			title: '我的分享',
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
			tokenpost(api.GetMyPromotIntegralList,senddata).then(res => {
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
.list-item {
	padding: 16upx 24upx;
	background: #fff;
	border-bottom: 0.8upx solid $uni-border-color;
	.list-between {
		display: flex;
		flex-direction: row;
		//justify-content: space-around;
		.item-content1 {
			flex: 2;
			font-size: $uni-font-size-min;
			line-height: 60upx;
			width: 0;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.item-content2 {
			flex: 1;
			font-size: $uni-font-size-min;
			line-height: 60upx;
		}
		.item-content3 {
			flex: 1;
			text-align: right;
			font-size: $uni-font-size-min;
			line-height: 60upx;
		}
	}
}
	</style>