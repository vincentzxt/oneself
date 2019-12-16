<template>
	<view class="container">
		<uni-nav-bar left-icon="arrowLeft" left-text="返回" :title="title" background-color="#68b3ff" color="#ffffff" @clickLeft="handleNavbarClickLeft" status-bar fixed></uni-nav-bar>
		<view class="content">
			<form @submit="formSubmit">
				<view class="uni-form-item item-border">
					<view class="label">单位名称</view>
					<input class="item" v-model="formData.name" type="text" placeholder-style="color:#d4d6db" placeholder="请输入单位名称"/>
				</view>
				<view class="uni-form-item item-border">
					<view class="label">单位类型</view>
					<radio-group class="item" @change="handleTypeChange">
						<radio value=0 :checked="formData.type == 0">客户</radio>
						<radio value=1 :checked="formData.type == 1" style="margin-left: 10px;">供应商</radio>
						<radio value=2 :checked="formData.type == 2" style="margin-left: 10px;">所有</radio>
					</radio-group>
				</view>
				<view class="uni-form-item item-border">
					<view class="label">电话</view>
					<input class="item" v-model="formData.mobile" type="number" placeholder-style="color:#d4d6db" placeholder="请输入电话"/>
				</view>
				<view class="uni-form-item item-border">
					<view class="label">地址</view>
					<view class="item">
						<picker mode=region @change="handleAddressChange">
							<uni-icons style="margin-right: 10px;" type="address" color="#f5c06a" size=14></uni-icons>
							<text v-if="!formData.address" style="color:#d4d6db;">点击选择</text>
							<text v-else>{{formData.address}}</text>
						</picker>
					</view>
				</view>
				<view class="uni-form-item item-border">
					<view class="label">街道</view>
					<input class="item" v-model="formData.street" type="text" placeholder-style="color:#d4d6db" placeholder="请输入街道"/>
				</view>
				<view class="uni-form-item">
					<view class="label">邮箱</view>
					<input class="item" v-model="formData.email" type="text" placeholder-style="color:#d4d6db" placeholder="请输入邮箱"/>
				</view>
				<view class="uni-form-item" style="margin-top:10px;">
					<textarea style="height: 70px;" v-model="formData.remarks" placeholder-style="color:#d4d6db" placeholder="备注" maxlength=512 />
				</view>
				<view style="margin-top:10px;">
					<button type="primary" form-type="submit" :disabled="disableSubmit">提交</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			uniNavBar,
			uniIcons,
			uniList,
			uniListItem,
		},
		data() {
			return {
				title: '修改单位信息',
				formData: {
					name: '',
					type: 0,
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
			this.formData.name = options.name
			this.formData.type = options.type
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
				this.formData.type = val
			},
			handleAddressChange(val) {
				if (val.detail.value[0] == val.detail.value[1]) {
					this.formData.address = val.detail.value[0] + val.detail.value[2]
				} else {
					this.formData.address = val.detail.value.join('')
				}
			},
			formSubmit() {
				uni.navigateBack()
			}
		},
		watch:{
			formData: {
				handler(val) {
					if (val.name && val.mobile && val.address && val.street) {
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
	.container {
		width: 100%;
		.content {
			display: flex;
			flex-direction: column;
			margin-top:$uni-spacing-col-lg;
			.uni-form-item {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding:$uni-spacing-row-lg;
				background-color: $uni-bg-color-secondary;
				.label {
					width: 40%;
				}
				.item {
					width: 60%;
				}
			}
			.item-border {
				border-bottom: 0.5px solid $uni-border-color;
			}
		}
	}
</style>
