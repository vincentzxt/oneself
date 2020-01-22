<template>
	<view class="container">
	<view class="header">
		<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
		</uni-navbar>
	</view>
	<view class="main">
			<scroll-view :scroll-y="true" class="fill">
		<view v-for="(item,index) in dataList" :key="index" class="list-item">
			<view class="list-between">
				<view>账户名称：<text>{{item.cashaccountname}}</text></view> <view><button type="default" size="mini" style="line-height: 1.5;" @tap="handleEdit(item.cashaccountid)">编辑</button></view>
			</view>
			<view class="list-between">
				<view>账户信息：<text>{{item.cashaccountno}}</text></view> <view>账户状态：<text>{{isdeleteDict[item.isdelete]}}</text></view>
			</view>
			<view class="list-between">
					<view><text>账户类型：{{accounTypeList[item.cashaccounttype]}}</text></view>
					<view><text>余额：¥{{item.amount}}</text></view>
			</view>
		</view>
		<view class="no_data" v-if="dataList.length===0"><text class="item_text">暂无数据</text></view>
		</scroll-view>
	</view>
	<view class="footer"> 
		<button class="fill" style="background-color: #2d8cf0;" type="primary"  @tap="handleAdd">新增</button>
	</view>
	<cu-loading ref="loading"></cu-loading>
</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
// import adCell from '@/component/ADCell/ADCell.vue';
import { post,tokenpost} from '@/api/user.js';
import { api } from '@/config/common.js';
import cuLoading from '@/components/custom/cu-loading.vue'
export default {
	components: {
		// adCell
		uniList,
		uniListItem
	},
	data() {
		return {
			title: '账户设置 ',
			dataList: [],
			isdeleteDict: ['正常','禁用'],
			accounTypeList2:["","银行账号","微信","支付宝","现金"],
			accounTypeList:{
				'0':"",
				'1':"银行账号",
				'2':"微信",
				'3':"支付宝",
				'4':"现金"
			}
		};
	},
	onLoad(){},
	onShow(){
		if(!uni.getStorageSync('userInfo')){
			uni.reLaunch({
				url:'/pages/my/login/login'
			})
		};
		this.loadData();
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
		handleAdd() {
			console.log('-----');
			uni.navigateTo({
				url:'/pages/my/account/accountadd'
			})
			console.log('-----');
		},
		handleDetail(id) {
			console.log('---222--');
			uni.navigateTo({
				url:'/pages/my/account/accountdetail?id='+id
			})
		},		
		handleEdit(id) {
			console.log('-----');
			uni.navigateTo({
				url:'/pages/my/account/accountedit?id='+id
			})
		},
		loadData(){
			this.$refs.loading.open();
			tokenpost(api.MyCashAccount).then(res => {
				this.$refs.loading.close();
				if (res.status == 200 && res.data.returnCode == '0000') {
				  this.dataList = res.data.data.resultList
				} else {
					this.$api.msg(res.data.returnMessage) 
				}
			}).catch(error => {
				this.$refs.loading.close();
				this.$api.msg('请求失败fail') 
			})
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
	.top{
		font-size: 32rpx;
		padding: 15upx 15upx 5upx 30upx;
		background-color: #ffffff;
		display:flex;
		justify-content: space-between;
		.text{
			color: $uni-color-link;
		}
	}	
		.main {
			height: 83%;
			padding: 0 15upx;
			.list-item{
				padding: 16upx 16upx;
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

.no_data{
	
	display: flex;
	//flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	justify-content: center;
	.item_img{
		width: 120rpx;
		height: 120rpx;
	}
	.item_text{
		font-size: 24rpx;
		margin-top: 100rpx;
		color: #CCCCCC;
	}
}
.list-item{
		display: flex;
		flex-direction: column;
		padding: 16upx 24upx;
		background: #fff;
		margin-bottom: 16upx;
		.list-center{
			margin-top: 10upx;
			padding-top:10upx;
			padding-bottom:5upx;
			border-top: $uni-split-color 1px solid;
		}
		.list-between{	
			padding-top:5upx;
			padding-bottom:5upx;
			display:flex;
			justify-content: space-between;
			.payment-blue{
				background-color:#2d8cf0;
				border-radius: 30upx;
				padding: 5upx 16upx;
				color: #FFFFFF;
			}
			.payment-green{
				background-color:#90EE90;
				border-radius: 30upx;
				padding: 5upx 16upx;
				color: #FFFFFF;
			}
		};
	}	
	</style>