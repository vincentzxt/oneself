<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="tablist"><wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab></view>
		<view class="main">
			<view class="content" v-if="content_show_id === 0">
				<scroll-view :scroll-y="true" class="fill">
					<helang-checkbox ref="checkbox" :list="productList"></helang-checkbox>
					<cu-loading ref="loading"></cu-loading>
				</scroll-view>
				<button class="recharge-btn" style="background-color: #2d8cf0;" :loading="loading" type="primary" @click="handleSubmit">确定购买</button>
			</view>
			<view v-if="content_show_id === 1" class="content">
				<scroll-view :scroll-y="true" class="fill2" @scrolltolower="loadData">
					<view v-for="(item, index) in dataList" :key="index" class="list-item">
						<view class="list-top">
							<view>
								<text>【{{ item.orderStatusName }}】{{ item.ordercode }}</text>
							</view>
							<view v-if="item.orderStatusName == '未支付'" class="payment-blue" @tap="handlePayment(item.orderid)"><text>支付</text></view>
							<view v-if="item.orderStatusName == '已支付'" class="payment-red" @tap="unpayment(item.orderid)"><text>退款</text></view>
						</view>
						<!-- 	<view class="list-between">
							<view class="gay">¥{{ numberFilter(item.orderamount) }}</view>
							<view class="gay">{{ item.daycount }}天</view>
						
						</view> -->

						<view class="list-between">
							<view style="color: #999999;">产品名称</view>
							<view>{{ item.productname }}</view>
						</view>
						<view class="list-between">
							<view style="color: #999999;">金额</view>
							<view>¥{{ numberFilter(item.orderamount) }}</view>
						</view>
						<view class="list-between">
							<view style="color: #999999;">时长</view>
							<view>{{ item.daycount }}天</view>
						</view>

						<view class="list-between">
							<view style="color: #999999;">下单时间</view>
							<view>{{ item.createtime }}</view>
						</view>
						<view class="list-between" v-if="item.orderStatusName == '已支付'">
							<view style="color: #999999;">付款时间</view>
							<view>{{ item.paysuccesstime }}</view>
						</view>
						<view class="list-between" v-if="item.orderStatusName == '已退款'">
							<view style="color: #999999;">退款时间</view>
							<view>{{ item.refundsuccesstime }}</view>
						</view>
						<view class="list-between" v-if="item.orderStatusName == '退款中'">
							<view style="color: #999999;">申请时间</view>
							<view>{{ item.applyrefundtime }}</view>
						</view>
					</view>
					<view class="no_data" v-if="dataList.length === 0"><text class="item_text">暂无数据</text></view>
					<uni-load-more v-if="dataList.length >= 10" :status="loadmore"></uni-load-more>
					<cu-loading ref="loading"></cu-loading>
				</scroll-view>
			</view>
			<action ref="action" @itemClick="itemClick" @titleClick="titleClick"></action>
		</view>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
