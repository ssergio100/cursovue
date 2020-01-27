new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            return this.valor == 37 ? "Valor igual" : "Valor diferente"
        }
    },
    watch:{
        resultado(novo, velho) {
            console.log(novo+'|'+velho)
            setTimeout(() => {
                this.valor = 0
            }, 5000);
        }
    }
});