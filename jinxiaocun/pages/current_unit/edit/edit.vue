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
				<view class="content-header">
					<radio-group class="item" @change="handleTypeChange">
						<radio color="#2db7f5" value=0 :checked="formData.type == 0">客户</radio>
						<radio color="#2db7f5" value=1 :checked="formData.type == 1" style="margin-left: 10px;">供应商</radio>
						<radio color="#2db7f5" value=2 :checked="formData.type == 2" style="margin-left: 10px;">所有</radio>
					</radio-group>
				</view>
				<view class="cu-list icon">
					<view class="cu-item">
						<view class="icon">
							<text class="cuIcon-company"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">单位名称：</text>
							<input class="item-custom-content" v-model="formData.company" type="text" placeholder-class="text-slave2" placeholder="请输入单位名称"/>
						</view>
					</view>
					<view class="cu-item">
						<view class="icon">
							<text class="cuIcon-contacts"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">联系人名称：</text>
							<input class="item-custom-content" v-model="formData.contacts" type="text" placeholder-class="text-slave2" placeholder="请输入联系人名称"/>
						</view>
					</view>
					<view class="cu-item">
						<view class="icon">
							<text class="cuIcon-mobile"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">电话：</text>
							<input class="item-custom-content" v-model="formData.mobile" type="text" placeholder-class="text-slave2" placeholder="请输入电话"/>
						</view>
					</view>
					<view class="cu-item">
						<view class="icon">
							<text class="cuIcon-location"></text>
						</view>
							<view class="item item-custom">
								<picker mode=region @change="handleAddressChange" style="width: 100%">
									<view class="picker-content">
										<text class="item-custom-title">位置：</text>
										<text class="content text-slave2" v-if="!formData.address">省/市/区</text>
										<text class="item-custom-content" v-else>{{formData.address}}</text>
									</view>
								</picker>
							</view>
					</view>
					<view class="cu-item">
						<view class="icon">
							<text class="cuIcon-home"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">街道：</text>
							<input class="item-custom-content" v-model="formData.street" type="text" placeholder-class="text-slave2" placeholder="请输入街道"/>
						</view>
					</view>
					<view class="cu-item">
						<view class="icon">
							<text class="cuIcon-email"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">邮箱：</text>
							<input class="item-custom-content" v-model="formData.email" type="text" placeholder-class="text-slave2" placeholder="请输入邮箱"/>
						</view>
					</view>
					<view class="list-footer">
						<textarea style="height: 100px;" v-model="formData.remarks" placeholder-class="text-slave2" placeholder="备注" maxlength=512 />
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="cu-btn bg-green fill" type="" :disabled="disableSubmit" @click="handleSubmit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '添加客户&供应商',
				formData: {
					type: 0,
					company: '',
					contacts: '',
					mobile: '',
					address: '',
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
			this.formData.address = options.address
			this.formData.street = options.street
			this.formData.email = options.email
			this.formData.remarks = options.remarks
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack()
			},
			handleTypeChange(val) {
				this.formData.type = val.detail.value
			},
			handleAddressChange(val) {
				if (val.detail.value[0] == val.detail.value[1]) {
					this.formData.address = val.detail.value[0] + val.detail.value[2]
				} else {
					this.formData.address = val.detail.value.join('')
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
		.content {
			height: 82%;
			.content-header {
				display: flex;
				height: 140upx;
				background-color: #ffffff;
				justify-content: center;
				align-items: center;
				border-bottom: 1px solid #dcdee2;
			}
			.item-custom {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				.item-custom-title {
					width: 40%;
				}
				.item-custom-content {
					width: 60%;
				}
			}
			.picker-content {
				display: flex;
				justify-content: space-between;
			}
			.list-footer {
				background-color: #ffffff;
				margin-top: 10upx;
				padding-left: 10upx;
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
