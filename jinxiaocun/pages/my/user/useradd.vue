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
						<cu-cell title="性别">
							<radio-group @change="handleSexChanage">
								<radio color="#2db7f5" value=0 :checked="reqData.sex == 0">男</radio>
								<radio color="#2db7f5" value=1 :checked="reqData.sex == 1" style="margin-left: 10px;">女</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="分配角色">
						</cu-cell>
						<view>
							 <radio-group @change="handleRoleChanage" class="uni-list-cell">
							 	<radio color="#2db7f5" value=0 :checked="reqData.role == 0" style="margin: 10upx 16upx;">老板</radio>
							 	<radio color="#2db7f5" value=1 :checked="reqData.role == 1" style="margin: 10upx 16upx;">超级业务员</radio>
							 	<radio color="#2db7f5" value=1 :checked="reqData.role == 2" style="margin: 10upx 16upx;">业务员</radio>
							 	<radio color="#2db7f5" value=1 :checked="reqData.role == 3" style="margin: 10upx 16upx;">采购人员</radio>
							 	<radio color="#2db7f5" value=1 :checked="reqData.role == 4" style="margin: 10upx 16upx;">仓库人员</radio>
							 </radio-group>
						</view>
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
					loginname:'xuewei',
					realname:'张三丰',
					telephone:'15827068282',
					email:'',
					password:'',
					sex:0,
					role:0
				},
				bankDict: ['微信', '支付宝','银行卡', '现金'],
				title: '增加账号'
			};
		},
		onShow() {
		},
		methods: {
			handleSexChanage(val) {
				this.reqData.sex = val.detail.value
			},
			handleSexChanage(val) {
							this.reqData.role = val.detail.value
						},
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleSubmit() {
				
				
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
