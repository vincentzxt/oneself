<template>
	<view>
		<view class="filter">
			<view class="filter-left" @tap="date_open">
				<text>{{ title }}</text>
				<text>{{ search_startDate }}至{{ search_endDate }}</text>
			</view>
			<view class="filter-right">
				<!-- <view class="filter-right-item">
					<text>排序</text>
					<uni-icon type="arrowup" size="15"></uni-icon>
				</view> -->
				<view class="filter-right-item" @tap="date_open">
					<text>筛选</text>
					<uni-icon type="arrowup" size="15"></uni-icon>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="date_pop">
				<view class="date_header">
					<text @tap="date_handle_close">取消</text>
					<text>{{ title }}</text>
					<text @tap="date_handle">确定</text>
				</view>
				<view class="date_tabs"><wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab></view>
				<view class="date_show">
					<view class="date_show_item">
						<text style="color: #999999;">开始日期</text>
						<text>{{ startDate }}</text>
					</view>
					<view class="date_show_item">
						<text style="color: #999999;">结束日期</text>
						<text>{{ endDate }}</text>
					</view>
				</view>
				<view class="date_box">
					<picker-view v-if="visible" :value="value" @change="bindChange">
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
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
export default {
	name: 'xw-date',
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	components: {
		uniPopup,
		WucTab
	},
	data() {
		const date = new Date();
		const years = [];
		const year = date.getFullYear();
		const month_init = date.getMonth();
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
			TabCur: 0,
			tabList: [{ name: '自定义' }, { name: '本周' }, { name: '本月' }, { name: '本季度' }, { name: '本年' }],
			years,
			year,
			months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
			month_short,
			month_init,
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
			startDate: init_endDate,
			endDate: init_endDate,
			search_startDate: init_endDate,
			search_endDate: init_endDate,
			value: [9999, month - 1, 0],
			visible: true,
			indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth / (750 / 100))}px;`
		};
	},
	methods: {
		bindChange(e) {
			const val = e.detail.value;
			this.year = this.years[val[0]];
			this.month = this.months[val[1]];
			this.day = this.days[val[2]];
			this.startDate = this.year + '-' + this.month + '-' + this.day;
		},
		tabChange(val) {
			console.log(val);
			switch (val) {
				case 0:
					break;
				case 1:
					this.startDate = this.getFirstDayOfWeek(new Date(this.year, this.month_init, this.day_short));
					// this.startDate = this.getNewData(this.endDate,7)
					break;
				case 2:
					this.startDate = this.getFirstDayOfMonth(new Date(this.year, this.month_init, this.day_short));
					break;
				case 3:
					this.startDate = this.getFirstDayOfSeason(new Date(this.year, this.month_init, this.day_short));
					break;
				case 4:
					this.startDate = this.getFirstDayOfYear(new Date(this.year, this.month_init, this.day_short));
					break;
				default:
					break;
			}
		},
		getNewData(dateTemp, days) {
			var dateTemp = dateTemp.split('-');
			var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式
			var millSeconds = Math.abs(nDate) - days * 24 * 60 * 60 * 1000;
			var rDate = new Date(millSeconds);
			var year = rDate.getFullYear();
			var month = rDate.getMonth() + 1;
			if (month < 10) month = '0' + month;
			var date = rDate.getDate();
			if (date < 10) date = '0' + date;
			return year + '-' + month + '-' + date;
		},
		date_handle() {
			this.search_startDate = this.startDate;
			this.$refs.popup.close();
			this.$emit('click_sub', { search_startDate: this.search_startDate, search_endDate: this.endDate });
		},
		date_handle_close() {
			this.$refs.popup.close();
		},
		date_open() {
			this.$refs.popup.open();
		},
		/**
		 * 获取指定日期的周的第一天、月的第一天、季的第一天、年的第一天
		 * @param date new Date()形式，或是自定义参数的new Date()
		 * @returns 返回值为格式化的日期，yy-mm-dd
		 */
		//日期格式化，返回值形式为yy-mm-dd
		timeFormat(date) {
			console.log(date);
			if (!date || typeof date === 'string') {
				this.error('参数异常，请检查...');
			}
			var y = date.getFullYear(); //年
			var m = date.getMonth() + 1; //月
			if (m < 10) m = '0' + m;
			var d = date.getDate(); //日
			if (d < 10) d = '0' + d;
			return y + '-' + m + '-' + d;
		},

		//获取这周的周一
		getFirstDayOfWeek(date) {
			var weekday = date.getDay() || 7; //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7

			date.setDate(date.getDate() - weekday + 1); //往前算（weekday-1）天，年份、月份会自动变化
			return this.timeFormat(date);
		},

		//获取当月第一天
		getFirstDayOfMonth(date) {
			date.setDate(1);
			return this.timeFormat(date);
		},

		//获取当季第一天
		getFirstDayOfSeason(date) {
			var month = date.getMonth();
			if (month < 3) {
				date.setMonth(0);
			} else if (2 < month && month < 6) {
				date.setMonth(3);
			} else if (5 < month && month < 9) {
				date.setMonth(6);
			} else if (8 < month && month < 11) {
				date.setMonth(9);
			}
			date.setDate(1);
			return this.timeFormat(date);
		},

		//获取当年第一天
		getFirstDayOfYear(date) {
			date.setDate(1);
			date.setMonth(0);
			return this.timeFormat(date);
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
		flex-direction: column;
		// flex: 2;
		font-size: $uni-font-size-sm;
	}
	.filter-right {
		// flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: $uni-font-size-sm;
		.filter-right-item {
			margin-left: 24upx;
		}
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
	background-color: #ffffff;
	font-size: 24upx;
	.date_header {
		padding: 24upx;
		background-color: #2d8cf0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 28upx;
		color: #ffffff;
	}
	.date_tabs {
		padding: 0 24upx;
		border-bottom: 1upx solid $uni-border-color;
	}
	.date_show {
		border-bottom: 1upx solid $uni-border-color;
		padding: 16upx 24upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		.date_show_item {
			display: flex;
			flex-direction: column;
			align-items: center;
			//justify-content:center
		}
	}
}
</style>
