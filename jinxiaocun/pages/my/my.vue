<template>
	<view>
		<view class="header">
			<uni-navbar :title="title"  background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<!-- <uni-navbar :title="title" left-icon="refresh" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleRefreshPage"></uni-navbar> -->
		<!-- <uni-navbar :title="title" left-icon="back" @refreshPage="handleRefreshPage"> </uni-navbar>-->
		<view class="user_info">
			<!-- <view class="user_title color_fff size_16">我的</view> -->
			<view class="user_blank"></view>
			<view class="flex_col color_fff">
				<image src="../../static/image/missing-face.png" mode="aspectFill" class="pic"></image>
				<view class="flex_grow">
					<view class="size_16">{{dataList.realname}}</view>
					<view class="size_16">{{dataList.companyname}}</view>
					<view class="size_16">到期日期：{{dataList.expiredate}}</view>
				</view>
				<view class="edit size_16" @click="handleSet()">设置</view>
			</view>
		</view>
		<uni-list>
			<uni-list-item title="员工管理" thumb="../../static/my/icon/manager.png" :show-arrow="true"></uni-list-item>
			<!-- 			<uni-list-item title="员工列表"  thumb="../../static/my/icon/list.png"></uni-list-item>
 -->
			<uni-list-item title="修改密码" thumb="../../static/my/icon/editpwd.png"></uni-list-item>
			<uni-list-item title="账户设置" thumb="../../static/my/icon/bankcard.png" @click="handleBankSet()"></uni-list-item>
		</uni-list>
		<view class="space"></view>
		<uni-list>
			<uni-list-item title="我的订单" thumb="../../static/my/icon/order.png" :show-badge="true" :badge-text="dataList.ordercount"></uni-list-item>
			<uni-list-item title="时长" thumb="../../static/my/icon/time.png" show-text="true" :content="dataList.daycount"></uni-list-item>
			<uni-list-item title="分享有礼" thumb="../../static/my/icon/share.png"></uni-list-item>
			<uni-list-item title="帮助文档" thumb="../../static/my/icon/help.png"></uni-list-item>
		</uni-list>
		<view class="space"></view>
		<view class="user_bottom"><button type="primary" class="logout_btn" @tap="handleLogout">退出登录</button></view>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
// import adCell from '@/component/ADCell/ADCell.vue';
export default {
	components: {
		// adCell
		uniList,
		uniListItem
	},
	data() {
		return {
			title: '我的',
			dataList: {
				loginname:'',
				realname:'张三丰',
				companyname:'湖北吉奥汽车服务有限公司',
				expiredate:'2020-11-20',
				daycount:0,
				ordercount:'30'
			}
		};
	},
	onLoad(){},
	onShow(){
		if(!uni.getStorageSync('userInfo')){
			uni.reLaunch({
				url:'/pages/my/login/login'
			})
		}
	},
	methods: {
		handleRefreshPage() {
			console.log('refreshpage');
		},
		handleBankSet(){
			console.log("11111111111");
			uni.navigateTo({
				url: '/pages/my/bankcard'
			});
		},
		handleGridChange(val) {
			switch (val.id) {
				case '1':
					uni.navigateTo({
						url: '../sale/sale'
					});
					break;
				case '2':
					uni.navigateTo({
						url: '../purchase/purchase'
					});
					break;
				case '3':
					uni.navigateTo({
						url: '../current_unit/current_unit'
					});
					break;
				case '4':
					uni.navigateTo({
						url: '../product/product'
					});
					break;
			}
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
			let userid = uni.getStorageSync('userInfo').userid;
			let token = uni.getStorageSync('userInfo').token;
			let url = 'http://120.210.132.94:5599/api/BseUser/GetUserInfo';
			const sendData = {
				userid:userid
				}
			uni.request({
				url: url,
				data: sendData,
				header: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				success: res => {
					if (res.statusCode == 200 && res.data.returnCode === '0000') {
						this.dataList =res.data.data;
						
					} else {
						this.$api.msg('登录失败');
					}
				},
				fail: () => {
					this.$api.msg('请求失败fail');
				},
				complete: () => {
					this.loading = false;
					//uni.hideLoading();
				}
			});
		}
	}
};
</script>

<style lang="scss">
@import '../../lib/global.scss';
.space {
	height: 32rpx;
}
.user_info {
	background-color: #2d8cf0;
	background-image: linear-gradient(to right, #2d8cf0, #3d8cf0);
	padding: 20rpx 20rpx 100rpx 20rpx;
	line-height: normal;

	.user_title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 64rpx;
	}

	.user_blank {
		height: 64rpx;
	}

	.pic {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		border: rgba(255, 255, 255, 0.5) solid 5rpx;
		margin-right: 20rpx;
	}

	.edit {
		padding-right: 40rpx;
		position: relative;
		line-height: 40rpx;
		height: 40rpx;

		&:after {
			content: '';
			display: block;
			height: 12rpx;
			width: 12rpx;
			border-width: 2px 2px 0 0;
			border-color: #fff;
			border-style: solid;
			transform: rotate(45deg);
			position: absolute;
			top: 14rpx;
			right: 20rpx;
		}
	}
}
.user_bottom {
	padding-left: 20rpx;
	padding-right: 20rpx;
	.logout_btn {
		background-color: #2d8cf0;
		height: 88rpx;
		line-height: 88rpx;
	}
}
</style>
