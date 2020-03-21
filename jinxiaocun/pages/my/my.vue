<template>
	<view>
		<view class="header"><uni-navbar :title="title" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar></view>
		<!-- <uni-navbar :title="title" left-icon="refresh" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleRefreshPage"></uni-navbar> -->
		<!-- <uni-navbar :title="title" left-icon="back" @refreshPage="handleRefreshPage"> </uni-navbar>-->
		<view class="user_info">
			<!-- <view class="user_title color_fff size_16">我的</view> -->
			<!-- 		<view class="user_blank"></view> -->
			<view class="flex_col color_fff">
				<image v-if="!login_status" :src="'../../static/image/mine_def_touxiang_3x.png'" mode="aspectFill" class="pic"></image>
				<image v-if="login_status" :src="ava_url || '../../static/image/mine_def_touxiang_3x.png'" mode="aspectFill" class="pic"></image>
				<view class="flex_grow" v-if="login_status">
					<view class="size_16">{{ dataList.loginname }}({{ dataList.telephone }})</view>
					<view class="size_16">{{ dataList.companyname }}</view>
					<view class="size_16">总积分：{{ dataList.integral }}</view>
					<view class="size_16">到期日期：{{ dataList.expiredate }}</view>
				</view>
				<view class="flex_grow" v-if="!login_status">
					<view class="size_16">游客</view>
					<view class="size_16" @click="this.$api.login">点击登录</view>
				</view>
				<view class="edit size_16" @click="handleSet()" v-if="dataList.ismain === 1">设置</view>
			</view>
		</view>
		<uni-list v-if="dataList.ismain === 1">
			<uni-list-item title="员工管理" thumb="/static/my/icon/mine_yggl.png" @tap="handleUserManage()" :show-arrow="true"></uni-list-item>
			<uni-list-item title="收款账号" thumb="../../static/my/icon/mine_skzh.png" @tap="handleBankSet()"></uni-list-item>
			<uni-list-item title="购买/续费" thumb="../../static/my/icon/mine_gmjf.png" @tap="handleRecharge()"></uni-list-item>
			<uni-list-item title="打印机设置" thumb="../../static/my/icon/dyj.png" @tap="handlePrint()"></uni-list-item>
		</uni-list>
		<view class="space" v-if="dataList.ismain === 1"></view>
		<uni-list>
			<uni-list-item title="修改密码" thumb="../../static/my/icon/mine_xgmm.png" @tap="handlePassword()"></uni-list-item>
			<uni-list-item title="积分兑换" thumb="../../static/my/icon/mine_jfdh.png" @tap="handleIntegral()"></uni-list-item>
			<uni-list-item title="分享有礼" thumb="../../static/my/icon/mine_fxyl.png" @tap="handleShare()"></uni-list-item>
			<uni-list-item title="关于我们" thumb="../../static/my/icon/mine_gywm.png" @tap="handleAbout()"></uni-list-item>
			<uni-list-item title="帮助文档" thumb="../../static/my/icon/mine_bzwd.png" @tap="handlewx()"></uni-list-item>
		<uni-list-item title="客服电话" thumb="../../static/my/icon/mine_kefu.png" showText="true" content='400-1565-661' @tap="handleCall()"></uni-list-item>
		</uni-list>
		<view class="space"></view>
		<view class="user_bottom" v-if="login_status"><button type="default" class="logout_btn" @tap="handleLogout">退出登录</button></view>
		<view class="space"></view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import { post, tokenpost } from '@/api/user.js';
