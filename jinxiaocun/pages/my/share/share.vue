<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="main">
			<view class="uni-title">分享内容</view>
			<view class="uni-textarea"><textarea class="textarea" v-model="shareText" /></view>
			<!-- <view class="uni-title">分享图片：</view> -->
			<view class="uni-uploader" style="padding:15upx; background:#FFF;"><image class="uni-uploader__img" v-if="image" :src="image"></image></view>
			<!-- #ifdef MP -->
			<view class="uni-btn-v uni-common-mt"><button type="primary" style="background-color: #2d8cf0;" open-type="share" >分享</button></view>
			<view class="uni-btn-v uni-common-mt" style="padding-top: 36upx;"><button type="primary" style="background-color: #2d8cf0;" @tap="handleMyshare" >我的分享</button></view>
			<!-- #endif -->
		</view>
	</view>
</template>
<script>
	import { post,tokenpost} from '@/api/user.js';
	import { api } from '@/config/common.js';
export default {
		data() {
		return {
			title: '分享',
			userId:0,
			shareText: '微账通，邀请你一起体验！',
			href: '',
			image: 'http://allchain.oss-cn-shanghai.aliyuncs.com/uploads/20190521/f57ebce8a72b823912904fe76eda0909.png',
			shareType: 1,
			providerList: [],
			dataList:{}
		};
	},
	computed: {
		isDisableButton() {
			return function(item) {
				if (this.shareType === 0 && item.id === 'qq') {
					return true;
				}
				if (this.shareType === 5 && item.name !== '分享到微信好友') {
					return true;
				}
				return false;
			};
		}
	},
	onShareAppMessage() {
		return {
			title: this.shareText,
			path: '/pages/index/index?promoterid='+uni.getStorageSync('userInfo').userId,
			imageUrl: this.image,
			complete:this.shareSuccess
		};
	},
	onUnload: function() {
	},
	onLoad: function() {
		this.loadData();
		this.userId= uni.getStorageSync('userInfo').userId;
		console.log(this.userId);
		uni.getProvider({
			service: 'share',
			success: e => {
				console.log('success', e);
				let data = [];
				for (let i = 0; i < e.provider.length; i++) {
					switch (e.provider[i]) {
						case 'weixin':
							data.push({
								name: '分享到微信好友',
								id: 'weixin',
								sort: 0
							});
							data.push({
								name: '分享到微信朋友圈',
								id: 'weixin',
								type: 'WXSenceTimeline',
								sort: 1
							});
							break;
						case 'sinaweibo':
							data.push({
								name: '分享到新浪微博',
								id: 'sinaweibo',
								sort: 2
							});
							break;
						case 'qq':
							data.push({
								name: '分享到QQ',
								id: 'qq',
								sort: 3
							});
							break;
						default:
							break;
					}
				}
				this.providerList = data.sort((x, y) => {
					return x.sort - y.sort;
				});
			},
			fail: e => {
				console.log('获取分享通道失败', e);
				uni.showModal({
					content: '获取分享通道失败',
					showCancel: false
				});
			}
		});
	},
	onShow() {
		//this.loadData();
	},
	methods: {
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			});
		},
		handleMyshare(){
			uni.navigateTo({
				url:'./myshare'
			})
		},
		loadData(){
			tokenpost(api.GetCurrentActivity).then(res => {
				console.log(res);
				if (res.status == 200 && res.data.returnCode == '0000') {
				  this.shareText = res.data.data.activityexplain;
				  this.image = res.data.data.imgurl;
				} else {
					this.$api.msg(res.data.returnMessage) 
				}
				this.loading =false;
			}).catch(error => {
				this.loading =false;
				this.$api.msg('请求失败fai') 
			})
		},
		shareSuccess(){
			console.log('成功2222222');
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
	height: 100vh;
	width: 100vw;
	.header {
		height: 10%;
	}
	.main {
		height: 90%;
		padding: 0 15upx;
		background-color: #ffffff;
		.uni-title{
			padding: 16upx 0upx;
		}
		.uni-textarea{
			margin:10upx 0;
			padding: 10upx;
			background-color: #f2f2f2;
		}
		.picker {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
		.uni-uploader__img {
			width: 100%;
		}
	}
	.footer {
		height: 7%;
		display: flex;
		padding: 0 15upx;
		background-color: $uni-split-color;
		&-text {
			width: 50%;
			height: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-left: $uni-spacing-row-lg;
		}
		&-btn {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
