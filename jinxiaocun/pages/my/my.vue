<template>
	<view class="container">
		<uni-nav-bar left-icon="refresh" :title="title" background-color="#68b3ff" color="#ffffff" @clickLeft="handleNavbarClickLeft" status-bar></uni-nav-bar>
		<view class="header mb-10">
			<uni-icons type="phone" color="#e6e6e6" size=64></uni-icons>
			<view class="header-info">
				<text>{{name}}</text>
				<text class="header-info-text2">{{address}}</text>
				<text class="header-info-text2">{{date}}</text>
			</view>
			<uni-icons style="margin-left: auto" type="arrowRight" color="#ffffff" size=14></uni-icons>
		</view>
		<view class="content">
			<uni-list class="mb-10">
				<uni-list-item title="员工管理" :show-extra-icon="true" :extra-icon="{color: '#ed4013',size: '22',type: 'data'}"></uni-list-item>
				<uni-list-item title="修改密码" :show-extra-icon="true" :extra-icon="{color: '#4ccc65',size: '22',type: 'data'}"></uni-list-item>
				<uni-list-item title="清空帐号" :show-extra-icon="true" :extra-icon="{color: '#ed4013',size: '22',type: 'data'}"></uni-list-item>
			</uni-list>
			<view class="exit-login">
				<text>退出登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			uniNavBar,
			uniIcons,
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '我的',
				name: '测试帐号(13811159400)',
				address: '北京昊天建材有限公司',
				date: '到期日期：2020-10-01'
			}
		},
		onLoad() {
			console.log("view onLoad")
		},
		onShow() {
			console.log("view onshow")
		},
		onReady() {
			console.log("view onready")			
		},
		methods: {
			handleNavbarClickLeft() {
				console.log("###left###")
			},
			handleGridChange(index) {
				console.log(index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		.header {
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: $uni-bg-color-main;
			padding: 30rpx;
			.header-info {
				display: flex;
				flex-direction: column;
				color: #ffffff;
				margin-left: $uni-spacing-row-lg;
				.header-info-text2 {
					font-size: $uni-font-size-sm;
					margin-top: $uni-spacing-col-base;
				}
			}
		}
		.content {
			display: flex;
			flex-direction: column;
			.exit-login {
				display: flex;
				flex-direction: row;
				justify-content: center;
				color: #ef535c;
				background-color: #ffffff;
				padding: $uni-spacing-col-base;
			}
		}
	}
	.mb-10 {
		margin-bottom: $uni-spacing-col-lg;
	}
</style>
