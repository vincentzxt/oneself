<template>
	<view class="login">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="space"></view>
		<!-- <view class="tou"><img src="@/static/image/logo.png"/></img></view> -->
		<view class="con">
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="contact" size="25" color="#cccccc"></uni-icon></view>
				<view class="con_02_r"><input v-model="loginname" class="uni-input" focus placeholder="请输入用户名" style="background-color: #fff;" /></view>
			</view>
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="locked" size="25" color="#cccccc"></uni-icon></view>
				<view class="con_02_r"><input v-model="password" password="true" class="uni-input" placeholder="请输入密码" style="background-color: #fff;" /></view>
			</view>
			<view  class="con_03"><view @tap="handleReg()"><text>注册</text></view><view @tap="handleForget()"><text>忘记密码？</text></view></view>

			<view class="user_bottom">
				<button type="primary" class="send_btn wx_class" :loading="loading" @tap="handleLogin">登录</button>
			</view>
		</view>
		<view class="space"></view>
	
		<tui-nomore :visible="true" text="微信授权登录" bgcolor="#fafafa"></tui-nomore>
		<view class="login_wx">
		<button open-type="getUserInfo" @getuserinfo="handleWxLogin" class="tui-share-btn tui-share-position">
		<view class="weixin">
			<view class="weixin-area">
				<image src="../../../static/my/icon/mine_weixin.png" mode=""></image>
			</view>
		</view>
		</button>
		</view>
			<view class="page_bottom">
				首次请使用账号登录
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import { post } from '@/api/user.js';
import { api } from '@/config/common.js';
import { cuLoading } from '@/components/custom/cu-loading.vue';
import tuiNomore from "@/components/nomore/nomore"
export default {
	data() {
		return {
			loading: false,
			loading2: false,
			stop: false,
			miao: 60,
			loginname: '',
			mobile: '',
			code: '',
			status: 0,
			password: '',
			new_password: '',
			re_new_password: '',
			title: '登录'
		};
	},
	components: { uniIcon ,tuiNomore},
	onLoad() {
	},
	onShow() {},
	methods: {
		handleNavbarClickLeft() {
			uni.switchTab({
				url: '/pages/my/my'
			});
		},
		handleReg(){
			uni.navigateTo({
				url: '/pages/my/login/reg'
			});
		},
		handleForget(){
			uni.navigateTo({
				url: '/pages/my/login/forget'
			});
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
		handleWxLogin(result) {
			const that = this 
			if(result.detail.userInfo){
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {	
					const code =loginRes.code
					const sendData = {'code':code,'logintype':1}
					// that.$refs.loading.open();
					that.$refs.loading.open()
					post(api.login, sendData)
						.then(res => {
							that.$refs.loading.close()
							if (res.status == 200 && res.data.returnCode == '0000') {
								let userInfo = {
									token: res.data.data.token,
									exp: res.data.data.exp,
									userId: res.data.data.userId
								};
								uni.setStorageSync('islogin', '1');	
								uni.setStorage({
									key: 'userInfo',
									data: userInfo,
									success: function() {
										uni.switchTab({
											url: '/pages/my/my'
										});
									}
								});
							} else {
								that.$api.msg(res.data.returnMessage);
							}
						})
						.catch(error => {
							that.$refs.loading.close()
							that.$api.msg('微信授权登录失败');
						});
					 }
					})
			}else{
				console.log("微信授权登录失败！");
			}
		},

		handleLogin() {
			const { loginname, password } = this;
			if (loginname.length == 0) {
				this.$api.msg('登录账号不能为空！');
				return;
			}
			if (password.length == 0) {
				this.$api.msg('登录密码不能为空！');
				return;
			}
			const sendData = {
				loginname,
				password,
				'logintype':0
			};
			this.loading = true;
			post(api.login, sendData)
				.then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						let userInfo = {
							token: res.data.data.token,
							exp: res.data.data.exp,
							userId: res.data.data.userId
						};
						uni.setStorageSync('islogin', '1');	
						uni.setStorage({
							key: 'userInfo',
							data: userInfo,
							success: function() {
								uni.switchTab({
									url: '/pages/my/my'
								});
							}
						});
					} else {
						this.$api.msg(res.data.returnMessage);
					}
					this.loading = false;
				})
				.catch(error => {
					this.loading = false;
					this.$api.msg('请求失败fail');
				});
		}
	}
};
</script>

<style lang="scss" scoped>	
.space {
	height: 60upx;
}
.login {
	height: 100vh;
	background-color: #FFFFFF;
	font-size: 36upx;
	.tou {
		text-align: center;
	}
	.tou img {
		width: 64px;
		height: 64px;
	}
	.con {
		padding: 24upx;
	}
	.con_02 {
		border-bottom: 2upx solid #f7f7f7;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10upx;
		padding: 16upx 16upx;
		background-color: #ffffff;
		align-items: center;
	}
	.con_02_t {
		color: #fff;
		border-radius: 20upx;
	}
	.con_02_r {
		flex-grow: 1;
		padding: 10upx 24upx;
	}
	.con_02_l {
		width: 40upx;
		text-align: center;
		padding-right: 12px;
		vertical-align: center;
		padding: 10upx 0upx;
	}
	.con_03{
		display: flex;
		flex-direction:row;
		justify-content: space-between;
		margin-top: 36upx;
		font-size: 28rpx;
		padding-left: 16rpx;
		padding-right: 16rpx;
	}
}
.page_bottom{
	position: absolute;
	bottom:0;
	height:60rpx;
	width: 100%;
	text-align: center;
	font-size: 24rpx;
	color: #bababa;
	
}
.login_wx{
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.weixin-area{
	width: 96rpx;
	height: 96rpx;
	border-radius: 50%;
	background-color: #f7f7f7;
	text-align: center;
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	justify-content: center;
	image{
		align-self: center;
		width: 60rpx;
		height: 60rpx;
	}
}
.tui-share-btn {
	width:96rpx;
	height:96rpx;
	text-align: center;
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	justify-content: center;
		display: block;
		background: none;
		margin: 0;
		padding: 0;
		border-radius: 0;
		border: 0px !important;
	}
	.tui-share-btn::after{
			border: none !important;
		}

.tui-tag-share {
		display: flex;
		align-items: center;
}
.user_bottom {
	margin-top: 60upx;
	.wx_class{
		// border-radius: 50upx;
	}
	.send_btn {
		background-color: #2d8cf0;
	}
}
</style>
