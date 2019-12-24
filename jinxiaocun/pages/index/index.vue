<template>
	<view>
		<cu-custom :isRefresh="true" @refreshPage="handleRefreshPage">
			<block slot="content">{{title}}</block>
		</cu-custom>
		<view>
			<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item" v-for="(item,index) in lists" :key="index" @tap="handleGridChange(item)">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]"></view>
					<text class="text-lg">{{item.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '买卖',
				lists: [
					{id: '1', name: '销售', cuIcon: 'sale', color: 'red' },
					{id: '2', name: '采购', cuIcon: 'purchase-fill', color: 'blue' },
					{id: '3', name: '客户&供应商', cuIcon: 'customer-fill', color: 'orange' },
					{id: '4', name: '产品', cuIcon: 'product-fill', color: 'blue' },
					{id: '5', name: '收款单', cuIcon: 'receipt', color: 'red' },
					{id: '6', name: '付款单', cuIcon: 'payment', color: 'orange' },
					{id: '7', name: '费用单', cuIcon: 'cost', color: 'green' },
					{id: '8', name: '退货单', cuIcon: 'return-order', color: 'green' },
				],
				gridCol: 2,
				gridBorder: true
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
