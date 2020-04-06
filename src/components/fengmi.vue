<template>
  <div>
    <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
    <van-picker class="van-picker" :columns="columns" @change="onChange" />
  </div>
</template>

<script>
  import { Picker,CountDown } from 'vant';

  var now = new Date(); // 当前日期
  var nowDayOfWeek = now.getDay(); // 今天本周的第几天
  var nowDay = now.getDate(); // 当前日
  var nowMonth = now.getMonth(); // 当前月
  var nowYear = now.getYear(); // 当前年
  nowYear += (nowYear < 2000) ? 1900 : 0;
  export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      getYears: '', // 当前年份
      getMonth: '', // 当前月份
      time: 2073600000
    };
  },
  created() {

  },
  mounted() {
    this.getDate();
    this.countdown();
  },
  methods: {
    // 获取月份，年份
    getDate () {
      let date = new Date();
      this.getMonth = date.getMonth() +1; // 获取月份
      this.getYears = date.getFullYear(); // 获取年份

      let val = [];
      for (let i=0; i<this.getMonth; i++) {
        val.push(i + 1);
      };
      this.columns = val.reverse();
    },
    onChange(picker, value, index) {
      console.log(value);
    },
    // 倒计时
    countdown () {
      // 当前时间
      var currentTime= parseInt(new Date().getTime());
      // 未来时间
      var monthEndDate = this.formatDate(new Date(nowYear, nowMonth, this.getMonthDays())) + ' ' + '23:59:59';
      var val = parseInt(new Date(monthEndDate).getTime()); // 把指定的日期转换成豪秒数
      if (val <= currentTime) {
        this.time = 0;
        return false;
      } else {
        // 这里把秒数转成毫秒
        this.time = (val - currentTime);
        console.log(this.time, '3');
      }
    },
    // 获得本月天数
    getMonthDays() {
        var monthStartDate = new Date(nowYear, nowMonth, 1);
        var monthEndDate = new Date(nowYear, nowMonth + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        return days;
    },
    // 格式化日期
    formatDate(date) {
        var myyear = date.getFullYear();
        var mymonth = date.getMonth() + 1;
        var myweekday = date.getDate();
 
        if (mymonth < 10) {
            mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
            myweekday = "0" + myweekday;
        }
        return (myyear + "-" + mymonth + "-" + myweekday);
    }
  },
}
</script>

<style lang='less' scoped>
.van-picker {
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0;
}
</style>