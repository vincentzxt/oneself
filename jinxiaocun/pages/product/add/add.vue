<template>
	<view class="container">
		<cu-custom bgColor="bg-blue" :isBack="true">
		    <block slot="backText">返回</block>
		    <block slot="content">{{title}}</block>
		</cu-custom>
		<view class="content">
			<form @submit="formSubmit">
				<view class="uni-form-item item-border">
					<view class="label">产品名称</view>
					<input class="item" v-model="formData.name" type="text" placeholder-style="color:#d4d6db" placeholder="请输入产品名称"/>
				</view>
				<view class="uni-form-item item-border">
					<view class="label">产品类型</view>
					<view class="item">
						<view class="left">
							<picker :range="productType" @change="handleTypeChange">
								<text v-if="!formData.type" style="color:#d4d6db;">点击选择</text>
								<text v-else>{{formData.type}}</text>
							</picker>
						</view>
						<view class="right" @click="handleAddType">
							<text class="lg" :class="'cuIcon-right'"></text>
						</view>
					</view>
				</view>
				<view class="uni-form-item item-border">
					<view class="label">度量单位</view>
					<input class="item" v-model="formData.unit" type="text" placeholder-style="color:#d4d6db" placeholder="请输入度量单位"/>
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
				title: '添加产品',
				formData: {
					name: '',
					type: '',
					unit: '',
					remarks: ''
				},
				productType: [ '香烟', '酒水', '百货', '熟食'],
				disableSubmit: true
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack()
			},
			handleTypeChange(val) {
				this.formData.type = this.productType[val.detail.value]
			},
			handleAddType() {
				uni.navigateTo({
					url: '../add-type/add-type'
				})
			},
			formSubmit() {
				uni.navigateBack()
			}
		},
		watch:{
			formData: {
				handler(val) {
					if (val.name && val.type && val.unit) {
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
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.left {
						width: 80%;
					}
					.right {
						width: 20%;
						text-align: right;
					}
				}
			}
			.item-border {
				border-bottom: 0.5px solid $uni-border-color;
			}
		}
	}
</style>
