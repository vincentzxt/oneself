<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell-group>
						<cu-cell title="产品名称">
							<input slot="footer" type="text" v-model="formData.name" placeholder-style="color:#c5c8ce" placeholder="请输入产品名称"/>
						</cu-cell>
						<cu-cell title="产品分类" :value="formData.type" isLink url="../type/type" params="name=type">
						</cu-cell>
						<cu-cell title="主计量单位" :value="formData.masterUnit" isLink url="../unit/unit" params="name=masterUnit">
						</cu-cell>
						<cu-cell title="辅计量单位" :value="formData.slaveUnit" isLink url="../unit/unit" params="name=slaveUnit">
						</cu-cell>
						<cu-cell title="计量单位倍率">
							<input slot="footer" type="text" v-model="formData.multiple" placeholder-style="color:#c5c8ce" placeholder="请输入计量单位倍率"/>
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
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
				title: '修改产品',
				formData: {
					name: '',
					type: '',
					masterUnit: '',
					slaveUnit: '',
					unit: '',
					multiple: '',
					remarks: '',
				},
				disableSubmit: true
			}
		},
		onShow() {
			let pages =  getCurrentPages()
			let curPage = pages[pages.length - 1]
			if (curPage.data.rName && curPage.data.datas) {
				if (curPage.data.rName == 'type') {
					this.formData.type = curPage.data.datas.name
				} else if(curPage.data.rName == 'masterUnit') {
					this.formData.masterUnit = curPage.data.datas.name
				} else if (curPage.data.rName == 'slaveUnit') {
					this.formData.slaveUnit = curPage.data.datas.name
				}
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
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
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
