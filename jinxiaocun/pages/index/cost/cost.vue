<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true" class="fill">
				<view>
					<cu-panel>
						<cu-cell title="费用类型" isLink url="./type/type" params="name=type" isIcon :icon="{ type: 'c-type', color: '#c4c6cb', 'size': 20 }" :disVerMessage="verify.feetype.disVerMessage" :verify="verify.feetype.message">
							<view class="h50 fc" slot="footer">{{reqData.feetype}}</view>
						</cu-cell>
					</cu-panel>
				</view>
				<view style="margin-top:5px">
					<cu-panel>
						<cu-cell :isLastCell="!reqData.contactunitname" title="搜索单位" isIcon :icon="{ type: 'c-search', color: '#c4c6cb', 'size': 20 }">
							<cu-search-bar style="width:100%;" slot="footer" ref="sc" @input="handleSearchCurrentUnit" placeholder="速查码/名称/电话" cancelButton="none" @focus="handleSearchFocusCurrentUnit" @clear="handleSearchClearCurrentUnit"></cu-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit && reqData.contactunitname" title="单位名称" isSub isLastCell>
							<text class="h50 fc" slot="footer">{{reqData.contactunitname}}</text>
						</cu-cell>
					</cu-panel>
				</view>
				<view style="margin-top:5px">
					<cu-panel>
						<cu-cell v-if="!searchCurrentUnit"
							title="付款帐号"
							isIcon
							:icon="{ type: 'c-contacts', color: '#c4c6cb', 'size': 20 }">
							<view class="cash-account-list fc" slot="footer">
								<view :class="reqData.payaccountid == item.cashaccountid ? 'cash-account-list-item-select' : 'cash-account-list-item-noselect'"
											v-for="(item, index) in cashAccountDict"
											:key="index"
											:style="{'margin-top':index>1 ? '10px' : '0'}"
											@tap="handleSelectCashAccount(item)">
								{{item.cashaccountname}}</view>
							</view>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="费用金额" isIcon :icon="{ type: 'c-amount', color: '#c4c6cb', 'size': 20 }" isLastCell :disVerMessage="verify.amount.disVerMessage" :verify="verify.amount.message">
							<input class="h50" slot="footer" type="digit" v-model="reqData.amount" placeholder-style="color:#c5c8ce" placeholder="0.00" @blur="handlePriceBlur"/>
						</cu-cell>
					</cu-panel>
				</view>
				<view v-if="!searchCurrentUnit" class="main-remarks">
					<textarea style="height: 80px;margin-left:20px;" maxlength="-1" v-model="reqData.remark" placeholder-style="color:#c5c8ce" placeholder="备注"></textarea>
				</view>
				<view v-if="searchCurrentUnit">
					<uni-list>
						<uni-list-item :title="item.contactunitname" :note="['电话：'+item.bseContactUnitContactModels[0].telephone]" v-for="(item, index) in currentUnitSearchDatas" :key="index" :showArrow="false" @tap="handleSelectCurrentUnit(item)">
						</uni-list-item>
					</uni-list>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" @click="handleSubmit">提交</button>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import cuSearchBar from '@/components/custom/cu-search-bar.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { api } from '@/config/common.js'
	import { query, create } from '@/api/common.js'
	import { floatFormat } from '@/utils/tools.js'
	export default {
		components: {
			cuSearchBar,
			cuPanel,
			cuCell,
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '费用单',
				currentUnitDatas: null,
				currentUnitSearchDatas: null,
				searchCurrentUnit: false,
				reqData: {
					feetype: '',
					contactunitid: '',
					contactunitname: '',
					payaccountid: '',
					payaccountName: '',
					amount: '',
					remark: ''
				},
				cashAccountDict: [],
				verify: {
					feetype: { okVerify: false, disVerMessage: false, message: '费用类型不能为空' },
					amount: { okVerify: false, disVerMessage: false, message: '费用金额不能为空，且不能为零' }
				},
				currentUnitTag: false
			};
		},
		onShow() {
			this.currentUnitDatas = uni.getStorageSync('currentUnitList')
			this.currentUnitSearchDatas = this.currentUnitDatas
			this.getCashAccount()
			let pages =  getCurrentPages()
			let curPage = pages[pages.length - 1]
			if (curPage.data.rData) {
				this.reqData.feetype = curPage.data.rData
				this.handleVerify('feetype')
			}
		},
		computed: {
			headerHeight() {
				return this.$headerHeight
			},
			mainHeight() {
				return this.$mainHeight
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			initData() {
				this.reqData = {
					feetype: '',
					contactunitid: '',
					contactunitname: '',
					payaccountid: '',
					payaccountName: '',
					amount: '',
					remark: ''
				}
				this.verify = {
					feetype: { okVerify: false, disVerMessage: false, message: '费用类型不能为空' },
					contactunitname: { okVerify: false, disVerMessage: false, message: '往来单位名称不能为空' },
					amount: { okVerify: false, disVerMessage: false, message: '费用金额不能为空，且不能为零' }
				}
			},
			getCashAccount() {
				this.$refs.loading.open()
				query(api.cashAccount).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.cashAccountDict = res.data.data.resultList
						this.reqData.payaccountid = this.cashAccountDict[0].cashaccountid
						this.reqData.payaccountName = this.cashAccountDict[0].cashaccountname
					} else {
						uni.showToast({
							icon: 'none',
							title: res.data.returnMessage
						})
					}
				}).catch(error => {
					this.$refs.loading.close()
					uni.showToast({
						icon: 'none',
						title: error
					})
				})
			},
			handlePriceBlur() {
				if (this.reqData.amount) {
					this.reqData.amount = floatFormat(this.reqData.amount)
				}
				this.handleVerify('amount')
			},
			handleSelectCashAccount(val) {
				this.reqData.payaccountid = val.cashaccountid
				this.reqData.payaccountName = val.cashaccountname
			},
			handleSearchFocusCurrentUnit() {
				this.currentUnitTag = false
				this.currentUnitSearchDatas = this.currentUnitDatas
				this.searchCurrentUnit = true
			},
			handleSearchClearCurrentUnit() {
				this.currentUnitTag = true
				this.searchCurrentUnit = false
				this.$refs.sc.cancel()
			},
			handleSearchCurrentUnit(val) {
				if (val.value) {
					this.currentUnitSearchDatas = this.currentUnitDatas.filter((item) => {
						if (!item.contactunitname) {
							item.contactunitname = ''
						}
						if (!item.querycode) {
							item.querycode = ''
						}
						if (!item.bseContactUnitContactModels[0].telephone) {
							item.bseContactUnitContactModels[0].telephone = ''
						}
						return item.contactunitname.indexOf(val.value) !== -1 || item.querycode.toLowerCase().indexOf(val.value.toLowerCase()) !== -1 || item.bseContactUnitContactModels[0].telephone.indexOf(val.value) !== -1
					})
					this.searchCurrentUnit = true
				} else {
					if (this.currentUnitTag) {
						this.currentUnitSearchDatas = []
						this.searchCurrentUnit = false
					} else {
						this.currentUnitSearchDatas = this.currentUnitDatas
						this.searchCurrentUnit = true
					}
				}
			},
			handleSelectCurrentUnit(val) {
				this.reqData.contactunitid = val.contactunitid
				this.reqData.contactunitname = val.contactunitname
				this.currentUnitTag = true
				this.searchCurrentUnit = false
				this.$refs.sc.cancel()
			},
			handleVerify(val) {
				switch(val) {
					case 'feetype':
						if (!this.reqData.feetype) {
							this.verify.feetype.okVerify = false
							this.verify.feetype.disVerMessage = true
						} else {
							this.verify.feetype.okVerify = true
							this.verify.feetype.disVerMessage = false
						}
						break
					case 'amount':
						if (!this.reqData.amount || this.reqData.amount == '0.00') {
							this.verify.amount.okVerify = false
							this.verify.amount.disVerMessage = true
						} else {
							this.verify.amount.okVerify = true
							this.verify.amount.disVerMessage = false
						}
						break	
				}
			},
			checkVerify() {
				let result = true
				for (let item in this.verify) {
					if (!this.verify[item].okVerify) {
						this.verify[item].disVerMessage = true
						result = false
					}
				}
				return result
			},
			handleSubmit() {
				if (this.checkVerify()) {
					this.$refs.loading.open()
					create(api.capFee, this.reqData).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							uni.showToast({
								icon: 'success',
								title: '提交成功'
							})
							this.initData()
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.returnMessage
							})
						}
					}).catch(error => {
						this.$refs.loading.close()
						uni.showToast({
							icon: 'none',
							title: error
						})
					})
				}
			}
		},
		watch:{
			reqData: {
				handler(val) {
					if (val.feetype && val.payaccountid && val.amount) {
						this.disableSubmit = false
					} else {
						this.disableSubmit = true
					}
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fill {
		width: 100%;
		height: 100%;
	}
	.h50 {
		height: 50px;
	}
	.fc {
		display: flex;
		align-items: center;
	}
	.container {
		.main {
			margin-top: 5px;
			&-remarks {
				background-color: #ffffff;
				margin-top: 5px;
				padding-top: 5px;
			}
			.cash-account-list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				&-item-select {
					width:40%;
					padding:5px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #fdeeeb;
					color: #f4613d;
					border-radius: 50px;
					border: 0.5px solid #f4613d;
				}
				&-item-noselect {
					width:40%;
					padding:5px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $uni-bg-color;
					color: #808695;
					border-radius: 50px;
				}
			}
			&-picker {
				width: 100%;
				display: flex;
				justify-content: flex-end;
			}
		}
		.footer {
			height: 48px;
		}
	}
</style>
