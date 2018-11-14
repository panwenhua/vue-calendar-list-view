<template>
	<CalendarList :aroud="calendar.aroud" :on-select="onSelect" :options="calendar.options" :value="currentDate"></CalendarList>
</template>
<script>
export default {
  data() {
    return {
      calendar: {
        aroud: 12, //12个月
        options: [
          {
            //对应日期的  人数
            date: "2018-11-11",
            label: "剩12人",
            value: 12
          },
          {
            date: "2018-11-12",
            label: "剩13人",
            value: 13
          },
          {
            date: "2018-11-13",
            label: "剩14人",
            value: 14
          },
          {
            date: "2018-11-14",
            label: "剩15人",
            value: 15
          },
          {
            date: "2018-11-20",
            label: "剩16人",
            value: 16
          }
        ]
      },
      currentDate: null //当前选择的日期
    };
  },
  methods: {
    onSelect(date, value, recode) {
      //date：当前选择的日期
      //value：当前选择的数量
      //recode：当前选择的的对象
      console.log(date, value, recode);
      this.currentDate = date;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>