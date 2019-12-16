<template>
	<view class="container">
		<uni-nav-bar left-icon="arrowLeft" left-text="返回" :title="title" background-color="#68b3ff" color="#ffffff" @clickLeft="handleNavbarClickLeft" status-bar fixed></uni-nav-bar>
		<view class="header">
			<uni-search-bar placeholder="输入单位编码、名称、电话查找" @confirm="handleSearch"></uni-search-bar>
		</view>
		<view class="content">
			<uni-list>
				<uni-list-item v-for="(item, index) in lists"
					:key="index"
					:title="item.name"
					:show-arrow="false"
					showExtraText
					:extraText="item.show"
					@click="handleEdit(item)">
				</uni-list-item>
			</uni-list>
		</view>
		<uni-fab :pattern="fabPattern" horizontal="right" vertical="bottom" @onClick="handleAdd"></uni-fab>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniSearchBar from "@/components/uni-search-bar/uni-search-bar.vue"
	import uniFab from "@/components/uni-fab/uni-fab.vue"
	export default {
		components: {
			uniNavBar,
			uniIcons,
			uniList,
			uniListItem,
			uniSearchBar,
			uniFab
		},
		data() {
			return {
				title: '往来单位',
				pageCallType: 1,
				lists: [
					{id:'1', name: '张三', type:0, mobile: '13100011111', code: '00001', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'test', show:[{key:'单位编码', value:'00001'}, {key:'电话', value:'13100011111'}]},
					{id:'2', name: '李四', type:2, mobile: '15933321212', code: '00002', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00002'}, {key:'电话', value:'15933321212'}]},
					{id:'3', name: '王五', type:0, mobile: '13899077662', code: '00003', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00003'}, {key:'电话', value:'13899077662'}]},
					{id:'4', name: '北京牛栏山酒业有限公司', type:1, mobile: '13944377668', code: '00004', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00004'}, {key:'电话', value:'13944377668'}]},
					{id:'5', name: '秦始皇', type:2, mobile: '13055688774', code: '00005', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00005'}, {key:'电话', value:'13055688774'}]},
					{id:'6', name: '河北山海建材有限公司', type:1, mobile: '13844588256', code: '00006', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00006'}, {key:'电话', value:'13844588256'}]},
					{id:'7', name: '程咬金', type:0, mobile: '18666844771', code: '00007', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00007'}, {key:'电话', value:'18666844771'}]},
					{id:'8', name: '梦瑶', type:0, mobile: '15688977411', code: '00008', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00008'}, {key:'电话', value:'15688977411'}]},
					{id:'9', name: '张三丰', type:0, mobile: '13100011111', code: '00009', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00009'}, {key:'电话', value:'13100011111'}]},
					{id:'10', name: '霍元甲', type:0, mobile: '15933321212', code: '00010', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00010'}, {key:'电话', value:'15933321212'}]},
					{id:'11', name: '张居正', type:0, mobile: '13899077662', code: '00011', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00011'}, {key:'电话', value:'13899077662'}]},
					{id:'12', name: '河南油菜花食品贸易公司', type:1, mobile: '13944377668', code: '00012', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00012'}, {key:'电话', value:'13944377668'}]},
					{id:'13', name: '山东大饼有限公司', type:1, mobile: '13055688774', code: '00013', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00013'}, {key:'电话', value:'13055688774'}]},
					{id:'14', name: '张良', type:0, mobile: '13844588256', code: '00014', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00014'}, {key:'电话', value:'13844588256'}]},
					{id:'15', name: '令狐冲', type:0, mobile: '18666844771', code: '00015', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00015'}, {key:'电话', value:'18666844771'}]},
					{id:'16', name: '黑龙江水炮安防公司', type:1, mobile: '15688977411', code: '00016', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00016'}, {key:'电话', value:'15688977411'}]}
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
