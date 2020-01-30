<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft"></uni-navbar>
		</view>
		<view class="main">
			<scroll-view :scroll-y="true" class="fill">
				<cu-panel>
						<cu-cell title="设置头像">
							<view>
								<!-- <button @tap="upload">上传</button> -->
								<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
								<!-- <image :src="reqData.companylogourl || '/static/image/logo.png'" mode="aspectFit" style="width: 100%;" ></image> -->
							</view>
							<image   slot="footer" class="portrait" :src="reqData.companylogourl || '/static/image/logo.png'" @tap="upload"></image>
						</cu-cell>
						<cu-cell title="商户名称">
							<input slot="footer" type="text" v-model="reqData.companyname" placeholder-style="color:#c5c8ce" placeholder="商户名称" />
						</cu-cell>
						<cu-cell title="联系人"><input slot="footer" type="text" v-model="reqData.contact" placeholder-style="color:#c5c8ce" placeholder="请输入联系人" /></cu-cell>
						<cu-cell title="联系电话">
							<input slot="footer" type="number" v-model="reqData.telephone" placeholder-style="color:#c5c8ce" placeholder="请输入联系人电话" />
						</cu-cell>
						<cu-cell title="邮箱" isLastCell><input slot="footer" type="text" v-model="reqData.email" placeholder-style="color:#c5c8ce" placeholder="请输入电子邮箱" /></cu-cell>
				</cu-panel>
				<view style="background-color: #FFFFFF;padding: 16upx;">
				<textarea  style="height: 80px" maxlength="-1" v-model="reqData.address" placeholder-style="color:#c5c8ce" placeholder="地址"></textarea>
				</view>
			</scroll-view>
		</view>
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
import ImageCropper from '@/components/invinbg-image-cropper/invinbg-image-cropper.vue';
import cuLoading from '@/components/custom/cu-loading.vue';
export default {
	components: {
		cuPanel,
		cuCell,
		cuCellGroup,
		uniList,
		uniListItem,
		ImageCropper
	},
	data() {
		return {
			tempFilePath: '',
			cropFilePath: '',
			loading:false,
			reqData: {
				companylogourl: '',
				companyname: '',
				contact: '',
				telephone: '',
				email: '',
				address: ''
			},
			title: '设置'
		};
	},
	onShow() {
		this.loadData();
	},
	methods: {
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
					  this.reqData.companylogourl= api.baseUrl+res.data.linkUrl;
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
			this.$refs.loading.open();
			tokenpost(api.GetUserInfo)
				.then(res => {
					this.$refs.loading.close();
					if (res.status == 200 && res.data.returnCode == '0000') {
						console.log(res.data.data);
						this.reqData = res.data.data;
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
			const { companylogourl, companyname, contact, telephone, email, address } = this.reqData;
			const sendData = {
				companylogourl,
				companyname,
				contact,
				telephone,
				email,
				address
			};
			this.loading = true;
			tokenpost(api.CustomerSave, sendData)
				.then(res => {
					if (res.status == 200 && res.data.returnCode == '0000') {
						this.$api.msg('保存成功！');
						uni.$emit('changecompany',{'msg':'company变化了'});
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
</style>
