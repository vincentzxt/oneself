<template>
	<view class="login">
		<view class="header"><uni-navbar :title="title" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar></view>
		<view class="space"></view>
		<!-- <view class="tou"><img src="@/static/image/logo.png"/></img></view> -->

		<view class="con">
			<view class="con_01">
				<view class="con_01_l"><uni-icon type="contact" size="25" color="#E5E5E5"></uni-icon></view>
				<view class="con_01_r"><input v-model="loginname" class="uni-input" focus placeholder="请输入用户名" style="height: 35px;background-color: #fff;" /></view>
			</view>
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="locked" size="25" color="#E5E5E5"></uni-icon></view>
				<view class="con_02_r"><input v-model="password" password="true" class="uni-input" placeholder="请输入密码" style="height: 35px;background-color: #fff;" /></view>
			</view>
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="locked" size="25" color="#E5E5E5"></uni-icon></view>
				<view class="con_02_r"><input v-model="re_password" password="true" class="uni-input" placeholder="请再一次输入密码" style="height: 35px;background-color: #fff;" /></view>
			</view>
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="phone" size="25" color="#E5E5E5"></uni-icon></view>
				<view class="con_02_r"><input v-model="telephone" class="uni-input" placeholder="请输入手机号" style="height: 35px;background-color: #fff;" /></view>
			</view>
	<!-- 		<view class="con_01">
				<view class="con_01_l"><uni-icon type="locked" size="25" color="#E5E5E5"></uni-icon></view>
				<view class="con_01_r"><input v-model="code" class="uni-input" focus placeholder="请输入验证码" style="height: 35px;background-color: #fff;" /></view>
				<button class="con_02_t" type="default" @click="send" v-if="!stop">验证码</button>
				<button class="con_02_t" type="default" v-if="stop" :disabled="true">{{ miao }}秒</button>
			</view> -->
			<view class="con_03" style="display: flex;justify-content: flex-end; margin-top: 10px;"><view @click="login_action()">返回登录？</view></view>
			<!-- 	<view class="user_bottom" style="margin-top: 50px;display: flex;justify-content: space-between;">
				<button type="primary" class="logout_btn" @tap="handleLogin">提交</button>
			</view> -->
			<view class="user_bottom"><button type="primary" :loading="loading"  class="send_btn" @tap="handleReg">提交</button></view>
		<view><text></text><text></text></view>
		</view>
	</view>
</template>

<script>
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import { post } from '@/api/user.js'
import { api } from '@/config/common.js'
export default {
	data() {
		return {
			loading: false,
			stop: false,
			miao: 60,
			loginname: '',
			telephone: '',
			code: '',
			password: '',
			re_password: '',
			title: '注册'
		};
	},
	components: { uniIcon },
	methods: {
		login_action(){
			uni.reLaunch({
				url:'/pages/my/login/login'
			})
		},

		handleReg() {
			const { loginname, password ,telephone,re_password} = this;
			if (loginname.length == 0) {
				this.$api.msg('登录账号不能为空！');
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
			if(password!=re_password){
				this.$api.msg('两次密码不一致！');
				return;
			}
			if (telephone.length != 11) {
				this.$api.msg('手机号码不正确！');
				return;
			}
			const sendData = {
				loginname,
				password,
				telephone
			};
			this.loading = true;
			// uni.showLoading({
			//             title: '正在请求中'
			//         });
			
			post(api.Regist,sendData).then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
					this.login_action();
					} else {
						this.$api.msg(res.data.returnMessage) 
					}
					this.loading =false;
				}).catch(error => {
					this.loading =false;
					this.$api.msg('请求失败fail') 
				})
			
			
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
.space {
	height: 120rpx;
}
.login {
	// padding-top:100px;
	// .head{font-size: 22px;padding: 20px;}
	.tou {
		text-align: center;
	}
	.tou img {
		width: 64px;
		height: 64px;
	}
	.con {
		padding: 10px 16px;
	}
	.con_01 {
		border-bottom: 2px solid #f7f7f7;
		height: 48px;
		padding-top: 10px;
		display: flex;
	}
	.con_01_l {
		width: 40px;
		text-align: center;
		padding: 10px 0 8px;
		background-color: #ffffff;
	}
	.con_01_r {
		flex-grow: 1;
		padding-right: 10px;
		padding-top: 5px;
		background-color: #ffffff;
	}
	input::-webkit-input-placeholder {
		color: #d2d2d2;
	}
	.con_03 {
		font-size: 12px;
		color: #f78674;
		padding: 10px 0 33px 8px;
		display: flex;
		justify-content: space-between;
	}
	.con_04_1 {
		background-color: #e61874;
		color: #ffffff;
		border-radius: 25px;
		height: 35px;
		line-height: 35px;
		font-size: 14px;
		text-align: center;
		border: 1px solid #f0f0f0;
		width: 100%;
	}
	.con_04_2 {
		background-color: #e61874;
		color: #ffffff;
		width: 40%;
	}
	.con_04_3 {
		background-color: #e9e8e5;
		color: #81817e;
		width: 40%;
	}
	.con_05 {
		padding: 20px 0;
		text-align: center;
		color: #f78674;
	}
	.con_05 span {
		padding-left: 20px;
	}
	.con_02 {
		border-bottom: 2px solid #f7f7f7;
		padding-top: 10px;
		display: flex;
		justify-content: space-between;
		height: 48px;
	}
	.con_02_t {
		background-color: #e0441d;
		color: #fff;
		height: 30px;
		line-height: 30px;
		border-radius: 20px;
		padding: 0 20px;
		margin-bottom: 5px;
		font-size: 28upx;
	}
	.con_02_r {
		flex-grow: 1;
		padding-right: 10px;
		padding-top: 5px;
		background-color: #ffffff;
	}
	.con_02_l {
		width: 40px;
		text-align: center;
		padding: 10px 0 8px;
		background-color: #ffffff;
	}
}
.user_bottom {
	// padding-left:20rpx;padding-right:20rpx;
	.send_btn {
		background-color: #2d8cf0;
		height: 76rpx;
		line-height: 76rpx;
	}
}
</style>
