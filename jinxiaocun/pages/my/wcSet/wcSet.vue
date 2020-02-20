<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
			<view class="tou">
				<img v-if="!hasRight" src="@/static/image/mine_def_touxiang_3x.png" mode="aspectFill" class="pic"/>
				<img v-if="hasRight" :src="ava_url || '@/static/image/mine_def_touxiang_3x.png'" mode="aspectFill" class="pic"/></img><text style="padding-top: 16upx;">{{nick_name}}</text></view>			
			<view class="space"></view>
			<view class="wx-info">
				<view>xuewei</view><view><uni-icon type="arrowthinright" size="25" color="#cccccc"></uni-icon></view><view>{{nick_name || '未登录'}}</view>
			</view>
			<view class="space"></view>
			<view class="wx-action"><button type="primary"  v-if="!hasRight" :loading="loading2" open-type="getUserInfo" @getuserinfo="handleWxLogin" style="margin-top: 10px;">获取个人信息</button>
<button type="primary" v-if="hasRight" class="wx_class" @tap="reg_action()" :loading="loading" style="margin-top: 10px;">绑定微信</button></view>
			</scroll-view>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import { post, tokenpost } from '@/api/user.js';
import { api } from '@/config/common.js';
import cuLoading from '@/components/custom/cu-loading.vue';
export default {
	components: {
		uniIcon
	},
	data() {
		return {
			loading:false,
			loading2:false,
			hasRight:false,
			ava_url:'',
			nick_name:'',
			reqData: {
				companylogourl: '',
				companyname: '',
				contact: '',
				telephone: '',
				cusemail:'',
				email: '',
				address: ''
			},
			title: '微信绑定'
		};
	},
	onShow() {
		
	},
	onLoad(){
		this.getwxInfo();
		this.loadData();
	},
	methods: {
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
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
							console.log(infoRes);
							that.ava_url = infoRes.userInfo.avatarUrl;
							that.nick_name = infoRes.userInfo.nickName;
							that.hasRight = true;
						}
					});
				}
			});
		},
		handleWxLogin(result) {
			const that = this 
			this.ava_url = result.detail.userInfo.avatarUrl;
			this.nick_name = result.detail.userInfo.nickName;
			that.hasRight = true;
		},
		loadData() {
			console.log("kkk");
			this.$refs.loading.open();
			tokenpost(api.GetUserInfo)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						console.log(res.data.data);
						this.reqData = res.data.data;
						if(res.data.data.companylogourl!=''){
							this.reqData.companylogourl_http = api.baseUrl+res.data.data.companylogourl;
						}
					} else {
						this.$api.msg(res.data.returnMessage);
					}
				})
				.catch(error => {
					this.$refs.loading.close();
					this.$api.msg('请求失败fail');
				});
		},
		handleSubmit() {
			const { companylogourl, companyname, contact, telephone, email,cusemail, address } = this.reqData;
			const sendData = {
				companylogourl,
				companyname,
				contact,
				telephone,
				email:cusemail,
				address
			};
			this.loading = true;
			tokenpost(api.CustomerSave, sendData)
				.then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.$api.msg('保存成功！');
						uni.$emit('changecompany',{'msg':'company变化了'});
						uni.navigateBack({delta: 1});
					} else if (res.status == 200 && res.data.returnCode == '402') {
						this.$api.msg(res.data.returnMessage);
						uni.reLaunch({
							url: '/pages/my/login/login'
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
.fill {
	width: 100%;
	height: 100%;
}
.container {
	font-size: $uni-font-size-base;
	background-color: #FFFFFF;
	height: 100vh;
	width: 100vw;
	.header {
		height: 11%;
	}
	.main {
		font-size: $uni-font-size-base;
		height: 82%;
		.space {
			height: 60upx;
		}
		.tou {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-top: 60upx;
		}
		.tou img {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%		
		}
		.wx_class{
			border-radius: 50upx;
		}
		.wx-info{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
		.wx-action{
			padding: 0upx 30upx;
		}
	}
	.footer {
		height: 7%;
		display: flex;
		&-btn {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
