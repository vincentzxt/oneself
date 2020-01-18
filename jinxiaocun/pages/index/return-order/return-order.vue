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
						<cu-cell title="业务类型">
							<radio-group @change="handleTypeChange">
								<radio color="#2d8cf0" value=0 :checked="businessType == 0">采购退货</radio>
								<radio color="#2d8cf0" style="margin-left: 10px;" value=1 :checked="businessType == 1">销售退货</radio>
							</radio-group>
						</cu-cell>
						<cu-cell title="搜索单位">
							<cu-search-bar ref="sc" style="width:67%;" @input="handleSearchCurrentUnit" placeholder="输入速查码/名称/电话" cancelButton="none"></cu-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="单位名称">
							<text v-if="businessType == 0" slot="footer">{{purchaseReqData.contactunitname}}</text>
							<text v-else slot="footer">{{salesReqData.contactunitname}}</text>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit && businessType == 0" title="选择订单" isLink url="./orders/orders" :params="'businessType=' + businessType + '&currentUnitId=' + purchaseReqData.contactunitid">
						</cu-cell>
						<cu-cell v-else-if="!searchCurrentUnit && businessType == 1" title="选择订单" isLink url="./orders/orders" :params="'businessType=' + businessType + '&currentUnitId=' + salesReqData.contactunitid">
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
				<cu-panel v-if="searchCurrentUnit">
					<uni-list>
						<uni-list-item :title="item.contactunitname" :note="'电话：'+item.bseContactUnitContactModels[0].telephone" v-for="(item, index) in currentUnitSearchDatas" :key="index" :showArrow="false" @tap="handleSelectCurrentUnit(item)">
						</uni-list-item>
					</uni-list>
				</cu-panel>
				<cu-panel v-if="!searchCurrentUnit && purchaseReqData.productList.length > 0">
					<cu-cell-group>
						<cu-cell :title="item.productname" :label="'采购数量：'+item.qty+'|计量单位：'+item.unit+'|采购单价：'+item.purchaseunitprice" v-for="(item, index) in purchaseReqData.productList" :key="index" @tap="handleShowPopup(item)">
							<view style="color:#808695" slot="footer" @tap="handleDelete(item)">
								<uni-icons type="delete" color="#ed3f14"></uni-icons>
							</view>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
				<cu-panel v-if="!searchCurrentUnit && salesReqData.productList.length > 0">
					<cu-cell-group>
						<cu-cell :title="item.productname" :label="'销售数量：'+item.salesqty+'|计量单位：'+item.unit+'|销售单价：'+item.salesunitprice" v-for="(item, index) in salesReqData.productList" :key="index" @tap="handleShowPopup(item)">
							<view style="color:#808695" slot="footer" @tap="handleDelete(item)">
								<uni-icons type="delete" color="#ed3f14"></uni-icons>
							</view>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
		<view class="footer">
			<text v-if="businessType == 0" class="footer-text">合计金额：￥{{purchaseReqData.totalPrice}}</text>
			<text v-else class="footer-text">合计金额：￥{{salesReqData.totalPrice}}</text>
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" :disabled="disableSubmit" @click="handleNext">下一步</button>
		</view>
		<uni-popup ref="purchasePopup" type="bottom">
			<cu-panel>
				<cu-cell title="数量">
					<uni-number-box :min="1" :max="maxNum" :value="curSelectPruduct.qty" @change="handleQtyChange"></uni-number-box>
				</cu-cell>
			</cu-panel>
			<button style="background-color: #2d8cf0;" type="primary" @tap="handleEdit">确定</button>
		</uni-popup>
		<uni-popup ref="salePopup" type="bottom">
			<cu-panel>
				<cu-cell title="数量">
					<uni-number-box :min="1"  :max="maxNum" :value="curSelectPruduct.salesqty" @change="handleQtyChange"></uni-number-box>
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
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
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
			cuCellGroup,
			uniList,
			uniListItem,
			uniNumberBox
		},
		data() {
			return {
				currentUnitDatas: null,
				currentUnitSearchDatas: null,
				searchCurrentUnit: false,
				businessType: 0,
				purchaseReqData: {
					contactunitid: '',
					contactunitname: '',
					productList: [],
					totalPrice: 0.00,
				},
				salesReqData: {
					contactunitid: '',
					contactunitname: '',
					productList: [],
					totalPrice: 0.00,
				},
				showModal: false,
				title: '退货单',
				curSelectPruduct: {},
				checkedUnit: 0,
				disableSubmit: true,
				maxNum: 0
			};
		},
		onShow() {
			this.currentUnitDatas = uni.getStorageSync('currentUnitList')
			this.currentUnitSearchDatas = this.currentUnitDatas
			let pages =  getCurrentPages()
			let curPage = pages[pages.length - 1]
			if (curPage.data.productList) {
				if (this.businessType == 0) {
					this.purchaseReqData.productList = curPage.data.productList
				} else {
					this.salesReqData.productList = curPage.data.productList
				}
			}
			console.log(this.salesReqData)
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
			handleTypeChange(val) {
				this.businessType = val.detail.value
				if (this.businessType == 0) {
					this.salesReqData = {
						contactunitid: '',
						contactunitname: '',
						productList: [],
						totalPrice: 0.00,
					}
				} else {
					this.purchaseReqData = {
						contactunitid: '',
						contactunitname: '',
						productList: [],
						totalPrice: 0.00,
					}
				}
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
				if (this.businessType == 0) {
					this.purchaseReqData.contactunitname = val.contactunitname
					this.purchaseReqData.contactunitid = val.contactunitid
				} else {
					this.salesReqData.contactunitname = val.contactunitname
					this.salesReqData.contactunitid = val.contactunitid
				}
				this.searchCurrentUnit = false
				this.$refs.sc.cancel()
			},
			handleShowPopup(val) {
				this.curSelectPruduct = cloneObj(val)
				this.$nextTick(function(){
					if (this.businessType == 0) {
						this.maxNum = val.qty
						this.$refs.purchasePopup.open()
					} else {
						this.maxNum = val.salesqty
						this.$refs.salePopup.open()
					}
				})
			},
			handleEdit() {
				if (this.businessType == 0) {
					for (let item of this.purchaseReqData.productList) {
						if (item.productid == this.curSelectPruduct.productid) {
							item.qty = this.curSelectPruduct.qty
						}
					}
				} else {
					for (let item of this.salesReqData.productList) {
						if (item.productid == this.curSelectPruduct.productid) {
							item.salesqty = this.curSelectPruduct.salesqty
						}
					}
				}
				this.curSelectPruduct = {}
				this.maxNum = 0
				this.$nextTick(function(){
					if (this.businessType == 0) {
						this.$refs.purchasePopup.close()
					} else {
						this.$refs.salePopup.close()
					}
				})
			},
			handleQtyChange(val) {
				if (this.curSelectPruduct) {
					if (this.businessType == 0) {
						this.curSelectPruduct.qty = val
					} else {
						this.curSelectPruduct.salesqty = val
					}
				}
			},
			handleDelete(val) {
				if (this.businessType == 0) {
					this.purchaseReqData.totalPrice = parseFloat(this.purchaseReqData.totalPrice - val.qty * parseFloat(val.purchaseunitprice)).toFixed(2)
					this.purchaseReqData.productList = this.purchaseReqData.productList.filter((item) => {
						return item.productid !== val.productid
					})
				} else {
					this.salesReqData.totalPrice = parseFloat(this.salesReqData.totalPrice - val.salesqty * parseFloat(val.salesunitprice)).toFixed(2)
					this.salesReqData.productList = this.salesReqData.productList.filter((item) => {
						return item.productid !== val.productid
					})
				}
			},
			handleNext() {
				if (this.businessType == 0) {
					uni.navigateTo({
						url: './payment/payment?reqData='+JSON.stringify(this.purchaseReqData)+'&businessType='+this.businessType
					})
				} else {
					uni.navigateTo({
						url: './payment/payment?reqData='+JSON.stringify(this.salesReqData)+'&businessType='+this.businessType
					})
				}
			}
		},
		watch: {
			'purchaseReqData.productList': {
				handler(val) {
					this.purchaseReqData.totalPrice = 0
					if (val && val.length > 0) {
						for (let item of val) {
							this.purchaseReqData.totalPrice += item.qty * parseFloat(item.purchaseunitprice)
						}
						this.purchaseReqData.totalPrice = parseFloat(this.purchaseReqData.totalPrice).toFixed(2)
					}
				},
				deep: true
			},
			'salesReqData.productList': {
				handler(val) {
					console.log(val)
					console.log("n")
					this.salesReqData.totalPrice = 0
					if (val && val.length > 0) {
						for (let item of val) {
							this.salesReqData.totalPrice += item.salesqty * parseFloat(item.salesunitprice)
						}
						this.salesReqData.totalPrice = parseFloat(this.salesReqData.totalPrice).toFixed(2)
					}
				},
				deep: true
			},
			purchaseReqData: {
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
			},
			salesReqData: {
				handler(val) {
					if (val.contactunitid && val.productList.length > 0 && val.totalPrice) {
						if (val.productList.some((item) => {
							return item.salesunitprice == 0
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
