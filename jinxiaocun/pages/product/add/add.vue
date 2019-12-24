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
					<view class="cu-form-group">
						<view class="title">产品名称</view>
						<input type="text" name="name" v-model="formData.name" placeholder-class="text-disabled" placeholder="请输入产品名称"/>
					</view>
					<view class="cu-form-group" @tap="handleSelectType">
						<view class="title">产品分类</view>
						<text v-if="!formData.type" class="text-disabled">请选择产品分类</text>
						<text v-else>{{formData.type}}</text>
						<view class="cuIcon-arrow" ></view>
					</view>
					<view class="cu-form-group" @tap="handleSelectMasterUnit">
						<view class="title">主计量单位</view>
						<text v-if="!formData.masterUnit" class="text-disabled">请选择主计量单位</text>
						<text v-else>{{formData.masterUnit}}</text>
						<view class="cuIcon-arrow" ></view>
					</view>
					<view class="cu-form-group" @tap="handleSelectSlaveUnit">
						<view class="title">辅计量单位</view>
						<text v-if="!formData.slaveUnit" class="text-disabled">请选择辅计量单位</text>
						<text v-else>{{formData.slaveUnit}}</text>
						<view class="cuIcon-arrow" ></view>
					</view>
					<view class="cu-form-group">
						<view class="title">计量单位倍率</view>
						<input type="text" name="name" v-model="formData.multiple" placeholder-class="text-disabled" placeholder="请输入计量单位倍率"/>
					</view>
				</form>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="cu-btn bg-blue fill" type="" :disabled="disableSubmit" @click="handleSubmit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '添加产品',
				formData: {
					name: '',
					type: '',
					masterUnit: '',
					slaveUnit: '',
					unit: '',
					multiple: '',
					remarks: '',
				},
				disableSubmit: true,
				unitSwich: 0
			}
		},
		onShow() {
			let pages =  getCurrentPages()
			let curPage = pages[pages.length - 1]
			if (curPage.data.selectType) {
				this.formData.type = curPage.data.selectType.name
			}
			if (curPage.data.selectUnit) {
				if (this.unitSwich == 0) {
					this.formData.masterUnit = curPage.data.selectUnit.name
				} else {
					this.formData.slaveUnit = curPage.data.selectUnit.name
				}
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack()
			},
			handleSelectType() {
				uni.navigateTo({
					url: '../type/type'
				})
			},
			handleSelectMasterUnit() {
				this.unitSwich = 0
				uni.navigateTo({
					url: '../unit/unit'
				})
			},
			handleSelectSlaveUnit() {
				this.unitSwich = 1
				uni.navigateTo({
					url: '../unit/unit'
				})
			},
			handleSubmit() {
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
	.fill {
		width: 100%;
		height: 100%;
	}
	.cu-form-group .title {
		min-width: calc(4em + 15px);
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
				min-width: calc(6em + 30px);
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
