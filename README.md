# vue-calendar-list-view

一个日历列表组件，类似各类旅游网站的出行日期选择控件。

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/vue-calendar-list-view.svg?style=flat-square
[npm-url]: http://npmjs.org/package/vue-calendar-list-view
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/vue-calendar-list-view.svg?style=flat-square
[download-url]: https://npmjs.org/package/vue-calendar-list-view

## install

[![vue-calendar-list-view](https://nodei.co/npm/vue-calendar-list-view.png)](https://npmjs.org/package/vue-calendar-list-view)


## Development

```
npm install
npm serve
```

## Example

http://localhost:8000/

online example: https://panwenhua.github.io/vue-calendar-list-view/

## Usage

```js
import 'vue-calendar-list-view'
import 'vue-calendar-list-view/lib/calendarListView.css'


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
```
## API

### Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>aroud</td>
          <td>Number</td>
          <th>12</th>
          <td>渲染日历的区间，例如当前为2018年11月，则日历会渲染2018年11月到2019年10月的数据</td>
      </tr>
      <tr>
          <td>value</td>
          <td>String</td>
          <th></th>
          <td>当前日历选中的值</td>
      </tr>
      <tr>
          <td>options</td>
          <td>Object[]<Object></td>
          <th></th>
          <td>
            <table>
             <thead>
                <tr>
                    <th style="width: 100px;">name</th>
                    <th style="width: 50px;">type</th>
                    <th>default</th>
                    <th>description</th>
                </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>date</td>
                      <td>String</td>
                      <th></th>
                      <td>日期。例如 "2018-11-14"</td>
                  </tr>
                  <tr>
                      <td>value</td>
                      <td>String|Number</td>
                      <th></th>
                      <td>日期对应的数量。比如出行人数"14"</td>
                  </tr>
                  <tr>
                      <td>label</td>
                      <td>String</td>
                      <th></th>
                      <td>对应数量的渲染label。比如"还剩14人"</td>
                  </tr>
                </tbody>
            </table>
          </td>
      </tr>
       <tr>
          <td>onSelect</td>
          <td>Function(date,value,recode)</td>
          <th></th>
          <td>选择之后的回调。//date：当前选择的日期 //value：当前选择的数量 //recode：当前选择的的对象</td>
      </tr>
    </tbody>
</table>


## License

vue-calendar-list-view is released under the MIT license.
