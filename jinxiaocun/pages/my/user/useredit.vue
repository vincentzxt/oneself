<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
						<cu-cell title="用户名">
							<input slot="footer" type="text" v-model="reqData.loginname" placeholder-style="color:#c5c8ce" placeholder="请输入用户名"/>
						</cu-cell>
						<cu-cell title="姓名">
							<input slot="footer" type="text" v-model="reqData.realname" placeholder-style="color:#c5c8ce" placeholder="请输入姓名"/>
						</cu-cell>
						<cu-cell title="+86">
							<input slot="footer" type="text" v-model="reqData.telephone" placeholder-style="color:#c5c8ce" placeholder="请输入手机号"/>
						</cu-cell>
						<cu-cell title="邮箱">
							<input slot="footer" type="number" v-model="reqData.email" placeholder-style="color:#c5c8ce" placeholder="请输入电子邮箱"/>
						</cu-cell>
						<cu-cell title="密码">
							<input slot="footer" type="text" v-model="reqData.password" placeholder-style="color:#c5c8ce" placeholder="请输入密码"/>
						</cu-cell>
						<cu-cell title="确认密码">
							<input slot="footer" type="text" v-model="reqData.re_password" placeholder-style="color:#c5c8ce" placeholder="请再次输入密码"/>
						</cu-cell>
						<cu-cell title="分配角色" isLastCell>
						</cu-cell>
						<view>
							 <radio-group @change="handleRoleChanage" class="uni-list-cell">
							 	<radio color="#2db7f5" value=0 :checked="reqData.roleid == 0" style="margin: 10upx 16upx;">老板</radio>
							 	<radio color="#2db7f5" value=1 :checked="reqData.roleid == 1" style="margin: 10upx 16upx;">超级业务员</radio>
							 	<radio color="#2db7f5" value=2 :checked="reqData.roleid == 2" style="margin: 10upx 16upx;">业务员</radio>
							 	<radio color="#2db7f5" value=3 :checked="reqData.roleid == 3" style="margin: 10upx 16upx;">采购人员</radio>
							 	<radio color="#2db7f5" value=4 :checked="reqData.roleid == 4" style="margin: 10upx 16upx;">仓库人员</radio>
							 </radio-group>
						</view>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="footer-btn" style="background-color: #2d8cf0;" :loading="loading"  type="primary" @click="handleSubmit">提交</button>
		</view>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
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
				reqData: {
					userid:0,
					loginname:'',
					realname:'',
					telephone:'',
					email:'',
					password:'',
					re_password:'',
					roleid:0
				},
				loading:false,
				title: '编辑账号'
			};
		},
		onShow() {
			this.loadRole();
		},
		onLoad(){
		},
		methods: {
			handleSexChanage(val) {
				this.reqData.sex = val.detail.value
			},
			handleRoleChanage(val) {
					this.reqData.roleid = val.detail.value
						},
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			
			loadRole(){
				const sendData = {
					'pageIndex':1,
					'pageRows':-1
				};
				tokenpost(api.GetRoleList,sendData).then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						console.log(res.data.data.resultList);
					 // this.dataList = res.data.data.resultList
					} else {
						this.$api.msg(res.data.returnMessage) 
					}
					this.loading =false;
				}).catch(error => {
					this.loading =false;
					this.$api.msg('请求失败fail') 
				})
			},
			loadData() {
				this.$refs.loading.open()
				tokenpost(api.GetUserInfo)
					.then(res => {
						if (res.status == 200) {
							this.$refs.loading.close()
							if (res.data.returnCode == '0000') {
								this.dataList = res.data.data;
								this.login_status = true;
							} else {
								//this.$api.msg(res.data.returnMessage);
								this.dataList = { loginname: '', realname: '', telephone: '', companyname: '', expiredate: '', daycount: 0, ordercount: '0' };
								this.login_status = false;
							}
						} else {
							this.$api.msg(res.data.returnMessage);
						}
					})
					.catch(error => {
						this.$refs.loading.close()
						this.$api.msg('请求失败fail');
					});
			},
			handleSubmit() {
				const {userid, loginname, realname, telephone, email, password,re_password,roleid} = this.reqData;
				if (loginname.length == 0) {
					this.$api.msg('登录账号不能为空！');
					return;
				}
				if (realname.length == 0) {
					this.$api.msg('姓名不能为空！');
					return;
				}
				if (password.length == 0) {
					this.$api.msg('登录密码不能为空！');
					return;
				}
				if (re_password.length == 0) {
					this.$api.msg('重复密码不能为空！');
					return;
				}
				if(password!= re_password){
					this.$api.msg('两次密码不一致！');
					return;
				}
				if (telephone.length!= 11) {
					this.$api.msg('手机号码不正确！');
					return;
				}
				if (email.length== 0) {
					this.$api.msg('电子邮箱不能为空！');
					return;
				}
				const sendData ={userid,loginname, realname, telephone, email, password,roleid};
				this.loading = true;
				tokenpost(api.SaveUser, sendData)
					.then(res => {
						if (res.status == 200 && res.data.returnCode == '0000') {
							this.$api.msg(res.data.returnMessage);
							uni.navigateBack({
								delta: 1
							})
						} else if (res.status == 200 && res.data.returnCode == '402') {
							this.$api.msg(res.data.returnMessage);
							uni.reLaunch({
								url: '/pages/my/login/login'
							});
						} else {
							this.$api.msg(res.data.returnMessage);
						}
						this.loading = false;
					})
					.catch(error => {
						this.loading = false;
						this.$api.msg('请求失败fail');
				});
				
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
			height: 10%;
		}
		.main {
			height: 83%;
			.picker {
				width: 100%;
				display: flex;
				justify-content: flex-end;
			}
		}
		.footer {
			height: 7%;
			display: flex;
			background-color:$uni-split-color;
			&-text {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: $uni-spacing-row-lg;
			}
			&-btn	{
				width: 100%;
				height: 100%;
			}
		}
	}
	.uni-list-cell {
		display: flex;
		flex-direction: column;
	    justify-content: flex-start
	}
</style>
