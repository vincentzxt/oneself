<template>
	<view class="login">
		<view class="header">
			<uni-navbar :title="title" left-icon="back"  background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="space"></view>
		<!-- <view class="tou"><img src="@/static/image/logo.png"/></img></view> -->
		<view class="con">
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="contact" size="25" color="#cccccc"></uni-icon></view>
				<view class="con_02_r"><input v-model="loginname" class="uni-input" focus placeholder="请输入用户名" style="height: 35px;background-color: #fff;"/></view>
			</view> 
			<view class="con_02">
				<view class="con_02_l"><uni-icon type="locked" size="25" color="#cccccc"></uni-icon></view>
				<view class="con_02_r"><input v-model="password" password="true" class="uni-input" placeholder="请输入密码" style="height: 35px;background-color: #fff;"/></view> 
			</view>
			<!-- <view class="con_03" style="display: flex;justify-content: flex-end; margin-top: 10px;" >
				<view @click="forget_action()">忘记密码？</view>
			</view> -->
	
			<view class="user_bottom">
				<button type="primary" class="send_btn" :loading="loading" @tap="handleLogin">登录</button>
				<button type="primary" class="send_btn" @tap="reg_action()" style="margin-top: 10px;">注册</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import { post } from '@/api/user.js'
	import { api } from '@/config/common.js'
	export default {
		data() {
			return {
				loading:false,
				stop: false,
				miao: 60,
				loginname:'',
				mobile:'',
				code:'',
				status:0,
				password:'',
				new_password:'',
				re_new_password:'',
				title:'登录'
			};
		},
		components: {uniIcon}, 
		onShow() {
			console.log("2213123123123");
		},
		methods: {
			handleNavbarClickLeft() {
				uni.switchTab({
					url:'/pages/my/my'
				}) 
			},
			reg_action(){
				uni.reLaunch({
					url:'/pages/my/login/reg'
				})
			},
			forget_action(){
				uni.reLaunch({
					url:'/pages/my/login/forget'
				})
			},
			handleLogin(){
				const {loginname,password} = this;
				if(loginname.length==0){
					this.$api.msg('登录账号不能为空！')
					return;
				} 
				if(password.length==0){
					this.$api.msg('登录密码不能为空！')
					return;
				} 						
				const sendData = {
					loginname,
					password
				};
				this.loading = true;
				post(api.login,sendData).then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						let userInfo = {
										"token":res.data.data.token,
										"exp":res.data.data.exp,
										"userId":res.data.data.userId,
									};
									uni.setStorage({
									    key: 'userInfo',
									    data: userInfo,
									    success: function () {
									        uni.switchTab({
									        	url:'/pages/index/index'
									        })
									    }
									});
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
	}
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
	.con{padding: 10px 16px;}
	.con_02 {
		border-bottom: 2upx solid #f7f7f7;
		//padding-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10upx;
		padding: 0upx 16upx;
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
			height: 76rpx;
			line-height: 76rpx;
		}
		}
</style>
