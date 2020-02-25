<template>
	<view>
		<view class="cu-date">
			<view class="cu-date-left">
				<view v-if="isDate" class="cu-date-left-date" @tap="handleShowDatePopup">
					<uni-icons type="calendar" size="18" color="#808695"></uni-icons>
					<view class="cu-date-left-date-text" style="color:#2d8cf0">{{ initDate.date ? dateList[initDate.date] : dateList[cur_date]}}</view>
				</view>
			</view>
			<view class="cu-date-right">
				<view v-if="isSort" @tap="handleShowSortDrawer">
					<text>排序</text>
					<uni-icons :type="isShowSortDrawer ? 'arrow-down' : 'arrow-up'" size="15" color="#808695"></uni-icons>
				</view>
				<view v-if="isFilter" class="cu-date-right-filter" @tap="handleShowFilterDrawer">
					<text>筛选</text>
					<uni-icons :type="isShowFilterDrawer ? 'arrow-down' : 'arrow-up'" size="15" color="#808695"></uni-icons>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="date-pop">
				<view class="date-pop-header">
					<text @tap="date_handle_close">取消</text>
					<text>{{initDate.title}}</text>
					<text @tap="date_handle_comit">确定</text>
				</view>
				<view class="date-pop-list">
					<view 
						class="date-pop-list-item"
						:class="key == cur_date ? 'date-pop-list-item-hover' : ''"
						v-for="(value, key, index) in dateList"
						:key="index"
						@tap="handleChangeDate(key)">
					<text>{{value}}</text>
					<view 
						:class="key == cur_date ? 'date-pop-list-item-sline' : 'date-pop-list-item-nline'"
						:style="{ width: key == 'quarter' || key == 'custom' ? '60px' : ''}"
					></view>
					</view>
				</view>
				<view class="date-pop-show">
					<view class="date-pop-show-item" :style="{ color: selectStartDate ? '#1c2438' : '#dddee1' }" @tap="handleDateSelect">
						<text>开始日期</text>
						<text>{{ startDate }}</text>
					</view>
					<view class="date-pop-show-item" :style="{ color: selectEndDate ? '#1c2438' : '#dddee1' }" @tap="handleDateSelect">
						<text>结束日期</text>
						<text>{{ endDate }}</text>
					</view>
				</view>
				<view class="date_box" v-if="selectStartDate">
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
				<view class="date_box" v-if="selectEndDate">
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
		<view v-if="isShowSortDrawer" class="sort-drawer">
			<view class="sort-drawer-mark" @tap="handleSortDrawerClose()"></view>
			<view class="sort-drawer-content">
				<view class="sort-drawer-content-item" v-for="(item, index) in initSort" :key="index" :style="{'border-bottom': index !== initSort.length-1 ? '0.5px solid #dddee1' : ''}" @tap="handleSelectSortDrawer(item.id)">
					<view>{{item.name}}</view>
					<uni-icons v-if="item.checked" type='right' color='#2d8cf0' size='20'></uni-icons>
				</view>
			</view>
		</view>
		<view v-if="isShowFilterDrawer" class="filter-drawer">
			<view class="filter-drawer-mark" @tap="handleFilterDrawerClose()"></view>
			<view class="filter-drawer-content">
				<view class="filter-drawer-content-quick">
					<view class="filter-drawer-content-quick-header">
						<text>快捷筛选</text>
					</view>
					<view class="filter-drawer-content-quick-items">
						<view
							:class="item.id == curFilter ? 'filter-drawer-content-quick-items-item-checked' : 'filter-drawer-content-quick-items-item-nochecked'"
							v-for="(item, index) in initFilter"
							:key="index"
							@tap="handleSelectFilterDrawer(item)"
							:style="[{'margin-right': index % 3 != 2 ? '10px' : ''}, {'margin-top': index > 2 ? '10px' : ''}]"
						>{{item.name}}
						</view>
					</view>
				</view>
				<view class="filter-drawer-content-condition" v-if="filterCondition">
					<view class="filter-drawer-content-condition-header">
						<text>筛选条件</text>
					</view>
					<view class="filter-drawer-content-condition-items">
						<slot></slot>
					</view>
				</view>
				<view class="filter-drawer-content-buttons">
					<view class="filter-drawer-content-buttons-bt1" @tap="handleFilterCancel">取消</view>
					<view class="filter-drawer-content-buttons-bt2" @tap="handleFilterSubmit">提交</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import { dateFormat } from '@/utils/tools.js'
