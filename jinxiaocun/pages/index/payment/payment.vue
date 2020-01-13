<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell-group>
						<cu-cell title="搜索单位">
							<cu-search-bar ref="sc" style="width:67%;" @input="handleSearchCurrentUnit" placeholder="输入速查码/名称/电话" cancelButton="none"></cu-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="单位名称">
							<text slot="footer">{{reqData.contactunitname}}</text>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="付款帐号">
							<radio-group @change="handleCashAccountChange">
								<radio color="#2db7f5" :style="{'margin-left': index !== 0 ? '10px' : '0'}" v-for="(item, index) in cashAccountDict" :key="index" :value="item.cashaccountid" :checked="reqData.payaccountid == item.cashaccountid">{{item.cashaccountname}}</radio>
							</radio-group>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="付款金额">
							<input slot="footer" type="text" v-model="reqData.amount" placeholder-style="color:#c5c8ce" placeholder="请输入付款金额"/>
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
	import cuSearchBar from '@/components/custom/cu-search-bar.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { api } from '@/config/common.js'
	import { query, create } from '@/api/common.js'
	export default {
		components: {
			cuSearchBar,
			cuPanel,
			cuCell,
			cuCellGroup,
			uniList,
			uniListItem
		},
		data() {
			return {
				title: '付款单',
				currentUnitDatas: null,
				currentUnitSearchDatas: null,
				searchCurrentUnit: false,
				reqData: {
					contactunitid: '',
					contactunitname: '',
					payaccountid: '',
					amount: 0
				},
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
			handleCashAccountChange(val) {
				this.reqData.payaccountid = val.detail.value
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
				create(api.capPayment, this.reqData).then(res => {
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
		.main {
			margin-top: 5px;
			.picker {
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
