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
							<input slot="footer" type="text" v-model="reqData.name" placeholder-style="color:#c5c8ce" placeholder="请输入产品名称"/>
						</cu-cell>
						<cu-cell title="产品分类" :value="reqData.type" isLink url="../type/type" params="name=type">
						</cu-cell>
						<cu-cell title="主计量单位" :value="reqData.masterUnit" isLink url="../unit/unit" params="name=masterUnit">
						</cu-cell>
						<cu-cell v-if="reqData.masterUnit" title="辅计量单位" :value="reqData.slaveUnit" isLink url="../unit/unit" params="name=slaveUnit">
						</cu-cell>
						<cu-cell v-if="reqData.masterUnit && reqData.slaveUnit" title="计量单位倍率">
							<input slot="footer" type="text" v-model="reqData.multiple" placeholder-style="color:#c5c8ce" placeholder="请输入计量单位倍率"/>
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
				title: '添加产品',
				reqData: {
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
					this.reqData.type = curPage.data.datas.name
				} else if(curPage.data.rName == 'masterUnit') {
					this.reqData.masterUnit = curPage.data.datas.name
				} else if (curPage.data.rName == 'slaveUnit') {
					this.reqData.slaveUnit = curPage.data.datas.name
				}
			}
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
			reqData: {
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
			height: 10%;
		}
		.main {
			height: 83%;
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
