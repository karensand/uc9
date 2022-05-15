$( document ).ready(function() {

    $("#carrossel img:eq(0)").addClass("banner-ativo").show()


    setInterval(slide, 2000) 

    function slide(){
        if($(".banner-ativo").next().length ){
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        }else{
            $(".banner-ativo").removeClass().hide()
            $("#carrosel img:eq(0)").addClass("banner-ativo").show()
        }
    }   

})

$("#hamburguer").click(function () {
    $("#menu").toggleClass("menu-ativo")
})


  
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

// function enviarEmail(){
//     let emailDigitado = email.value;
//     console.log(emailDigitado)
// }

// let listaDestaque = [
//     {
//         titulo: "God of War",
//         descricao: "R$10,00"
//     },
//     {
//         titulo: "PSE 2021",
//         descricao: "R$15,00" 
//     },
//     {
//         titulo: "Fida 2022",
//         descricao: "R$20,00" 
//     },
//     {
//         titulo: "Nabunagasr",
//         descricao: "R$10,00" 
//     },
//     {
//         titulo: "Kit teclado",
//         descricao: "R$150,00" 
//     },
//     {
//         titulo: "Acessorios",
//         descricao: "R$100,00" 
//     },
//     {
//         titulo: "Cadeira",
//         descricao: "R$350,00" 
//     },
//     {
//         titulo: "Suporte para celula",
//         descricao: "R$50,00" 
//     },
//     {
//         titulo: "Assasinos Creed Valhalla",
//         descricao: "R$10,00" 
//     },
//     {
//         titulo: "Assasinos Creed III",
//         descricao: "R$10,00" 
//     },
//     {
//         titulo: "The Witcher",
//         descricao: "R$25,00" 
//     },
//     {
//         titulo: "Velozes e Furiosos Encruzilhada",
//         descricao: "R$30,00" 
//     },
//     {
//         titulo: "The Force Unleashed",
//         descricao: "R$10,00" 
//     },
//     {
//         titulo: "The Sky Walker Saga",
//         descricao: "R$10,00" 
//     },
//     {
//         titulo: "Star Wars III",
//         descricao: "R$10,00" 
//     },
//     {
//         titulo: "Old Republic",
//         descricao: "R$10,00" 
//     },
// ]

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado)
}


// function renderizarDestaque() {
//     let espaco = document.getElementById("espaco-destaque")

//     let template = "";

//     for (let index = 0; index < listaDestaque.length; index++) {
//         const destaque = listaDestaque[index];

//         template +=` <div class="produto1 col-md-3">
//         <img src="Img/Produto 1.png" alt="Jogo God of War"> 
//         <h3>${destaque.titulo}</h3>
//         <p>${destaque.descricao}</p>  
//         <a href="">Comprar</a>
//     </div>`        
//     }
    
//     espaco.innerHTML = template;
// }