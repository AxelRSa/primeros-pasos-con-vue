let app = new Vue({
	el: "#app",
	data: {
		numero: 13
	},
	methods: {
		incrementar() {
			this.numero++
		}
	},
	watch: {
		numero: function (val) {
			console.log("watch:" + val);
		}
	}
})