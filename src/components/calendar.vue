<template>
	<div class="calendar-list">
		<ul class="week">
			<li style="color: #CCCCCC;">日</li>
			<li>一</li>
			<li>二</li>
			<li>三</li>
			<li>四</li>
			<li>五</li>
			<li>六</li>
		</ul>
		<div class="calendar">
			<div class="calendar-item" v-for="(date,index) in dateArr" :key="index">
				<div class="calendar-header">
					<span>{{date.y}}年{{date.m}}月</span>
				</div>
				<div class="calendar-body">
					<ul class="days">
						<li v-for="day in date.days" :key="day">
							<div v-if="day.getMonth()+1 != date.m">
								<span></span>
							</div>
							<div v-else-if="isToday(day)" @click="clickAction(day)" :class="{today: isCurrentDay(day)}">
								<span>{{ '今天' }}</span>
								<i>{{getNum(day)}}</i>
							</div>
							<div v-else :class="{today: isCurrentDay(day)}">
								<template v-if="day<new Date()">
									<span class="disabled">{{ day.getDate() }}</span>
								</template>
								<template v-else>
									<span @click="clickAction(day)">{{ day.getDate() }}</span>
									<i class="nums">{{getNum(day)}}</i>
								</template>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			currentDate: {
				currentDay: null,
				currentMonth: null,
				currentYear: null,
				currentWeek: null
			},
			dateArr: []
		}
	},
	props: ['aroud', 'clickAction', 'nums', 'selectDate'],
	created() {
		for (let x = 0; x < this.aroud; x++) {
			let days = this.calendarInit(this.currentDate.currentYear, this.currentDate.currentMonth);
			let timeObj = {
				y: this.currentDate.currentYear,
				m: this.currentDate.currentMonth,
				days
			};
			this.dateArr.push(timeObj);
		}
	},
	methods: {
		isCurrentDay(day) {
			let d = this.selectDate;
			if (d != null) {
				return day.getFullYear() == d.getFullYear() && day.getMonth() == d.getMonth() && day.getDate() == d.getDate() ? true : false;
			} else {
				return day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate() ? true : false;
			}
		},
		getNum(date) {
			let lastDay = this.nums.length && this.nums[this.nums.length - 1].reTravelDate;
			let day = this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
			if (day > lastDay) {
				return '';
			}
			for (let x in this.nums) {
				if (this.nums[x].reTravelDate == day) {
					return '剩' + this.nums[x].availableAmount + '人';
				}
			}
		},
		isToday(day) {
			return day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate() ? true : false;
		},
		getDay(date) {
			this.currentDate.currentDay = date.getDate();
			this.currentDate.currentYear = date.getFullYear();
			this.currentDate.currentMonth = date.getMonth() + 1;
			this.currentDate.currentWeek = date.getDay() + 1;
			if (this.currentDate.currentWeek == 0) {
				this.currentDate.currentWeek = 7;
			}
		},
		formatDate(year, month, day) {
			let y = year;
			let m = month;
			if (m < 10) m = "0" + m;
			let d = day;
			if (d < 10) d = "0" + d;
			return y + "-" + m + "-" + d
		},
		calendarInit(year, month) {
			let date, d;
			let days = [];
			if (year == null || month == null) {
				let _date = new Date();
				d = new Date(_date.getFullYear(), _date.getMonth() - 1, 1);
			} else {
				d = new Date(year, month - 1, 1);
			}
			d.setDate(42);
			date = new Date(d.getFullYear(), d.getMonth(), 1);
			this.getDay(date);
			for (let i = this.currentDate.currentWeek - 1; i >= 0; i--) {
				let d = new Date(this.currentDate.currentYear, this.currentDate.currentMonth - 1, this.currentDate.currentDay);
				d.setDate(d.getDate() - i);
				days.push(d);
			}
			for (let i = 1; i <= 42 - this.currentDate.currentWeek; i++) {
				let d = new Date(this.currentDate.currentYear, this.currentDate.currentMonth - 1, this.currentDate.currentDay);
				d.setDate(d.getDate() + i);
				days.push(d);
			}
			return days;
		},
	},
}
</script>
<style lang="sass" scoped>
	.today {
		/*px*/
		height: 86px;
		color: #FFFFFF;
		background: #37B7FA;
		border: 1px solid #FFFFFF;
	}
	
	.calendar-list {
		background-color: #fff;
	}
	
	.calendar {
		padding-top: 0.27rem;
	}
	
	.week {
		position: fixed;
		z-index: 50;
		width: 100%;
		background: #F9F8F8;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		li {
			text-align: center;
			height: 40px;
			line-height: 40px;
			vertical-align: middle;
			font-size: 25.7px;
			/*px*/
			font-weight: medium;
		}
	}
	
	.calendar-item {
		&:nth-of-type(1) {
			margin-top: 40px;
		}
		padding-bottom: 0.1rem;
		.calendar-header {
			text-align: center;
			font-size: 28px;
			/*px*/
			color: #333333;
			font-weight: medium;
			padding: 20px 0 10px 0;
		}
		.calendar-body {
			ul {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				li {
					text-align: center;
					height: 86px;
					vertical-align: middle;
					border: none;
					font-weight: medium;
					color: #797979;
					width: 14.28%;
					background-color: #fff;
					position: relative;
					div {
						/*px*/
						height: 86px;
						span {
							display: flex;
							justify-content: center;
							align-items: flex-end;
							font-size: 25.7px;
							/*px*/
							height: 46px;
							line-height: 39.63px;
						}
						i {
							font-size: 18px;
							/*px*/
							display: block;
							height: 40px;
							line-height: 25px;
						}
						.nums {
							color: #37B7FA;
						}
					}
				}
				span[class=disabled] {
					color: #CCCCCC;
				}
			}
		}
	}
</style>