<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill" @scrolltolower="loadData">
				<uni-list>
					<uni-list-item title="客户名称" :show-arrow="false" show-text="true" :content="dataList.contactunitname"></uni-list-item>
					<uni-list-item title="金额" :show-arrow="false" show-text="true" :content="dataList.amount"></uni-list-item>
					<uni-list-item title="时间" :show-arrow="false" show-text="true" :content="dataList.createtime"></uni-list-item>
					
				</uni-list>
			</scroll-view>
		</view>
		<!-- <cu-loading ref="loading"></cu-loading> -->
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
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
			title: '销售详情',
			dataList: []
		};
	},
	// onLoad() {this.loadData();},
	onShow() {},
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
				pageIndex: this.pageIndex+1,
				pageRows: this.pageRows
			};
			stockQuery(api.stkStock, senddata)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						if(res.data.data.resultList.length ===0){
							this.loadmore = "noMore"
							return;
						}else{
							this.dataList =this.dataList.concat(res.data.data.resultList);
							this.pageIndex = this.pageIndex+1 ;
							this.loadmore = "more"
						}
						
					} else {
						this.loadmore = 'more',
						this.$api.msg(res.data.returnMessage);
					}
				})
				.catch(error => {
					this.loadmore = 'more',
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
	font-size: $uni-font-size-base;
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
		.picker {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}
}

</style>
