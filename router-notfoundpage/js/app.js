const router = new VueRouter({
	base: "router",
	routes: [{
		path: '/',
		component: Home
	}, {
		path: '/list',
		component: List
	}, {
		path: '/listPrograming',
		component: ListPrograming
	}, {
		path: '/*',
		component: PageNotFound
	}]
})

const app = new Vue({
	el: '#app',
	router,
	mounted() {
		console.log(this.$route);
	}
})