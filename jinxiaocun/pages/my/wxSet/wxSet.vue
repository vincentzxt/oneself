<template>
	<view class="container">
<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<view class="tou">
					<img v-if="!hasRight" src="@/static/image/mine_def_touxiang_3x.png" mode="aspectFill" class="pic" />
					<img v-if="hasRight" :src="ava_url || '@/static/image/mine_def_touxiang_3x.png'" mode="aspectFill" class="pic" />
					<text style="padding-top: 16upx;">{{ nick_name }}</text>
				</view>
				<view class="space"></view>
				<view class="wx-info">
					<view>{{ loginname }}</view>
					<view><uni-icon type="arrowthinright" size="25" color="#cccccc"></uni-icon></view>
					<view>{{ nick_name || '未登录' }}</view>
				</view>
				<view class="space"></view>
				<view class="wx-action">
					<button type="primary" v-if="!hasRight" :loading="loading2" class="wx_class"  open-type="getUserInfo" @getuserinfo="getwxInfo" style="margin-top: 10px;">获取个人信息</button>
					<button type="primary" v-if="hasRight" class="wx_class" @tap="bind_action()" :loading="loading" style="margin-top: 10px;">绑定微信</button>
					<!-- <button type="default"  @tap="handleLogout()" class="wx_class"  style="margin-top: 30px;">退出登录</button> -->
				</view>
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
			loading: false,
			loading2: false,
			hasRight: false,
			ava_url: '',
			nick_name: '',
			loginname: '',
			wxcode: '',
			title: '微信绑定'
		};
	},
	onShow() {},
	onLoad() {
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
							that.ava_url = infoRes.userInfo.avatarUrl;
							that.nick_name = infoRes.userInfo.nickName;
							that.hasRight = true;
						}
					});
				}
			});
		},
		loadData() {
			this.$refs.loading.open();
			tokenpost(api.GetUserInfo)
				.then(res => {
					if (res.status == 200) {
						this.$refs.loading.close();
						if (res.data.returnCode == '0000') {
							this.loginname = res.data.data.loginname;
						} else {
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
		bind_action() {
			var that = this;
			uni.login({
				provider: 'weixin',
				success: function(resData) {
					that.$refs.loading.open();
					const sendData = { code: resData.code, sourcetype: 1 };
					tokenpost(api.BindUserOpenId, sendData)
						.then(res => {
							that.$refs.loading.close();
							if (res.status == 200 && res.data.returnCode == '0000') {
								that.$api.msg('微信账号绑定成功');
								that.handleNavbarClickLeft();
							} else if (res.status == 200 && res.data.returnCode == '203') {
								uni.showModal({
									title: '绑定提示',
									content: '当前的微信已经绑定到其他账号(' + res.data.returnMessage + ')，是否换绑到当前账号(' + that.loginname + ')',
									confirmText: '确定',
									showCancel: true,
									success: e => {
										if (e.confirm) {
											try {
												that.$refs.loading.open();
													uni.login({
				provider: 'weixin',
				success: function(resData) {
												const sendData2 = { code: resData.code, sourcetype: 2 };
												console.log('sendData2', sendData2);
												tokenpost(api.BindUserOpenId, sendData2)
													.then(res => {
														that.$refs.loading.close();
														if (res.status == 200 && res.data.returnCode == '0000') {
															that.$api.msg('微信账号换绑成功');
															that.handleNavbarClickLeft();
														} else {
															that.$api.msg(res.data.returnMessage);
														}
													})
													.catch(error => {
														that.$refs.loading.close();
														that.$api.msg('请求失败fail');
													});
													}
													})
											} catch (e) {}
										}
									}
								});
							} else {
								that.$api.msg(res.data.returnMessage);
							}
						})
						.catch(error => {
							that.$refs.loading.close();
							that.$api.msg('请求失败fail');
						});
				}
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
	background-color: #ffffff;
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
			border-radius: 50%;
		}
		.wx_class {
			border-radius: 50upx;
		}
		.wx-info {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
		.wx-action {
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
