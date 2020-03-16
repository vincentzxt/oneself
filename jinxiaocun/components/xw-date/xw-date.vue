<template>
	<view> 
		<view :class="[title!='null' ? 'filter':'filter-date-null']">
			<view class="filter-left" @tap="date_open" v-if="title!='null'">
				<view style="padding-right: 24upx;"><uni-icons type="calendar" size="18" color="#808695"></uni-icons></view>
				<view class="filter-left-item">
					<text>{{ search_startDate }}</text>
					<text>{{ search_endDate }}</text>
				</view>
			</view>
			<view class="filter-right">
				<view class="filter-right-item" @tap="order_open">
					<text>{{orderName}}排序</text>
					<uni-icon :type="[orderShow?'arrowdown':'arrowup']" size="15"></uni-icon>
				</view>
				<view class="filter-right-item" @tap="search_open">
					<text>筛选</text>
					<uni-icon :type="[searchShow?'arrowdown':'arrowup']" size="15"></uni-icon>
				</view>
			</view>
		</view>
		<view class="filter-order" v-if="orderShow">
			<view class="filter-order-item" v-for="(item, index) in orderList" :key="index" @tap="order_select(index)" :class="[orderIndex === index ? 'order_select_cur':'']"><text>{{item.name}}</text><view v-if="orderIndex===index"><text>{{orderTypeList[orderType]}}</text><uni-icon type="checkmarkempty" size="24"></uni-icon></view></view>
		</view>
		<view class="filter-search" v-if="searchShow">
			                <view class="search-title">{{searchName}}</view>
			                <input class="search-input" maxlength="10"  v-model="search_value" placeholder="请输入搜索信息" />	
							<button type="primary" size="mini" @tap="search_handel">确定</button>	
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="date_pop">
				<view class="date_header">
					<text @tap="date_handle_close">取消</text>
					<text>{{title}}</text>
					<text @tap="date_handle">确定</text>
				</view>
				<view class="date_tabs"><wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab></view>
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
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
import uniIcon from "@/components/uni-icon/uni-icon.vue";
export default {
	name: 'xw-date',
	props: {
		title: {
			type: String,
			default: 'null'
		},
		searchName: {
			type: String,
			default: ''
		},
		orderList:{
			type:Array,
			default:[]
		}
	},
	components: {
		uniPopup,
		WucTab,
		uniIcon
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
			date_select_cur:1,
			tabList: [{ name: '自定义' }, { name: '本周' }, { name: '本月' }, { name: '本季度' }, { name: '本年' }],
			orderIndex:0,
			orderName:'',
			orderType:1,
			orderTypeList:['正序','倒序'],
			orderShow:false,
			searchShow:false,
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
			now_date: init_endDate,
			startDate: init_endDate,
			endDate: init_endDate,
			search_startDate: init_endDate,
			search_endDate: init_endDate,
			search_value:'',
			value: [9999, month_short - 1, day_short-1],
			visible: true,
			indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth / (750 / 100))}px;`
		};
	},
	methods: {
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
		},
		order_select(val){
			if(val == this.orderIndex){
				if(this.orderType ==0){
					this.orderType =1
				}else{
					this.orderType =0
				}
			}
			this.orderIndex = val;
			this.orderName = "按"+this.orderList[val].name;
			this.orderShow = false;
			this.$emit('click_sub', { search_startDate: this.search_startDate, search_endDate: this.endDate,order_index:this.orderIndex,order_type:this.orderType,search_value:this.search_value});	
		},
		search_handel(){
			    this.searchShow = false;
				this.$emit('click_sub', { search_startDate: this.search_startDate, search_endDate: this.endDate,order_index:this.orderIndex,order_type:this.orderType,search_value:this.search_value});	
				},
		order_open(){
			this.searchShow = false;
			this.$refs.popup.close();
			this.orderShow = this.orderShow?false:true;
		},
		search_open(){
			this.orderShow = false;
			this.$refs.popup.close();
			this.searchShow = this.searchShow?false:true;
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
			this.search_endDate = this.endDate;
			this.$refs.popup.close();
			this.$emit('click_sub', { search_startDate: this.search_startDate, search_endDate: this.endDate,order_index:this.orderIndex,order_type:this.orderType,search_value:this.search_value});	
		},
		date_handle_close() {
			this.$refs.popup.close();
		},
		date_open() {
			this.searchShow = false;
			this.orderShow = false;
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
			this.endDate = this.now_date;
			var weekday = date.getDay() || 7; //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7

			date.setDate(date.getDate() - weekday + 1); //往前算（weekday-1）天，年份、月份会自动变化
			return this.timeFormat(date);
		},

		//获取当月第一天
		getFirstDayOfMonth(date) {
			this.endDate = this.now_date;
			date.setDate(1);
			return this.timeFormat(date);
		},

		//获取当季第一天
		getFirstDayOfSeason(date) {
			this.endDate = this.now_date;
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
			this.endDate = this.now_date;
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
