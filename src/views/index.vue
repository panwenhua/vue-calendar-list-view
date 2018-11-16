<template>
	<div>
		<!-- 全局header -->
		<Header :page-name="headTit.tab1" :back-type="headTit.back" :click-btn="headTit.right" :click-action="clickRight"></Header>
		<section id="wrapper" class="sy_main">
			<ul>
				<li @click="openCalendar">
					<span class="item">出发日期</span>
					<span class="result">{{getCurrentDate}}</span>
					<span class="select">请选择></span>
				</li>
				<li>
					<span class="item">出行人数</span>
					<span class="result" v-text="getPepoleNum"></span>
					<span class="select">请选择></span>
				</li>
				<li>
					<span class="item">旅游卡券</span>
					<span class="result" v-text="getCardNum"></span>
					<span class="select">请选择></span>
				</li>
			</ul>
			<div class="buttons">
				<button class="submitPlan">提交出行订单</button>
			</div>
			<p class="tips2">说明：只有出行日期可点</p>
		</section>
		<div class="calendar" :style="{display: calendar.open?'block':'none'}" style="position: fixed; z-index: 999; bottom: 0px;">
			<Header :page-name="'选择出行日期'" :back-type="'ok'" :back-action="closeCalendar"></Header>
				<CalendarList :aroud="calendar.aroud" :on-select="setCurrentDate" :options="calendar.options" :value="currentDate"></CalendarList>
		</div>
	</div>
</template>
<script>
import Header from "../components/header.vue";
export default {
  data() {
    return {
      headTit: {
        tab1: "选择出行日期",
        back: "ok",
        right: "历史订单"
      },
      calendar: {
        open: false,
        aroud: 12, //12个月
        options: [
          {
            //对应日期的  人数
            date: "2018-11-16",
            label: "剩12人",
            value: 12
          },
          {
            date: "2018-11-17",
            label: "剩13人",
            value: 13
          },
          {
            date: "2018-12-13",
            label: "剩14人",
            value: 14
          },
          {
            date: "2018-12-14",
            label: "剩15人",
            value: 15
          },
          {
            date: "2018-12-20",
            label: "剩16人",
            value: 16
          }
        ]
      },
      currentDate: null, //当前选择的日期
      pepoleNum: 10,
      cardNum: 10
    };
  },
  computed: {
    getCardNum() {
      return this.cardNum && this.cardNum + "张";
    },
    getPepoleNum() {
      return this.pepoleNum && this.pepoleNum + "人";
    },
    getCurrentDate() {
      let d = this.currentDate;
      if (d) {
        return d;
      } else {
        d = new Date();
        return this.formatDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
      }
    }
  },
  methods: {
    clickRight() {
      alert("历史订单");
    },
    openCalendar() {
      this.getCalendarAndMum();
      this.calendar.open = true;
    },
    closeCalendar() {
      this.calendar.open = false;
    },
    formatDate(year, month, day) {
      let y = year;
      let m = month;
      if (m < 10) m = "0" + m;
      let d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    },
    setCurrentDate(d) {
      this.currentDate = d; //
      this.closeCalendar();
    },
    getCalendarAndMum() {
      //此处可以获取数据  比如获取对应日期的人数
    }
  },
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: center;
}
.calendar {
  width: 100%;
  height: 100%;
}

section {
  background: rgb(255, 255, 255);
  ul {
    padding: 0 20px;
    li {
      position: relative;
      height: 90px;
      line-height: 90px;
      border-bottom: 1px solid #dddddd;
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
        color: #c4c4c4;
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
    background: #37b7fa;
    border-radius: 100px;
    font-size: 32px;
    /*px*/
    color: #ffffff;
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