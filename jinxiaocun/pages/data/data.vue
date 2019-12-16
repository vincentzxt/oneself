<template>
	<view>
		<uni-nav-bar left-icon="back" left-text="返回" :title="title" background-color="#68b3ff" color="#ffffff" @clickLeft="handleNavbarClickLeft" status-bar></uni-nav-bar>
		<view class="list">
			<uni-list class="mb-5">
				<uni-list-item title="销售流水" :show-extra-icon="true" :extra-icon="{color: '#ed4013',size: '22',type: 'data'}"></uni-list-item>
			</uni-list>
			<uni-list class="mb-5">
				<uni-list-item title="采购流水" :show-extra-icon="true" :extra-icon="{color: '#4ccc65',size: '22',type: 'data'}"></uni-list-item>
			</uni-list>
			<uni-list>
				<uni-list-item title="产品销售总览" :show-extra-icon="true" :extra-icon="{color: '#ed4013',size: '22',type: 'data'}"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniCard from "@/components/uni-card/uni-card.vue"
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			uniNavBar,
			uniIcons,
			uniCard,
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '报表'
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

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.list {
		display: flex;
		flex-direction: column;
	}
	
	.mb-5 {
		margin-bottom: 20rpx;
	}
	
</style>
