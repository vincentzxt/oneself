<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view class="main" >
			<view class="uni-title">分享内容</view>
			<view class="uni-textarea">
				<textarea class="textarea" v-model="shareText" />
				</view>
			<view class="uni-title">分享图片：</view>
			<view class="uni-uploader" style="padding:15upx; background:#FFF;">
				<view class="uni-uploader__input-box" v-if="!image" @tap="chooseImage"></view>
				<image class="uni-uploader__img" v-if="image" :src="image"></image>
			</view>
			<!-- #ifdef MP -->
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" style="background-color: #2d8cf0;" open-type="share">分享</button>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'share',
				shareText: '一账通，邀请你一起体验！',
				href:"https://uniapp.dcloud.io",
				image: 'http://allchain.oss-cn-shanghai.aliyuncs.com/uploads/20190521/f57ebce8a72b823912904fe76eda0909.png',
				shareType:1,
				providerList: []
			}
		},
		computed:{
			isDisableButton() {
				return function(item) {
					if(this.shareType === 0 && item.id === 'qq'){
						return true;
					}
					if(this.shareType === 5 && item.name !== '分享到微信好友'){
						return true;
					}
					return false;
				}
			}
		},
		onShareAppMessage() {
			return {
				title: this.shareText ? this.shareText : "欢迎体验uni-app",
				path: '/pages/index/index',
				imageUrl:this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
			}
		},
		onUnload:function(){
			this.shareText='uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
			this.href = 'https://uniapp.dcloud.io',
			this.image='';
		},
		onLoad: function () {
			uni.getProvider({
				service: 'share',
				success: (e) => {
					console.log('success', e);
					let data = []
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '分享到微信好友',
									id: 'weixin',
									sort:0
								})
								data.push({
									name: '分享到微信朋友圈',
									id: 'weixin',
									type:'WXSenceTimeline',
									sort:1
								})
								break;
							case 'sinaweibo':
								data.push({
									name: '分享到新浪微博',
									id: 'sinaweibo',
									sort:2
								})
								break;
							case 'qq':
								data.push({
									name: '分享到QQ',
									id: 'qq',
									sort:3
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data.sort((x,y) => {
						return x.sort - y.sort
					});
				},
				fail: (e) => {
					console.log('获取分享通道失败', e);
					uni.showModal({
						content:'获取分享通道失败',
						showCancel:false
					})
				}
			});
		},
		methods: {
			async share(e) {
				console.log('分享通道:'+ e.id +'； 分享类型:' + this.shareType);
				
				if(!this.shareText && (this.shareType === 1 || this.shareType === 0)){
					uni.showModal({
						content:'分享内容不能为空',
						showCancel:false
					})
					return;
				}
				
				if(!this.image && (this.shareType === 2 || this.shareType === 0)){
					uni.showModal({
						content:'分享图片不能为空',
						showCancel:false
					})
					return;
				}
				
				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						console.log('success', e);
						uni.showModal({
							content: '已分享',
							showCancel:false
						})
					},
					fail: (e) => {
						console.log('fail', e)
						uni.showModal({
							content: e.errMsg,
							showCancel:false
						})
					},
					complete:function(){
						console.log('分享操作结束!')
					}
				}
console.log("shartype: " + this.shartype);
				// switch (this.shareType){
				// 	case 0:
				// 		shareOPtions.summary = this.shareText;
				// 		shareOPtions.imageUrl = this.image;
				// 		shareOPtions.title = '欢迎体验uniapp';
				// 		shareOPtions.href = 'https://uniapp.dcloud.io';
				// 		break;
				// 	case 1:
				// 		shareOPtions.summary = "12312321";
				// 		break;
				// 	case 2:
				// 		shareOPtions.imageUrl = this.image;
				// 		break;
				// 	case 5:
				// 		shareOPtions.imageUrl = this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
				// 		shareOPtions.title = '欢迎体验uniapp';
				// 		shareOPtions.miniProgram = {
				// 			id:'gh_33446d7f7a26',
				// 			path:'/pages/tabBar/component/component',
				// 			webUrl:'https://uniapp.dcloud.io',
				// 			type:0
				// 		};
				// 		break;
				// 	default:
				// 		break;
				// }
				
				if(shareOPtions.type === 0 && plus.os.name === 'iOS'){//如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if(shareOPtions.type === 1 && shareOPtions.provider === 'qq'){//如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'https://uniapp.dcloud.io';
					shareOPtions.title = '欢迎体验uniapp';
				}
				//uni.share(shareOPtions);
			},
			radioChange(e){
				console.log('type:' + e.detail.value);
				this.shareType = parseInt(e.detail.value);
			},
			chooseImage() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					sizeType: ['compressed', 'original'],
					success: (res) => {
						this.image = res.tempFilePaths[0];
					},
					fail: (err) => {
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			},
			compress(){//压缩图片 图文分享要求分享图片大小不能超过20Kb
				console.log('开始压缩');
				let img = this.image;
				return new Promise((res) => {
					var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					console.log('after' + localPath);
					// 压缩size
					plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
						entry.file((file) => {// 可通过entry对象操作图片 
							console.log('getFile:' + JSON.stringify(file));
							if(file.size > 20480) {// 压缩后size 大于20Kb
								plus.zip.compressImage({
									src: img,
									dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
									width: '10%',
									height: '10%',
									quality: 1,
									overwrite: true
								}, (event) => {
									console.log('success zip****' + event.size);
									let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
									res(newImg);
								}, function(error) {
									uni.showModal({
										content:'分享图片太大,需要请重新选择图片!',
										showCancel:false
									})
								});
							}
						});
					}, (e) => {
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content:'分享图片太大,需要请重新选择图片!',
							showCancel:false
						})
					});
				})
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
			height: 10%;
		}
		.main {
			height: 83%;
			padding: 0 15upx;
			.picker {
				width: 100%;
				display: flex;
				justify-content: flex-end;
			}
		}
		.footer {
			height: 7%;
			display: flex;
			padding: 0 15upx;
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
</style>
