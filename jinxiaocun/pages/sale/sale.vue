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
				<view class="cu-list menu sm-border">
					<view class="cu-item arrow" @click="getCurrentUnit">
						<view class="content">
							<text class="cuIcon-profile text-grey"></text>
							<text class="text-grey">客户</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">{{company}}</text>
						</view>
					</view>
					<view class="cu-item arrow">
						<view class="content" style="width:20%;">
							<text class="cuIcon-time text-grey"></text>
							<text class="text-grey">日期</text>
						</view>
						<view class="action" style="width:80%;">
							<picker mode=date :value="date" start="2015-09-01" end="2020-09-01" @change="dateChange" style="width:100%;text-align: right;">
								<text v-if="!date" class="text-gray text-sm">点击选择</text>
								<text class="text-grey" v-else>{{date}}</text>
							</picker>
						</view>
					</view>
					<view class="cu-item arrow" @click="getProduct">
						<view class="content">
							<text class="cuIcon-list text-grey"></text>
							<text class="text-grey">选择产品</text>
						</view>
					</view>
					<view class="cu-item" v-for="(item, index) in productList" :key="index" @tap="handleShowModal">
						<view class="content padding-tb-sm">
							<view>
								<text class="cuIcon-delete text-red" @tap="handleDelete(item)"></text>
								<text class="text-grey" style="margin-left: 10px;">{{item.name}}</text>
							</view>
							<view><text class="text-grey text-sm" style="margin-left: 32px;">{{item.code}}</text></view>
						</view>
						<view class="action padding-tb-sm">
							<view class="margin-top-xs"><text class="text-grey text-sm">销售数量：1</text></view>
							<view><text class="text-grey text-sm">度量单位：{{item.unit}}</text></view>
							<view class="margin-top-xs"><text class="text-grey text-sm">建议零售价：<text class="text-red">￥{{item.price}}</text></text></view>
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
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end" style="20%">
					<view class="content">调整产品规格</view>
				</view>
				<view class="padding-xl">
					<view class="cu-list menu sm-border">
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">数量：</text>
							</view>
							<view class="action">
								<input class="text-grey" type="text"/>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">度量单位：</text>
							</view>
							<view class="action">
								<input class="text-grey" type="text"/>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">单价：</text>
							</view>
							<view class="action">
								<input class="text-grey" type="text"/>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub text-orange solid-left" @tap="handleHideModal">取消</view>
					<view class="action margin-0 flex-sub text-green solid-left" @tap="handleEdit">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				company: '',
				productList: [],
				date:'',
				totalPrice: 0.00,
				showModal: false
			};
		},
		onShow() {
			let pages = getCurrentPages()
			let currPage = pages[pages.length - 1]
			if (currPage.data.company) {
				let company = currPage.data.company
				this.company = company
			}
			if (currPage.data.product && currPage.data.product.hasOwnProperty('name')) {
				let product = currPage.data.product
				this.productList.push({ id: product.id, name: product.name, code: product.code, unit: product.unit, price: product.price})
			}
		},
		methods: {
			getCurrentUnit() {
				uni.navigateTo({
					url: '../current_unit/current_unit?call=sale'
				})
			},
			getProduct() {
				uni.navigateTo({
					url: '../product/product?call=sale'
				})
			},
			dateChange(val) {
				this.date = val.detail.value
			},
			handleDelete(val) {
				this.totalPrice = parseFloat(this.totalPrice - parseFloat(val.price)).toFixed(2)
				this.productList = this.productList.filter((item) => {
					return item.id !== val.id
				})
			},
			handleShowModal(val) {
				this.showModal = true
			},
			handleHideModal() {
				this.showModal = false
			}
		},
		watch: {
			productList: {
				handler(val) {
					this.totalPrice = 0
					if (val && val.length > 0) {
						for (let item of val) {
							this.totalPrice += parseFloat(item.price)
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
	.container {
		height: 100vh;
		width: 100vw;
		.header {
			height: 11%;
		}
		.content {
			height: 82%;
		}
		.content-picker {
			display: flex;
			flex-direction: row;
			width:100%;
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
