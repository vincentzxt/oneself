<template>
	<view>
		<view>
			<cu-custom bgColor="bg-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">{{title}}</block>
			</cu-custom>
		</view>
		<view>
				<view class="cu-list icon">
					<view class="cu-item" >
						<view class="icon">
							<view class="cuIcon-delete"></view>
						</view>
						<view class="text">
							<view class="text-grey">凯尔</view>
						</view>
						<view class="action">
							<view class="cuIcon-arrow"></view>
						</view>
					</view>
					<view class="cu-item">
						<view class="icon">
							<view class="cuIcon-delete"></view>
						</view>
						<view class="text">
							<view class="text-grey">凯尔</view>
						</view>
						<view class="action">
							<view class="cuIcon-arrow"></view>
						</view>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>

</style>
