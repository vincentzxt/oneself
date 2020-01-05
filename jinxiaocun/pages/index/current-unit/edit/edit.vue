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
							<radio color="#2d8cf0" value=0 :checked="reqData.type == 0">客户</radio>
							<radio color="#2d8cf0" style="margin-left: 10px;" value=1 :checked="reqData.type == 1">供应商</radio>
							<radio color="#2d8cf0" style="margin-left: 10px;" value=2 :checked="reqData.type == 2">所有</radio>
						</radio-group>
					</view>
					<cu-panel>
						<cu-cell-group>
							<cu-cell title="单位名称">
								<input slot="footer" type="text" v-model="reqData.company" placeholder-style="color:#c5c8ce" placeholder="请输入单位名称"/>
							</cu-cell>
							<cu-cell title="联系人名称">
								<input slot="footer" type="text" v-model="reqData.contacts" placeholder-style="color:#c5c8ce" placeholder="请输入联系人名称"/>
							</cu-cell>
							<cu-cell title="电话">
								<input slot="footer" type="text" v-model="reqData.mobile" placeholder-style="color:#c5c8ce" placeholder="请输入电话"/>
							</cu-cell>
							<cu-cell title="位置">
								<view style="width:85%;">
									<picker mode="region" @change="handleAddressChange" :value="reqData.address">
										<view class="picker">
											<text v-if="reqData.address.length === 0" style="color:#c5c8ce">省/市/区</text>
											<text v-else>{{reqData.address[0]}}, {{reqData.address[1]}}, {{reqData.address[2]}}</text>
										</view>
									</picker>
								</view>
							</cu-cell>
							<cu-cell title="街道">
								<input slot="footer" type="text" v-model="reqData.street" placeholder-style="color:#c5c8ce" placeholder="请输入街道"/>
							</cu-cell>
							<cu-cell title="邮箱">
								<input slot="footer" type="text" v-model="reqData.email" placeholder-style="color:#c5c8ce" placeholder="请输入邮箱"/>
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
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	export default {
		components: {
			cuPanel,
			cuCell,
			cuCellGroup
		},
		data() {
			return {
				title: '修改客户&供应商',
				reqData: {
					type: 0,
					company: '',
					contacts: '',
					mobile: '',
					address: [],
					street: '',
					email: '',
					remarks: ''
				},
				disableSubmit: true
			}
		},
		onLoad(options) {
			this.reqData.contactunitid = options.contactunitid
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleTypeChange(val) {
				this.reqData.type = val.detail.value
			},
			handleAddressChange(val) {
				if (val.detail.value) {
					this.reqData.address = []
					for (let item of val.detail.value) {
						this.reqData.address.push(item)
					}
				}
			},
			handleSubmit() {
				uni.navigateBack()
			}
		},
		watch:{
			reqData: {
				handler(val) {
					if (val.company && val.contacts && val.mobile && val.address && val.street) {
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
