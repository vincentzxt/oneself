<template>
	<view>
		<uni-popup ref="popup" type="bottom">
			<view class="date_pop">
				<view class="date_header">
					<text @tap="close">取消</text>
					<text>{{title}}</text>
					<text @tap="handleSubmit">确定</text>
				</view>
				<view class="date_show">
					<view class="date_show_item" :class="[date_select_cur === 1 ? 'date_select_cur':'']" @click="dateSelect(1)">
						<text style="color: #999999;">开始日期</text>
						<text>{{ startDate }}</text>
					</view>
					<view class="date_show_item" :class="[date_select_cur === 2 ? 'date_select_cur':'']" @click="dateSelect(2)">
						<text style="color: #999999;">结束日期</text>
						<text>{{ endDate }}</text>
					</view>
				</view>
				<view class="date_box" v-if="date_select_cur == 1">
					<picker-view v-if="visible" :value="value" @change="bindChange1">
						<picker-view-column>
							<view class="item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
						</picker-view-column>
					</picker-view>
				</view>
				<view class="date_box" v-if="date_select_cur == 2">
					<picker-view v-if="visible" :value="value" @change="bindChange2">
						<picker-view-column>
							<view class="item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
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
	name: 'cu-date',
	props: {
		title: {
			type: String,
			default: 'null'
		}
	},
	components: {
		uniPopup
	},
	data() {
		const date = new Date();
		const years = [];
		const year = date.getFullYear();
		var month_short = date.getMonth() + 1;
		if (month_short < 10) month_short = '0' + month_short;
		const month = month_short;
		const day_short = date.getDate();
		const day = day_short < 10 ? '0' + day_short : day_short;
		const init_startDate = year + '-' + month + '-' + '01';
		const init_endDate = year + '-' + month + '-' + day;
		for (let i = 1990; i <= date.getFullYear(); i++) {
			years.push(i);
		}
		return {
			date_select_cur:1,
			years,
			year,
			months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
			month_short,
			month,
			days: [
				'01',
				'02',
				'03',
				'04',
				'05',
				'06',
				'07',
				'08',
				'09',
				'10',
				'11',
				'12',
				'13',
				'15',
				'16',
				'17',
				'18',
				'19',
				'20',
				'21',
				'22',
				'23',
				'24',
				'25',
				'26',
				'27',
				'28',
				'29',
				'30',
				'31'
			],
			day,
			day_short,
			now_date: init_endDate,
			startDate: init_endDate,
			endDate: init_endDate,
			value: [9999, month_short - 1, day_short-1],
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
			this.$emit('onChange', { startDate: this.startDate, endDate: this.endDate })
			this.close()
		},
		bindChange1(e) {
			const val = e.detail.value;
			const year = this.years[val[0]];
			const month = this.months[val[1]];
			const day = this.days[val[2]];
			this.startDate = year + '-' + month + '-' + day;
		},
		bindChange2(e) {
			const val = e.detail.value;
			const year = this.years[val[0]];
			const month = this.months[val[1]];
			const day = this.days[val[2]];
			this.endDate = year + '-' + month + '-' + day;
		},
		dateSelect(val){
			switch (val){
				case 1:
				this.date_select_cur = 1;
					break;
				case 2:
				this.date_select_cur = 2;
					break;
				default:
					break;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.filter {
	height: 8%;
	background-color: #ffffff;
	border-bottom: 1upx solid $uni-border-color;
	display: flex;
	flex-direction: row;
	color: $uni-color-link;
	padding: 12upx $uni-padding-base;
	align-items: center;
	justify-content: space-between;
	.filter-left {
		display: flex;
		flex-direction: row;
		font-size: 28upx;
		align-items: center;
		.filter-left-item{
		  display: flex;
		  flex-direction: column;
		}
		// flex: 2;
	}
	.filter-right {
		// flex: 1;
		font-size: 32upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.filter-right-item {
			margin-left: 24upx;
		}
	}
}
.filter-date-null {
	height: 8%;
	background-color: #ffffff;
	border-bottom: 1upx solid $uni-border-color;
	color: $uni-color-link;
	padding: 24upx $uni-padding-base;
	.filter-left {
		display: flex;
		flex-direction: column;
		font-size: 28upx;
		// flex: 2;
	}
	.filter-right {
		// flex: 1;
		font-size: 32upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.filter-right-item {
			align-items: center;
			margin-left: 24upx;
		}
	}
}


.filter-order{
	font-size: 32upx;
	position: absolute;
	background-color: #FFFFFF;
	z-index:1000;
	width: 100%;
	.order_select_cur {
	    color: #2D8cF0;
	}
	.filter-order-item{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1upx solid $uni-border-color;
		padding: 24upx 24upx;
		.order_select_cur {
	    color: $uni-color-link;
	  }
	}
}
.filter-search{
	font-size: 32upx;
	position: absolute;
	background-color: #FFFFFF;
	z-index:1000;
	width: 100%;
	display: flex;
	direction: row;
	line-height: 36upx;
	padding: 24upx;
	border-bottom: 1upx solid $uni-border-color;
	align-items: center;
	.search-title{
		padding-right: 24upx;
	}
	.search-input{
		padding: 12upx 16upx;
		background-color: #F8F8F8;
		width: 350upx;
	}
}
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
	.date_tabs {
		padding: 0 24upx;
		border-bottom: 1upx solid $uni-border-color;
	}
	.date_select_cur {
	    border-bottom: 4upx solid #0081ff;
	}
	.date_show {
		border-bottom: 1upx solid $uni-border-color;
		padding: 16upx 24upx 0 24upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		.date_show_item {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-bottom: 16upx;
			//justify-content:center
		}
	}
}
</style>
