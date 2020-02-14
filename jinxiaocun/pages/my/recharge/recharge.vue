<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="tablist"><wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab></view>
		<view class="main">
				<view class="content" v-if="content_show_id===0">
					<scroll-view :scroll-y="true" class="fill">
					<helang-checkbox ref="checkbox" :list="productList" ></helang-checkbox>
				<cu-loading ref="loading"></cu-loading>
				</scroll-view>
				<button class="recharge-btn" style="background-color: #2d8cf0;" :loading="loading"  type="primary" @click="handleSubmit">确定购买</button>
				</view>
				<view v-if="content_show_id===1" class="content">
					<scroll-view :scroll-y="true" class="fill" @scrolltolower="loadData">
					<view v-for="(item, index) in dataList" :key="index" class="list-item">
						<view class="list-between">
							<view>
								订单号：
								<text style="font-weight: 600;">{{ item.ordercode }}</text>
							</view>
						</view>
						<view class="list-between">
							<view>
								商品名称：
								<text>{{ item.ordertitle }}</text>
							</view>
						</view>
						<view class="list-between">
							<view>
								订单金额：
								<text>¥{{ item.orderamount }}</text>
							</view>
							<text class="payment" v-bind:class="item.orderstatus == 0 ? 'payment-blue' : 'payment-green'">{{ OrderStatusList[item.orderstatus] }}</text>
						</view>
						<view class="list-between">
							<view>
								付款类型：
								<text>{{ PayTypeList[item.paytype] }}</text>
							</view>
							<view>
								购买时长：
								<text>{{ item.daycount }}天</text>
							</view>
						</view>
						<view class="list-between">
							<view class="list_bottom_box_item">
								<text>下单时间：{{ item.createtime }}</text>
							</view>
						</view>
						<view class="list-between">
							<view class="list_bottom_box_item">
								<text>付款时间：{{ item.paysuccesstime || '' }}</text>
							</view>
						</view>
					</view>	
					<view class="no_data" v-if="dataList.length === 0"><text class="item_text">暂无数据</text></view>
					<uni-load-more v-if="dataList.length >= 10" :status="loadmore"></uni-load-more>
					<cu-loading ref="loading"></cu-loading>
					</scroll-view>
				</view>
			
		</view>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
import { post,tokenpost} from '@/api/user.js';
import { api } from '@/config/common.js';
import cuLoading from '@/components/custom/cu-loading.vue';
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
import helangCheckbox from "@/components/helang-checkbox/helang-checkbox.vue"
export default {
	components: {
		uniLoadMore,
		uniList,
		uniListItem,
		WucTab,
		"helang-checkbox":helangCheckbox
	},
	data() {
		return {
			loadmore:'more',
			pageIndex: 0,
			pageRows: 15,
			title: '续费/订单',
			pickerIndex:2,
			TabCur: 0,
			content_show_id:0,
			dataList: [],
			ordertype:'1,2',
			tabList: [{ name: '续费' }, { name: '我的订单' }],
			OrderStatusList:['待支付','已支付'],
			PayTypeList:{
				'0': '',
				'1': '银行账号',
				'2': '微信',
				'3': '支付宝',
				'4': '现金'
			},
			productList: []
		};
	},
	onLoad(){
		// this.$refs.checkbox.set({
		// 	type:'radio',		// 类型：复选框
		// 	column:2,				// 分列：3
		// 	list:this.list	// 列表数据
		// });
		this.pickerIndex = 3;
		this.loadData();
		this.loadProduct();
	},
	onShow(){
	},
	mounted(){
	},
	methods: {
		handleRefreshPage() {
			console.log('refreshpage');
		},
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			})
		},
		tabChange(val) {
			console.log(val);
			switch (val){
				case 0:
					this.content_show_id = 0
					this.$refs.checkbox.set({
						type:'radio',		// 类型：复选框
						column:2,				// 分列：3
						list:this.list	// 列表数据
					});
					this.pickerIndex = 3;
					break;
				case 1:
					this.content_show_id =1
					break;
				default:
					this.content_show_id =0
				break;
			}
		},
		handleSubmit(){
			let data = this.$refs.checkbox.get();
			if(!data){
				this.$api.msg("请选择要购买的产品!");
				return;
			}
			const sendData ={productid:data.productid};
			tokenpost(api.AddOrder,sendData).then(res => {
				if (res.status == 200 && res.data.returnCode == '0000') {
					this.$api.msg("购买成功！");
					this.pageIndex = 0;
					this.loadData();
					this.TabCur=1;
					uni.$emit('changecompany',{'msg':'company变化了'});
				} else {
					this.$api.msg(res.data.returnMessage);
				}
			})
			.catch(error => {
				this.$api.msg('请求失败fail');
			});
			
		},
		loadProduct(){
			this.$refs.loading.open();
			const senddata = {
				pageIndex: 1,
				pageRows: -1,
				ordertype:this.ordertype
			};
			tokenpost(api.GetProductList,senddata).then(res => {
				this.$refs.loading.close();
				if (res.status == 200 && res.data.returnCode == '0000') {
					this.productList = res.data.data.resultList;
					console.log(this.productList);
				} else {
					this.$api.msg(res.data.returnMessage);
				}
			})
			.catch(error => {
				this.loadmore = 'more',
				this.$refs.loading.close();
				this.$api.msg('请求失败fail');
			});
		},
		loadData(){
			this.loadmore = 'loading';
			this.$refs.loading.open();
			const senddata = {
				pageIndex: this.pageIndex+1,
				pageRows: this.pageRows
			};
			tokenpost(api.GetOrderList,senddata).then(res => {
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

.container {
	height: 100vh;
	width: 100vw;
	.header {
		height: 10%;
	}
	.main {
		font-size: $uni-font-size-sm;
		height: 80%;
		padding: 15upx;
		.content{
			height: 100%;
			.fill{
				height: 90%;
			};
		}
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
	.footer {
		height: 7%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
}

.no_data {
	display: flex;
	//flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	justify-content: center;
	.item_img {
		width: 120rpx;
		height: 120rpx;
	}
	.item_text {
		// font-size: 24rpx;
		margin-top: 100rpx;
		color: #cccccc;
	}
}
.list-item {
	display: flex;
	flex-direction: column;
	padding: 10upx 24upx;
	background: #fff;
	margin-bottom: 16upx;
	.list-center {
		margin-top: 10upx;
		padding-top: 10upx;
		padding-bottom: 5upx;
		border-top: $uni-split-color 1px solid;
	}
	.list-between {
		padding-top: 5upx;
		padding-bottom: 5upx;
		display: flex;
		justify-content: space-between;
		.payment-blue {
			background-color: #2d8cf0;
			border-radius: 30upx;
			padding: 5upx 16upx;
			color: #ffffff;
		}
		.payment-green {
			background-color: #90ee90;
			border-radius: 30upx;
			padding: 5upx 16upx;
			color: #ffffff;
		}
	}
}
.tablist{
	background-color: #FFFFFF;
}
.recharge-btn{
	margin-top: 40upx;
}
</style>
