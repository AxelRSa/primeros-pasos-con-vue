let app = new Vue({
	el: "#app",
	data: {
		isVisible
	},
	// Se guardan las respuestas en caché
	computed: {
		reverseMessage: function () {
			return this.message.split('').reverse().join('')
		}
	},
	// Método tradicional, se ejecutan al activarse
	methods: {
		calculateSum(value1, value2) {
			return value1 + value2
		}
	}
})