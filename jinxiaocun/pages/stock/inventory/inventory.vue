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
						<cu-cell v-if="!searchCurrentUnit" title="选择产品">
							<cu-search-bar ref="sp" style="width:67%;" @input="handleSearchProduct" placeholder="输入速查码/名称" cancelButton="none"></cu-search-bar>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
				<cu-panel v-if="searchProduct">
					<uni-list>
						<uni-list-item :title="item.productname" :note="'速查码：'+item.querycode" v-for="(item, index) in productSearchDatas" :key="index" :showArrow="false" @tap="handleSelectProduct(item)">
						</uni-list-item>
					</uni-list>
				</cu-panel>
				<cu-panel v-if="!searchProduct && reqData.orderlist.length > 0">
					<cu-cell-group>
						<cu-cell :title="item.productname" :label="'数量：'+item.qty+'|计量单位：'+item.unit+'|成本价：'+item.purchaseunitprice" v-for="(item, index) in reqData.orderlist" :key="index" @tap="handleShowPopup(item)">
							<view style="color:#808695" slot="footer" @tap="handleDelete(item)">
								<uni-icons type="delete" color="#ed3f14"></uni-icons>
							</view>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" :disabled="disableSubmit" @click="handleSubmit">提交</button>
		</view>
		<uni-popup ref="popup" type="bottom">
			<cu-panel>
				<cu-cell title="数量">
					<uni-number-box :min="1" :value="curSelectPruduct.qty" @change="handleqtyChange"></uni-number-box>
				</cu-cell>
				<cu-cell title="计量单位">
					<radio-group @change="handleUnitChange">
						<radio color="#2db7f5" value=1 :checked="curSelectPruduct.ismainunit == 1">{{curSelectPruduct.mainUnit}}</radio>
						<radio color="#2db7f5" value=0 :checked="curSelectPruduct.ismainunit == 0" style="margin-left: 10px;">{{curSelectPruduct.subUnit}}</radio>
					</radio-group>
				</cu-cell>
				<cu-cell title="成本价">
					<input slot="footer" type="digit" v-model="curSelectPruduct.purchaseunitprice"/>
				</cu-cell>
			</cu-panel>
			<button style="background-color: #2d8cf0;" type="primary" @tap="handleEdit">确定</button>
		</uni-popup>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import cuSearchBar from '@/components/custom/cu-search-bar.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	import { cloneObj } from '@/utils/tools.js'
	import { api } from '@/config/common.js'
	import { stockCheck } from '@/api/stkstock.js'
	export default {
		components: {
			cuSearchBar,
			uniPopup,
			cuPanel,
			cuCell,
			cuCellGroup,
			uniList,
			uniListItem,
			uniNumberBox
		},
		data() {
			return {
				productDatas: null,
				productSearchDatas: null,
				searchProduct: false,
				reqData: {
					order: {
						isprint: 0,
						status: 0
					},
					orderlist: []
				},
				showModal: false,
				title: '盘点',
				curSelectPruduct: {},
				checkedUnit: 0,
				disableSubmit: true
			};
		},
		onShow() {
			this.productDatas = uni.getStorageSync('productList')
			this.productSearchDatas = this.productDatas
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
			handleSearchProduct(val) {
				if (val.value) {
					this.productSearchDatas = this.productDatas.filter((item) => {
						return item.productname.indexOf(val.value) !== -1 || item.querycode.indexOf(val.value) !== -1
					})
					this.searchProduct = true
				} else {
					this.productSearchDatas = this.productDatas
					this.searchProduct = false
				}
			},
			handleSelectProduct(val) {
				this.$set(this.curSelectPruduct, 'productid', val.productid)
				this.$set(this.curSelectPruduct, 'productname', val.productname)
				this.$set(this.curSelectPruduct, 'unit', val.unit)
				this.$set(this.curSelectPruduct, 'mainUnit', val.unit)
				this.$set(this.curSelectPruduct, 'subUnit', val.subunit)
				this.$set(this.curSelectPruduct, 'purchaseunitprice', val.price)
				this.$set(this.curSelectPruduct, 'qty', 1)
				this.$set(this.curSelectPruduct, 'ismainunit', 1)
				this.$set(this.curSelectPruduct, 'unitmultiple', val.unitmultiple)
				let isExists = false
				for (let item of this.reqData.orderlist) {
					if (item.productid == this.curSelectPruduct.productid) {
						item.qty ++
						this.curSelectPruduct.qty = item.qty
						isExists = true
					}
				}
				if (!isExists) {
					this.reqData.orderlist.push(cloneObj(this.curSelectPruduct))
				}
				this.searchProduct = false
				this.$refs.sp.cancel()
				this.$nextTick(function(){
					this.$refs.popup.open()
				})
			},
			handleShowPopup(val) {
				this.curSelectPruduct = cloneObj(val)
				this.$nextTick(function(){
					this.$refs.popup.open()
				})
			},
			handleEdit() {
				for (let item of this.reqData.orderlist) {
					if (item.productid == this.curSelectPruduct.productid) {
						item.qty = this.curSelectPruduct.qty
						item.unit = this.curSelectPruduct.unit
						item.ismainunit = this.curSelectPruduct.ismainunit
						item.purchaseunitprice = this.curSelectPruduct.purchaseunitprice
					}
				}
				this.curSelectPruduct = {}
				this.$nextTick(function(){
					this.$refs.popup.close()
				})
			},
			handleqtyChange(val) {
				if (this.curSelectPruduct) {
					this.curSelectPruduct.qty = val
				}
			},
			handleUnitChange(val) {
				if (val.detail.value == 1) {
					this.curSelectPruduct.unit = this.curSelectPruduct.mainUnit
					this.curSelectPruduct.ismainunit = 1
				} else {
					this.curSelectPruduct.unit = this.curSelectPruduct.subUnit
					this.curSelectPruduct.ismainunit = 0
				}
			},
			handleDelete(val) {
				this.reqData.orderlist = this.reqData.orderlist.filter((item) => {
					return item.productid !== val.productid
				})
			},
			handleSubmit() {
				this.$refs.loading.open()
				stockCheck(api.stkStock, this.reqData).then(res => {
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
		},
		watch: {
			reqData: {
				handler(val) {
					if (val.orderlist.length > 0) {
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
		}
		.footer {
			height: 48px;
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
</style>
