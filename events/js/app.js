let app = new Vue({
	el: "#app",
	data: {
		numero: 15
	},
	methods: {
		incrementar() {
			this.numero += 1
		},
		decrementar() {
			this.numero -= 1
		}
	}
})