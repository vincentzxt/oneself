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
							<uni-search-bar ref="sc" style="width:67%;" @input="handleSearchCurrentUnit" placeholder="输入速查码/名称/电话" cancelButton="none"></uni-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="单位名称">
							<text slot="footer">{{reqData.contactunitname}}</text>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="电话">
							<text slot="footer">{{reqData.telephone}}</text>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="选择产品">
							<uni-search-bar ref="sp" style="width:67%;" @input="handleSearchProduct" placeholder="输入速查码/名称" cancelButton="none"></uni-search-bar>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
				<cu-panel v-if="searchCurrentUnit || searchProduct">
					<uni-list v-if="searchCurrentUnit">
						<uni-list-item :title="item.contactunitname" :note="'电话：'+item.bseContactUnitContactModels[0].telephone" v-for="(item, index) in currentUnitSearchDatas" :key="index" :showArrow="false" @tap="handleSelectCurrentUnit(item)">
						</uni-list-item>
					</uni-list>
					<uni-list v-if="searchProduct">
						<uni-list-item :title="item.productname" :note="'速查码：'+item.querycode" v-for="(item, index) in productSearchDatas" :key="index" :showArrow="false" @tap="handleSelectProduct(item)">
						</uni-list-item>
					</uni-list>
				</cu-panel>
				<cu-panel v-if="!searchCurrentUnit && !searchProduct && reqData.productList.length > 0">
					<cu-cell-group>
						<cu-cell :title="item.productname" :label="'销售数量：'+item.salesqty+'|计量单位：'+item.unit+'|建议零售价：'+item.price+'|销售单价：'+item.salesunitprice" v-for="(item, index) in reqData.productList" :key="index" @tap="handleShowPopup(item)">
							<view style="color:#808695" slot="footer" @tap="handleDelete(item)">
								<uni-icons type="delete" color="#ed3f14"></uni-icons>
							</view>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<text class="footer-text">合计金额：￥{{reqData.totalPrice}}</text>
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" :disabled="disableSubmit" @click="handleNext">下一步</button>
		</view>
		<uni-popup ref="popup" type="bottom">
			<cu-panel>
				<cu-cell title="数量">
					<uni-number-box :min="1" :value="curSelectPruduct.salesqty" @change="handleSalesqtyChange"></uni-number-box>
				</cu-cell>
				<cu-cell title="计量单位">
					<radio-group @change="handleUnitChange">
						<radio color="#2db7f5" value=1 :checked="curSelectPruduct.ismainunit == 1">主计量单位</radio>
						<radio color="#2db7f5" value=0 :checked="curSelectPruduct.ismainunit == 0" style="margin-left: 10px;">辅计量单位</radio>
					</radio-group>
				</cu-cell>
				<cu-cell title="单价">
					<input slot="footer" type="text" v-model="curSelectPruduct.salesunitprice"/>
				</cu-cell>
			</cu-panel>
			<button style="background-color: #2d8cf0;" type="primary" @tap="handleEdit">确定</button>
		</uni-popup>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	import { cloneObj } from '@/utils/tools.js'
	export default {
		components: {
			uniSearchBar,
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
					this.searchCurrentUnit = true
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
				this.$set(this.curSelectPruduct, 'salesunitprice', 0)
				this.$set(this.curSelectPruduct, 'salesqty', 1)
				this.$set(this.curSelectPruduct, 'ismainunit', 1)
				this.$set(this.curSelectPruduct, 'unitmultiple', val.unitmultiple)
				let isExists = false
				for (let item of this.reqData.productList) {
					if (item.productid == this.curSelectPruduct.productid) {
						item.salesqty ++
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
						item.salesqty = this.curSelectPruduct.salesqty
						item.unit = this.curSelectPruduct.unit
						item.ismainunit = this.curSelectPruduct.ismainunit
						item.salesunitprice = this.curSelectPruduct.salesunitprice
					}
				}
				this.curSelectPruduct = {}
				this.$nextTick(function(){
					this.$refs.popup.close()
				})
			},
			handleSalesqtyChange(val) {
				if (this.curSelectPruduct) {
					this.curSelectPruduct.salesqty = val
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
				this.reqData.totalPrice = parseFloat(this.reqData.totalPrice - val.salesqty * parseFloat(val.salesunitprice)).toFixed(2)
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
					if (val && val.length > 0) {
						for (let item of val) {
							if (item.ismainunit == 1) {
								this.reqData.totalPrice += item.salesqty * parseFloat(item.salesunitprice)
							} else {
								this.reqData.totalPrice += item.salesqty * parseFloat(item.salesunitprice) * parseFloat(item.unitmultiple)
							}
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
							return item.salesunitprice == 0
						})) {
							console.log("1")
							this.disableSubmit = true
						} else {
							console.log("2")
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
				width: 50%;
				height: 100%;
			}
		}
	}
</style>
