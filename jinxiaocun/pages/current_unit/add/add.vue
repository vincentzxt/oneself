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
					<view class="cu-item">
						<view class="content cu-item-header">
							<radio-group class="item" @change="handleTypeChange">
								<radio class="text-grey" value=0 :checked="formData.type == 0">客户</radio>
								<radio class="text-grey" value=1 :checked="formData.type == 1" style="margin-left: 10px;">供应商</radio>
								<radio class="text-grey" value=2 :checked="formData.type == 2" style="margin-left: 10px;">所有</radio>
							</radio-group>
						</view>
					</view>
					<view class="cu-item">
						<view class="content cu-item-content">
							<text class="cuIcon-news text-grey"></text>
							<input class="text-grey" v-model="formData.company" type="text" placeholder-class="text-gray" placeholder="请输入单位名称"/>
						</view>
					</view>
					<view class="cu-item">
						<view class="content cu-item-content">
							<text class="cuIcon-profile text-grey"></text>
							<input class="text-grey" v-model="formData.contacts" type="text" placeholder-class="text-gray" placeholder="请输入联系人名称"/>
						</view>
					</view>
					<view class="cu-item">
						<view class="content cu-item-content">
							<text class="cuIcon-mobilefill text-grey"></text>
							<input class="text-grey" v-model="formData.mobile" type="text" placeholder-class="text-gray" placeholder="请输入电话"/>
						</view>
					</view>
					<view class="cu-item">
						<view class="content cu-item-content">
							<text class="cuIcon-location text-grey"></text>
							<picker mode=region @change="handleAddressChange" style="width:100%;">
								<text v-if="!formData.address" class="text-gray">点击选择</text>
								<text class="text-grey" v-else>{{formData.address}}</text>
							</picker>
						</view>
					</view>
					<view class="cu-item">
						<view class="content cu-item-content">
							<text class="cuIcon-home text-grey"></text>
							<input class="text-grey" v-model="formData.street" type="text" placeholder-class="text-gray" placeholder="请输入街道"/>
						</view>
					</view>
					<view class="cu-item">
						<view class="content cu-item-content">
							<text class="cuIcon-mail text-grey"></text>
							<input class="text-grey" v-model="formData.email" type="text" placeholder-class="text-gray" placeholder="请输入邮箱"/>
						</view>
					</view>
					<view class="cu-item" style="margin-top:10px;padding:10px;">
						<view class="content cu-item-content">
							<textarea class="text-grey" style="height: 100px;" v-model="formData.remarks" placeholder-class="text-gray" placeholder="备注" maxlength=512 />
						</view>
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
			.cu-item-header {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
			.cu-item-content {
				display: flex;
				flex-direction: row;
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
