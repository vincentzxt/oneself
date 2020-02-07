<template>
	<view class="container">
	<view class="header">
		<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
		</uni-navbar>
	</view>
	<view class="main">
			<scroll-view :scroll-y="true" class="fill">
		<!-- <view class="top"><view><text class="text">权限设置</text> </view><view><button type="default" size="mini" @tap="handleAdd">增加</button></view></view> -->
		<view v-for="(item,index) in dataList" :key="index" class="list-item">
		<cu-panel>
			<cu-cell :title="item.loginname+'('+item.loginname+')'"  @clickTitle="handleEdit(item.userid)">
				<radio-group @change="handleForbiddenChanage" :id="item.userid" slot="footer">
					<radio color="#2db7f5" value=0 :checked="item.isdelete == 0" :id="item.userid">否</radio>
					<radio color="#2db7f5" value=1 :checked="item.isdelete == 1" :id="item.userid" style="margin-left: 10px;">是</radio>
				</radio-group>
			</cu-cell>
			</cu-panel>
		</view>
	
		<view class="no_data" v-if="dataList.length===0"><text class="item_text">暂无数据</text></view>
		</scroll-view>
	</view>
	<view class="footer">
		<button class="fill" style="background-color: #2d8cf0;" type="primary"  @tap="handleAdd">新增</button>
	</view>
</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import cuPanel from '@/components/custom/cu-panel.vue'
import cuCell from '@/components/custom/cu-cell.vue'
import cuCellGroup from '@/components/custom/cu-cell-group.vue'
import { post,tokenpost} from '@/api/user.js';
import { api } from '@/config/common.js';
export default {
	components: {
		cuPanel,
		cuCell,
		cuCellGroup,
		uniList,
		uniListItem
	},
	data() {
		return {
			title: '员工管理',
			dataList: []
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
		handleAdd() {
			uni.navigateTo({
				url:'/pages/my/user/useradd'
			})
		},
		handleEdit(val){
			uni.navigateTo({
				url:'/pages/my/user/useredit?userid='+val
			})
			
		},
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			})
		},
		handleForbiddenChanage(val) {
			this.setUserLock(val.currentTarget.id,val.detail.value);
		},
		loadData(){
			tokenpost(api.GetUserList).then(res => {
				if (res.status == 200 && res.data.returnCode == '0000') {
				  this.dataList = res.data.data.resultList
				} else {
					this.$api.msg(res.data.returnMessage) 
				}
				this.loading =false;
			}).catch(error => {
				this.loading =false;
				this.$api.msg('请求失败fail') 
			})
		},
		setUserLock(userid,isdelete){
			const sendData = {userid:userid,isdelete:isdelete}
			tokenpost(api.SaveUserStatus,sendData).then(res => {
				if (res.status == 200 && res.data.returnCode == '0000') {
				  this.$api.msg("操作成功！")
				} else {
					this.$api.msg(res.data.returnMessage) 
				}
				this.loading =false;
			}).catch(error => {
				this.loading =false;
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
		.main {
			height: 83%;
			padding: 0;
			.top{
				font-size: 32rpx;
				padding: 10upx 15upx 10upx 30upx;
				background-color: #ffffff;
				display:flex;
				justify-content: space-between;
				.text{
					color: $uni-color-link;
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
	</style>