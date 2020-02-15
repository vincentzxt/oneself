<template>
	<view>
		<uni-popup ref="popup" type="bottom">
			<view class="date_pop">
				<view class="date_header">
					<text @tap="handleCancel">取消</text>
					<text @tap="handleTitle">{{title}}</text>
					<text @tap="handleSubmit">确定</text>
				</view>
				<view class="date_box">
					<picker-view v-if="visible" :value="value" @change="handleChange(item)">
						<picker-view-column>
							<view class="item" v-for="(item, index) in datas" :key="index">{{ item }}</view>
						</picker-view-column>
					</picker-view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'
export default {
	name: 'cu-picker',
	props: {
		title: {
			type: String,
			default: 'null'
		},
		datas: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
	components: {
		uniPopup
	},
	data() {
		return {
			visible: true,
			indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth / (750 / 100))}px;`
		}
	},
	methods: {
		open() {
			this.$refs.popup.open()
		},
		close() {
			this.$refs.popup.close()
		},
		handleSubmit() {
			this.$emit('submit')
			this.close()
		},
		handleCancel() {
			this.$emit('cancel')
			this.close()
		},
		handleChange(item){
			this.$emit('change',item)
		}
	}
};
</script>

<style lang="scss" scoped>
picker-view {
	width: 100%;
	height: 600upx;
	margin-top: 20upx;
}
.item {
	line-height: 100upx;
	text-align: center;
}
.date_pop {
	font-size: 36upx;
	background-color: #ffffff;
	.date_header {
		padding: 24upx;
		background-color: #2d8cf0;
		display: flex;
		flex-direction: row;
		justify-content: space-between; 
		color: #ffffff;
	}
}
</style>
