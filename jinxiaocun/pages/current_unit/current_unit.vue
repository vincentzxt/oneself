<template>
	<view class="container">
		<view class="header">
			<cu-custom bgColor="bg-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">{{title}}</block>
			</cu-custom>
			<view class="cu-bar search bg-white">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input class="text-grey" @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder-class="text-gray" placeholder="输入编码、名称、电话" confirm-type="search"></input>
				</view>
				<view class="action">
					<button class="cu-btn bg-green round">搜索</button>
				</view>
			</view>
		</view>
		<view class="content">
			<scroll-view :scroll-y="true" class="fill">
				<view class="cu-list menu sm-border">
					<view class="cu-item arrow" v-for="(item, index) in lists" :key="index" @click="handleEdit(item)">
						<view class="content">
							<text class="cuIcon-profile text-grey"></text>
							<text class="text-grey">{{item.company}}</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">{{item.code}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="cuIcon-add cu-btn bg-green fill" @click="handleAdd">添加</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '客户&供应商',
				pageCall: '',
				lists: [
					{id:'1', company: '张三', contacts: '张三', type:0, mobile: '13100011111', code: '00001', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'test', show:[{key:'单位编码', value:'00001'}, {key:'电话', value:'13100011111'}]},
					{id:'2', company: '李四', contacts: '李四', type:2, mobile: '15933321212', code: '00002', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00002'}, {key:'电话', value:'15933321212'}]},
					{id:'3', company: '王五', contacts: '王五', type:0, mobile: '13899077662', code: '00003', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00003'}, {key:'电话', value:'13899077662'}]},
					{id:'4', company: '北京牛栏山酒业有限公司', contacts: '小牛', type:1, mobile: '13944377668', code: '00004', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00004'}, {key:'电话', value:'13944377668'}]},
					{id:'5', company: '秦始皇', contacts: '秦始皇', type:2, mobile: '13055688774', code: '00005', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00005'}, {key:'电话', value:'13055688774'}]},
					{id:'6', company: '河北山海建材有限公司', contacts: '小山', type:1, mobile: '13844588256', code: '00006', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00006'}, {key:'电话', value:'13844588256'}]},
					{id:'7', company: '程咬金', contacts: '程咬金', type:0, mobile: '18666844771', code: '00007', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00007'}, {key:'电话', value:'18666844771'}]},
					{id:'8', company: '梦瑶', contacts: '梦瑶', type:0, mobile: '15688977411', code: '00008', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00008'}, {key:'电话', value:'15688977411'}]},
					{id:'9', company: '张三丰', contacts: '张三丰', type:0, mobile: '13100011111', code: '00009', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00009'}, {key:'电话', value:'13100011111'}]},
					{id:'10', company: '霍元甲', contacts: '霍元甲', type:0, mobile: '15933321212', code: '00010', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00010'}, {key:'电话', value:'15933321212'}]},
					{id:'11', company: '张居正', contacts: '张居正', type:0, mobile: '13899077662', code: '00011', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00011'}, {key:'电话', value:'13899077662'}]},
					{id:'12', company: '河南油菜花食品贸易公司', contacts: '菜花', type:1, mobile: '13944377668', code: '00012', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00012'}, {key:'电话', value:'13944377668'}]},
					{id:'13', company: '山东大饼有限公司', contacts: '饼哥', type:1, mobile: '13055688774', code: '00013', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00013'}, {key:'电话', value:'13055688774'}]},
					{id:'14', company: '张良', contacts: '张良', type:0, mobile: '13844588256', code: '00014', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00014'}, {key:'电话', value:'13844588256'}]},
					{id:'15', company: '令狐冲', contacts: '令狐冲', type:0, mobile: '18666844771', code: '00015', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00015'}, {key:'电话', value:'18666844771'}]},
					{id:'16', company: '黑龙江水炮安防公司', contacts: '山炮', type:1, mobile: '15688977411', code: '00016', address:'北京市朝阳区', street:'安慧里18号', email: 'aa@163.com', remarks:'', show:[{key:'单位编码', value:'00016'}, {key:'电话', value:'15688977411'}]}
				],
				fabPattern: {
					buttonColor: '#68b3ff'
				}
			}
		},
		onLoad(options) {
			if (options) {
				this.pageCall = options.call
			}
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
				if (!this.pageCall) {
					uni.navigateTo({
						url: './edit/edit?id='+val.id+'&company='+val.company+'&contacts='+val.contacts+'&type='+val.type+'&mobile='+val.mobile+'&address='+val.address+'&street='
									+val.street+'&email='+val.email+'&remarks='+val.remarks
					})
				} else {
					let pages = getCurrentPages()
					let prevPage = pages[pages.length - 2]
					prevPage.setData({
					  company: val.company
					})
					uni.navigateBack({
						delta: 1
					})
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
		height: 100vh;
		width: 100vw;
		.header {
			height: 18%;
		}
		.content {
			height: 75%;
		}
		.footer {
			height: 7%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
	}
</style>
