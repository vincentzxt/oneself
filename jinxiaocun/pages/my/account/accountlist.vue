<template>
	<view class="container">
	<view class="header">
		<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
		</uni-navbar>
	</view>
	<view class="top"><view><text class="text">账户设置</text> </view><view><button type="default" size="mini" @tap="handleAdd">增加</button></view></view>
	
	<view class="main">
		<view v-for="(item,index) in dataList" :key="index" class="list-item">
			<view class="list-between">
				<view>账户名称：<text>{{item.accountName}}</text></view>
			</view>
			<view class="list-between">
					<view class="list_bottom_box_item"><text>账户类型：{{item.bankType}}</text></view>
					<view class="list_bottom_box_item"><text>余额：{{item.money}}</text></view>
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
			title: '账户设置 ',
			dataList: [{
				accountName:'湖北吉奥汽车服务有限公司',
				money:'600',
				bankType:'微信'
			},
			{
				accountName:'湖北吉奥汽车服务有限公司',
				money:'600',
				bankType:'微信'
			}]
		};
	},
	onLoad(){},
	onShow(){
		if(!uni.getStorageSync('userInfo')){
			uni.reLaunch({
				url:'/pages/my/login/login'
			})
		};
		//this.loadData();
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
		handleAdd() {
			console.log('-----');
			uni.navigateTo({
				url:'/pages/my/account/accountadd'
			})
			console.log('-----');
		},
		//退出登录
		handleLogout() {
			uni.showModal({
				title: '确定要退出登录么？',
				success: e => {
					if (e.confirm) {
						try {
							uni.clearStorageSync();
							setTimeout(() => {
								const userInfo = uni.getStorageSync('userInfo');
								if (!userInfo) {
									uni.reLaunch({
										url: '/pages/my/login/login'
									});
								}
							}, 200);
						} catch (e) {}
					}
				}
			});
		},
		//设置
		handleSet(){
			uni.navigateTo({
				url: '../my/set'
			});
		},
		loadData(){
			// let userid = uni.getStorageSync('userInfo').userid;
			// let token = uni.getStorageSync('userInfo').token;
			// let url = 'http://120.210.132.94:5599/api/BseUser/GetUserInfo';
			tokenpost(api.GetUserInfo).then(res => {
				if (res.status == 200 && res.data.returnCode == '0000') {
				  this.dataList = res.data.data
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
<style lang="scss">
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
	.top{
		font-size: 32rpx;
		padding: 10upx 15upx 10upx 30upx;
		background-color: #ffffff;
		display:flex;
		justify-content: space-between;
		.text{
			color: $uni-color-link;
		}
	}	
		.main {
			font-size: 24rpx;
			height: 83%;
			padding: 0 15upx;
			margin-top: 10upx;
		
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