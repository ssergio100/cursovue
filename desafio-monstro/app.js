new Vue({
	el: '#jogo',
	data: {
		width_jogador: 100,
		width_monstro: 100,
		dano_monstro: 0,
		dano_jogador: 0,

		critico_monstro: false,
		critico_jogador: false,
		game_start: false,
		game_over: false,
		game_empate: false,
		vencedor: '',
		historico: []
	},
	methods: {

		atacar(tipo) {

			if (this.game_over) return
			this.game_start = true



			if (tipo) {
				console.log('atacar especial')
				this.dano_monstro = this.dano_jogador + this.geraNumeroRandomico(0, 5)
				this.danoelse_jogador = this.geraNumeroRandomico(1, 10)
				this.log(2, 'Jogador atingiu com força especial ' + this.dano_monstro)
			} else {
				this.dano_monstro = this.geraNumeroRandomico(1, 10)
				this.dano_jogador = this.dano_monstro + this.geraNumeroRandomico(0, 5)
				this.log(2, 'Jogador atingiu com força ' + this.dano_monstro)
			}
			console.log(this.geraNumeroRandomico(1, 10))
			console.log(this.dano_jogador)

			this.log(1, 'Monstro atingiu com força ' + this.dano_jogador)



			this.atualizaVida(this.dano_monstro, this.dano_jogador)
		},


		curar() {
			let tmp_jogador = this.geraNumeroRandomico(1, 10)
			this.width_jogador += tmp_jogador
			if (this.width_jogador >= 100) this.width_jogador = 100
			let tmp_monstro = this.geraNumeroRandomico(1, 10)
			this.atualizaVida(0, tmp_monstro)


			this.log(1, 'Monstro atacou com força ' + tmp_monstro)
			this.log(3, 'Jogador curou-se com força ' + tmp_jogador)
		},

		desistir() {
			this.game_over = true
		},

		iniciar() {
			this.game_start = false
			this.width_jogador = 100
			this.width_monstro = 100
			this.game_over = false
			this.game_empate = false
			this.critico_monstro = false
			this.critico_jogador = false
			this.historico = []
		},

		log(atacante, acao) {

			this.historico.unshift({
				atacante: atacante,
				acao: acao
			}, )
		},

		atualizaVida(dano_jogador, dano_monstro) {

			this.width_monstro -= dano_jogador
			this.width_jogador -= dano_monstro

			this.vencedor = this.width_monstro > this.width_jogador ? 'Monstro' : 'Jogador'

			if (this.width_monstro <= 0 || this.width_jogador <= 0) {
				this.game_over = true;
			}

			if (this.game_over && this.width_monstro == this.width_jogador) {
				this.game_empate = true;
				this.vencedor = 'Empate'
			}

			if (this.width_monstro <= 0) this.width_monstro = 0
			if (this.width_jogador <= 0) this.width_jogador = 0

			this.critico_monstro = (this.width_monstro <= 20) ? true : false
			this.critico_jogador = (this.width_jogador <= 20) ? true : false

			this.game_start = true

			console.log(dano_jogador)
			console.log(dano_monstro)
		},


		geraNumeroRandomico(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min;
		}
	}
});
