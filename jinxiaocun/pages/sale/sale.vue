<template>
	<view class="container">
		<uni-nav-bar left-icon="arrowLeft" left-text="返回" :title="title" background-color="#68b3ff" color="#ffffff" @clickLeft="handleNavbarClickLeft" status-bar></uni-nav-bar>
		<view class="content">
			<uni-list class="mb-5">
				<uni-list-item title="客户" :show-extra-icon="true" :extra-icon="{color: '#ed4013',size: '22',type: 'data'}"></uni-list-item>
				<uni-list-item title="日期" :show-extra-icon="true" :extra-icon="{color: '#4ccc65',size: '22',type: 'data'}"></uni-list-item>
				<uni-list-item title="默认仓库" :show-extra-icon="true" :extra-icon="{color: '#ed4013',size: '22',type: 'data'}"></uni-list-item>
			</uni-list>
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
				title: '销售'
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
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
	}
	
	.content {	
		display: flex;
		flex-direction: column;
	}
	.mb-5 {
		margin-bottom: 10px;
	}
</style>
