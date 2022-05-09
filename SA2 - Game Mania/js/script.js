$(document).ready(function()){
    $("#hamburguer").click(function(){
        $("#menu").toggleClass("#menu-ativo")
    })
})


// $('.carrosel').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//   });



$(document).ready(function() {
    $("#carrossel img:eq(0)").addClass("banner-ativo").show()

})

setInterval(slide,1000);

function slide(){
    if($(".banner-ativo").next().length){
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-ativo").removeClass().hide()
        $("#carrossel img:eq(0)").addClass("banner-ativo").show()
    }
}

//     $("#hamburguer").click(function(){
//         if($("#menu").hasClass("#menu-ativo")){
//             $("#menu").removeClass("#menu-ativo")
//         }else{
//             $("#menu").addClass.("menu-ativo")
//         }

//     })
// })

//function mostrarPopup(){
   // window.alert("Seja Bem Vindo")
//}

let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

// let listaProdutos = [
//     {
//         titulo:"God of War"
//         Descricao:"R$10,00"
//     },
//     {
//         titulo:"PSE 2021"
//         Descricao:"R$15,00" 
//     },
//     {
//         titulo:"Fida 2022"
//         Descricao:"R$20,00" 
//     },
//     {
//         titulo:"Nabunagasr"
//         Descricao:"R$10,00" 
//     },
//     {
//         titulo:"Kit teclado"
//         Descricao:"R$150,00" 
//     },
//     {
//         titulo:"Acessorios"
//         Descricao:"R$100,00" 
//     },
//     {
//         titulo:"Cadeira"
//         Descricao:"R$350,00" 
//     },
//     {
//         titulo:"Suporte para celula"
//         Descricao:"R$50,00" 
//     }
//     {
//         titulo:"Assasinos Creed Valhalla"
//         Descricao:"R$10,00" 
//     },
//     {
//         titulo:"Assasinos Creed III"
//         Descricao:"R$10,00" 
//     },
//     {
//         titulo:"The Witcher"
//         Descricao:"R$25,00" 
//     },
//     {
//         titulo:"Velozes e Furiosos Encruzilhada"
//         Descricao:"R$30,00" 
//     },
//     {
//         titulo:"The Force Unleashed"
//         Descricao:"R$10,00" 
//     },
//     {
//         titulo:"The Sky Walker Saga"
//         Descricao:"R$10,00" 
//     },
//     {
//         titulo:"Star Wars III"
//         Descricao:"R$10,00" 
//     }
//     {
//         titulo:"Old Republic"
//         Descricao:"R$10,00" 
//     },
// ]

// function renderizarProdutos(){
//     let espaco = document.getElementById("espaco-produtos")

//     let template = "";

//     for (let index = 0; index < listaProdutos.length; index++) {
//         const produtos = listaProdutos[index];

//         template +=` <div class="produto1 col-md-3">
//         <img src="Img/Produto 1.png" alt="Jogo God of War"> 
//         <h3>${produtos.titulo}</h3>
//         <p>${produtos.Descricao}</p>  
//         <a href="">Comprar</a>
//     </div>`        
//     }
//     espaco.innerHTML = template;
// }