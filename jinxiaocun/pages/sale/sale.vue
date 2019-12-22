<template>
	<view class="container">
		<view class="header">
			<cu-custom bgColor="bg-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">{{title}}</block>
			</cu-custom>
		</view>
		<view class="content">
			<scroll-view :scroll-y="true" class="fill">
				<view class="cu-list icon">
					<view class="cu-item">
						<view class="icon">
							<text class="cuIcon-company"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">搜索单位</text>
							<view class="cu-bar search bg-white item-custom-content">
								<view class="search-form round">
									<text class="cuIcon-search text-slave2"></text>
									<input v-model="customerSearchKey" :adjust-position="false" type="text" placeholder-class="text-slave2" placeholder="输入编码、名称、电话" confirm-type="search"></input>
								</view>
							</view>
						</view>
					</view>
					<view v-if="!searchCustomer" class="cu-item">
						<view class="icon">
							<text class="cuIcon-company"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">单位名称</text>
							<text class="item-custom-content">{{company}}</text>
						</view>
					</view>
					<view v-if="!searchCustomer" class="cu-item">
						<view class="icon">
							<text class="cuIcon-product"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">产品</text>
							<view class="cu-bar search bg-white item-custom-content">
								<view class="search-form round">
									<text class="cuIcon-search text-slave2"></text>
									<input v-model="productSearchKey" :adjust-position="false" type="text" placeholder-class="text-slave2" placeholder="输入编码、名称" confirm-type="search"></input>
								</view>
							</view>
						</view>
					</view>
					<view v-if="searchCustomer || searchProduct" class="cu-item">
						<scroll-view :scroll-y="true" class="fill">
							<view v-if="searchCustomer" class="cu-list menu">
								<view class="cu-item" v-for="(item, index) in customerSearchDatas" :key="index" @tap="handleSelectCustomer(item)">
									<view class="item item-custom2">
										<text>{{item.company}}</text>
										<view class="margin-top-xs text-sm text-slave">
											<text>电话：{{item.mobile}}</text>
										</view>
									</view>
								</view>
							</view>
							<view v-if="searchProduct" class="cu-list menu">
								<view class="cu-item" v-for="(item, index) in productSearchDatas" :key="index" @tap="handleSelectProduct(item)">
									<view class="item item-custom2">
										<text>{{item.name}}</text>
										<view class="margin-top-xs text-sm text-slave">
											<text>编码：{{item.code}}</text>
										</view>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
				<view v-if="!searchProduct && productList.length > 0" class="cu-list icon">
					<view class="cu-item" v-for="(item, index) in productList" :key="index">
						<view class="icon">
							<text class="cuIcon-delete text-orange" @tap="handleDelete(item)"></text>
						</view>
						<view class="item item-custom2" @tap="handleShowModal(item)">
							<text class="item-custom2-title">{{item.name}}</text>
							<view class="margin-top-xs text-sm text-slave item-custom2-content">
								<text style="width:50%">销售数量：{{item.num}}</text>
								<text style="width:50%">计量单位：{{item.unit}}</text>
								<text style="width:50%">建议零售价：￥{{item.price}}</text>
							</view>
						</view>
					</view>
				</view>
				<view v-if="productList.length > 0 && !searchProduct" class="cu-list icon">
					<view class="cu-item">
						<view class="icon">
							<text class="cuIcon-finance"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">收款账号</text>
							<radio-group class="item-custom-content" @change="handleTypeChange">
								<radio color="#2db7f5" value=0 :checked="checkedAccount == 0">微信</radio>
								<radio color="#2db7f5" value=1 :checked="checkedAccount == 1" style="margin-left: 10px;">支付宝</radio>
								<radio color="#2db7f5" value=2 :checked="checkedAccount == 2" style="margin-left: 10px;">网银</radio>
							</radio-group>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="footer bg-white">
			<view class="footer-content fill">
				<view class="footer-content1">
					<text class="text-grey margin-left">合计金额：<text class="text-red">￥{{totalPrice}}</text></text>
				</view>
				<button class="cu-btn bg-green footer-content2">确定</button>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="showModal?'show':''">
			<view class="cu-dialog dialog">
				<view class="cu-bar bg-blue justify-end" style="20%">
					<view class="content">调整产品规格</view>
				</view>
				<view class="cu-list menu">
					<view class="cu-item">
						<view class="item dialog-item-custom">
							<text class="dialog-item-custom-title">数量：</text>
							<uni-number-box class="dialog-item-custom-content" :min="1" :value="curSelectPruduct.num" @change="handleNumChange"></uni-number-box>
						</view>
					</view>
					<view class="cu-item">
						<view class="item dialog-item-custom">
							<text class="dialog-item-custom-title">计量单位：</text>
							<radio-group class="dialog-item-custom-content" @change="handleUnitChange">
								<radio color="#2db7f5" value=0 :checked="checkedUnit == 0">主计量单位</radio>
								<radio color="#2db7f5" value=1 :checked="checkedUnit == 1" style="margin-left: 10px;">辅计量单位</radio>
							</radio-group>
						</view>
					</view>
					<view class="cu-item">
						<view class="item dialog-item-custom">
							<text class="dialog-item-custom-title">单价：</text>
							<input class="dialog-item-custom-content" type="text" v-model="curSelectPruduct.price"/>
						</view>
					</view>
				</view>
				<view class="cu-bar dialog-footer">
					<view class="action bg-gray dialog-footer-left"  @tap="handleHideModal">取消</view>
					<view class="action bg-green dialog-footer-right" @tap="handleEdit">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				customerDatas: null,
				searchCustomer: false,
				customerSearchDatas: null,
				customerSearchKey: '',
				productDatas: null,
				searchProduct: false,
				productSearchDatas: null,
				productSearchKey: '',
				company: '',
				productList: [],
				totalPrice: 0.00,
				showModal: false,
				title: '销售',
				curSelectPruduct: null,
				checkedAccount: 0,
				checkedUnit: 0
			};
		},
		onShow() {
			this.customerDatas = uni.getStorageSync('customerList')
			this.productDatas = uni.getStorageSync('productList')
			this.customerSearchDatas = this.customerDatas
			this.productSearchDatas = this.productDatas
		},
		methods: {
			handleSelectCustomer(val) {
				this.company = val.company
				this.customerSearchKey = ''
			},
			handleSelectProduct(val) {
				let isExists = false
				for (let item of this.productList) {
					if (item.code == val.code) {
						item.num ++
						isExists = true
					}
				}
				if (!isExists) {
					this.$set(val, 'num', 1)
					this.productList.push(val)
				}
				this.productSearchKey = ''
			},
			handleShowModal(val) {
				this.curSelectPruduct = val
				this.$nextTick(function(){
					this.showModal = true
				})
			},
			handleHideModal() {
				this.curSelectPruduct = null
				this.$nextTick(function(){
					this.showModal = false
				})
			},
			handleEdit() {
				for (let item of this.productList) {
					if (item.code == this.curSelectPruduct.code) {
						item.price = this.curSelectPruduct.price
						item.num = this.curSelectPruduct.num
						item.unit = this.curSelectPruduct.unit
					}
				}
				this.curSelectPruduct = null
				this.$nextTick(function(){
					this.showModal = false
				})
			},
			handleTypeChange(val) {
				this.checkedAccount = val.detail.value
			},
			handleNumChange(val) {
				this.curSelectPruduct.num = val
			},
			handleUnitChange(val) {
				this.checkedUnit = val.detail.value
				if (this.checkedUnit == 0) {
					this.curSelectPruduct.unit = this.curSelectPruduct.masterUnit
				} else {
					this.curSelectPruduct.unit = this.curSelectPruduct.slaveUnit
				}
			},
			handleDelete(val) {
				this.totalPrice = parseFloat(this.totalPrice - val.num * parseFloat(val.price)).toFixed(2)
				this.productList = this.productList.filter((item) => {
					return item.id !== val.id
				})
			}
		},
		watch: {
			customerSearchKey(val) {
				if (val) {
					this.searchCustomer = true
					this.customerSearchDatas = this.customerDatas.filter((item) => {
						return item.company.indexOf(val) !== -1 || item.code.indexOf(val) !== -1 || item.mobile.indexOf(val) !== -1
					})
				} else {
					this.searchCustomer = false
					this.customerSearchDatas = this.customerDatas
				}
			},
			productSearchKey(val) {
				if (val) {
					this.searchProduct = true
					this.productSearchDatas = this.productDatas.filter((item) => {
						return item.name.indexOf(val) !== -1 || item.code.indexOf(val) !== -1
					})
				} else {
					this.searchProduct = false
					this.productSearchDatas = this.productDatas
				}
			},
			productList: {
				handler(val) {
					this.totalPrice = 0
					if (val && val.length > 0) {
						for (let item of val) {
							this.totalPrice += item.num * parseFloat(item.price)
						}
						this.totalPrice = parseFloat(this.totalPrice).toFixed(2)
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
	.dialog {
		.dialog-item-custom {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-left: 10upx;
			.dialog-item-custom-title {
				width: 30%;
			}
			.dialog-item-custom-content {
				width: 70%;
			}
		}
		.dialog-footer {
			padding: 0;
			.dialog-footer-left {
				width: 50%;
				height: 100upx;
				margin-left: 0;
			}
			.dialog-footer-right {
				width: 50%;
				height: 100upx;
				margin-right: 0;
			}
		}
	}
	.container {
		height: 100vh;
		width: 100vw;
		.header {
			height: 11%;
		}
		.content {
			height: 82%;
			.item-custom {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				.item-custom-title {
					width: 30%;
				}
				.item-custom-content {
					width: 70%;
				}
			}
			.item-custom2 {
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-left: 10upx;
				.item-custom2-content {
					display: flex;
					flex-wrap: wrap;
				}
			}
			
		}
		.footer {
			height: 7%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			.footer-content {
				display: flex;
				flex-direction: row;
				align-items: center;
				.footer-content1 {
					width: 60%;
					height: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-left: 10px;
				}
				.footer-content2 {
					width: 40%;
					height: 100%;
				}
			}
		}
	}
</style>
