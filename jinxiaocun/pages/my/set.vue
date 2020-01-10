<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell-group>
						<cu-cell title="设置头像">
							<image class="portrait" :src="reqData.companylogourl || '/static/image/logo.png'"></image>
						</cu-cell>
						<cu-cell title="商户名称">
							<input slot="footer" type="text" v-model="reqData.companyname" placeholder-style="color:#c5c8ce" placeholder="商户名称"/>
						</cu-cell>
						<cu-cell title="联系人">
							<input slot="footer" type="text" v-model="reqData.contact" placeholder-style="color:#c5c8ce" placeholder="请输入联系人"/>
						</cu-cell>
						<cu-cell title="联系电话">
							<input slot="footer" type="number" v-model="reqData.telephone" placeholder-style="color:#c5c8ce" placeholder="请输入联系人电话"/>
						</cu-cell>
						<cu-cell title="微信">
							<input slot="footer" type="number" v-model="reqData.wx" placeholder-style="color:#c5c8ce" placeholder="请输入微信"/>
						</cu-cell>
						<cu-cell title="邮箱">
							<input slot="footer" type="text" v-model="reqData.email" placeholder-style="color:#c5c8ce" placeholder="请输入电子邮箱"/>
						</cu-cell>
						<cu-panel>
							<cu-cell>
								<textarea style="height: 80px" maxlength="-1" v-model="reqData.address" placeholder-style="color:#c5c8ce" placeholder="地址"></textarea>
							</cu-cell>
						</cu-panel>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" @click="handleSubmit">提交</button>
		</view>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { post,tokenpost} from '@/api/user.js'
	import { api } from '@/config/common.js'
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
				reqData: {
					companylogourl:'',
					companyname:'湖北吉奥汽车服务有限公司',
					contact: '',
					telephone: '',
					wx:'',
					email:'',
					address:''
				},
				title: '设置'
			};
		},
		onShow() {
			this.loadData();
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			loadData(){
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
			},
			handleSubmit() {
				const {companylogourl,companyname,contact,telephone,email,address} = this;
				const sendData = {
					companylogourl,
					companyname,
					contact,
					telephone,
					email,
					address
				};
				tokenpost(api.SaveUserInfo,sendData).then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
					  this.$api.msg(res.data.returnMessage) 
					}else if(res.status == 200 && res.data.returnCode == '402'){
						this.$api.msg(res.data.returnMessage);
						uni.reLaunch({
							url:'/pages/my/login/login'
						})
					}else {
						this.$api.msg(res.data.returnMessage) 
					}
					this.loading =false;
				}).catch(error => {
					this.loading =false;
					this.$api.msg('请求失败fail') 
				})
				
			}
		}
	}
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
			height: 11%;
		}
		.main {
			font-size: $uni-font-size-base;
			height: 82%;
		}
	//	.textarea{width: 60%;}
		.footer {
			height: 7%;
			display: flex;
			&-btn	{
				width: 100%;
				height: 100%;
			}
		}
	}
	.portrait{
		position: relative;
		width: 84rpx;
		height: 84rpx;
		border-radius: 50%;
	}
</style>
