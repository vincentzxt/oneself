<template>
	<view class="container">
	<view class="header">
		<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
		</uni-navbar>
	</view>
	<view class="main">
		<view class="top"><view><text class="text">权限设置</text> </view><view><button type="default" size="mini" @tap="handleAdd">增加</button></view></view>
		<view v-for="(item,index) in dataList" :key="index" class="list-item">
		<cu-panel>
			<cu-cell-group>
			<cu-cell :title="item.realname">
				<radio-group @change="handleForbiddenChanage" :id="index">
					<radio color="#2db7f5" value=0 :checked="item.isForbidden == 0">否</radio>
					<radio color="#2db7f5" value=1 :checked="item.isForbidden == 1" style="margin-left: 10px;">是</radio>
				</radio-group>
			</cu-cell>
			</cu-cell-group>
			</cu-panel>
		</view>
	
		<view class="no_data" v-if="dataList.length===0"><text class="item_text">暂无数据</text></view>
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
			dataList: [{
				realname:'刘老板',
				userid:1,
				isForbidden:0
			},
			{
				realname:'李老板',
				userid:2,
				isForbidden:0
			},
			{
				realname:'陈会计',
				userid:3,
				isForbidden:0
			},
			{
				realname:'刘出纳',
				userid:4,
				isForbidden:0
			},
			]
		};
	},
	onLoad(){},
	onShow(){
		if(!uni.getStorageSync('userInfo')){
			uni.reLaunch({
				url:'/pages/my/login/login'
			})
		};
		//this.loadData();
	},
	methods: {

		handleAdd() {
			uni.navigateTo({
				url:'/pages/my/user/useradd'
			})
		},
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			})
		},
		handleForbiddenChanage(val) {
			//this.reqData.isForbidden = val.detail.value
			//console.log(val.detail.value);
			this.setUserLock(val.currentTarget.id,val.detail.value);
			//console.log(val.currentTarget.id);
		},
		setUserLock(id,value){
			
		},
		loadData(){
			// let userid = uni.getStorageSync('userInfo').userid;
			// let token = uni.getStorageSync('userInfo').token;
			// let url = 'http://120.210.132.94:5599/api/BseUser/GetUserInfo';
			tokenpost(api.GetUserInfo).then(res => {
				if (res.status == 200 && res.data.returnCode == '0000') {
				  this.dataList = res.data.data
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
		height: 100vh;
		width: 100vw;
		.header {
			height: 10%;
		}
		.main {
			font-size: 24rpx;
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
	</style>