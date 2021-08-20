const ListPrograming = {
	name: "ListPrograming",
	template: `
	<div>
		<ul>
			<li v-for="l in languagues">{{l}}</li>
		</ul>
	</div>`,
	data: function () {
		return {
			languagues: ["C#", "Python", "C++", "Javascript"]
		}
	}
}