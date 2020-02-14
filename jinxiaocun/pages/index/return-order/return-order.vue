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
						<cu-cell title="业务类型" isIcon :icon="{ type: 'c-product', color: '#c4c6cb', 'size': 20 }" isLastCell>
							<radio-group class="h50 fc" slot="footer" @change="handleTypeChange">
								<radio color="#2d8cf0" value=0 :checked="businessType == 0">采购</radio>
								<radio color="#2d8cf0" style="margin-left: 10px;" value=1 :checked="businessType == 1">销售</radio>
							</radio-group>
						</cu-cell>
					</cu-panel>
				</view>
				<view style="margin-top: 5px;">
					<cu-panel>
						<cu-cell :isLastCell="!salesReqData.contactunitname || !purchaseReqData.contactunitname" title="搜索单位" isIcon :icon="{ type: 'c-search', color: '#c4c6cb', 'size': 20 }" :disVerMessage="verify.contactunitname.disVerMessage" :verify="verify.contactunitname.message">
							<cu-search-bar slot="footer" ref="sc" style="width:100%;" @input="handleSearchCurrentUnit" placeholder="速查码/名称/电话" cancelButton="none" @focus="handleSearchFocusCurrentUnit" @clear="handleSearchClearCurrentUnit"></cu-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit && (salesReqData.contactunitname || purchaseReqData.contactunitname)" title="单位名称" isSub isLastCell>
							<text class="h50 fc" v-if="businessType == 0" slot="footer">{{purchaseReqData.contactunitname}}</text>
							<text class="h50 fc" v-else slot="footer">{{salesReqData.contactunitname}}</text>
						</cu-cell>
					</cu-panel>
				</view>
				<view style="margin-top: 5px;" v-if="!searchCurrentUnit && (salesReqData.contactunitname || purchaseReqData.contactunitname)">
					<cu-panel>
						<cu-cell v-if="businessType == 0" title="选择订单" isLink url="./orders/orders" :params="'businessType=' + businessType + '&currentUnitId=' + purchaseReqData.contactunitid" isIcon :icon="{ type: 'c-right', color: '#c4c6cb', 'size': 20 }" :disVerMessage="verify.productList.disVerMessage" :verify="verify.productList.message">
							<view class="h50 fc" slot="footer"></view>
						</cu-cell>
						<cu-cell v-else-if="businessType == 1" title="选择订单" isLink url="./orders/orders" :params="'businessType=' + businessType + '&currentUnitId=' + salesReqData.contactunitid" isIcon :icon="{ type: 'c-right', color: '#c4c6cb', 'size': 20 }" :disVerMessage="verify.productList.disVerMessage" :verify="verify.productList.message">
							<view class="h50 fc" slot="footer"></view>
						</cu-cell>
					</cu-panel>
				</view>
				<view v-if="searchCurrentUnit">
					<uni-list>
						<uni-list-item :title="item.contactunitname" :note="['电话：'+item.bseContactUnitContactModels[0].telephone]" v-for="(item, index) in currentUnitSearchDatas" :key="index" :showArrow="false" @tap="handleSelectCurrentUnit(item)">
						</uni-list-item>
					</uni-list>
				</view>
				<view>
					<uni-list v-if="!searchCurrentUnit && purchaseReqData.productList.length > 0">
						<uni-list-item
							style="margin-left:10px;"
							:title="item.productname"
							:showArrow="false"
							showIcon
							:icon="{type: 'delete', color:'#ef5a62', size: '20'}"
							:note="['退货数量：'+item.qty, '计量单位：'+item.unit, '采购单价：'+item.purchaseunitprice]"
							v-for="(item, index) in purchaseReqData.productList"
							:key="index"
							@clickContent="handleShowPopup(item)"
							@clickFt="handleDelete(item)">
						</uni-list-item>
					</uni-list>
				</view>
				<view>
					<uni-list v-if="!searchCurrentUnit && salesReqData.productList.length > 0">
						<uni-list-item
							style="margin-left:10px;"
							:title="item.productname"
							:showArrow="false"
							showIcon
							:icon="{type: 'delete', color:'#ef5a62', size: '20'}"
							:note="['销售数量：'+item.salesqty, '计量单位：'+item.unit, '销售单价：'+item.salesunitprice]"
							v-for="(item, index) in salesReqData.productList"
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
					<text v-if="businessType == 0" style="color:#ef5a62">{{purchaseReqData.totalCount}}</text>
					<text v-else style="color:#ef5a62">￥{{salesReqData.totalCount}}</text>
				</view>
				<view class="footer-text-item">
					<text>小计金额：</text>
					<text v-if="businessType == 0" style="color:#ef5a62">￥{{purchaseReqData.totalPrice}}</text>
					<text v-else style="color:#ef5a62">￥{{salesReqData.totalPrice}}</text>
				</view>
			</view>
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" @click="handleNext">{{submitText}}</button>
		</view>
		<uni-popup ref="purchasePopup" type="bottom">
			<cu-panel>
				<cu-cell title="数量" isLastCell>
					<uni-number-box slot="footer" :min="1" :max="maxNum" valWidth=100 btWidth=50 width=200 :value="curSelectPruduct.qty" @change="handleQtyChange"></uni-number-box>
					<view slot="footer2">
						<view class="popup-qty-items">
							<view class="popup-qty-items-item" style="background-color: #92cbfb;" @tap="handleSelectQty(10)">10</view>
							<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #92cbfb;" @tap="handleSelectQty(50)">50</view>
							<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #fd7654;" @tap="handleSelectQty(100)">100</view>
							<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #fd7654;" @tap="handleSelectQty(300)">300</view>
						</view>
					</view>
				</cu-cell>
			</cu-panel>
			<button style="background-color: #2d8cf0;" type="primary" @tap="handleEdit">确定</button>
		</uni-popup>
		<uni-popup ref="salePopup" type="bottom">
			<cu-panel>
				<cu-cell title="数量" isLastCell>
					<uni-number-box slot="footer" :min="1" :max="maxNum" valWidth=100 btWidth=50 width=200 :value="curSelectPruduct.salesqty" @change="handleQtyChange"></uni-number-box>
					<view slot="footer2">
						<view class="popup-qty-items">
							<view class="popup-qty-items-item" style="background-color: #92cbfb;" @tap="handleSelectQty(10)">10</view>
							<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #92cbfb;" @tap="handleSelectQty(50)">50</view>
							<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #fd7654;" @tap="handleSelectQty(100)">100</view>
							<view class="popup-qty-items-item" style="margin-left: 15px;background-color: #fd7654;" @tap="handleSelectQty(300)">300</view>
						</view>
					</view>
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
				searchCurrentUnit: false,
				businessType: 0,
				purchaseReqData: {
					contactunitid: '',
					contactunitname: '',
					productList: [],
					totalCount: 0,
					totalPrice: 0.00,
				},
				salesReqData: {
					contactunitid: '',
					contactunitname: '',
					productList: [],
					totalCount: 0,
					totalPrice: 0.00,
				},
				showModal: false,
				title: '退货单',
				curSelectPruduct: {},
				checkedUnit: 0,
				maxNum: 0,
				submitText: '收款',
				verify: {
					contactunitname: { okVerify: false, disVerMessage: false, message: '往来单位名称不能为空' },
					productList: { okVerify: false, disVerMessage: false, message: '请选择一个订单' }
				}
			};
		},
		onShow() {
			this.currentUnitDatas = uni.getStorageSync('currentUnitList')
			this.currentUnitSearchDatas = this.currentUnitDatas
			let pages =  getCurrentPages()
			let curPage = pages[pages.length - 1]
			if (curPage.data.commandType) {
				if (curPage.data.commandType == 'success') {
					this.purchaseReqData = {
						contactunitid: '',
						contactunitname: '',
						productList: [],
						totalCount: 0,
						totalPrice: 0.00,
					}
					this.salesReqData = {
						contactunitid: '',
						contactunitname: '',
						productList: [],
						totalCount: 0,
						totalPrice: 0.00,
					}
				} else {
					if (curPage.data.productList) {
						if (this.businessType == 0) {
							this.purchaseReqData.productList = curPage.data.productList
						} else {
							this.salesReqData.productList = curPage.data.productList
						}
					}
					this.handleVerify('productList')
				}
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
			handleTypeChange(val) {
				this.businessType = val.detail.value
				if (this.businessType == 0) {
					this.salesReqData = {
						contactunitid: '',
						contactunitname: '',
						productList: [],
						totalCount: 0,
						totalPrice: 0.00,
					}
					this.submitText = '收款'
				} else {
					this.purchaseReqData = {
						contactunitid: '',
						contactunitname: '',
						productList: [],
						totalCount: 0,
						totalPrice: 0.00,
					}
					this.submitText = '付款'
				}
			},
			handleSearchFocusCurrentUnit() {
				this.currentUnitSearchDatas = this.currentUnitDatas
				this.searchCurrentUnit = true
			},
			handleSearchClearCurrentUnit() {
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
				this.handleVerify('contactunitname')
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
			handleSelectQty(val) {
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
			handleVerify(val) {
				switch(val) {
					case 'contactunitname':
						if (this.businessType == 0) {
							if (!this.purchaseReqData.contactunitname) {
								this.verify.contactunitname.okVerify = false
								this.verify.contactunitname.disVerMessage = true
							} else {
								this.verify.contactunitname.okVerify = true
								this.verify.contactunitname.disVerMessage = false
							}
						} else {
							if (!this.salesReqData.contactunitname) {
								this.verify.contactunitname.okVerify = false
								this.verify.contactunitname.disVerMessage = true
							} else {
								this.verify.contactunitname.okVerify = true
								this.verify.contactunitname.disVerMessage = false
							}
						}
						break
					case 'productList':
						if (this.businessType == 0) {
							if (this.purchaseReqData.productList.length == 0) {
								this.verify.productList.okVerify = false
								this.verify.productList.disVerMessage = true
							} else {
								this.verify.productList.okVerify = true
								this.verify.productList.disVerMessage = false
							}
						} else {
							if (this.salesReqData.productList.length == 0) {
								this.verify.productList.okVerify = false
								this.verify.productList.disVerMessage = true
							} else {
								this.verify.productList.okVerify = true
								this.verify.productList.disVerMessage = false
							}
						}
						break
				}
			},
			checkVerify() {
				let result = true
				for (let item in this.verify) {
					if (item == 'productList' && !this.purchaseReqData.contactunitname && !this.salesReqData.contactunitname) {
						continue
					}
					if (!this.verify[item].okVerify) {
						this.verify[item].disVerMessage = true
						result = false
					}
				}
				return result
			},
			handleNext() {
				if (this.checkVerify()) {
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
			}
		},
		watch: {
			'purchaseReqData.productList': {
				handler(val) {
					this.purchaseReqData.totalPrice = 0
					this.purchaseReqData.totalCount = 0
					if (val && val.length > 0) {
						for (let item of val) {
							this.purchaseReqData.totalPrice += item.qty * parseFloat(item.purchaseunitprice)
							this.purchaseReqData.totalCount += parseInt(item.qty)
						}
						this.purchaseReqData.totalPrice = parseFloat(this.purchaseReqData.totalPrice).toFixed(2)
					}
				},
				deep: true
			},
			'salesReqData.productList': {
				handler(val) {
					this.salesReqData.totalPrice = 0
					this.salesReqData.totalCount = 0
					if (val && val.length > 0) {
						for (let item of val) {
							this.salesReqData.totalPrice += item.salesqty * parseFloat(item.salesunitprice)
							this.salesReqData.totalCount += parseInt(item.salesqty)
						}
						this.salesReqData.totalPrice = parseFloat(this.salesReqData.totalPrice).toFixed(2)
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
					width: 90upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #ffffff;
				}
			}
		}
	}
</style>