import { post, tokenpost } from '@/api/user.js';
import { api } from '@/config/common.js';
import cuLoading from '@/components/custom/cu-loading.vue';
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
import helangCheckbox from '@/components/helang-checkbox/helang-checkbox.vue';
import { dateFormat, numberFormat } from '@/utils/tools.js';
import action from '@/components/shufei-action/action.vue';
export default {
	components: {
		uniLoadMore,
		uniList,
		uniListItem,
		WucTab,
		action,
		'helang-checkbox': helangCheckbox
	},
	data() {
		return {
			loadmore: 'more',
			loading: false,
			pageIndex: 0,
			pageRows: 15,
			title: '续费/订单',
			pickerIndex: 2,
			TabCur: 0,
			content_show_id: 0,
			dataList: [],
			ordertype: '1,2',
			tabList: [{ name: '续费' }, { name: '我的订单' }],
			productList: [],
			refundList: [],
			nowId: -1
		};
	},
	onLoad() {
		// this.$refs.checkbox.set({
		// 	type:'radio',		// 类型：复选框
		// 	column:2,				// 分列：3
		// 	list:this.list	// 列表数据
		// });
		this.pickerIndex = 3;
		//this.loadData();
		this.loadProduct();
		this.loadRefundList();
	},
	onShow() {},
	mounted() {},
	methods: {
		numberFilter(number) {
			return numberFormat(number);
		},
		handleRefreshPage() {
			console.log('refreshpage');
		},
		handleNavbarClickLeft() {
			uni.switchTab({
				url: '/pages/my/my'
			});
		},
		unpayment(orderid) {
			var that = this;
			uni.showModal({
				title: '是否确认申请退款？',
				success: e => {
					if (e.confirm) {
						that.nowId = orderid;
						that.$refs.action.actionConfig = {
							title: '请选择退款原因',
							summary: '',
							list: that.refundList,
							type: 0,
							isBorderColor: false,
							specClass: 'show'
						};
					}
				}
			});
		},
		itemClick(index, type) {
			//这里根据不同的类型点击的索引值,做对应的逻辑处理
			console.log(`你点击的action-sheet的类型是${type},list对应的索引值是${index}`);
			console.log(this.refundList[index].dictionaryid);
			if (index > -1) {
				const senddata = { orderid: this.nowId, reasoncode: this.refundList[index].code };
				this.$refs.loading.open();
				tokenpost(api.RefundApply, senddata)
					.then(res => {
						this.$refs.loading.close();
						if (res.status == 200 && res.data.returnCode == '0000') {
							this.$api.msg('退款操作成功！');
							this.pageIndex = 0;
							this.dataList = [];
							this.loadData();
						} else {
							this.$api.msg(res.data.returnMessage);
						}
					})
					.catch(error => {
						(this.loadmore = 'more'), this.$refs.loading.close();
						this.$api.msg('请求失败fail');
					});
			}
		},
		tabChange(val) {
			console.log(val);
			switch (val) {
				case 0:
					this.content_show_id = 0;
					// this.$refs.checkbox.set({
					// 	type:'radio',		// 类型：复选框
					// 	column:2,				// 分列：3
					// 	list:this.list	// 列表数据
					// });
					this.pickerIndex = 3;
					break;
				case 1:
					this.content_show_id = 1;
					this.pageIndex = 0;
					this.TabCur = 1;
					this.dataList = [];
					console.log('点击了');
					this.loadData();
					break;
				default:
					this.content_show_id = 0;
					break;
			}
		},
		handlePayment(orderid) {
			console.log('发起支付');
			uni.login({
				success: e => {
					this.$refs.loading.open();
					this.loading = true;
					const sendData = { orderid: orderid, code: e.code };
					tokenpost(api.Orderypay, sendData)
						.then(res => {
							this.loading = false;
							if (res.status == 200 && res.data.returnCode == '0000') {
								console.log('得到接口prepay_id', res.data.data);
								let paymentData = res.data.data;
								uni.requestPayment({
									// provider: 'wxpay',
									timeStamp: paymentData.timeStamp,
									nonceStr: paymentData.nonceStr,
									package: paymentData.package,
									signType: 'MD5',
									paySign: paymentData.paySign,
									success: res => {
										uni.showToast({
											title: '支付成功!'
										});
										this.tabChange(1);
										uni.$emit('changecompany', { msg: 'company变化了' });
									},
									fail: res => {
										uni.showModal({
											content: '支付失败,请重新支付!',
											showCancel: false
										});
									},
									complete: () => {
										this.$refs.loading.close();
									}
								});
							} else {
								this.$refs.loading.close();
								this.$api.msg(res.data.returnMessage);
							}
						})
						.catch(error => {
							this.loading = false;
							this.$refs.loading.close();
							this.$api.msg('请求失败fail');
							return;
						});
				},
				fail: e => {
					this.$refs.loading.close();
					console.log('fail', e);
					this.loading = false;
					uni.showModal({
						content: '支付失败,请重新支付!'
						showCancel: false
					});
				}
			});
		},
		handleSubmit() {
			console.log('发起支付');
			uni.login({
				success: e => {
					let data = this.$refs.checkbox.get();
					if (!data) {
						this.$api.msg('请选择要购买的产品!');
						return;
					}
					this.$refs.loading.open();
					this.loading = true;
					const sendData = { productid: data.productid, code: e.code };
					tokenpost(api.Orderypay, sendData)
						.then(res => {
							this.loading = false;
							if (res.status == 200 && res.data.returnCode == '0000') {
								console.log('得到接口prepay_id', res.data.data);
								let paymentData = res.data.data;
								uni.requestPayment({
									// provider: 'wxpay',
									timeStamp: paymentData.timeStamp,
									nonceStr: paymentData.nonceStr,
									package: paymentData.package,
									signType: 'MD5',
									paySign: paymentData.paySign,
									success: res => {
										uni.showToast({
											title: '支付成功!'
										});
										this.tabChange(1);
										uni.$emit('changecompany', { msg: 'company变化了' });
									},
									fail: res => {
										uni.showModal({
											content: '支付失败,请重新支付!',
											showCancel: false
										});
									},
									complete: () => {
										this.$refs.loading.close();
									}
								});
							} else {
								this.$refs.loading.close();
								this.$api.msg(res.data.returnMessage);
							}
						})
						.catch(error => {
							this.loading = false;
							this.$refs.loading.close();
							this.$api.msg('请求失败fail');
							return;
						});
				},
				fail: e => {
					this.$refs.loading.close();
					console.log('fail', e);
					this.loading = false;
					uni.showModal({
						content: '支付失败,请重新支付!' ,
						showCancel: false
					});
				}
			});
		},
		loadProduct() {
			this.$refs.loading.open();
			const senddata = {
				pageIndex: 1,
				pageRows: -1,
				exchangeintegralbegin: 1
			};
			tokenpost(api.GetProductList, senddata)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.productList = res.data.data.resultList;
						console.log(this.productList);
					} else {
						this.$api.msg(res.data.returnMessage);
					}
				})
				.catch(error => {
					(this.loadmore = 'more'), this.$refs.loading.close();
					this.$api.msg('请求失败fail');
				});
		},
		loadData() {
			this.loadmore = 'loading';
			this.$refs.loading.open();
			const senddata = {
				pageIndex: this.pageIndex + 1,
				pageRows: this.pageRows,
				ordertype: this.ordertype
			};
			tokenpost(api.GetOrderList, senddata)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						if (res.data.data.resultList.length === 0) {
							this.loadmore = 'noMore';
							return;
						} else {
							this.dataList = this.dataList.concat(res.data.data.resultList);
							this.pageIndex = this.pageIndex + 1;
							this.loadmore = 'more';
						}
					} else {
						(this.loadmore = 'more'), this.$api.msg(res.data.returnMessage);
					}
				})
				.catch(error => {
					(this.loadmore = 'more'), this.$refs.loading.close();
					this.$api.msg('请求失败fail');
				});
		},
		loadRefundList() {
			const senddata = { parentid: 1000 };
			tokenpost(api.GetRefundList, senddata)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.refundList = res.data.data.resultList;
					}
				})
				.catch(error => {
					this.$api.msg('退款原因加载失败!');
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
		height: 82%;
		padding: 15upx 32upx;

		.content {
			height: 100%;
			.fill {
				height: 86%;
			}
			.fill2 {
				height: 100%;
			}
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
	border-radius: 10rpx;
	.list-top {
		float: flex;
		display: flex;
		justify-content: space-between;
		padding: 16rpx 0rpx;
		border-bottom: 2rpx solid #e9eaec;
		margin-bottom: 16rpx;
		.title {
		}
	}
	.list-center {
		margin-top: 10upx;
		padding-top: 10upx;
		padding-bottom: 5upx;
		border-top: $uni-split-color 1px solid;
	}
	.list-between {
		padding-top: 5upx;
		padding-bottom: 10upx;
		display: flex;
		justify-content: space-between;
	}
	.unpayment {
		background-color: #2d8cf0;
		border-radius: 50rpx;
		width: 120rpx;
		color: #ffffff;
		text-align: center;
		padding: 8rpx 30rpx;
	}
	.gay {
		padding: 8rpx 30rpx;
		width: 120rpx;
		background-color: #f2f2f2;
		text-align: center;
		border-radius: 10rpx;
	}
	.payment-blue {
		background-color: #2d8cf0;
		padding: 8rpx 30rpx;
		width: 120rpx;
		text-align: center;
		color: #ffffff;
		border-radius: 40rpx;
	}
	.payment-red {
		background-color: red;
		padding: 8rpx 30rpx;
		width: 120rpx;
		text-align: center;
		color: #ffffff;
		border-radius: 40rpx;
	}
	.payment-green {
		background-color: #90ee90;
		padding: 8rpx 30rpx;
		width: 120rpx;
		text-align: center;
		color: #ffffff;
		border-radius: 40rpx;
	}
}
.tablist {
	background-color: #ffffff;
}
.recharge-btn {
	margin-top: 40upx;
}
</style>
