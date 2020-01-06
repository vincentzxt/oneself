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
						<cu-cell title="账户名称">
							<text>{{reqData.company_name}}</text>
						</cu-cell>
						<cu-cell title="账号信息">
							<input slot="footer" type="text" v-model="reqData.contact_person" placeholder-style="color:#c5c8ce" placeholder="请输入联系人"/>
						</cu-cell>
						<cu-cell title="账户类型" isLink>
							<view style="width:80%;">
								<picker @change="handleBankChange" :value="reqData.banktype" :range="bankDict">
									<view class="picker">
										<text v-if="!reqData.banktype" style="color:#c5c8ce">请选择账户类型</text>
										<text v-else>{{reqData.banktype}}</text>
									</view>
								</picker>
							</view>
						</cu-cell>
						<cu-cell title="账户余额">
							<input slot="footer" type="number" v-model="reqData.contact_qq" placeholder-style="color:#c5c8ce" placeholder="请输入QQ"/>
						</cu-cell>
						<cu-cell title="是否禁用">
							<input slot="footer" type="text" v-model="reqData.contact_email" placeholder-style="color:#c5c8ce" placeholder="请输入电子邮箱"/>
						</cu-cell>
						<cu-panel>
							<cu-cell>
								<textarea style="height: 80px" maxlength="-1" v-model="reqData.contact_addr" placeholder-style="color:#c5c8ce" placeholder="地址"></textarea>
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
					company_logo:'',
					company_name:'湖北吉奥汽车服务有限公司',
					contact_person: '',
					contact_tel: '',
					contact_qq:'',
					contact_email:'',
					contact_addr:'',
					banktype:0
				},
				bankDict: ['微信', '支付宝','银行卡', '现金'],
				title: '账户设置'
			};
		},
		onShow() {
		},
		methods: {
			handleBankChange(val) {
				this.reqData.banktype = this.bankDict[val.detail.value]
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
			height: 11%;
		}
		.main {
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
