<template>
	<view class="container">
		<view class="header">
			<cu-custom bgColor="bg-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">{{title}}</block>
			</cu-custom>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<form>
					<view class="main-header">
						<radio-group @change="handleTypeChange">
							<radio color="#2db7f5" value=0 :checked="formData.type == 0">客户</radio>
							<radio color="#2db7f5" class="margin-left" value=1 :checked="formData.type == 1">供应商</radio>
							<radio color="#2db7f5" class="margin-left" value=2 :checked="formData.type == 2">所有</radio>
						</radio-group>
					</view>
					<view class="cu-form-group">
						<view class="title">单位名称</view>
						<input type="text" name="company" v-model="formData.company" placeholder-class="text-disabled" placeholder="请输入单位名称"/>
					</view>
					<view class="cu-form-group">
						<view class="title">联系人名称</view>
						<input type="text" name="contacts" v-model="formData.contacts" placeholder-class="text-disabled" placeholder="请输入联系人名称"/>
					</view>
					<view class="cu-form-group">
						<view class="title">电话</view>
						<input type="text" name="mobile" v-model="formData.mobile" placeholder-class="text-disabled" placeholder="请输入电话"/>
					</view>
					<view class="cu-form-group">
						<view class="title">位置</view>
						<picker mode="region" @change="handleAddressChange" :value="formData.address">
							<view class="picker">
								<text v-if="formData.address.length === 0" class="text-disabled">省/市/区</text>
								<text v-else>{{formData.address[0]}}, {{formData.address[1]}}, {{formData.address[2]}}</text>
							</view>
						</picker>
					</view>
					<view class="cu-form-group">
						<view class="title">街道</view>
						<input type="text" name="street" v-model="formData.street" placeholder-class="text-disabled" placeholder="请输入街道"/>
					</view>
					<view class="cu-form-group">
						<view class="title">邮箱</view>
						<input type="text" name="email" v-model="formData.email" placeholder-class="text-disabled" placeholder="请输入邮箱"/>
					</view>
					<view class="cu-form-group margin-top">
						<textarea maxlength="-1" v-model="formData.remarks" placeholder-class="text-disabled" placeholder="备注"></textarea>
					</view>
				</form>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="cu-btn bg-blue text-white fill" type="" :disabled="disableSubmit" @click="handleSubmit">提交</button>
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
					address: [],
					street: '',
					email: '',
					remarks: ''
				},
				disableSubmit: true
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleTypeChange(val) {
				console.log(val)
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
				border-bottom: 1px solid #dcdee2;
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
