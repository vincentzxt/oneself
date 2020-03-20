<template>
	<view>
		<uni-navbar :title="title" leftText="一格云单" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleRefreshPage"></uni-navbar>
		<uni-grid :column="2" :square="false">
			<uni-grid-item v-for="(item, index) in lists" :key="index" @tap="handleGridChange(item)" :index="index">
				<view class="item-content">
					<view class="item-content-icon"><uni-icons :type="item.icon" :color="item.color" :size="item.size"></uni-icons></view>
					<text class="item-content-text">{{ item.name }}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
import uniGrid from '@/components/uni-grid/uni-grid.vue';
import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';
import cuLoading from '@/components/custom/cu-loading.vue';
import getGlobalData from '@/utils/business.js';
import { post, tokenpost } from '@/api/user.js';
import { dateFormat, numberFormat } from '@/utils/tools.js';
import { api } from '@/config/common.js';
export default {
	components: {
		uniGrid,
		uniGridItem,
		cuLoading
	},
	data() {
		return {
			title: '买卖',
			promoterid: "",
			lists: [
				{ id: '1', name: '销售', icon: 'home_xiaoshou', color: '#ff6e63', size: 36 },
				{ id: '2', name: '采购', icon: 'home_caigou', color: '#897ef4', size: 36 },
				{ id: '3', name: '客户&供应商', icon: 'home_khgys', color: '#fcb454', size: 36 },
				{ id: '4', name: '产品', icon: 'home_chanpin', color: '#68de96', size: 36 },
				{ id: '5', name: '收款单', icon: 'home_skd', color: '#5eb8f4', size: 36 },
				{ id: '6', name: '付款单', icon: 'home_fkd', color: '#ff8716', size: 36 },
				{ id: '7', name: '费用单', icon: 'home_fyd', color: '#58c8f8', size: 36 },
				{ id: '8', name: '退货单', icon: 'home_thd', color: '#ffabd4', size: 36 },
				{ id: '9', name: '期初', icon: 'home_qichu', color: '#829afb', size: 36 },
				{ id: '10', name: '盘点', icon: 'home_pandian', color: '#ff5f84', size: 36 }
			]
		};
	},
	onLoad(option) {
		const that = this;
		console.log('option',option);
		if(option.scene){
			that.promoterid = decodeURIComponent(option.scene);
			uni.setStorage({
				key: 'promoterid',
				data: that.promoterid,
				success: function() {
					that.load();
					that.tokenRefresh();
				}
			});
		}else{
				console.log("没有数据");
				that.load();
				that.tokenRefresh();
		}
		
	},
	onShow() {
		
	},
	onUnload() {
		// uni.$off('tokenchange')
	},
	methods: {
		load() {
			getGlobalData.getCurrentUnit();
			getGlobalData.getBaseProduct();
			getGlobalData.getProductCategory();
		},
		tokenRefresh() {
			const userInfo = uni.getStorageSync('userInfo');
			tokenpost(api.tokenRefresh)
				.then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						let refresh_userInfo = {
							token: res.data.data.token,
							exp: res.data.data.exp,
							userId: res.data.data.userId
						};
						uni.setStorage({
							key: 'userInfo',
							data: refresh_userInfo,
							success: function() {}
						});
						uni.setStorageSync('islogin', '1');	
					} else {
						uni.setStorageSync('islogin', '0');	
					}
				})
				.catch(error => {
					//this.$api.msg('token刷新失败');
				});
		},
		handleRefreshPage() {
			console.log('refreshpage');
		},
		handleGridChange(val) {
			switch (val.id) {
				case '1':
					uni.navigateTo({
						url: './sale/sale'
					});
					break;
				case '2':
					uni.navigateTo({
						url: './purchase/purchase'
					});
					break;
				case '3':
					uni.navigateTo({
						url: './current-unit/current-unit'
					});
					break;
				case '4':
					uni.navigateTo({
						url: './product/product'
					});
					break;
				case '5':
					uni.navigateTo({
						url: './receipt/receipt'
					});
					break;
				case '6':
					uni.navigateTo({
						url: './payment/payment'
					});
					break;
				case '7':
					uni.navigateTo({
						url: './cost/cost'
					});
					break;
				case '8':
					uni.navigateTo({
						url: './return-order/return-order'
					});
					break;
				case '9':
					uni.navigateTo({
						url: './early-stage/early-stage'
					});
					break;
				case '10':
					uni.navigateTo({
						url: './inventory/inventory'
					});
					break;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.item-content {
	width: 100%;
	height: 100%;
	padding: 44upx 0upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&-icon {
		width: 100upx;
		height: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&-text {
		font-size: $uni-font-size-lg;
	}
}
</style>
