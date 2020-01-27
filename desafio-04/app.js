new Vue({
	el: '#desafio',
	data: {
		destaque:'destaque',
		encolher:'encolher',
		classe1 : 'classe1',
		classe2 : 'classe2',
		alterna: false,
		condicional: false,
		escolhida: '',
		cor:'red',
		tamanho : 0
	},
	methods: {
		iniciarEfeito() {
			
			setInterval(() => {
				this.alterna = !this.alterna
			}, 1000);
		},
		iniciarProgresso() {
			let set = setInterval(() => {
				this.tamanho++
				if(this.tamanho == 500) {
					clearInterval(set)
				}
			}, 1);
		}
	}
})
