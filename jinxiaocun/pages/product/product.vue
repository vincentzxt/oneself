<template>
	<view class="container">
		<uni-nav-bar left-icon="arrowLeft" left-text="返回" :title="title" background-color="#68b3ff" color="#ffffff" @clickLeft="handleNavbarClickLeft" status-bar fixed></uni-nav-bar>
		<view class="header">
			<uni-search-bar placeholder="输入产品编码、名称" @confirm="handleSearch"></uni-search-bar>
		</view>
		<view class="content">
			
		</view>
		<uni-fab :pattern="fabPattern" horizontal="right" vertical="bottom" @onClick="handleAdd"></uni-fab>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniIndexedList from "@/components/uni-indexed-list/uni-indexed-list.vue"
	import uniSearchBar from "@/components/uni-search-bar/uni-search-bar.vue"
	import uniFab from "@/components/uni-fab/uni-fab.vue"
	export default {
		components: {
			uniNavBar,
			uniIcons,
			uniIndexedList,
			uniSearchBar,
			uniFab
		},
		data() {
			return {
				title: '产品',
				pageCallType: 1,
				lists: [
					{id:'1', name: '长白山', type:'香烟', code: '00001', price: '11', unit: '盒', remarks:'test', show:[{key:'产品编码', value:'00001'}, {key:'单价', value:'11元/盒'}]},
					{id:'2', name: '玉溪', type:'香烟', code: '00002', price: '25', unit: '盒', remarks:'', show:[{key:'产品编码', value:'00002'}, {key:'单价', value:'25元/盒'}]},
					{id:'3', name: '燕京大绿棒子', type:'酒水', code: '00003', price: '3.5', unit: '瓶', remarks:'', show:[{key:'产品编码', value:'00003'}, {key:'单价', value:'3.5元/瓶'}]},
					{id:'4', name: '白牛二', type:'酒水', code: '00004', price: '15', unit: '瓶', remarks:'', show:[{key:'产品编码', value:'00004'}, {key:'单价', value:'15元/瓶'}]},
					{id:'5', name: '易拉罐燕京', type:'酒水', code: '00005', price: '6', unit: '瓶', remarks:'', show:[{key:'产品编码', value:'00005'}, {key:'单价', value:'6元/瓶'}]},
					{id:'6', name: '卫生纸', type:'百货', code: '00006', price: '10', unit: '卷', remarks:'', show:[{key:'产品编码', value:'00006'}, {key:'单价', value:'10元/卷'}]},
					{id:'7', name: '拖把', type:'百货', code: '00007', price: '5', unit: '把', remarks:'', show:[{key:'产品编码', value:'00007'}, {key:'单价', value:'5元/把'}]},
					{id:'8', name: '杯子', type:'百货', code: '00008', price: '1.5', unit: '个', remarks:'', show:[{key:'产品编码', value:'00008'}, {key:'单价', value:'1.5元/个'}]},
					{id:'9', name: '牛肉', type:'熟食', code: '00009', price: '29', unit: '斤', remarks:'', show:[{key:'产品编码', value:'00009'}, {key:'单价', value:'29元/斤'}]}
				],
				fabPattern: {
					buttonColor: '#68b3ff'
				}
			}
		},
		onLoad(options) {
			console.log(options)
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack()
			},
			handleSearch() {
				console.log("###search####")
			},
			handleAdd() {
				uni.navigateTo({
					url: './add/add'
				})
			},
			handleEdit(val) {
				uni.navigateTo({
					url: './edit/edit?id='+val.id+'&name='+val.name+'&type='+val.type+'&mobile='+val.mobile+'&address='+val.address+'&street='
								+val.street+'&email='+val.email+'&remarks='+val.remarks
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		.header {
			background-color: $uni-bg-color-secondary;
		},
		.content {
			display: flex;
			flex-direction: column;
			.item-text {
				margin-top: $uni-spacing-col-base;
			}
		}
	}
</style>
