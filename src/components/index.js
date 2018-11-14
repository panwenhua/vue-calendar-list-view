import Vue from "vue";
import CalendarList from "./CalendarList.vue";

const Components = {
    CalendarList,
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
