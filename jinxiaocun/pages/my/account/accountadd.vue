<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell-group>
						<cu-cell title="账户名称">
							<input slot="footer" type="text" v-model="reqData.cashaccountname" placeholder-style="color:#c5c8ce" placeholder="账户名称" />
						</cu-cell>
						<cu-cell title="账号信息">
							<input slot="footer" type="text" v-model="reqData.cashaccountno" placeholder-style="color:#c5c8ce" placeholder="账号信息" />
						</cu-cell>
						<cu-cell title="账户类型" isLink>
							<view style="width:80%;" slot="footer" >
								<picker @change="handleAccountTypeChange" :range="AccountTypeDict">
									<view class="picker">
										<text v-if="!reqData.cashaccounttype" style="color:#c5c8ce">请选择账户类型</text>
										<text v-else>{{ AccountTypeDict[reqData.cashaccounttype] }}</text>
									</view>
								</picker>
							</view>
						</cu-cell>
						<cu-cell title="账户余额"><input slot="footer" type="number" v-model="reqData.amount" placeholder-style="color:#c5c8ce" placeholder="账户余额" /></cu-cell>
						<cu-cell title="是否禁用" isLastCell>
							<radio-group @change="handleForbiddenChanage" slot="footer" >
								<radio color="#2db7f5" value="0" :checked="reqData.isdelete == 0">否</radio>
								<radio color="#2db7f5" value="1" :checked="reqData.isdelete == 1" style="margin-left: 10px;">是</radio>
							</radio-group>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer"><button class="footer-btn" style="background-color: #2d8cf0;" :loading="loading" type="primary" @click="this.handleSubmit">提交</button></view>
	</view>
</template>

<script>
import cuPanel from '@/components/custom/cu-panel.vue';
import cuCell from '@/components/custom/cu-cell.vue';
import cuCellGroup from '@/components/custom/cu-cell-group.vue';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import { post, tokenpost } from '@/api/user.js';
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
			loading: false,
			reqData: {
				cashaccountname: '',
				cashaccountno: '',
				cashaccounttype: '',
				amount: '',
				isdelete: 0
			},
			AccountTypeDict: ['', '银行账号', '微信', '支付宝', '现金'],
			title: '账户设置'
		};
	},
	onShow() {},
	methods: {
		handleAccountTypeChange(val) {
			this.reqData.cashaccounttype = val.detail.value;
		},
		handleForbiddenChanage(val) {
			this.reqData.isdelete = val.detail.value;
		},
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			});
		},
		handleSubmit() {
			const { cashaccountname, cashaccountno, cashaccounttype, amount, isdelete } = this.reqData;
			if (cashaccountname.length == 0) {
				this.$api.msg('账户名称不能为空！！');
				return;
			}
			if (cashaccountno.length == 0) {
				this.$api.msg('账号信息不能为空！');
				return;
			}
			if (cashaccounttype.length == 0) {
				this.$api.msg('请选择账户类型！');
				return;
			}
			if (amount.length == 0) {
				this.$api.msg('账户余额不能为空！');
				return;
			}
			if (isdelete.length == 0) {
				this.$api.msg('请选择账户是否禁用！');
				return;
			}
			const sendData = {cashaccountname, cashaccountno, cashaccounttype, amount, isdelete};
			console.log(sendData);
			this.loading = true;
			tokenpost(api.MyCashAccountCreate, sendData)
				.then(res => {
					console.log(res);
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.$api.msg(res.data.returnMessage);

						this.handleNavbarClickLeft();
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
		.picker {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}
	.footer {
		height: 7%;
		display: flex;
		background-color: $uni-split-color;
		&-text {
			width: 50%;
			height: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-left: $uni-spacing-row-lg;
		}
		&-btn {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
