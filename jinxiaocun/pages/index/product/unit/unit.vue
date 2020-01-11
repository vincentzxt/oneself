<template>
	<view class="container">
		<view :style="{'height': headerHeight + 'px'}">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
			<uni-search-bar @input="handleSearch" placeholder="输入名称" cancelButton="always"></uni-search-bar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell-group>
						<cu-cell :title="item" v-for="(item, index) in searchDatas" :key="index" isReturn :rName="name" :rDatas="filterItem(item)">
						</cu-cell>
					</cu-cell-group>
				</cu-panel>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	export default {
		components: {
			uniSearchBar,
			cuPanel,
			cuCell,
			cuCellGroup
		},
		data() {
			return {
				name: '',
				title: '计量单位',
				datas: null,
				searchDatas: null
			}
		},
		onLoad(options) {
			this.name = options.name
		},
		onShow() {
			if (this.name == 'unit') {
				this.datas = uni.getStorageSync('productCategory').units
			} else {
				this.datas = uni.getStorageSync('productCategory').subUnits
			}
			this.searchDatas = this.datas
		},
		computed: {
			headerHeight() {
				return this.$headerIsSearchHeight
			}
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			filterItem(item) {
				return { 'name': item }
			},
			handleSearch(val) {
				if (val.value) {
					this.searchDatas = this.datas.filter((item) => {
						return item.name.indexOf(val.value) !== -1
					})
				} else {
					this.searchDatas = this.datas
				}
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
		.main {
			margin-top: 5px;
		}
	}
</style>
