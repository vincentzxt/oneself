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
						<cu-cell v-if="!searchCurrentUnit" title="选择产品" isIcon :icon="{ type: 'c-product', color: '#c4c6cb', 'size': 20 }" isLastCell :disVerMessage="verify.orderList.disVerMessage" :verify="verify.orderList.message">
							<cu-search-bar slot="footer" ref="sp" style="width:100%;" @input="handleSearchProduct" placeholder="速查码/名称" cancelButton="none" @focus="handleSearchFocusProduct" @clear="handleSearchClearProduct"></cu-search-bar>
						</cu-cell>
					</cu-panel>
				</view>
				<view v-if="searchProduct">
					<uni-list>
						<uni-list-item :title="item.productname" :note="['速查码：'+item.querycode, '建议零售价：￥'+item.price]" v-for="(item, index) in productSearchDatas" :key="index" :showArrow="false" @tap="handleSelectProduct(item)">
						</uni-list-item>
					</uni-list>
				</view>
				<view>
					<uni-list v-if="!searchProduct && reqData.orderlist.length > 0">
						<uni-list-item
							style="margin-left:10px;"
							:title="item.productname"
							:showArrow="false"
							showIcon
							:icon="{type: 'delete', color:'#f4613d', size: '25'}"
							:note="item.ismainunit ? ['数量：'+item.qty, '计量单位：'+item.unit, '成本价：'+item.purchaseunitprice] : ['数量：'+item.assistunitqty, '计量单位：'+item.unit, '成本价：'+item.assispurchaseunitprice]"
							v-for="(item, index) in reqData.orderlist"
							:key="index"
							@clickContent="handleShowPopup(index, item)"
							@clickFt="handleDelete(index, item)">
						</uni-list-item>
					</uni-list>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" :disabled="disableSubmit" @click="handleSubmit">提交</button>
		</view>
		<uni-popup ref="popup" type="bottom">
			<cu-panel>
				<cu-cell title="计量单位">
					<radio-group v-if="curSelectPruduct.isMultiUnit" class="h50 fc" slot="footer" @change="handleUnitChange">
						<radio color="#2db7f5" value=1 :checked="curSelectPruduct.ismainunit == 1">{{curSelectPruduct.mainUnit}}</radio>
						<radio color="#2db7f5" value=0 :checked="curSelectPruduct.ismainunit == 0" style="margin-left: 10px;">{{curSelectPruduct.subUnit}}</radio>
					</radio-group>
					<view v-else class="h50 fc" slot="footer">{{curSelectPruduct.mainUnit}}</view>
				</cu-cell>
				<cu-cell title="数量">
					<uni-number-box v-if="curSelectPruduct.ismainunit" slot="footer" :min="1" :max="999999" valWidth=100 btWidth=50 width=200 :value="curSelectPruduct.qty" @change="handleQtyChange"></uni-number-box>
					<uni-number-box v-else slot="footer" :min="1" :max="999999" valWidth=100 btWidth=50 width=200 :value="curSelectPruduct.assistunitqty" @change="handleQtyChange"></uni-number-box>
					<view slot="footer2">
						<view class="popup-qty-items">
							<view class="popup-qty-items-item" style="background-color: #92cbfb;" @tap="handleSelectQty(10)">10</view>
							<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #92cbfb;" @tap="handleSelectQty(50)">50</view>
							<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #fd7654;" @tap="handleSelectQty(100)">100</view>
							<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #fd7654;" @tap="handleSelectQty(300)">300</view>
						</view>
					</view>
				</cu-cell>
				<cu-cell isLastCell title="成本价" isLastCell>
					<input v-if="curSelectPruduct.ismainunit" class="h50" slot="footer" type="digit" v-model="curSelectPruduct.purchaseunitprice" placeholder="0.00" @blur="handlePriceBlur"/>
					<input v-else class="h50" slot="footer" type="digit" v-model="curSelectPruduct.assispurchaseunitprice" placeholder="0.00" @blur="handlePriceBlur"/>
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
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	import { cloneObj, floatFormat } from '@/utils/tools.js'
	import { api } from '@/config/common.js'
	import { create } from '@/api/common.js'
	export default {
		components: {
			cuSearchBar,
			uniPopup,
			cuPanel,
			cuCell,
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
				title: '期初',
				curSelectPruduct: {},
				curSelectPruductIndex: -1,
				checkedUnit: 0,
				verify: {
					orderList: { okVerify: false, disVerMessage: false, message: '至少选择一个产品' }
				},
				productListTag: false
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
			handlePriceBlur() {
				if (this.curSelectPruduct.purchaseunitprice) {
					this.curSelectPruduct.purchaseunitprice = floatFormat(this.curSelectPruduct.purchaseunitprice)
				}
				if (this.curSelectPruduct.assispurchaseunitprice) {
					this.curSelectPruduct.assispurchaseunitprice = floatFormat(this.curSelectPruduct.assispurchaseunitprice)
				}
			},
			handleSearchFocusProduct() {
				this.productListTag = false
				this.productSearchDatas = this.productDatas
				this.searchProduct = true
			},
			handleSearchClearProduct() {
				this.productListTag = true
				this.searchProduct = false
				this.$refs.sp.cancel()
			},
			handleSearchProduct(val) {
				if (val.value) {
					this.productSearchDatas = this.productDatas.filter((item) => {
						if (!item.productname) {
							item.productname = ''
						}
						if (!item.querycode) {
							item.querycode = ''
						}
						return item.productname.indexOf(val.value) !== -1 || item.querycode.toLowerCase().indexOf(val.value.toLowerCase()) !== -1
					})
					this.searchProduct = true
				} else {
					if (this.productListTag) {
						this.productSearchDatas = []
						this.searchProduct = false
					} else {
						this.productSearchDatas = this.productDatas
						this.searchProduct = true
					}
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
				this.$set(this.curSelectPruduct, 'assispurchaseunitprice', '')
				this.$set(this.curSelectPruduct, 'assistunitqty', 1)
				this.$set(this.curSelectPruduct, 'ismainunit', 1)
				this.$set(this.curSelectPruduct, 'unitmultiple', val.unitmultiple)
				this.$set(this.curSelectPruduct, 'isMultiUnit', val.isMultiUnit)
				this.reqData.orderlist.push(cloneObj(this.curSelectPruduct))
				
				this.productListTag = true
				this.searchProduct = false
				this.$refs.sp.cancel()
				this.handleVerify('orderList')
				this.$nextTick(function(){
					this.handleShowPopup(this.reqData.orderlist.length - 1, this.curSelectPruduct)
				})
			},
			handleShowPopup(index, item) {
				this.curSelectPruductIndex = index
				this.curSelectPruduct = cloneObj(item)
				this.$nextTick(function(){
					this.$refs.popup.open()
				})
			},
			handleEdit() {
				let item = this.reqData.orderlist[this.curSelectPruductIndex]
				item.ismainunit = this.curSelectPruduct.ismainunit
				item.unit = this.curSelectPruduct.unit
				if (this.curSelectPruduct.ismainunit) {
					item.qty = this.curSelectPruduct.qty
					item.purchaseunitprice = this.curSelectPruduct.purchaseunitprice
				} else {
					item.assistunitqty = this.curSelectPruduct.assistunitqty
					item.assispurchaseunitprice = this.curSelectPruduct.assispurchaseunitprice
				}
				this.curSelectPruductIndex = -1
				this.curSelectPruduct = {}
				this.$nextTick(function(){
					this.$refs.popup.close()
				})
			},
			handleQtyChange(val) {
				if (this.curSelectPruduct) {
					if (this.curSelectPruduct.ismainunit) {
						this.curSelectPruduct.qty = val
					} else {
						this.curSelectPruduct.assistunitqty = val
					}
				}
			},
			handleSelectQty(val) {
				if (this.curSelectPruduct) {
					if (this.curSelectPruduct.ismainunit) {
						this.curSelectPruduct.qty = val
					} else {
						this.curSelectPruduct.assistunitqty = val
					}
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
			handleDelete(index, item) {
				this.reqData.orderlist.splice(index, 1)
				this.handleVerify('orderList')
			},
			handleVerify(val) {
				switch(val) {
					case 'orderList':
						if (this.reqData.orderlist.length == 0) {
							this.verify.orderList.okVerify = false
							this.verify.orderList.disVerMessage = true
						} else {
							this.verify.orderList.okVerify = true
							this.verify.orderList.disVerMessage = false
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
					this.reqData.orderlist = this.reqData.orderlist.map((item)=>{
						if (!item.purchaseunitprice) {
							item.purchaseunitprice = '0.00'
						}
						if (!item.assispurchaseunitprice) {
							item.assispurchaseunitprice = '0.00'
						}
						return item
					})
					this.$refs.loading.open()
					create(api.stkStock, this.reqData).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							uni.showToast({
								icon: 'success',
								title: '提交成功'
							})
							this.reqData = {
								order: {
									isprint: 0,
									status: 0
								},
								orderlist: []
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
		.popup-qty {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			&-items {
				margin-top: 20px;
				display: flex;
				align-items: center;
				&-item {
					width: 90upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #ffffff;
					box-shadow: 1px 1px 2px $uni-border-color;
				}
			}
		}
	}
</style>