export default {
	name: 'cu-date',
	props: {
		isDate: {
			type: Boolean,
			default: true
		},
		initDate: {
			type: Object,
			default: () => {
				return {
					title: '',
					date: '',
					startDate: '',
					endDate: ''
				}
			}
		},
		isSort: {
			type: Boolean,
			default: true
		},
		initSort: {
			type: Array,
			default: () => {
				return []
			}
		},
		isFilter: {
			type: Boolean,
			default: true
		},
		initFilter: {
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
			dateShow: false,
			dateList: { 
				'day': '今日',
				'yesterday': '昨日',
				'week': '本周',
				'month': '本月',
				'quarter': '本季度',
				'year': '本年',
				'custom': '自定义'
			},
			years: [],
			months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
			days: [
				'01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
				'11', '12', '13', '15', '16', '17', '18', '19', '20', '21',
				'22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
			],
			title: '',
			cur_date: 'day',
			startDate: '',
			endDate: '',
			selectStartDate: true,
			selectEndDate: false,
			visible: true,
			value: [],
			isShowSortDrawer: false,
			isShowFilterDrawer: false,
			curFilter: 0,
			filterCondition: false
		}
	},
	methods: {
		getDate(val) {
			let sDate = new Date()
			let eDate = new Date()
			switch(val) {
				case 'day':
					this.startDate = dateFormat('YYYY-mm-dd', sDate)
					this.endDate = dateFormat('YYYY-mm-dd', eDate)
					break
				case 'yesterday':
					sDate.setDate(sDate.getDate() - 1)
					this.startDate = dateFormat('YYYY-mm-dd', sDate)
					eDate.setDate(eDate.getDate() - 1)
					this.endDate = dateFormat('YYYY-mm-dd', eDate)
					break
				case 'week':
					let w = sDate.getDay()
					w = w == 0 ? 6 : w - 1
					sDate.setDate(sDate.getDate() - w)
					this.startDate = dateFormat('YYYY-mm-dd', sDate)
					this.endDate = dateFormat('YYYY-mm-dd', eDate)
					break
				case 'month': 
					sDate.setDate(1)
					this.startDate = dateFormat('YYYY-mm-dd', sDate)
					this.endDate = dateFormat('YYYY-mm-dd', eDate)
					break
				case 'quarter':
					let month = sDate.getMonth();
					if (month < 3) {
						sDate.setMonth(0)
					} else if (2 < month && month < 6) {
						sDate.setMonth(3)
					} else if (5 < month && month < 9) {
						sDate.setMonth(6)
					} else if (8 < month && month < 11) {
						sDate.setMonth(9)
					}
					sDate.setDate(1)
					this.startDate = dateFormat('YYYY-mm-dd', sDate)
					this.endDate = dateFormat('YYYY-mm-dd', eDate)
				case 'year':
					sDate.setMonth(0)
					sDate.setDate(1)
					this.startDate = dateFormat('YYYY-mm-dd', sDate)
					this.endDate = dateFormat('YYYY-mm-dd', eDate)
					break
				case 'custom':
					if (this.initDate.startDate) {
						this.startDate = this.initDate.startDate
					}
					if (this.initDate.endDate) {
						this.endDate = this.initDate.endDate
					}
					break
			}
		},
		findYmd(date) {
			let dateArr = date.split('-')
			let year = 0
			for (let i = 0; i < this.years.length ; i++) {
				if (this.years[i] == dateArr[0]) {
					year = i
				}
			}
			let month = 0
			for (let i = 0; i < this.months.length ; i++) {
				if (this.months[i] == dateArr[1]) {
					month = i
				}
			}
			let day = 0
			for (let i = 0; i < this.days.length ; i++) {
				if (this.days[i] == dateArr[2]) {
					day = i
				}
			}
			return [year, month, day]
		},
		initYmd() {
			let date = new Date()
			this.years = []
			for (let i = 2019; i <= date.getFullYear(); i++) {
				this.years.push(i)
			}
			this.months = this.months.filter((item) => {
				return item <= date.getMonth()+1
			})
			this.days = this.days.filter((item) => {
				return item <= date.getDate()
			})
			this.$nextTick(() => {
				if (this.selectStartDate) {
					this.value = this.findYmd(this.startDate)
				} else {
					this.value = this.findYmd(this.endDate)
				}
			})
		},
		handleShowDatePopup() {
			this.isShowSortDrawer = false
			this.isShowFilterDrawer = false
			if (this.initDate.date) {
				this.cur_date = this.initDate.date
			}
			this.getDate(this.cur_date)
			this.initYmd()
			this.$refs.popup.open()
		},
		handleChangeDate(val) {
			this.cur_date = val
			this.getDate(this.cur_date)
			this.$nextTick(() => {
				if (this.selectStartDate) {
					this.value = this.findYmd(this.startDate)
				} else {
					this.value = this.findYmd(this.endDate)
				}
			})
		},
		handleDateSelect() {
			this.selectStartDate = !this.selectStartDate
			this.selectEndDate = !this.selectEndDate
			this.$nextTick(() => {
				if (this.selectStartDate) {
					this.value = this.findYmd(this.startDate)
				} else {
					this.value = this.findYmd(this.endDate)
				}
			})
		},
		bindChange1(e) {
			const val = e.detail.value
			const year = this.years[val[0]]
			const month = this.months[val[1]]
			const day = this.days[val[2]]
			this.startDate = year + '-' + month + '-' + day
			this.cur_date = 'custom'
		},
		bindChange2(e) {
			const val = e.detail.value
			const year = this.years[val[0]]
			const month = this.months[val[1]]
			const day = this.days[val[2]]
			this.endDate = year + '-' + month + '-' + day
			this.cur_date = 'custom'
		},
		date_handle_close() {
			this.$emit('dateCancel')
			this.$refs.popup.close()
		},
		date_handle_comit() {
			let rDate = {
				date: this.cur_date,
				startDate: this.startDate,
				endDate: this.endDate
			}
			this.$emit('dateOk', rDate)
			this.$refs.popup.close()
		},
		handleShowSortDrawer() {
			this.isShowSortDrawer = !this.isShowSortDrawer
			this.$refs.popup.close()
			this.isShowFilterDrawer = false
		},
		handleSelectSortDrawer(val) {
			this.$emit('sortOk', val)
			this.isShowSortDrawer = false
		},
		handleSortDrawerClose() {
			this.isShowSortDrawer = false
		},
		handleShowFilterDrawer() {
			this.curFilter = this.initFilter[0].id
			for (let item of this.initFilter) {
				if (item.checked) {
					this.curFilter = item.id
					if (item.condition) {
						this.filterCondition = true
					}
				}
			}
			this.isShowFilterDrawer = !this.isShowFilterDrawer
			this.$refs.popup.close()
			this.isShowSortDrawer = false
		},
		handleSelectFilterDrawer(val) {
			this.curFilter = val.id
			this.filterCondition = val.condition
		},
		handleFilterCancel() {
			this.$emit('filterCancel')
			this.isShowFilterDrawer = false
		},
		handleFilterSubmit() {
			this.$emit('filterOk', this.curFilter)
			this.isShowFilterDrawer = false
		},
		handleFilterDrawerClose() {
			this.isShowFilterDrawer = false
		}
	}
}
</script>

