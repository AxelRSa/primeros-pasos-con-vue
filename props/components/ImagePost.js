Vue.component("img-post", {
	template: "<img :src='imgPost()' :alt='title' :title='title'/>",
	props: {
		url: {
			type: String,
			default: "https://www.adslzone.net/app/uploads-adslzone.net/2020/12/imagenes.jpg"
		}
	},
	data: function () {
		return {
			title: "Título de la img"
		}
	},
	methods: {
		imgPost() {
			if (this.url != "") {
				return this.url;
			}
		}
	}
})