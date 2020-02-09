<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill" @scrolltolower="loadData">
				<uni-list>
					<uni-list-item title="订单编号" :show-arrow="false" show-text="true" :content="id"></uni-list-item>
					<uni-list-item title="下单时间" :show-arrow="false" show-text="true" :content="dataList.createtime"></uni-list-item>
					<uni-list-item title="盘点人" :show-arrow="false" show-text="true" :content="dataList.realname"></uni-list-item>
				<uni-list-item title="盘亏数量" :show-arrow="false" show-text="true" :content="dataList.totalQty1 || '0'"></uni-list-item>
				<uni-list-item title="盘盈数量" :show-arrow="false" show-text="true" :content="dataList.totalQty2 || '0'"></uni-list-item>
				</uni-list>
				<view v-for="(item, index) in dataList.detailModels" :key="index" class="detail-item">
					<view class="list-between">
						<view class="item-content">
							<text>商品名称：{{ item.productname }}</text>
						</view> 
						<view class="item-content2">
							<text>盘亏/盘盈：{{item.chanegeqty}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import { getinventory } from '@/api/bills.js';
import { api } from '@/config/common.js';
import cuLoading from '@/components/custom/cu-loading.vue';
export default {
	components: {
		uniList,
		uniListItem,
		cuLoading
	},
	data() {
		return {
			title: '盘点详情',
			id:0,
			dataList:{}
		};
	},
	// onLoad() {this.loadData();},
	onShow() {},
	onLoad(option){
		this.id =option.id
		this.loadData();
		
	},
	methods: {
		handleRefreshPage() {
			console.log('refreshpage');
		},
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			});
		},
		loadData() {
			this.loadmore = 'loading',
			this.$refs.loading.open();
			const senddata = {
				id:this.id
			};
			getinventory(api.stkStock, senddata)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.dataList = res.data.data
					} else {
						this.$api.msg(res.data.returnMessage);
					}
				})
				.catch(error => {
					this.$refs.loading.close();
					this.$api.msg('请求失败fail');
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
	font-size: $uni-font-size-sm;
	height: 100vh;
	width: 100vw;
	.header {
		height: 10%;
	}
	.main {
		height: 90%;
		padding: 0upx;
		//margin-top: 10upx;
		.cu-form-group .title {
			min-width: calc(5em + 30px);
		}
		.main-header {
			display: flex;
			height: 140upx;
			background-color: #ffffff;
			justify-content: center;
			align-items: center;
		}
		.detail-item {
			margin-top: 12upx;
			padding: 16upx 24upx;
			background: #fff;
			border-bottom: 0.8upx solid $uni-border-color;
			.list-between {
				display: flex;
				flex-direction: row;
				font-size: $uni-font-size-sm;
				// justify-content: spac;
				.item-content {
					flex: 2;
					line-height: 60upx;
					width: 0;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.item-content2 {
					flex: 1;
					line-height: 60upx;
					width: 0;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.item-content3 {
					flex: 1;
					line-height: 60upx;
				}
				// .item-content3 {
				// 	flex: 1;
				// 	text-align: right;
				// 	line-height: 60upx;
				// }
			}
		}
		
	}
}

</style>
