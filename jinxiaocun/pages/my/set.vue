<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
						<cu-cell title="公司Logo">
							<view class="h80 fc" slot="footer">
								 <image class="portrait" :src="reqData.companylogourl_http || '/static/image/logo.png'" @tap="chooseImage()"></image>
								<!-- <image class="portrait" :src="reqData.companylogourl_http || '/static/image/logo.png'" @tap="upload"></image> -->
								</view>
							
						</cu-cell>
						<cu-cell title="商户名称">
							<view class="h50 fc" slot="footer"><input type="text" v-model="reqData.companyname" placeholder-style="color:#c5c8ce" placeholder="商户名称" /></view>	
						</cu-cell>
						<cu-cell title="联系人">
							<view class="h50 fc" slot="footer"><input type="text" v-model="reqData.contact" placeholder-style="color:#c5c8ce" placeholder="请输入联系人" /></view>
							</cu-cell>
						<cu-cell title="联系电话">
							<view class="h50 fc" slot="footer"><input type="number" v-model="reqData.telephone" placeholder-style="color:#c5c8ce" placeholder="请输入联系人电话" /></view>	
						</cu-cell>
						<cu-cell title="邮箱">
							<view class="h50 fc" slot="footer"><input type="text" v-model="reqData.cusemail" placeholder-style="color:#c5c8ce" placeholder="请输入电子邮箱" /></view>
							</cu-cell>
				<cu-cell title="地址"  isLastCell>
					<textarea  style="height: 80px" slot="footer" maxlength="-1" v-model="reqData.address" placeholder-style="color:#c5c8ce" placeholder="地址"></textarea>
						</cu-cell>
						</cu-panel>
			</scroll-view>
		</view>
		        <kps-image-cutter @ok="onok" @cancel="oncancle" :url="url" :fixed="true" :width="200" :height="200"></kps-image-cutter>

		 <!-- <image-cropper :src="tempFilePath" @confirm="confirm"  @cancel="cancel"></image-cropper> -->

		<cu-loading ref="loading"></cu-loading>
		<view class="footer"><button class="footer-btn" style="background-color: #2d8cf0;"  :loading="loading"  type="primary" @click="handleSubmit">提交</button></view>
	</view>
</template>

<script>
import cuPanel from '@/components/custom/cu-panel.vue';
import cuCell from '@/components/custom/cu-cell.vue';
import cuCellGroup from '@/components/custom/cu-cell-group.vue';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import { post, tokenpost } from '@/api/user.js';
import { api } from '@/config/common.js';
// import ImageCropper from '@/components/invinbg-image-cropper/invinbg-image-cropper.vue';
import kpsImageCutter from "@/components/ksp-image-cutter/ksp-image-cutter.vue";
import cuLoading from '@/components/custom/cu-loading.vue';
export default {
	components: {
		cuPanel,
		cuCell,
		cuCellGroup,
		uniList,
		uniListItem,
		// ImageCropper,
		kpsImageCutter
	},
	data() {
		return {
			tempFilePath: '',
			cropFilePath: '',
			loading:false,
			 url: "",
                path: "",
			reqData: {
				companylogourl: '',
				companyname: '',
				contact: '',
				telephone: '',
				cusemail:'',
				email: '',
				address: ''
			},
			title: '设置'
		};
	},
	onShow() {
		
	},
	onLoad(){
		this.loadData();
	},
	methods: {
		
		chooseImage() {
                uni.chooseImage({
                    success: (res) => {
                        // 设置url的值，显示控件
                        this.tempFilePath = res.tempFilePaths[0];
						this.url = res.tempFilePaths[0];
                    }
                });
            },
            onok(ev) {
                this.tempFilePath = ev.path;
				const token = uni.getStorageSync('userInfo').token;
			const header = {
				'content-type': 'multipart/form-data',
				Authorization: 'Bearer ' + token
			};
			uni.uploadFile({
				url: api.baseUrl + api.UploadImg, //仅为示例，非真实的接口地址
				filePath: this.tempFilePath,
				name: 'file',
				header: header,
				formData: {},  
				success: uploadFileRes => {
					var res = JSON.parse(uploadFileRes.data);
					if (uploadFileRes.statusCode == 200 && res.returnCode == '0000') {
					  this.reqData.companylogourl_http= api.baseUrl+res.data.linkUrl;
					  this.reqData.companylogourl= res.data.linkUrl;  
					} else {
						this.$api.msg(res.returnMessage);
					}
					
				}
			});
             this.url = "";   
            },
            oncancle() {
                // url设置为空，隐藏控件
                this.tempFilePath = "";
				 this.url = "";
            },
			
		handleNavbarClickLeft() {
			uni.navigateBack({
				delta: 1
			});
		},
		upload() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: res => {
					
					this.tempFilePath = res.tempFilePaths.shift();
					//this.confirm();
				}
			});
		},
		confirm(e) {
			//this.tempFilePath = ''
			//this.reqData.companylogourl = e.detail.tempFilePath;
			const token = uni.getStorageSync('userInfo').token;
			const header = {
				'content-type': 'multipart/form-data',
				Authorization: 'Bearer ' + token
			};
			uni.uploadFile({
				url: api.baseUrl + api.UploadImg, //仅为示例，非真实的接口地址
				filePath: e.detail.tempFilePath,
				name: 'file',
				header: header,
				formData: {},  
				success: uploadFileRes => {
					var res = JSON.parse(uploadFileRes.data);
					if (uploadFileRes.statusCode == 200 && res.returnCode == '0000') {
					  this.reqData.companylogourl_http= api.baseUrl+res.data.linkUrl;
					  this.reqData.companylogourl= res.data.linkUrl;
					} else {
						this.$api.msg(res.returnMessage);
					}
				}
			});
		},
		cancel() {
			console.log('canceled');
		},
		loadData() {
			console.log("kkk");
			this.$refs.loading.open();
			tokenpost(api.GetUserInfo)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						console.log(res.data.data);
						this.reqData = res.data.data;
						if(res.data.data.companylogourl!=''){
							this.reqData.companylogourl_http = api.baseUrl+res.data.data.companylogourl;
						}
					} else {
						this.$api.msg(res.data.returnMessage);
					}
				})
				.catch(error => {
					this.$refs.loading.close();
					this.$api.msg('请求失败fail');
				});
		},
		handleSubmit() {
			const { companylogourl, companyname, contact, telephone, email,cusemail, address } = this.reqData;
			const sendData = {
				companylogourl,
				companyname,
				contact,
				telephone,
				email:cusemail,
				address
			};
			this.loading = true;
			tokenpost(api.CustomerSave, sendData)
				.then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.$api.msg('保存成功！');
						uni.$emit('changecompany',{'msg':'company变化了'});
						uni.navigateBack({delta: 1});
					} else if (res.status == 200 && res.data.returnCode == '402') {
						this.$api.msg(res.data.returnMessage);
						uni.reLaunch({
							url: '/pages/my/login/login'
						});
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
};
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
		height: 11%;
	}
	.main {
		font-size: $uni-font-size-base;
		height: 82%;
	}
	//	.textarea{width: 60%;}
	.footer {
		height: 7%;
		display: flex;
		&-btn {
			width: 100%;
			height: 100%;
		}
	}
}
.portrait {
	position: relative;
	width: 84rpx;
	height: 84rpx;
	border-radius: 50%;
}
.h50{
	height: 72upx;
		}
.h80{
	height: 100upx;
		}		
.fc {
	display: flex;
	align-items: center;
}
</style>
