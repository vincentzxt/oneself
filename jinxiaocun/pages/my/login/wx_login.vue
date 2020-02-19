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
			<view class="con_03" style="display: flex;justify-content: flex-end; margin-top: 36upx;"><text @click="forget_action()" style="padding-right:24upx;color: #2D8cF0;">注册</text><text @click="forget_action()">忘记密码？</text></view>

			<view class="user_bottom">
				<button type="primary" class="send_btn" :loading="loading" @tap="handleLogin">登录</button>
				<!-- <button type="primary" class="send_btn" @tap="reg_action()" style="margin-top: 10px;">注册</button> -->
				<button type="primary"  :loading="loading2"  open-type="getUserInfo" @getuserinfo="handleWxLogin" style="margin-top: 10px;">微信授权登录</button>
			</view>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import { post } from '@/api/user.js';
import { api } from '@/config/common.js';
import { cuLoading } from '@/components/custom/cu-loading.vue';
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
	components: { uniIcon },
	onLoad() {
	},
	onShow() {},
	methods: {
		handleNavbarClickLeft() {
			uni.switchTab({
				url: '/pages/my/my'
			});
		},
		reg_action() {
			uni.reLaunch({
				url: '/pages/my/login/reg'
			});
		},
		forget_action() {
			uni.reLaunch({
				url: '/pages/my/login/forget'
			});
		},
		handleWxLogin(result) {
			const that = this 
			if(result.detail.userInfo){
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {	
					const code =loginRes.code
					const sendData = {'code':code}
					// that.$refs.loading.open();
					that.loading2 = true;
					post(api.wxLogin, sendData)
						.then(res => {
							that.loading2 = false;
							if (res.status == 200 && res.data.returnCode == '0000') {
								let userInfo = {
									token: res.data.data.token,
									exp: res.data.data.exp,
									userId: res.data.data.userId
								};
								uni.setStorage({
									key: 'userInfo',
									data: userInfo,
									success: function() {
										uni.switchTab({
											url: '/pages/index/index'
										});
									}
								});
							} else {
								that.$api.msg(res.data.returnMessage);
							}
						})
						.catch(error => {
							that.loading2 = false;
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
				password
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
						uni.setStorage({
							key: 'userInfo',
							data: userInfo,
							success: function() {
								uni.switchTab({
									url: '/pages/index/index'
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
	font-size: 36upx;
	.tou {
		text-align: center;
	}
	.tou img {
		width: 64px;
		height: 64px;
	}
	.con {
		padding: 24upx 16upx;
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
}
.user_bottom {
	margin-top: 60upx;
	.send_btn {
		background-color: #2d8cf0;
	}
}
</style>
