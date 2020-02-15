<template>
	<view class="login">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<!-- <view class="space"></view> -->
		<!-- <view class="tou"><img src="@/static/image/logo.png"/></img></view> -->

		<view class="con">
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="locked" size="25" color="#E5E5E5"></uni-icon></view>
				<view class="con_02_r"><input v-model="oldpassword" password="true" class="uni-input" placeholder="请输入原密码" /></view>
			</view>
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="locked" size="25" color="#E5E5E5"></uni-icon></view>
				<view class="con_02_r">
					<input v-model="password" password="true" class="uni-input" placeholder="请输入新密码" />
				</view>
			</view>
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="locked" size="25" color="#E5E5E5"></uni-icon></view>
				<view class="con_02_r">
					<input v-model="re_password" password="true" class="uni-input" placeholder="请再次输入新密码"  />
				</view>
			</view>
			<!-- <view class="con_03" style="display: flex;justify-content: flex-end; margin-top: 10px;"><view @click="login_action()">返回登录？</view></view> -->
			<!-- 	<view class="user_bottom" style="margin-top: 50px;display: flex;justify-content: space-between;">
				<button type="primary" class="logout_btn" @tap="handleLogin">提交</button>
			</view> -->
			<view class="user_bottom"><button type="primary" :loading="loading" class="send_btn" @tap="handleReg">提交</button></view>
			<view>
				<text></text>
				<text></text>
			</view>
		</view>
	</view>
</template>

<script>
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import { post } from '@/api/user.js';
import { api } from '@/config/common.js';
export default {
	data() {
		return {
			loading: false,
			stop: false,
			miao: 60,
			oldpassword: '',
			password: '',
			re_password: '',
			title: '修改密码'
		};
	},
	components: { uniIcon },
	methods: {
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			});
		},
		login_action() {
			uni.reLaunch({
				url: '/pages/my/login/login'
			});
		},

		handleReg() {
			const { oldpassword, password, re_password } = this;
			if (oldpassword.length == 0) {
				this.$api.msg('原登录密码不能为空！');
				return;
			}
			if (password.length == 0) {
				this.$api.msg('新登录密码不能为空！');
				return;
			}
			if (re_password.length == 0) {
				this.$api.msg('重复密码不能为空！');
				return;
			}
			if (password != re_password) {
				this.$api.msg('两次密码不一致！');
				return;
			}
			const sendData = {
				password,
				oldpassword
			};
			this.loading = true;
			post(api.ChangePassword, sendData)
				.then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.$api.msg('密码修改成功！');
						uni.navigateBack({
							delta: 1
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
		},
		send() {
			const mobile = this.mobile;
			this.settime(60);
			if (mobile.length != 11) {
				this.$api.msg('手机号错误');
				return;
			}
		},
		settime(smiao) {
			const that = this;
			const miao = that.miao;
			if (miao == 0) {
				that.miao = 0;
				this.stop = false;
			} else {
				setTimeout(() => {
					smiao--;
					this.miao = smiao;
					that.settime(smiao);
				}, 1000);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.space{
	height: 60upx;
}
.login{
	// padding-top:100px;
	// .head{font-size: 22px;padding: 20px;}
	font-size: 28upx;
	.tou{text-align: center;}
	.tou img{width: 64px;height: 64px;}
	.con{padding: 24upx 16upx;}
	.con_02 {
		border-bottom: 2upx solid #f7f7f7;
		//padding-top: 10px;
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
		//font-size: 28upx;
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
.user_bottom{
		margin-top:60upx;
		// padding-left:20rpx;padding-right:20rpx;
		.send_btn{
			background-color:#2d8cf0;
		}
}		
</style>
