import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import Routers from './router';
import filters from './filters/filters';
import Env from '../config/env';
import FastClick from 'fastclick';

Vue.use(VueRouter);
//实例化Vue的filter
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
});
// 并且配置路由规则
const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes: Routers
})
router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0);
	FastClick.attach(document.body);
	next();
});

router.afterEach(() => {

});
const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')