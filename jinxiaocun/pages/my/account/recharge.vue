<template>
	<view class="container">
		<view class="header">
			<uni-navbar :title="title" left-icon="back" background-color="#2d8cf0" color="#fff" status-bar fixed @clickLeft="handleNavbarClickLeft">
			</uni-navbar>
		</view>
		<view style="margin-bottom: 20rpx;">
			续费
			<!-- <view v-if="pickerIndex >= 0" style="margin-top: 20rpx;">
				<view style="font-size: 28rpx;">操作：</view>
				<button type="default" size="mini" @tap="getData">获取已选数据</button>
				<button type="default" size="mini" @tap="check" style="margin-left: 10rpx;">全选</button>
				<button type="default" size="mini" @tap="invert" style="margin-left: 10rpx;">反选</button>
				<button type="default" size="mini" @tap="cancel" style="margin-left: 10rpx;">取消</button>
				<view style="font-size: 28rpx;margin-top: 20rpx;padding-top: 20rpx;border-top: #e5e5e5 solid 1px;">组件演示：</view>
			</view> -->
		</view>
		<view class="main"><helang-checkbox ref="checkbox"></helang-checkbox></view>
		<view class="footer">
			<button class="footer-btn" style="background-color: #2d8cf0;" :loading="loading"  type="primary" @click="handleSubmit">购买</button>
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
				loading:false,
				pickerIndex:-1,
				list: [{
					id:1,
					text:'一周',
					sontext:'30元',
					value:1
				},
				{
					id:2,
					text:'一个月',
					sontext:'150元',
					value:2
				},
				{
					id:3,
					text:'半年',
					sontext:'300元',
					value:3
				},
				{
					id:4,
					text:'一年',
					sontext:'500元',
					value:4
				}
				]
			}
		},
		onLoad(){
			
		},
		onShow(){
			this.$refs.checkbox.set({
				type:'radio',		// 类型：复选框
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
			/* 发起数据 */
			handleSubmit() {
				let data = this.$refs.checkbox.get();	// 组件返回的数据
			    console.log("发起支付:"+data.value);
			    this.loading = true;
			    uni.login({
			        success: (e) => {
			            console.log("login success", e);
			            uni.request({
			                url: `https://unidemo.dcloud.net.cn/payment/wx/mp?code=${e.code}&amount=${data.value}`,
			                success: (res) => {
			                    console.log("pay request success", res);
			                    if (res.statusCode !== 200) {
			                        uni.showModal({
			                            content: "支付失败，请重试！",
			                            showCancel: false
			                        });
			                        return;
			                    }
			                    if (res.data.ret === 0) {
			                        console.log("得到接口prepay_id", res.data.payment);
			                        let paymentData = res.data.payment;
			                        uni.requestPayment({
			                            timeStamp: paymentData.timeStamp,
			                            nonceStr: paymentData.nonceStr,
			                            package: paymentData.package,
			                            signType: 'MD5',
			                            paySign: paymentData.paySign,
			                            success: (res) => {
			                                uni.showToast({
			                                    title: "感谢您的赞助!"
			                                })
			                            },
			                            fail: (res) => {
			                                uni.showModal({
			                                    content: "支付失败,原因为: " + res
			                                        .errMsg,
			                                    showCancel: false
			                                })
			                            },
			                            complete: () => {
			                                this.loading = false;
			                            }
			                        })
			                    } else {
			                        uni.showModal({
			                            content: res.data.desc,
			                            showCancel: false
			                        })
			                    }
			                },
			                fail: (e) => {
			                    console.log("fail", e);
			                    this.loading = false;
			                    uni.showModal({
			                        content: "支付失败,原因为: " + e.errMsg,
			                        showCancel: false
			                    })
			                }
			            })
			        },
			        fail: (e) => {
			            console.log("fail", e);
			            this.loading = false;
			            uni.showModal({
			                content: "支付失败,原因为: " + e.errMsg,
			                showCancel: false
			            })
			        }
			    })
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{
	font-size: $uni-font-size-base;
	padding: 30rpx 20rpx;
}
.footer {
	margin-top: 90upx;
			height: 7%;
			display: flex;
			&-btn	{
				width: 100%;
				height: 100%;
			}
		}
</style>
