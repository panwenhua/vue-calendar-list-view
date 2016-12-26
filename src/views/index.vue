<template>
	<div>
		<!-- 全局header -->
		<nv-head :page-name="headTit.tab1" :back-type="headTit.back" :click-btn="headTit.right" :click-action="clickRight"></nv-head>
		<section id="wrapper" class="sy_main">
			<ul>
				<li @click="openCalendar">
					<span class="item">出发日期</span>
					<span class="result">{{getCurrentDate}}</span>
					<span class="select">请选择></span>

				</li>
				<router-link tag="li" to="/travelInformation">
					<span class="item">出行人数</span>
					<span class="result" v-text="getPepoleNum"></span>
					<span class="select">请选择></span>
				</router-link>
				<router-link tag="li" to="/travelCard">
					<span class="item">旅游卡券</span>
					<span class="result" v-text="getCardNum"></span>
					<span class="select">请选择></span>
				</router-link>
			</ul>
			<button class="submitPlan">提交出行订单</button>
			<p class="tips2">说明：只有出行日期可点</p>
		</section>
		<div class="calendar" :style="{display: calendar.open?'block':'none'}" style="position: fixed; z-index: 999; bottom: 0px;">
			<nv-head :page-name="'选择出行日期'" :back-type="'ok'" :back-action="closeCalendar"></nv-head>
			<div class="calendaWrap">
				<calendar-el :aroud="calendar.aroud" :click-action="setCurrentDate" :nums="calendar.nums" :select-date="currentDate"></calendar-el>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						tab1: '选择出行日期',
						back: 'ok',
						right: '历史订单'
					},
					calendar: {
						open: false,
						aroud: 12, //12个月
						nums: [{
							"reTravelDate": "2016-12-27",
							"availableAmount": 12
						}, {
							"reTravelDate": "2017-01-01",
							"availableAmount": 13
						},{
							"reTravelDate": "2017-01-02",
							"availableAmount": 13
						},{
							"reTravelDate": "2017-01-03",
							"availableAmount": 13
						}, {
							"reTravelDate": "2017-02-02",
							"availableAmount": 1
						}]
					},
					currentDate: null,
					pepoleNum: 10,
					cardNum: 10
				}
			},
			computed: {
				getCardNum: function() {
					return this.cardNum != null && this.cardNum + '张';
				},
				getPepoleNum: function() {
					return this.pepoleNum != null && this.pepoleNum + '人';
				},
				getCurrentDate: function() {
					let d = this.currentDate;
					if(d) {
						return this.formatDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
					} else {
						let d = new Date();
						return this.formatDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
					}
				}
			},
			created: function() {},
			methods: {
				clickRight: function() {
					alert("历史订单")
				},
				openCalendar: function() {
					this.getCalendarAndMum();
					this.calendar.open = true;
				},
				closeCalendar: function() {
					this.calendar.open = false;
				},
				formatDate: function(year, month, day) {
					var y = year;
					var m = month;
					if(m < 10) m = "0" + m;
					var d = day;
					if(d < 10) d = "0" + d;
					return y + "-" + m + "-" + d
				},
				setCurrentDate: function(d) {
					this.currentDate = d;
					this.closeCalendar();
				},
				getCalendarAndMum: function() {
					//此处可以ajax 获取数据
					let me = this;
				}
			},
			components: {
				"nvHead": require('../components/header.vue'),
				"calendarEl": require('../components/calendar.vue'),
			},
	}
</script>
<style lang="sass" scoped>
	.calendar {
		width: 100%;
		height: 100%;
		overflow: hidden;
		-webkit-overflow-scrolling: touch;
		display: box;
		display: -webkit-box;
		display: -moz-box;
		box-orient: vertical;
		-moz-box-orient: vertical;
		-webkit-box-orient: vertical;
		.calendaWrap {
			width: 100%;
			height: 100%;
			overflow-x: hidden;
			overflow-y: scroll;
			box-flex: 1;
			-webkit-box-flex: 1;
			-moz-box-flex: 1;
		}
	}
	
	section {
		background: rgb(255, 255, 255);
		ul {
			padding: 0 20px;
			li {
				position: relative;
				height: 90px;
				line-height: 90px;
				border-bottom: 1px solid #DDDDDD;
				/*no*/
				.item {
					font-size: 28px;
					/*px*/
					color: #999999;
				}
				.result {
					margin-left: 57px;
					font-size: 24px;
					/*px*/
					color: #333333;
				}
				.select {
					position: absolute;
					right: 0px;
					font-size: 24px;
					/*px*/
					color: #C4C4C4;
				}
			}
		}
		.tips {
			padding: 20px;
			font-size: 20px;
			/*px*/
			color: #999999;
		}
		.submitPlan {
			margin: 75px 60px 20px 60px;
			width: 520px;
			height: 88px;
			background: #37B7FA;
			border-radius: 100px;
			font-size: 32px;
			/*px*/
			color: #FFFFFF;
			letter-spacing: 0px;
		}
		.tips2 {
			padding: 0 60px;
			font-size: 18px;
			/*px*/
			color: #999999;
			letter-spacing: 0px;
		}
	}
</style>