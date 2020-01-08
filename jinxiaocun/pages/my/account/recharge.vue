<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
	<!-- 	<view style="margin-bottom: 20rpx;">
			续费
			<view v-if="pickerIndex >= 0" style="margin-top: 20rpx;">
				<view style="font-size: 28rpx;">操作：</view>
				<button type="default" size="mini" @tap="getData">获取已选数据</button>
				<button type="default" size="mini" @tap="check" style="margin-left: 10rpx;">全选</button>
				<button type="default" size="mini" @tap="invert" style="margin-left: 10rpx;">反选</button>
				<button type="default" size="mini" @tap="cancel" style="margin-left: 10rpx;">取消</button>
				<view style="font-size: 28rpx;margin-top: 20rpx;padding-top: 20rpx;border-top: #e5e5e5 solid 1px;">组件演示：</view>
			</view>
		</view> -->
		<view class="main"><helang-checkbox ref="checkbox" @change="onChange"></helang-checkbox></view>
		<view class="footer">
			<button class="footer-btn" style="background-color: #2d8cf0;" type="primary" @click="handleSubmit">购买</button>
		</view>
	</view>
	
</template>

<script>
	import helangCheckbox from "@/components/helang-checkbox/helang-checkbox.vue"
	export default {
		components: {
		    "helang-checkbox":helangCheckbox
		},
		data() {
			return {
				title:'续费',
				pickerIndex:-1,
				list: [{
					id:1,
					text:'一周',
					sontext:'30元'
				},
				{
					id:2,
					text:'一个月',
					sontext:'150元'
				},
				{
					id:3,
					text:'半年',
					sontext:'300元'
				},
				{
					id:4,
					text:'一年',
					sontext:'500元'
				}
				]
			}
		},
		onLoad(){
			
		},
		onShow(){
			this.$refs.checkbox.set({
				type:'checkbox',		// 类型：复选框
				column:2,				// 分列：3
				list:this.list	// 列表数据
			});
			this.pickerIndex = 3;
		},
		methods: {
			/* 创建列表数据 */
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			creatorList(){
				let arr=[];
				for(let i=1; i<16;i++){
					arr.push({
						id:i,
						text:`第${i}项`,
						sontext:'30元'
					});
				}
				return arr;
			},
			
			/* 获取数据 */
			getData(){
				let data = this.$refs.checkbox.get();	// 组件返回的数据
				uni.showToast({
					title:'在控制台看数据',
					icon:'none',
					duration:1000,
					mask:false,
					success:()=>{
						console.log(data);
					}
				});
			},
			/* 选项切换事件 */
			onChange(data){
				console.log(data);
			},
			/* 全选 */
			check(){
				this.$refs.checkbox.checkAll();		// 该功能在单选框模式下无效
				this.getData();
			},
			/* 取消全选 */
			cancel(){
				this.$refs.checkbox.cancelAll();	// 该功能在单选框模式下为取消当前选中项
				this.getData();
			},
			/* 反选 */
			invert(){
				this.$refs.checkbox.invertAll();	// 该功能在单选框模式下为取消当前选中项
				this.getData();
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{
	padding: 30rpx 20rpx;
}
.footer {
	margin-top: 90upx;
			height: 7%;
			display: flex;
			&-btn	{
				width: 80%;
				height: 100%;
			}
		}
</style>
