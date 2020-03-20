<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
					<cu-cell title="设备类型" isLink>
						<view slot="footer" style="width:100%;">
							<picker @change="handlePrintChanage" :range="printList" :value="reqData.printertype" range-key='name'>
								<view class="main-picker">
									<text v-if="reqData.printertype==''" style="color:#c5c8ce">请选择设备类型</text>
									<text v-else>{{printList[reqData.printertype].name}}</text>
								</view>
							</picker>
						</view>
					</cu-cell>
			<cu-cell title="打印机型号" isLink v-if="reqData.printertype==1">
				<view slot="footer" style="width:100%;">
					<picker @change="handlePrintModelChanage" :range="printModel" :value="printModelIndex" range-key='name'>
						<view class="main-picker">
							<text v-if="reqData.printermodel==''" style="color:#c5c8ce">请选择打印机型号</text>
							<text v-else>{{reqData.printermodel}}</text>
						</view>
					</picker>
				</view>
			</cu-cell>
			<cu-cell title="打印机名称">
				<view class="h50 fc" slot="footer">
				<input type="text" v-model="reqData.printername" placeholder-style="color:#c5c8ce" placeholder="请输入打印机名称"/>
				</view>
			</cu-cell>
						<cu-cell title="设备编号">
							<view class="h50 fc" slot="footer">
							<input type="text" v-model="reqData.printercode" placeholder-style="color:#c5c8ce" placeholder="请输入设备编号"/>
							</view>
						</cu-cell>
						<cu-cell title="设备密钥">
							<view class="h50 fc" slot="footer">
							<input type="text" v-model="reqData.printerkey" placeholder-style="color:#c5c8ce" placeholder="请输入设备密钥"/>
						</view>
						</cu-cell>
				</cu-panel>
				<cu-loading ref="loading"></cu-loading>
			</scroll-view>
		</view>
		<view class="footer">
			<button class="footer-btn" style="background-color: #2d8cf0;" :loading="loading"  type="primary" @click="handleSubmit">提交</button>
		</view>
	</view>
</template>

<script>
	import cuPanel from '@/components/custom/cu-panel.vue'
	import cuCell from '@/components/custom/cu-cell.vue'
	import cuCellGroup from '@/components/custom/cu-cell-group.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { post,tokenpost} from '@/api/user.js';
	import cuLoading from '@/components/custom/cu-loading.vue';
	import { api } from '@/config/common.js';
	export default {
		components: {
			cuPanel,
			cuCell,
			cuCellGroup,
			uniList,
			uniListItem
		},
		data() {
			return {
				reqData: {
					printertype:0,
					printerid:0,
					printername:'',
					printermodel:'',
					printercode:'',
					printerkey:'',
				},
				printTypeindex:1,
				printModelIndex:1,
				printList: [{name:''},{name:'盒子'},{name:'映美'}],
				printModel:[{name:''},{name:'Aisino TY-805E'},{name:'Aisino XY-8010+'},{name:'Aisino AX-380+'},{name:'Epson LQ-1600K'},{name:'EPSON LQ-730K ESC/P2'},{name:'HP LaserJet Pro MFP M127-M128 PCLmS'},{name:'HP Color LaserJet 2800 Series PS'},{name:'HP LaserJet CP 1025'}],
				loading:false,
				title: '打印机设置'
			};
		},
		onShow() {
		},
		onLoad(option){
			this.loadData();
		},
		methods: {
		
			handlePrintChanage(val) {
				this.reqData.printertype = val.detail.value;
			},
			handlePrintModelChanage(val) {
				this.reqData.printermodel = this.printModel[val.detail.value].name;
				this.printModelIndex =val.detail.value;
				// this.reqData.printercode = this.printModel[val.detail.value].printercode;
			},
			handleNavbarClickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			
			loadPrintModel(){
				
			},
			loadData() {
				this.$refs.loading.open()
				const sendData = {
				};
				tokenpost(api.GetFirstActivePrinter,sendData).then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.reqData = res.data.data;
					} else {
						this.$api.msg(res.data.returnMessage) 
					}
				}).catch(error => {
					this.$refs.loading.close();
					this.$api.msg('请求失败fail') 
				})
			},
			arrayLookup(data,key,value){
			    var targetValue = "";
			    for (var i = 0; i < data.length; i++) {
			        if(data[i][key]==value){
			            targetValue = i;
			            break;
			        }
			    }
			    return targetValue;
				},
			handleSubmit() {
				const reqData = {
					printertype:this.reqData.printertype,
					printerid:this.reqData.printerid,
					printername:this.reqData.printername,
					printermodel:this.reqData.printermodel,
					printercode:this.reqData.printercode,
					printerkey:this.reqData.printerkey,
				}
				
				if (reqData.printername.length == 0) {
					this.$api.msg('打印机名称不能为空');
					return;
				}
				if (reqData.printermodel.length== 0) {
					this.$api.msg('打印机型号不能为空！');
					return;
				}
				if (reqData.printertype== 0) {
					this.$api.msg('设备类型不能为空！');
					return;
				}
				if (reqData.printercode.length == 0) {
					this.$api.msg('设备编号不能为空');
					return;
				}
				if (reqData.printerkey.length== 0) {
					this.$api.msg('设备密钥不能为空！');
					return;
				}
				this.loading = true;
				tokenpost(api.BindPrint, reqData)
					.then(res => {
						if (res.status == 200 && res.data.returnCode == '0000') {
							this.$api.msg(res.data.returnMessage);
						} else {
							this.$api.msg(res.data.returnMessage);
						}
						this.loading = false;
					})
					.catch(error => {
						this.loading = false;
						this.$api.msg('请求失败fail');
				});
				
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
		font-size: $uni-font-size-base;
		height: 100vh;
		width: 100vw;
		.header {
			height: 10%;
		}
		.main {
			height: 83%;
			.picker {
				width: 100%;
				display: flex;
				justify-content: flex-end;
			}
		}
		.footer {
			height: 7%;
			display: flex;
			background-color:$uni-split-color;
			&-text {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: $uni-spacing-row-lg;
			}
			&-btn	{
				width: 100%;
				height: 100%;
			}
		}
	}
	.uni-list-cell {
		display: flex;
		flex-direction: column;
	    justify-content: flex-start
	}
	.h50{
	height: 72upx;
		}
.fc {
	display: flex;
	align-items: center;
}
</style>
