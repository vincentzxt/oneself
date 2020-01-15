<template>
	<view>
		<uni-navbar :title="title" leftText="微账通" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleRefreshPage"></uni-navbar>
		<uni-grid :column="2" :square="false">
			<uni-grid-item v-for="(item,index) in lists" :key="index" @tap="handleGridChange(item)" :index="index">
				<view class="item-content">
					<uni-icons :type="item.icon" :color="item.color" size=32></uni-icons>
					<text class="item-content-text"> {{item.name}}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	import cuLoading from '@/components/custom/cu-loading.vue'
	import getGlobalData from '@/utils/business.js'
	export default {
		components: {
			uniGrid,
			uniGridItem,
			cuLoading
		},
		data() {
			return {
				title: '买卖',
				promoterid:0,
				lists: [
					{id: '1', name: '销售', icon: 'sale', color: '#ed3f14' },
					{id: '2', name: '采购', icon: 'purchase-fill', color: '#2d8cf0' },
					{id: '3', name: '客户&供应商', icon: 'customer-fill', color: '#ff9900' },
					{id: '4', name: '产品', icon: 'product-fill', color: '#2d8cf0' },
					{id: '5', name: '收款单', icon: 'receipt', color: '#ed3f14' },
					{id: '6', name: '付款单', icon: 'payment', color: '#ff9900' },
					{id: '7', name: '费用单', icon: 'cost', color: '#19be6b' },
					{id: '8', name: '退货单', icon: 'return-order', color: '#19be6b' }
				]
			}
		},
		onLoad(option) {
			 if(option.promoterid){
				this.promoterid = option.promoterid;
			 };
			if (uni.getStorageSync('userInfo')) {
				getGlobalData.getCurrentUnit()
				getGlobalData.getBaseProduct()
				getGlobalData.getProductCategory()
			} else {
				// uni.reLaunch({
				// 	url: '/pages/my/my'
				// })
			}
		},
		onShow(){
			console.log(this.promoterid);
			uni.setStorage({
			    key: 'promoterid',
			    data: this.promoterid,
			    success: function () {
					console.log("设置promoterid成功！");
			    },
				});
				console.log(uni.getStorageSync('promoterid'));
				
		},
		methods: {
			handleRefreshPage() {
				console.log("refreshpage")
			},
			handleGridChange(val) {
				switch(val.id) {
					case '1':
						uni.navigateTo({
							url: './sale/sale'
						})
						break
					case '2':
						uni.navigateTo({
							url: './purchase/purchase'
						})
						break
					case '3':
						uni.navigateTo({
							url: './current-unit/current-unit'
						})
						break
					case '4':
						uni.navigateTo({
							url: './product/product'
						})
						break
					case '5':
						uni.navigateTo({
							url: './receipt/receipt'
						})
						break
					case '6':
						uni.navigateTo({
							url: './payment/payment'
						})
						break
					case '7':
						uni.navigateTo({
							url: './cost/cost'
						})
						break
					case '8':
						uni.navigateTo({
							url: './return-order/return-order'
						})
						break
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item-content {
		width: 100%;
		height: 100%;
		padding: 30px 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&-text {
			font-size: $uni-font-size-lg;
			margin-top: $uni-spacing-col-base;
		}
	}
</style>
