<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<view class="tou"><img src="@/static/image/logo.jpeg"/></img></view>
				<uni-list>
			<uni-list-item title="版本号" show-text="true" :show-arrow="false"  content="v2.0.0"></uni-list-item>
			<uni-list-item title="微博账号" show-text="true" :show-arrow="true"  content="一格云单" @tap="handleweibo"></uni-list-item>
			<uni-list-item title="微信公众号" show-text="true" :show-arrow="true"  content="yigeyundan"></uni-list-item>
		</uni-list>
			</scroll-view>
		</view>
		<view class="footer">
			　<text>Copyright @一格云单 All Rights Reserved</text>
		</view>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	import { api } from '@/config/common.js';
	export default {
		components: {
			uniList,
		    uniListItem
		},
		data() {
			return {
				title: '关于我们'
			};
		},
		onShow() {
		},
		onLoad(option){
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleweibo(){
				console.log("eee");
				uni.navigateToMiniProgram({
				  appId: 'wx9074de28009e1111',
				  // path:'',
				  path: 'pages/profile/profile?nickname=%E4%B8%80%E6%A0%BC%E4%BA%91%E5%8D%95&amp;objectUid=7392650964',
				  extraData: {
				  },
				  success(res) {
					  console.log("打开成功");
				    // 打开成功
				  }
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.fill {
		width: 100%;
		height: 90%;
		.tou{text-align: center; margin: 80upx 0 60upx;}
	    .tou img{width: 64px;height: 64px;}
	}
	.container {
		font-size: $uni-font-size-base;
		background-color: #FFFFFF;
		height: 100vh;
		width: 100vw;
		.header {
			height: 10%;
		}
		.main {
			height: 83%;
			.picker {
				width: 100%;
				display: flex;
				justify-content: flex-end;
			}
		}
		.footer {
			height: 7%;
			text-align: center;
			font-size: $uni-font-size-sm;
		}
	}
	.uni-list-cell {
		display: flex;
		flex-direction: column;
	    justify-content: flex-start
	}
</style>
