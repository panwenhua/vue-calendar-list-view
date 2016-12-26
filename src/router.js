const routers = [{
	path: '/index',
	component: (resolve) => {
		require(["./views/index.vue"], resolve);
	}
}, {
	path: '*',
	redirect: '/index'
}];
export default routers;