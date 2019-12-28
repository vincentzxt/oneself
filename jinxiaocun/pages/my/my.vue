<template>
	<view>
		<uni-navbar :title="title" left-icon="back" @refreshPage="handleRefreshPage">
		</uni-navbar>
		<uni-grid :column="3">
			<uni-grid-item v-for="(item,index) in lists" :key="index" @tap="handleGridChange(item)">
				<uni-icons :type="item.icon" :color="item.color"></uni-icons>
				<text>{{item.name}}</text>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				title: '买卖',
				lists: [
					{id: '1', name: '销售', icon: 'sale', color: 'red' },
					{id: '2', name: '采购', icon: 'purchase-fill', color: 'blue' },
					{id: '3', name: '客户&供应商', icon: 'customer-fill', color: 'orange' },
					{id: '4', name: '产品', icon: 'product-fill', color: 'blue' },
					{id: '5', name: '收款单', icon: 'receipt', color: 'red' },
					{id: '6', name: '付款单', icon: 'payment', color: 'orange' },
					{id: '7', name: '费用单', icon: 'cost', color: 'green' },
					{id: '8', name: '退货单', icon: 'return-order', color: 'green' },
				]
			}
		},
		onLoad() {
		},
		methods: {
			handleRefreshPage() {
				console.log("refreshpage")
			},
			handleGridChange(val) {
				switch(val.id) {
					case '1':
						uni.navigateTo({
							url: '../sale/sale'
						})
						break
					case '2':
						uni.navigateTo({
							url: '../purchase/purchase'
						})
						break
					case '3':
						uni.navigateTo({
							url: '../current_unit/current_unit'
						})
						break
					case '4':
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

</style>
