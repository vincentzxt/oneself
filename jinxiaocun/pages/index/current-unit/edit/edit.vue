<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" :style="{'height': mainHeight + 'px'}">
			<scroll-view :scroll-y="true" class="fill">
				<view class="main-header">
					<radio-group @change="handleTypeChange">
						<radio color="#2d8cf0" value=1 :checked="reqData.contactunittype == 1">客户</radio>
						<radio color="#2d8cf0" style="margin-left: 20px;" value=2 :checked="reqData.contactunittype == 2">供应商</radio>
						<radio color="#2d8cf0" style="margin-left: 20px;" value=3 :checked="reqData.contactunittype == 3">所有</radio>
					</radio-group>
				</view>
				<view style="margin-top:5px">
					<cu-panel>
						<cu-cell title="单位名称" :disVerMessage="verify.contactunitname.disVerMessage" :verify="verify.contactunitname.message" notNull>
							<input class="h50" slot="footer" type="text" v-model="reqData.contactunitname" placeholder-style="color:#c5c8ce" placeholder="请输入单位名称" @blur="handleVerify('contactunitname')" focus/>
						</cu-cell>
						<cu-cell title="速查码">
							<input class="h50" slot="footer" type="text" v-model="reqData.querycode" placeholder-style="color:#c5c8ce" placeholder="用于开单快速搜索"/>
						</cu-cell>
						<cu-cell title="联系人名称">
							<input class="h50" slot="footer" type="text" v-model="reqData.bseContactUnitContactModels[0].contactname" placeholder-style="color:#c5c8ce" placeholder="请输入联系人名称"/>
						</cu-cell>
						<cu-cell title="电话" :disVerMessage="verify.telephone.disVerMessage" :verify="verify.telephone.message">
							<input class="h50" slot="footer" type="text" v-model="reqData.bseContactUnitContactModels[0].telephone" placeholder-style="color:#c5c8ce" placeholder="请输入电话" @blur="handleVerify('telephone')"/>
						</cu-cell>
						<cu-cell title="位置" isLink @tap="handleOpenAddress">
							<view class="h50 fc" v-if="reqData.province" slot="footer">{{reqData.province}}, {{reqData.city}}, {{reqData.district}}</view>
							<view class="h50 fc" v-else slot="footer"></view>
						</cu-cell>
						<cu-cell title="街道">
							<input class="h50" slot="footer" type="text" v-model="reqData.address" placeholder-style="color:#c5c8ce" placeholder="请输入街道"/>
						</cu-cell>
						<cu-cell title="邮箱" isLastCell :disVerMessage="verify.email.disVerMessage" :verify="verify.email.message">
							<input class="h50" slot="footer" type="text" v-model="reqData.bseContactUnitContactModels[0].email" placeholder-style="color:#c5c8ce" placeholder="请输入邮箱" @blur="handleVerify('email')"/>
						</cu-cell>
					</cu-panel>
				</view>
				<view class="main-remarks">
					<textarea style="height: 80px;margin-left:15px;" maxlength="-1" v-model="reqData.remarks" placeholder-style="color:#c5c8ce" placeholder="备注"></textarea>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" @tap="handleSubmit">提交</button>
		</view>
		<simple-address ref="address" :pickerValueDefault="addressArray" @onCancel="handleAddressCancel" @onConfirm="handleAddressChange" themeColor='#007AFF'></simple-address>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import simpleAddress from '@/components/simple-address/simple-address.nvue'
	import { updateAll } from '@/api/current-unit.js'
	import { api } from '@/config/common.js'
	import getGlobalData from '@/utils/business.js'
	export default {
		components: {
			cuPanel,
			cuCell,
			simpleAddress
		},
		data() {
			return {
				title: '修改客户&供应商',
				reqData: {
					contactunitid: 0,
					contactunitname: '',
					contactunittype: 3,
					querycode: '',
					province: '',
					city: '',
					district: '',
					address: '',
					bseContactUnitContactModels:[
						{
							contactunitid: '',
							contactid: '',
							contactname: '',
							telephone: '',
							email: ''
						}
					],
					remarks: ''
				},
				verify: {
					contactunitname: { okVerify: false, disVerMessage: false, message: '往来单位名称不能为空' },
					telephone: { okVerify: true, disVerMessage: false, message: '号码长度不能超过11位' },
					email: { okVerify: true, disVerMessage: false, message: '请输入正确的邮箱地址' }
				},
				addressArray: [0, 0, 0],
				showArea: true
			}
		},
		onLoad(options) {
			let item = JSON.parse(options.item)
			this.reqData.contactunitid = item.contactunitid
			this.reqData.contactunitname = item.contactunitname
			this.reqData.contactunittype = item.contactunittype
			this.reqData.querycode = item.querycode
			this.reqData.province = item.province
			this.reqData.city = item.city
			this.reqData.district = item.district
			this.reqData.address = item.address
			this.reqData.bseContactUnitContactModels[0].contactunitid = this.reqData.contactunitid
			this.reqData.bseContactUnitContactModels[0].contactid = item.bseContactUnitContactModels[0].contactid
			this.reqData.bseContactUnitContactModels[0].contactname = item.bseContactUnitContactModels[0].contactname
			this.reqData.bseContactUnitContactModels[0].telephone = item.bseContactUnitContactModels[0].telephone
			this.reqData.bseContactUnitContactModels[0].email = item.bseContactUnitContactModels[0].email
			this.reqData.remarks = item.remarks
			this.addressArray.push(this.reqData.province)
			this.addressArray.push(this.reqData.city)
			this.addressArray.push(this.reqData.district)
			
			this.verify.contactunitname.okVerify = true
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
				this.reqData.contactunittype = val.detail.value
			},
			handleOpenAddress() {
				this.showArea = false
				this.$refs.address.open()
			},
			handleAddressChange(val) {
				this.addressArray = []
				for (let item of val.label.split('-')) {
					this.addressArray.push(item)
				}
				this.reqData.province = this.addressArray[0]
				this.reqData.city = this.addressArray[1]
				this.reqData.district = this.addressArray[2]
				this.showArea = true
			},
			handleAddressCancel() {
				this.showArea = true
			},
			handleVerify(val) {
				switch(val) {
					case 'contactunitname':
						if (!this.reqData.contactunitname) {
							this.verify.contactunitname.okVerify = false
							this.verify.contactunitname.disVerMessage = true
						} else {
							this.verify.contactunitname.okVerify = true
							this.verify.contactunitname.disVerMessage = false
						}
						break
					case 'telephone':
						if (!this.reqData.bseContactUnitContactModels[0].telephone) {
							this.verify.telephone.okVerify = true
							this.verify.telephone.disVerMessage = false
						} else {
							if (this.reqData.bseContactUnitContactModels[0].telephone.length > 11) {
								this.verify.telephone.okVerify = false
								this.verify.telephone.disVerMessage = true
							} else {
								this.verify.telephone.okVerify = true
								this.verify.telephone.disVerMessage = false
							}
						}
						break
					case 'email':
						if (!this.reqData.bseContactUnitContactModels[0].email) {
							this.verify.email.okVerify = true
							this.verify.email.disVerMessage = false
						} else {
							let reg = /.+@.+\..+/;
							if (!reg.test(this.reqData.bseContactUnitContactModels[0].email)) {
								this.verify.email.okVerify = false
								this.verify.email.disVerMessage = true
							} else {
								this.verify.email.okVerify = true
								this.verify.email.disVerMessage = false
							}
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
					this.$refs.loading.open()
					updateAll(api.contactUnit, {model: this.reqData }).then(res => {
						this.$refs.loading.close()
						if (res.status == 200 && res.data.returnCode == '0000') {
							getGlobalData.getCurrentUnit().then(res => {
								uni.navigateBack({
									delta: 1
								})
							}).catch(err => {
								uni.navigateBack({
									delta: 1
								})
							})
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
			.cu-form-group .title {
				min-width: calc(5em + 30px);
			}
			.main-header {
				display: flex;
				height: 140upx;
				background-color: #ffffff;
				justify-content: center;
				align-items: center;
			}
			.main-remarks {
				background-color: #ffffff;
				margin-top: 5px;
				padding-top: 5px;
			}
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
