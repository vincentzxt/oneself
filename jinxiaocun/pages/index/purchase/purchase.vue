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
						<cu-cell title="搜索单位">
							<uni-search-bar ref="sc" style="width:67%;" @input="handleSearchCurrentUnit" placeholder="输入速查码、名称、电话" cancelButton="none"></uni-search-bar>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="单位名称">
							<text slot="footer">{{reqData.contactunitname}}</text>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="电话">
							<text slot="footer">{{reqData.telephone}}</text>
						</cu-cell>
						<cu-cell v-if="!searchCurrentUnit" title="产品">
							<uni-search-bar ref="sp" style="width:67%;" @input="handleSearchProduct" placeholder="输入速查码、名称" cancelButton="none"></uni-search-bar>
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
						<cu-cell :title="item.productname" :label="'销售数量：'+item.num+'|计量单位：'+curUnit+'|建议零售价：'+item.price" v-for="(item, index) in reqData.productList" :key="index" @tap="handleShowPopup(item)">
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
					<uni-number-box :min="1" :value="curSelectPruduct.num" @change="handleNumChange"></uni-number-box>
				</cu-cell>
				<cu-cell title="计量单位">
					<radio-group @change="handleUnitChange">
						<radio color="#2db7f5" value=0 :checked="checkedUnit == 0">主计量单位</radio>
						<radio color="#2db7f5" value=1 :checked="checkedUnit == 1" style="margin-left: 10px;">辅计量单位</radio>
					</radio-group>
				</cu-cell>
				<cu-cell title="单价">
					<input slot="footer" type="text" v-model="curSelectPruduct.price"/>
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
				curUnit: '',
				curSelectPruduct: null,
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
				this.$refs.sc.clear()
			},
			handleSelectProduct(val) {
				let isExists = false
				for (let item of this.reqData.productList) {
					if (item.querycode == val.querycode) {
						item.num ++
						isExists = true
					}
				}
				if (!isExists) {
					this.$set(val, 'num', 1)
					this.curUnit = val.unit
					this.reqData.productList.push(val)
				}
				this.searchProduct = false
				this.$refs.sp.clear()
			},
			handleShowPopup(val) {
				this.curSelectPruduct = val
				this.$nextTick(function(){
					this.$refs.popup.open()
				})
			},
			handleEdit() {
				for (let item of this.reqData.productList) {
					if (item.code == this.curSelectPruduct.code) {
						item.price = this.curSelectPruduct.price
						item.num = this.curSelectPruduct.num
						item.unit = this.curSelectPruduct.unit
					}
				}
				this.curSelectPruduct = null
				this.$nextTick(function(){
					this.$refs.popup.close()
				})
			},
			handleNumChange(val) {
				if (this.curSelectPruduct) {
					this.curSelectPruduct.num = val
				}
			},
			handleUnitChange(val) {
				console.log(val)
				console.log(this.curSelectPruduct)
				this.checkedUnit = val.detail.value
				if (this.checkedUnit == 0) {
					this.curSelectPruduct.unit = this.curSelectPruduct.unit
				} else {
					this.curSelectPruduct.subunit = this.curSelectPruduct.subunit
				}
			},
			handleDelete(val) {
				this.reqData.totalPrice = parseFloat(this.reqData.totalPrice - val.num * parseFloat(val.price)).toFixed(2)
				this.reqData.productList = this.reqData.productList.filter((item) => {
					return item.id !== val.id
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
							this.reqData.totalPrice += item.num * parseFloat(item.price)
						}
						this.reqData.totalPrice = parseFloat(this.reqData.totalPrice).toFixed(2)
					}
				},
				deep: true
			},
			reqData: {
				handler(val) {
					if (val.contactunitname && val.productList.length > 0 && val.totalPrice) {
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
		height: 100vh;
		width: 100vw;
		.header {
			height: 10%;
		}
		.main {
			height: 83%;
		}
		.footer {
			height: 7%;
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
