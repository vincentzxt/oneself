<template>
	<view class="login">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<!-- <view class="tou"><img src="@/static/image/logo.png"/></img></view> -->

		<view class="con">
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="contact" size="25" color="#CCCCCC"></uni-icon></view>
				<view class="con_02_r"><input v-model="loginname" class="uni-input" focus placeholder="请输入用户名" /></view>
			</view>
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="phone" size="25" color="#CCCCCC"></uni-icon></view>
				<view class="con_02_r"><input v-model="telephone" class="uni-input" placeholder="请输入手机号" /></view>
			</view>
			<view class="con_02">
				<view class="con_02_l"><uni-icons type="identifying-code" size="25" color="#CCCCCC"></uni-icons></view>
				<view class="con_02_r"><input v-model="verificationCode" class="uni-input" focus placeholder="请输入验证码" /></view>
				<button type="default" size="mini"  @click="send"  :disabled="code_status" class="code_btn">{{codeText}}</button>
			</view>
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="locked" size="25" color="#CCCCCC"></uni-icon></view>
				<view class="con_02_r"><input v-model="password" password="true" class="uni-input" placeholder="请输入密码" /></view>
			</view>
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="locked" size="25" color="#CCCCCC"></uni-icon></view>
				<view class="con_02_r"><input v-model="re_password" password="true" class="uni-input" placeholder="请再一次输入密码" /></view>
			</view>

			<view class="con_03" style="display: flex;justify-content: flex-end; margin-top: 10px;"><view @click="login_action()">返回登录？</view></view>
			<view class="space"></view>
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
import uniIcons from "@/components/uni-icons/uni-icons.vue"
import { post } from '@/api/user.js';
import { api } from '@/config/common.js';
export default {
	data() {
		return {
			loading: false,
			stop: false,
			miao: 60,
			codeText:'获取验证码',
			code_status:false,
			loginname: '',
			telephone: '',
			verificationCode: '',
			password: '',
			re_password: '',
			title: '注册',
			promoterid: 0
		};
	},
	components: { uniIcon,uniIcons },
	onLoad() {
		if (uni.getStorageSync('promoterid')) {
			this.promoterid = uni.getStorageSync('promoterid');
			console.log("推荐人"+this.promoterid);
		} else {
			console.log('没有推荐人');
		}
	},
	methods: {
		handleNavbarClickLeft() {
			uni.switchTab({
				url: '/pages/my/my'
			});
		},
		login_action() {
			uni.navigateTo({
				url: '/pages/my/login/login'
			});
		},
		handleReg() {
			const { loginname, password, telephone, re_password, promoterid,verificationCode} = this;
			if (loginname.length == 0) {
				this.$api.msg('登录账号不能为空！');
				return;
			}
			if (telephone.length != 11) {
				this.$api.msg('手机号码不正确！');
				return;
			}
			if (verificationCode.length == 0) {
				this.$api.msg('手机验证码不能为空！');
				return;
			}
			if (password.length == 0) {
				this.$api.msg('登录密码不能为空！');
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
				loginname,
				password,
				telephone,
				verificationCode,
				promoterid
			};
			this.loading = true;
			post(api.Regist, sendData)
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
						uni.setStorageSync('islogin', '0');	
						this.$api.msg(res.data.returnMessage);
					}
					this.loading = false;
				})
				.catch(error => {
					uni.setStorageSync('islogin', '0');	
					this.loading = false;
					this.$api.msg('请求失败fail');
				});
		},
		send() {
			const telephone = this.telephone;
			if(telephone.length!=11){
				this.$api.msg('请输入手机号！');
				return;
			}
			this.code_status = true;
			const sendData = {
				telephone:this.telephone,
				sendType:1
			};
			post(api.GetSmsCode, sendData)
				.then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.settime(60);
					} else {
						this.$api.msg(res.data.returnMessage);
						this.code_status = false;
					}
				})
				.catch(error => {
					this.$api.msg('请求失败fail');
				});
		},
		settime(smiao) {
			const miao = this.miao;
			if (miao != 0) {
				setTimeout(() => {
					smiao--;
					this.miao = smiao;
					this.codeText = this.miao+'秒后重新获取';
					this.settime(smiao);
				}, 1000);
			}else{
				this.code_status = false;
				this.codeText='获取验证码'
				this.miao = 60;
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.space {
	height: 80rpx;
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

	input::-webkit-input-placeholder {
		color: #d2d2d2;
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
	.code_btn {
		padding: 5upx 24upx;
	}
}
.user_bottom {
	.send_btn {
		background-color: #2d8cf0;
	}
}
</style>
