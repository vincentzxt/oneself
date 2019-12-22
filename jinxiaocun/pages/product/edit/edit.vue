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
				<view class="cu-list icon-action">
					<view class="cu-item">
						<view class="icon">
							<text class="cuIcon-product"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">产品名称：</text>
							<input class="item-custom-content" v-model="formData.name" type="text" placeholder-class="text-slave2" placeholder="请输入产品名称"/>
						</view>
					</view>
					<view class="cu-item" @tap="handleSelectType">
						<view class="icon">
							<text class="cuIcon-classify"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">产品分类：</text>
							<text class="item-custom-content text-slave2" v-if="!formData.type">请选择产品分类</text>
							<text class="item-custom-content" v-else>{{formData.type}}</text>
						</view>
						<view class="action">
							<text class="cuIcon-arrow"></text>
						</view>
					</view>
					<view class="cu-item" @tap="handleSelectMasterUnit">
						<view class="icon">
							<text class="cuIcon-unit"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">主计量单位：</text>
							<text class="item-custom-content text-slave2" v-if="!formData.masterUnit">请选择主计量单位</text>
							<text class="item-custom-content" v-else>{{formData.masterUnit}}</text>
						</view>
						<view class="action">
							<text class="cuIcon-arrow"></text>
						</view>
					</view>
					<view class="cu-item arrow" @tap="handleSelectSlaveUnit">
						<view class="icon">
							<text class="cuIcon-unit"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">辅计量单位：</text>
							<text class="item-custom-content text-slave2" v-if="!formData.slaveUnit">请选择辅计量单位</text>
							<text class="item-custom-content" v-else>{{formData.slaveUnit}}</text>
						</view>
						<view class="action">
							<text class="cuIcon-arrow"></text>
						</view>
					</view>
					<view class="cu-item">
						<view class="icon">
							<text class="cuIcon-multiple"></text>
						</view>
						<view class="item item-custom">
							<text class="item-custom-title">计量单位倍率：</text>
							<input class="item-custom-content" v-model="formData.multiple" type="text" placeholder-class="text-slave2" placeholder="请输入计量单位倍率"/>
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
		onLoad(options) {
			this.formData.name = options.name
			this.formData.type = options.type
			this.formData.masterUnit = options.masterUnit
			this.formData.slaveUnit = options.slaveUnit
			this.formData.multiple = options.multiple
			this.formData.remarks = options.remarks
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
					url: '../type/type?callPage=1'
				})
			},
			handleSelectMasterUnit() {
				this.unitSwich = 0
				uni.navigateTo({
					url: '../unit/unit?callPage=1'
				})
			},
			handleSelectSlaveUnit() {
				this.unitSwich = 1
				uni.navigateTo({
					url: '../unit/unit?callPage=1'
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
	.container {
		height: 100vh;
		width: 100vw;
		.header {
			height: 11%;
		}
		.content {
			height: 82%;
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
		}
		.footer {
			height: 7%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
	}
</style>
