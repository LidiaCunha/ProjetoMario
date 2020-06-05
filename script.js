"use strict"

//Função que pega os elementos do JSON (letra, sounds, imagem) e coloca na div 
function bloco () {
    let blocoHTML = "";
    //Varredura dos elementos 
    json.data.forEach(elemento => {
       blocoHTML += `<img id="img${elemento.letra}" class="imagem" src="imagens/${elemento.imagem}"/>
       <div class="tecla">${elemento.letra}</div>
       <audio id="${elemento.letra}" src="sounds/${elemento.sounds}"></audio>`
    });
    document.getElementById('blocos').innerHTML = blocoHTML;
}

//Função de animação para imagem
function mostrarImagem(imagem) {
    imagem.style.animation = "aparecer 2s";
}

bloco();

//Variaveis que pegam itens do HTML
const arrayBlocos = document.querySelectorAll('.tecla');
const arrayImagem = document.querySelectorAll('.imagem');

//Função que compara a letra do JSON ao que foi clicado
//Se sim, tocará a musica e exibirá a imagem
function tocaAudio (identificacao){
    json.data.forEach(elemento => {
        if ( elemento.letra == identificacao.toUpperCase()){
            document.getElementById(`${elemento.letra}`).play();
            //Para identificar a imagem certa colocamos o Id da letra na tag
            mostrarImagem(document.getElementById(`img${elemento.letra}`));
        }
    });
}

function animacaoTreme (div){
    div.style.animation = "treme 1.5s linear";
}

//Tocar audio quando bloco for clicado
arrayBlocos.forEach(elemento => {
    elemento.addEventListener("click",(evento) => {
        tocaAudio(evento.target.innerHTML)
        animacaoTreme(evento.target)
    });

    //Animação terminar será resetada para novos cliques
    elemento.addEventListener("animationend",(evento) => {
        evento.target.style.animation = null;
        evento.offsetHeight;
        evento.target.style.animation = "";
    });

    //Tocar audio quando apertar teclado
    document.body.addEventListener("keydown",(evento) => {
        tocaAudio(evento.key)
        // animacaoTreme(evento)
        console.log(evento);
    });
});

//Quando a animação terminar será resetada para novos cliques
arrayImagem.forEach(elemento => {
    elemento.addEventListener("animationend",(evento) => {
        evento.target.style.animation = null;
        evento.offsetHeight;
        evento.target.style.animation = "";
    });
});





