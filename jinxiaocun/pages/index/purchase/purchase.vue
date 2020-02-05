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
						<cu-cell :isLastCell="!reqData.contactunitname" title="搜索单位" isIcon :icon="{ type: 'c-search', color: '#c4c6cb', 'size': 20 }">
							<cu-search-bar style="width:100%;" slot="footer" ref="sc" @input="handleSearchCurrentUnit" placeholder="速查码/名称/电话" cancelButton="none"></cu-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit && reqData.contactunitname" title="单位名称" isSub>
							<input class="form-input" slot="footer" type="text" v-model="reqData.contactunitname" focus/>
						</cu-cell>
						<cu-cell isLastCell v-if="!searchCurrentUnit && reqData.telephone" title="电话" isSub>
							<input class="form-input" slot="footer" type="text" v-model="reqData.telephone"/>
						</cu-cell>
					</cu-panel>
				</view>
				<view style="margin-top: 5px;">
					<cu-panel>
						<cu-cell isLastCell v-if="!searchCurrentUnit" title="选择产品" isIcon :icon="{ type: 'c-product', color: '#c4c6cb', 'size': 20 }">
							<cu-search-bar style="width:100%;" slot="footer" ref="sp" @input="handleSearchProduct" placeholder="速查码/名称" cancelButton="none"></cu-search-bar>
						</cu-cell>
					</cu-panel>
				</view>
				<view v-if="searchCurrentUnit || searchProduct">
					<uni-list v-if="searchCurrentUnit">
						<uni-list-item :title="item.contactunitname" :note="['速查码：'+item.querycode, '电话：'+item.bseContactUnitContactModels[0].telephone]" v-for="(item, index) in currentUnitSearchDatas" :key="index" :showArrow="false" @tap="handleSelectCurrentUnit(item)">
						</uni-list-item>
					</uni-list>
					<uni-list v-if="searchProduct">
						<uni-list-item :title="item.productname" :note="['速查码：'+item.querycode, '零售价：'+item.price]" v-for="(item, index) in productSearchDatas" :key="index" :showArrow="false" @tap="handleSelectProduct(item)">
						</uni-list-item>
					</uni-list>
				</view>
				<view>
					<uni-list v-if="!searchCurrentUnit && !searchProduct && reqData.productList.length > 0">
						<uni-list-item
							style="margin-left:10px;"
							:title="item.productname"
							:showArrow="false"
							showIcon
							:icon="{type: 'delete', color:'#f4613d', size: '25'}"
							:note="['销售数量：'+item.qty, '销售单价：'+item.purchaseunitprice, '计量单位：'+item.unit]"
							v-for="(item, index) in reqData.productList"
							:key="index"
							@clickContent="handleShowPopup(item)"
							@clickFt="handleDelete(item)">
						</uni-list-item>
					</uni-list>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<view class="footer-text">
				<view class="footer-text-item">
					<text>小计数量：</text>
					<text style="color:#f4613d">{{reqData.totalCount}}</text>
				</view>
				<view class="footer-text-item">
					<text>小计金额：</text>
					<text style="color:#f4613d">￥{{reqData.totalPrice}}</text>
				</view>
			</view>
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" :disabled="disableSubmit" @click="handleNext">付款</button>
		</view>
		<uni-popup ref="popup" type="bottom">
			<cu-panel>
				<cu-cell title="数量" height=110>
					<view slot="footer" style="display: flex; flex-direction: row-reverse;">
						<view class="popup-qty">
							<uni-number-box :min="1" :value="curSelectPruduct.qty" @change="handleqtyChange"></uni-number-box>
							<view class="popup-qty-items">
								<view class="popup-qty-items-item" style="background-color: #92cbfb;" @tap="handleSelectQty(10)">10</view>
								<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #92cbfb;" @tap="handleSelectQty(50)">50</view>
								<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #ffa268;" @tap="handleSelectQty(100)">100</view>
								<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #ffa268;" @tap="handleSelectQty(300)">300</view>
							</view>
						</view>
					</view>
				</cu-cell>
				<cu-cell title="计量单位">
					<radio-group slot="footer" @change="handleUnitChange">
						<radio color="#2db7f5" value=1 :checked="curSelectPruduct.ismainunit == 1">{{curSelectPruduct.mainUnit}}</radio>
						<radio color="#2db7f5" value=0 :checked="curSelectPruduct.ismainunit == 0" style="margin-left: 10px;">{{curSelectPruduct.subUnit}}</radio>
					</radio-group>
				</cu-cell>
				<cu-cell isLastCell title="单价">
					<input slot="footer" type="digit" v-model="curSelectPruduct.purchaseunitprice" placeholder="0"/>
				</cu-cell>
			</cu-panel>
			<button style="background-color: #2d8cf0;" type="primary" @tap="handleEdit">确定</button>
		</uni-popup>
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
	import { cloneObj } from '@/utils/tools.js'
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
				currentUnitDatas: null,
				currentUnitSearchDatas: null,
				productDatas: null,
				productSearchDatas: null,
				searchCurrentUnit: false,
				searchProduct: false,
				reqData: {
					contactunitid: '',
					contactunitname: '',
					telephone: '',
					productList: [],
					totalCount: 0,
					totalPrice: 0.00,
				},
				showModal: false,
				title: '采购',
				curSelectPruduct: {},
				checkedUnit: 0,
				disableSubmit: true
			};
		},
		onShow() {
			this.currentUnitDatas = uni.getStorageSync('currentUnitList')
			this.productDatas = uni.getStorageSync('productList')
			this.currentUnitSearchDatas = this.currentUnitDatas
			this.productSearchDatas = this.productDatas
			this.reqData = {
				contactunitid: '',
				contactunitname: '',
				telephone: '',
				productList: [],
				totalCount: 0,
				totalPrice: 0.00,
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
			handleSearchCurrentUnit(val) {
				if (val.value) {
					this.currentUnitSearchDatas = this.currentUnitDatas.filter((item) => {
						return item.contactunitname.indexOf(val.value) !== -1 || item.querycode.indexOf(val.value) !== -1 || item.bseContactUnitContactModels[0].telephone.indexOf(val.value) !== -1
					})
					if (this.currentUnitSearchDatas.length == 0) {
						uni.showModal({
						    title: '提示',
						    content: '单位不存在，是否新增该单位？',
								confirmColor: '#2d8cf0',
								cancelColor: '#2d8cf0',
						    success: function (res) {
						        if (res.confirm) {
											this.reqData.contactunitname = val.value
											this.reqData.telephone = ' '
											this.$refs.sc.cancel()
											this.searchCurrentUnit = false
						        } else if (res.cancel) {
											this.searchCurrentUnit = false
						        }
						    }.bind(this)
						})
					} else {
						this.searchCurrentUnit = true
					}
				} else {
					this.currentUnitSearchDatas = this.currentUnitDatas
					this.searchCurrentUnit = false
				}
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
			handleSelectCurrentUnit(val) {
				this.reqData.contactunitname = val.contactunitname
				this.reqData.contactunitid = val.contactunitid
				this.reqData.telephone = val.bseContactUnitContactModels[0].telephone
				this.searchCurrentUnit = false
				this.$refs.sc.cancel()
			},
			handleSelectProduct(val) {
				this.$set(this.curSelectPruduct, 'productid', val.productid)
				this.$set(this.curSelectPruduct, 'productname', val.productname)
				this.$set(this.curSelectPruduct, 'unit', val.unit)
				this.$set(this.curSelectPruduct, 'mainUnit', val.unit)
				this.$set(this.curSelectPruduct, 'subUnit', val.subunit)
				this.$set(this.curSelectPruduct, 'price', val.price)
				this.$set(this.curSelectPruduct, 'purchaseunitprice', '')
				this.$set(this.curSelectPruduct, 'qty', 1)
				this.$set(this.curSelectPruduct, 'ismainunit', 1)
				this.$set(this.curSelectPruduct, 'unitmultiple', val.unitmultiple)
				let isExists = false
				for (let item of this.reqData.productList) {
					if (item.productid == this.curSelectPruduct.productid) {
						item.qty ++
						this.curSelectPruduct.qty = item.qty
						isExists = true
					}
				}
				if (!isExists) {
					this.reqData.productList.push(cloneObj(this.curSelectPruduct))
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
				for (let item of this.reqData.productList) {
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
			handleSelectQty(val) {
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
				this.reqData.totalPrice = parseFloat(this.reqData.totalPrice - val.qty * parseFloat(val.purchaseunitprice)).toFixed(2)
				this.reqData.productList = this.reqData.productList.filter((item) => {
					return item.productid !== val.productid
				})
			},
			handleNext() {
				uni.navigateTo({
					url: './payment/payment?reqData='+JSON.stringify(this.reqData)
				})
			}
		},
		watch: {
			'reqData.productList': {
				handler(val) {
					this.reqData.totalPrice = 0
					this.reqData.totalCount = 0
					if (val && val.length > 0) {
						for (let item of val) {
							if (item.purchaseunitprice) {
								this.reqData.totalPrice += item.qty * parseFloat(item.purchaseunitprice)
							} else {
								this.reqData.totalPrice += item.qty * 0
							}
							this.reqData.totalCount += parseInt(item.qty)
						}
						this.reqData.totalPrice = parseFloat(this.reqData.totalPrice).toFixed(2)
					}
				},
				deep: true
			},
			reqData: {
				handler(val) {
					if (val.contactunitid && val.productList.length > 0 && val.totalPrice) {
						if (val.productList.some((item) => {
							return item.purchaseunitprice == 0
						})) {
							this.disableSubmit = true
						} else {
							this.disableSubmit = false
						}
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
			.form-input {
				width: 100%;
				height: 50px;
			}
		}
		.footer {
			height: 48px;
			display: flex;
			background-color:$uni-split-color;
			&-text {
				width: 50%;
				height: 100%;
				display: flex;
				justify-content: center;
				flex-direction: column;
				font-size: $uni-font-size-sm;
				margin-left: 20upx;
				&-item {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-left: $uni-spacing-row-lg;
				}
			}
			&-btn	{
				width: 50%;
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
					width: 100upx;
					height: 50upx;
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