<style lang="scss" scoped>
	.cu-date {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
		padding: 10px;
		color: #808695;
		&-left {
			display: flex;
			align-items: center;
			&-date {
				display: flex;
				&-text {
					margin-let: 5px;
				}
			}
		}
		&-right {
			display: flex;
			align-items: center;
			&-filter {
				margin-left: 10px;
			}
		}
	}
	.date-pop {
		background-color: #ffffff;
		&-header {
			padding: 24upx;
			background-color: #2d8cf0;
			display: flex;
			flex-direction: row;
			justify-content: space-between; 
			color: #ffffff;
		}
		&-list {
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			margin: $uni-spacing-col-base 0;
			padding: $uni-spacing-col-base 0;
			border-bottom: 0.5px solid $uni-border-color;
			&-item {
				display: flex;
				width: 20%;
				flex-direction: column;
				align-items: center;
				padding: 7px 0;
				&-hover {
					color: #2d8cf0;
				}
				&-sline {
					width: 45px;
					height: 2px;
					background-color: #2d8cf0;
					margin-top: 2px;
				}
				&-nline {
					width: 45px;
					height: 2px;
					background-color: #FFFFFF;
					margin-top: 2px;
				}
			}
		}
		&-show {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			border-bottom: 0.5px solid $uni-border-color;
			&-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding-bottom: 16upx;
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
	.sort-drawer {
		&-mark {
			display: block;
			opacity: 0.5;
			position: absolute;
			width: 100%;
			z-index: 998;
			height: 100%;
			background-color: #000000;
			transition: opacity 0.3s;
		}
		&-content {
			display: block;
			position: absolute;
			width: 100%;
			z-index: 999;
			background-color: #ffffff;
			color: #2d8cf0;
			margin-bottom: 5px;
			border-top: 0.5px solid $uni-border-color;
			&-item {
				padding: 15px 20px;
				display: flex;
				justify-content: space-between;
			}
		}
	}
	.filter-drawer {
		&-mark {
			display: block;
			opacity: 0.5;
			position: absolute;
			z-index: 998;
			width: 100%;
			height: 100%;
			background-color: #000000;
			transition: opacity 0.3s;
		}
		&-content {
			display: block;
			position: absolute;
			width: 100%;
			z-index: 999;
			background-color: #ffffff;
			margin-bottom: 5px;
			border-top: 0.5px solid $uni-border-color;
			&-quick {
				padding: 15px 10px;
				display: flex;
				flex-direction: column;
				&-header {
					margin-bottom: 15px;
				}
				&-items {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					&-item {
						&-checked {
							width: 180upx;
							padding: 10px;
							background-color: $uni-color-primary;
							font-size: $uni-font-size-sm;
							color: #ffffff;
							display: flex;
							justify-content: center;
							align-items: center;
						}
						&-nochecked {
							width: 180upx;
							padding: 10px;
							background-color: #f2f2f4;
							font-size: $uni-font-size-sm;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
				}
			}
			&-condition {
				padding: 15px 10px;
				display: flex;
				flex-direction: column;
				&-header {
					margin-bottom: 15px;
				}
				&-items {
					font-size: $uni-font-size-sm;
				}
			}
			&-buttons {
				display: flex;
				margin-top: 150upx;
				&-bt1 {
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 0;
					width:50%;
					color:$uni-color-primary;
					background-color: #eaf3fa;
				}
				&-bt2 {
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 0;
					width:50%;
					color: #ffffff;
					background-color: $uni-color-primary;
				}
			}
		}
	}
</style>
