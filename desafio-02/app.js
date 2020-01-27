new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert('um alerta')
        },
        capturaEvento(e) {
            this.valor = e.target.value
        }
    }
})