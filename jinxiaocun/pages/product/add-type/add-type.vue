<template>
	<view class="container">
		<cu-custom bgColor="bg-blue" :isBack="true">
		    <block slot="backText">返回</block>
		    <block slot="content">{{title}}</block>
		</cu-custom>
		<view class="content">
			<form @submit="formSubmit">
				<view class="uni-form-item item-border">
					<view class="label">类型名称</view>
					<input class="item" v-model="formData.name" type="text" placeholder-style="color:#d4d6db" placeholder="请输入单位名称"/>
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
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			uniList,
			uniListItem,
		},
		data() {
			return {
				title: '添加产品类型',
				formData: {
					name: '',
					remarks: ''
				},
				disableSubmit: true
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack()
			},
			formSubmit() {
				uni.navigateBack()
			}
		},
		watch:{
			formData: {
				handler(val) {
					if (val.name) {
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
						width: 90%;
					}
					.right {
						width: 10%;
						margin-right: 10px;
					}
				}
			}
			.item-border {
				border-bottom: 0.5px solid $uni-border-color;
			}
		}
	}
</style>
