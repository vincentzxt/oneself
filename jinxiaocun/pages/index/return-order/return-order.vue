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
						<cu-cell title="业务类型">
							<radio-group @change="handleTypeChange">
								<radio color="#2d8cf0" value=1 :checked="reqData.contactunittype == 1">采购退货</radio>
								<radio color="#2d8cf0" style="margin-left: 10px;" value=2 :checked="reqData.contactunittype == 2">销售退货</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="搜索单位">
							<uni-search-bar ref="sc" style="width:67%;" @input="handleSearchCurrentUnit" placeholder="输入速查码、名称、电话" cancelButton="none"></uni-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="单位名称">
							<text slot="footer">{{reqData.contactunitname}}</text>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="收款帐号">
							<radio-group @change="handleCashAccountChange">
								<radio color="#2db7f5" v-for="(item, index) in cashAccountDict" :key="index" :value="item.cashaccountid" :checked="reqData.accountid == item.cashaccountid">{{item.cashaccountname}}</radio>
							</radio-group>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="收款金额">
							<input slot="footer" type="text" v-model="reqData.amount" placeholder-style="color:#c5c8ce" placeholder="请输入收款金额"/>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
				<cu-panel v-if="!searchCurrentUnit">
					<cu-cell>
						<textarea style="height: 80px" maxlength="-1" v-model="reqData.remarks" placeholder-style="color:#c5c8ce" placeholder="备注"></textarea>
					</cu-cell>
				</cu-panel>
				<cu-panel v-if="searchCurrentUnit">
					<uni-list>
						<uni-list-item :title="item.contactunitname" :note="'电话：'+item.bseContactUnitContactModels[0].telephone" v-for="(item, index) in currentUnitSearchDatas" :key="index" :showArrow="false" @tap="handleSelectCurrentUnit(item)">
						</uni-list-item>
					</uni-list>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" @click="handleSubmit">提交</button>
		</view>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { api } from '@/config/common.js'
	import { query, create } from '@/api/common.js'
	export default {
		components: {
			uniSearchBar,
			cuPanel,
			cuCell,
			cuCellGroup,
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '退货单',
				currentUnitDatas: null,
				currentUnitSearchDatas: null,
				searchCurrentUnit: false,
				reqData: {
					feetype: '',
					contactunitid: '',
					contactunitname: '',
					accountid: '',
					amount: 0
				},
				feetypeDict: ['公司餐费', '公司交通费', '公司办公费', '公司租金费', '公司电费', '公司快递费', '增值税'],
				cashAccountDict: []
			};
		},
		onLoad() {
			this.currentUnitDatas = uni.getStorageSync('currentUnitList')
			this.currentUnitSearchDatas = this.currentUnitDatas
			this.$refs.loading.open()
			query(api.cashAccount).then(res => {
				this.$refs.loading.close()
				if (res.status == 200 && res.data.returnCode == '0000') {
					this.cashAccountDict = res.data.data.resultList
				}
			}).catch(error => {
				this.$refs.loading.close()
			})
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleFeeTypeChange(val) {
				this.reqData.feetype = this.feetypeDict[val.detail.value]
			},
			handleCashAccountChange(val) {
				this.reqData.accountid = val.detail.value
			},
			handleSearchCurrentUnit(val) {
				if (val.value) {
					this.currentUnitSearchDatas = this.currentUnitDatas.filter((item) => {
						return item.contactunitname.indexOf(val.value) !== -1 || item.querycode.indexOf(val.value) !== -1 || item.bseContactUnitContactModels[0].telephone.indexOf(val.value) !== -1
					})
					this.searchCurrentUnit = true
				} else {
					this.currentUnitSearchDatas = this.currentUnitDatas
					this.searchCurrentUnit = false
				}
			},
			handleSelectCurrentUnit(val) {
				this.reqData.contactunitid = val.contactunitid
				this.reqData.contactunitname = val.contactunitname
				this.searchCurrentUnit = false
				this.$refs.sc.clear()
			},
			handleSubmit() {
				this.$refs.loading.open()
				create(api.capFee, {model: this.reqData }).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						uni.showToast({
							title: '提交成功'
						})
					} else {
						uni.showToast({
							title: '提交失败'
						})
					}
				}).catch(error => {
					this.$refs.loading.close()
					uni.showToast({
						title: '提交失败'
					})
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
			flex-direction: column;
			justify-content: flex-end;
		}
	}
</style>
