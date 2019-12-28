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
							<radio color="#2d8cf0" value=0 :checked="formData.type == 0">客户</radio>
							<radio color="#2d8cf0" style="margin-left: 10px;" value=1 :checked="formData.type == 1">供应商</radio>
							<radio color="#2d8cf0" style="margin-left: 10px;" value=2 :checked="formData.type == 2">所有</radio>
						</radio-group>
					</view>
					<cu-panel>
						<cu-cell-group>
							<cu-cell title="单位名称">
								<input slot="footer" type="text" v-model="formData.company" placeholder-style="color:#c5c8ce" placeholder="请输入单位名称"/>
							</cu-cell>
							<cu-cell title="联系人名称">
								<input slot="footer" type="text" v-model="formData.contacts" placeholder-style="color:#c5c8ce" placeholder="请输入联系人名称"/>
							</cu-cell>
							<cu-cell title="电话">
								<input slot="footer" type="text" v-model="formData.mobile" placeholder-style="color:#c5c8ce" placeholder="请输入电话"/>
							</cu-cell>
							<cu-cell title="位置">
								<picker slot="footer" mode="region" @change="handleAddressChange" :value="formData.address">
									<text v-if="formData.address.length === 0" style="color:#c5c8ce">省/市/区</text>
									<text v-else>{{formData.address[0]}}, {{formData.address[1]}}, {{formData.address[2]}}</text>
								</picker>
							</cu-cell>
							<cu-cell title="街道">
								<input slot="footer" type="text" v-model="formData.street" placeholder-style="color:#c5c8ce" placeholder="请输入街道"/>
							</cu-cell>
							<cu-cell title="邮箱">
								<input slot="footer" type="text" v-model="formData.email" placeholder-style="color:#c5c8ce" placeholder="请输入邮箱"/>
							</cu-cell>
						</cu-cell-group>
						<cu-panel>
							<cu-cell>
								<textarea style="height: 80px" maxlength="-1" v-model="formData.remarks" placeholder-style="color:#c5c8ce" placeholder="备注"></textarea>
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
				formData: {
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
			this.formData.type = options.type
			this.formData.company = options.company
			this.formData.contacts = options.contacts
			this.formData.mobile = options.mobile
			this.formData.address = options.address.split(',')
			this.formData.street = options.street
			this.formData.email = options.email
			this.formData.remarks = options.remarks
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleTypeChange(val) {
				this.formData.type = val.detail.value
			},
			handleAddressChange(val) {
				for (let item of val.detail.value) {
					this.formData.address.push(item)
				}
			},
			handleSubmit() {
				uni.navigateBack()
			}
		},
		watch:{
			formData: {
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
			height: 11%;
		}
		.main {
			height: 82%;
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
		}
		.footer {
			height: 7%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
	}
</style>
