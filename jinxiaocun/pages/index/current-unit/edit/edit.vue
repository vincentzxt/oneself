<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
					<view class="main-header">
						<radio-group @change="handleTypeChange">
							<radio color="#2d8cf0" value=1 :checked="reqData.contactunittype == 1">客户</radio>
							<radio color="#2d8cf0" style="margin-left: 10px;" value=2 :checked="reqData.contactunittype == 2">供应商</radio>
							<radio color="#2d8cf0" style="margin-left: 10px;" value=3 :checked="reqData.contactunittype == 3">所有</radio>
						</radio-group>
					</view>
					<cu-panel>
						<cu-cell-group>
							<cu-cell title="单位名称">
								<input slot="footer" type="text" v-model="reqData.contactunitname" placeholder-style="color:#c5c8ce" placeholder="请输入单位名称"/>
							</cu-cell>
							<cu-cell title="速查码">
								<input slot="footer" type="text" v-model="reqData.querycode" placeholder-style="color:#c5c8ce" placeholder="请输入单位速查码"/>
							</cu-cell>
							<cu-cell title="联系人名称">
								<input slot="footer" type="text" v-model="reqData.bseContactUnitContactModels[0].contactname" placeholder-style="color:#c5c8ce" placeholder="请输入联系人名称"/>
							</cu-cell>
							<cu-cell title="电话">
								<input slot="footer" type="text" v-model="reqData.bseContactUnitContactModels[0].telephone" placeholder-style="color:#c5c8ce" placeholder="请输入电话"/>
							</cu-cell>
							<cu-cell title="位置" isLink @tap="handleOpenAddress">
								<text v-if="reqData.province" slot="footer">{{reqData.province}}, {{reqData.city}}, {{reqData.district}}</text>
							</cu-cell>
							<cu-cell title="街道">
								<input slot="footer" type="text" v-model="reqData.address" placeholder-style="color:#c5c8ce" placeholder="请输入街道"/>
							</cu-cell>
							<cu-cell title="邮箱">
								<input slot="footer" type="text" v-model="reqData.bseContactUnitContactModels[0].email" placeholder-style="color:#c5c8ce" placeholder="请输入邮箱"/>
							</cu-cell>
						</cu-cell-group>
						<cu-panel>
							<cu-cell>
								<textarea style="height: 80px" maxlength="-1" v-model="reqData.remarks" placeholder-style="color:#c5c8ce" placeholder="备注"></textarea>
							</cu-cell>
						</cu-panel>
					</cu-panel>
				</form>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="fill" style="background-color: #2d8cf0;" type="primary" :disabled="disableSubmit" @tap="handleSubmit">提交</button>
		</view>
		<simple-address ref="address" :pickerValueDefault="addressArray" @onConfirm="handleAddressChange" themeColor='#007AFF'></simple-address>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import simpleAddress from '@/components/simple-address/simple-address.nvue'
	import { updateAll } from '@/api/current-unit.js'
	import { api } from '@/config/common.js'
	import getGlobalData from '@/utils/business.js'
	export default {
		components: {
			cuPanel,
			cuCell,
			cuCellGroup,
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
				disableSubmit: true,
				addressArray: [0, 0, 0]
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
			},
			handleSubmit() {
				updateAll(api.contactUnit, {model: this.reqData }).then(res => {
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
							title: '修改失败'
						})
					}
				}).catch(error => {
					uni.showToast({
						title: '修改失败'
					})
				})
			}
		},
		watch:{
			reqData: {
				handler(val) {
					if (val.contactunitname) {
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
			.picker {
				width: 100%;
				display: flex;
				justify-content: flex-end;
			}
		}
		.footer {
			height: 7%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
	}
</style>
