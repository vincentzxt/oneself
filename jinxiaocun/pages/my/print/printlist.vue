<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<SortPickerList ref="sortPickerList" @clickData="clickData"></SortPickerList>
		<cu-loading ref="loading"></cu-loading>
	</view>
</template>
<script>
	import SortPickerList from "@/components/nickro-sortPickerList/nickro-sortPickerList.vue"
	import { post, tokenpost } from '@/api/user.js';
	import cuLoading from '@/components/custom/cu-loading.vue';
	import { api } from '@/config/common.js';
	export default {
		components: {SortPickerList,cuLoading},
		data() {
			return {
				title:'打印机列表'
			}
		},
		onLoad() {
			this.loadPrintModel();
		},
		methods: {
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				});
			},
			loadPrintModel() {
				const sendData = {}
				this.$refs.loading.open();
				tokenpost(api.GetWSYLPrinterList, sendData)
					.then(res => {
						this.$refs.loading.close();
						var modelList = [];
						if (res.status == 200 && res.data.returnCode == '0000') {
							res.data.data.forEach(function(item) {
								modelList.push({ name: item, value: item });
							});
							var that = this;
							that.$refs['sortPickerList'].initPage(modelList);
						} else {
							this.$api.msg(res.data.returnMessage)
						}
					})
					.catch(error => {
						this.$api.msg('请求失败fail');
						this.$refs.loading.close();
					});
			},
			clickData(data) {
				uni.$emit('printModelChange',{'value':data.value});
				this.handleNavbarClickLeft()
			}
		}
	}
</script>

<style>
	
</style>
