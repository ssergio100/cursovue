new Vue({
    el:"#desafio",
    data:{
        nome: 'Sergio Moreira',
        idade: 44,
        link_img:"https://html5up.net/uploads/demos/massively/images/pic02.jpg"
    },
    methods:{
        randNumber: function(){
            return Math.random()
        }
    }

})