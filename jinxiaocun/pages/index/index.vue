<template>
	<view class="container">
		<uni-nav-bar left-icon="refresh" :title="title" background-color="#68b3ff" color="#ffffff" @clickLeft="handleNavbarClickLeft" status-bar fixed></uni-nav-bar>
		<view class="content">
			<uni-grid :column="2" :highlight="false" :square="false" borderColor="#e9eaec" @change="handleGridChange">
				<uni-grid-item v-for="(item, index) in lists" :key="index" :index="index">
					<uni-icons :type="item.iconType" :color="item.iconColor" :size="item.iconSize"></uni-icons>
					<text class="item-text">{{item.text}}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default {
		components: {
			uniNavBar,
			uniIcons,
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				title: '买卖',
				lists: [
					{text: '销售', iconType: 'sale', iconColor: '#f29d6e', iconSize: 40},
					{text: '采购', iconType: 'purchase', iconColor: '#9cc84e', iconSize: 40},
					{text: '往来单位', iconType: 'current_unit', iconColor: '#68b3ff', iconSize: 40},
					{text: '产品', iconType: 'product', iconColor: '#68b3ff', iconSize: 40},
					{text: '收款单', iconType: 'receipt', iconColor: '#f29d6e', iconSize: 40},
					{text: '付款单', iconType: 'payment', iconColor: '#9cc84e', iconSize: 40},
					{text: '费用单', iconType: 'cost', iconColor: '#f6d667', iconSize: 40},
					{text: '退货单', iconType: 'return_order', iconColor: '#f6d667', iconSize: 40},
				]
			}
		},
		onLoad() {
			console.log("view onLoad")
		},
		methods: {
			handleNavbarClickLeft() {
				console.log("###left###")
			},
			handleGridChange(val) {
				switch(val.detail.index) {
					case 0:
						uni.navigateTo({
							url: '../sale/sale'
						})
						break
					case 1:
						uni.navigateTo({
							url: '../purchase/purchase'
						})
						break
					case 2:
						uni.navigateTo({
							url: '../current_unit/current_unit'
						})
						break
					case 3:
						uni.navigateTo({
							url: '../product/product'
						})
						break
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		.content {
			display: flex;
			flex-direction: column;
			.item-text {
				margin-top: $uni-spacing-col-base;
			}
		}
	}
</style>
