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
							<text>{{reqData.cashaccountname}}</text>
						</cu-cell>
						<cu-cell title="账号信息">
							<text>{{reqData.cashaccountno}}</text>
						</cu-cell>
						<cu-cell title="账户类型">
							<text>{{ AccountTypeDict[reqData.cashaccounttype]}}</text>
						</cu-cell>
						<cu-cell title="账户余额">
							<text>{{ reqData.amount }}</text>
						</cu-cell>
						<cu-cell title="是否禁用">
							<text>{{ isdeleteDict[reqData.isdelete]}}</text>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import cuPanel from '@/components/custom/cu-panel.vue';
import cuCell from '@/components/custom/cu-cell.vue';
import cuCellGroup from '@/components/custom/cu-cell-group.vue';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import { tokenget,tokenpost } from '@/api/user.js';
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
			accountid: 0,
			isdeleteDict: ['正常','禁用'],
			AccountTypeDict: ['', '银行账号', '微信', '支付宝', '现金'],
			title: '账户查看'
		};
	},
	onShow() {},
	onLoad: function(option) {
		this.accountid = option.id;
		this.loadData();
	},
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
		loadData() {
			tokenget(api.MyCashAccountGet, this.accountid)
				.then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.reqData = res.data.data;
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