import { api } from '@/config/common.js';
import cuLoading from '@/components/custom/cu-loading.vue';
export default {
	components: {
		uniList,
		uniListItem
	},
	data() {
		return {
			title: '我的',
			changestatus: 0,
			login_status: false,
			wxShowNum:0,
			ava_url: '',
			dataList: {
				loginname: '',
				realname: '',
				telephone: '',
				integral: 0,
				companyname: '',
				expiredate: '',
				daycount: 0,
				ordercount: '0',
				ismain: 0
			}
		};
	},
	onLoad() {
		uni.$on('changecompany', this.loadInit);
		this.getwxInfo();
	},
	onShow() {
		this.loadInit();
		const isLogin =uni.getStorageSync('islogin');
		this.login_status = isLogin=='1'?true:false;
		console.log(this.login_status);
	},
	onUnload() {
		uni.$off('changecompany');
	},
	methods: {
		loadInit() {
			this.tokenRefresh();
			this.loadData();
		},
		getwxInfo() {
			var that = this;
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							that.ava_url = infoRes.userInfo.avatarUrl;
						}
					});
				}
			});
		},
		handleRefreshPage() {
			console.log('refreshpage');
		},
		handlePassword() {
			if (!this.login_status) {
				this.$api.login();
				return;
			}
			uni.navigateTo({
				url: '/pages/my/login/editPassword'
			});
		},
		handlePrint() {
			if (!this.login_status) {
				this.$api.login();
				return;
			}
			uni.navigateTo({
				url: '/pages/my/print/print'
			});
		},
		handleCall(){
			uni.makePhoneCall({
			    phoneNumber: '4001565661' //仅为示例
			});
		},
		handleBankSet() {
			if (!this.login_status) {
				this.$api.login();
				return;
			}
			uni.navigateTo({
				url: '/pages/my/account/accountlist'
			});
		},
		handleAbout() {
			if (!this.login_status) {
				this.$api.login();
				return;
			}
			uni.navigateTo({
				url: '/pages/my/about/about'
			});
		},
		handleRecharge() {
			if (!this.login_status) {
				this.$api.login();
				return;
			}
			uni.navigateTo({
				url: '/pages/my/recharge/recharge'
			});
		},
		handleUserManage() {
			if (!this.login_status) {
				this.$api.login();
				return;
			}
			uni.navigateTo({
				url: '/pages/my/user/user'
			});
		},
		handleTime() {
			if (!this.login_status) {
				this.$api.login();
				return;
			}
			uni.navigateTo({
				url: '/pages/my/givetime'
			});
		},
		handleIntegral() {
			if (!this.login_status) {
				this.$api.login();
				return;
			}
			uni.navigateTo({
				url: '/pages/my/integral/integral'
			});
		},
		handleShare() {
			if (!this.login_status) {
				this.$api.login();
				return;
			}
			uni.navigateTo({
				url: '/pages/my/share/share'
			});
		},
		handlewx() {
			uni.navigateTo({
				url: '/pages/my/wxSet/wxSet'
			});
		},
		//退出登录
		handleLogout() {
			uni.showModal({
				title: '确定要退出登录么？',
				success: e => {
					if (e.confirm) {
						try {
							uni.removeStorage({
								key: 'userInfo',
								success: function(res) {
									uni.removeStorageSync('islogin');
									uni.removeStorageSync('currentUnitList');
									uni.removeStorageSync('productList');
									uni.removeStorageSync('productCategory');
									setTimeout(() => {
										const userInfo = uni.getStorageSync('userInfo');
										if (!userInfo) {
											uni.reLaunch({
												url: '/pages/my/my'
											});
										}
									}, 200);
								}
							});
						} catch (e) {}
					}
				}
			});
		},
		//设置
		handleSet() {
			if (!this.login_status) {
				this.$api.login();
				return;
			}
			uni.navigateTo({
				url: '../my/set'
			});
		},
		tokenRefresh() {
			const userInfo = uni.getStorageSync('userInfo');
			tokenpost(api.tokenRefresh)
				.then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						let refresh_userInfo = {
							token: res.data.data.token,
							exp: res.data.data.exp,
							userId: res.data.data.userId
						};
						uni.setStorage({
							key: 'userInfo',
							data: refresh_userInfo,
							success: function() {}
						});
						uni.setStorageSync('islogin', '1');
					} else {
						uni.setStorageSync('islogin', '0');
					}
				})
				.catch(error => {
					//this.$api.msg('token刷新失败');
				});
		},
		loadData() {
			this.$refs.loading.open();
			tokenpost(api.GetUserInfo)
				.then(res => {
					if (res.status == 200) {
						this.$refs.loading.close();
						if (res.data.returnCode == '0000') {
							this.dataList = res.data.data;
							this.login_status = true;
							if (this.dataList.companyname == '') {
								uni.navigateTo({
									url: '../my/set'
								});
							}
							if((this.dataList.wechatopenid == null || this.dataList.wechatopenid == '' ) && (this.wxShowNum==0)){
								this.wxShowNum = 1;
								uni.navigateTo({
									url: '../my/wxSet/wxSet'
								});
							}
						} else {
							//this.$api.msg(res.data.returnMessage);
							this.dataList = { loginname: '', realname: '', telephone: '', companyname: '', expiredate: '', daycount: 0, ordercount: '0' };
							this.login_status = false;
						}
					} else {
						
						this.$api.msg(res.data.returnMessage);
					}
				})
				.catch(error => {
					this.login_status=false
					this.$refs.loading.close();
					this.$api.msg('请求失败fail');
				});
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../../lib/global.scss';
.space {
	height: 32rpx;
}
.user_info {
	background-color: #2d8cf0;
	background-image: linear-gradient(to right, #2d8cf0, #3d8cf0);
	padding: 40rpx 20rpx 60rpx 20rpx;
	line-height: normal;

	.user_title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 64rpx;
	}

	.user_blank {
		height: 48rpx;
	}

	.pic {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		//border: rgba(255, 255, 255, 0.5) solid 5rpx;
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
	padding-left: 16upx;
	padding-right: 16upx;
	.logout_btn {
		background-color: #ffffff;
		padding: 8upx;
		//border: $uni-border-color;
	}
}
</style>
