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
						<cu-cell title="费用类型" isLink isIcon :icon="{ type: 'c-type', color: '#3dc57a', 'size': 20 }" isLastCell>
							<view slot="footer" style="width:100%;">
								<picker @change="handleFeeTypeChange" :value="reqData.feetype" :range="feetypeDict">
									<view class="main-picker">
										<text v-if="!reqData.feetype" style="color:#c5c8ce">选择费用类型</text>
										<text v-else>{{reqData.feetype}}</text>
									</view>
								</picker>
							</view>
						</cu-cell>
					</cu-panel>
				</view>
				<view style="margin-top:5px">
					<cu-panel>
						<cu-cell :isLastCell="!reqData.contactunitname" title="搜索单位" isIcon :icon="{ type: 'c-search', color: '#69c0ff', 'size': 20 }">
							<cu-search-bar style="width:100%;" slot="footer" ref="sc" @input="handleSearchCurrentUnit" placeholder="速查码/名称/电话" cancelButton="none"></cu-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit && reqData.contactunitname" title="单位名称" isSub isLastCell>
							<text slot="footer">{{reqData.contactunitname}}</text>
						</cu-cell>
					</cu-panel>
				</view>
				<view style="margin-top:5px">
					<cu-panel>
						<cu-cell v-if="!searchCurrentUnit" title="付款帐号" isLink isIcon :icon="{ type: 'c-contacts', color: '#ffa268', 'size': 20 }">
							<view slot="footer" style="width:100%;">
								<picker @change="handleCashAccountChange" :value="reqData.payaccountid" :range="cashAccountDict" range-key='cashaccountname'>
									<view class="main-picker">
										<text v-if="!reqData.payaccountName" style="color:#c5c8ce">选择付款帐号</text>
										<text v-else>{{reqData.payaccountName}}</text>
									</view>
								</picker>
							</view>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="费用金额" isIcon :icon="{ type: 'c-amount', color: '#f4613d', 'size': 20 }" isLastCell>
							<input slot="footer" type="text" v-model="reqData.amount" placeholder-style="color:#c5c8ce" placeholder="0"/>
						</cu-cell>
					</cu-panel>
				</view>
				<view v-if="!searchCurrentUnit" class="main-remarks">
					<textarea style="height: 80px;margin-left:20px;" maxlength="-1" v-model="reqData.remarks" placeholder-style="color:#c5c8ce" placeholder="备注"></textarea>
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
			<button class="fill" style="background-color: #2d8cf0;" type="primary" :disabled="disableSubmit" @click="handleSubmit">提交</button>
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
					amount: ''
				},
				feetypeDict: ['公司餐费', '公司交通费', '公司办公费', '公司租金费', '公司电费', '公司快递费', '增值税'],
				cashAccountDict: [],
				disableSubmit: true
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
			handleFeeTypeChange(val) {
				this.reqData.feetype = this.feetypeDict[val.detail.value]
			},
			handleCashAccountChange(val) {
				this.reqData.payaccountid = this.cashAccountDict[val.detail.value].cashaccountid
				this.reqData.payaccountName = this.cashAccountDict[val.detail.value].cashaccountname
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
				this.$refs.sc.cancel()
			},
			handleSubmit() {
				this.$refs.loading.open()
				create(api.capFee, this.reqData).then(res => {
					this.$refs.loading.close()
					if (res.status == 200 && res.data.returnCode == '0000') {
						uni.showToast({
							icon: 'success',
							title: '提交成功'
						})
						this.reqData = {
							feetype: '',
							contactunitid: '',
							contactunitname: '',
							payaccountid: '',
							payaccountName: '',
							amount: ''
						}
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
		},
		watch:{
			reqData: {
				handler(val) {
					if (val.feetype && val.contactunitname && val.payaccountid && val.amount) {
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
	.container {
		.main {
			margin-top: 5px;
			&-remarks {
				background-color: #ffffff;
				margin-top: 5px;
				padding-top: 5px;
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
