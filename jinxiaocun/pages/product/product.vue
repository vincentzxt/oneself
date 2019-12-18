<template>
	<view class="container">
		<cu-custom bgColor="bg-blue" :isBack="true">
		    <block slot="backText">返回</block>
		    <block slot="content">{{title}}</block>
		</cu-custom>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="输入编码、名称" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height: calc(100vh - 280upx);">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in types" :key="index" @tap="TabSelect"
				 :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height: calc(100vh - 280upx);"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in types" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text>{{item.name}}</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item" v-for="(item,index) in lists" :key="index"  @click="handleEdit(item)">
							<view class="content">
								<view class="text-grey">{{item.name}}</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										{{item.code}}
									</text>
								</view>
							</view>
							<view class="action">
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!--<uni-fab :pattern="fabPattern" horizontal="right" vertical="bottom" @onClick="handleAdd"></uni-fab>-->
		<button style="height: 100upx;margin-top: -50upx;" type="primary" @tap="handleAdd()">增加产品</button>
	</view>
</template>

<script>
	import uniFab from "@/components/uni-fab/uni-fab.vue"
	export default {
		components: {
			uniFab
		},
		data() {
			return {
				pageCall: '',
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				types: [
					{ id: '1', 'name': '香烟'},
					{ id: '2', 'name': '酒水'},
					{ id: '3', 'name': '百货'},
					{ id: '4', 'name': '熟食'}
				],
				lists: [
					{id:'1', name: '长白山', type:'香烟', code: '00001', unit: '盒', price: '11', remarks:'test' },
					{id:'2', name: '玉溪', type:'香烟', code: '00002', unit: '盒', price: '23', remarks:'' },
					{id:'3', name: '燕京大绿棒子', type:'酒水', code: '00003', unit: '瓶', price: '3.5', remarks:'' },
					{id:'4', name: '白牛二', type:'酒水', code: '00004', unit: '瓶', price: '15', remarks:'' },
					{id:'5', name: '易拉罐燕京', type:'酒水', code: '00005', unit: '瓶', price: '6', remarks:'' },
					{id:'6', name: '卫生纸', type:'百货', code: '00006', unit: '卷', price: '2', remarks:'' },
					{id:'7', name: '拖把', type:'百货', code: '00007', unit: '把', price: '10', remarks:'' },
					{id:'8', name: '杯子', type:'百货', code: '00008', unit: '个', price: '6', remarks:'' },
					{id:'9', name: '牛肉', type:'熟食', code: '00009', unit: '斤', price: '29', remarks:'' }
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
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.lists.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.lists[i].id);
						view.fields({
							size: true
						}, data => {
							this.lists[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.lists[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.lists.length; i++) {
					if (scrollTop > this.lists[i].top && scrollTop < this.lists[i].bottom) {
						this.verticalNavTop = (this.lists[i].id - 1) * 50
						this.tabCur = this.lists[i].id
						return false
					}
				}
			},
			handleAdd() {
				uni.navigateTo({
					url: './add/add'
				})
			},
			handleEdit(val) {
				if (!this.pageCall) {
					uni.navigateTo({
						url: './edit/edit?id='+val.id+'&name='+val.name+'&type='+val.type+'&unit='+val.unit+'&remarks='+val.remarks
					})
				} else {
					let pages = getCurrentPages()
					let prevPage = pages[pages.length - 2]
					prevPage.setData({
						product: val
					})
					uni.navigateBack({
						delta: 1
					})
				}
			}
		},
	}
</script>
<style>
	.container {
		width: 100%;
		height: 100%;
	}
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
</style>
