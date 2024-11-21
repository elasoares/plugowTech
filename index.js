
const  CARDS_VISIVEIS = 3;
var SetaEsquerda = window.document.getElementById("seta-esquerda")
var Loja1 = window.document.getElementById("loja1")
var Loja2 = window.document.getElementById("loja2")
var Loja3 = window.document.getElementById("loja3")
var SetaDireita = window.document.getElementById("seta-direita")

// Para o slide de parceiros
let ContainerCards = document.getElementById('cards-container');
let Lojas = document.getElementsByClassName("card");
let LojasOcultas = [];

// Para a busca de parceiros
let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let numbers = '1234567890'.split('');
let cardsCollection = document.getElementsByClassName('card');

function RolarParaDireita(){
    for (let index = Lojas.length-1; index >= 0; index--) {
        const card = Lojas[index];
        LojasOcultas.push(card);
        ContainerCards.removeChild(card);
        break;
    }
    if (Array.from(ContainerCards).length < CARDS_VISIVEIS){
        ContainerCards.insertBefore(LojasOcultas[0], ContainerCards.children[0]);
        LojasOcultas = LojasOcultas.slice(0,-1);
    }

    SetaEsquerda.style = "display:flex"; "margin:55%"
}

function RolarParaEsquerda(){    
    for (let index = 0; index < Lojas.length; index++) {
        const card = Lojas[index];
        LojasOcultas.push(card);
        ContainerCards.removeChild(card);
        break;
    }
    if (Array.from(ContainerCards).length < CARDS_VISIVEIS){
        ContainerCards.appendChild(LojasOcultas[0]);
        LojasOcultas = LojasOcultas.slice(0,-1);
    }

    
    SetaDireita.style = "display:flex"; "margin:25%"
}

function filterPartners(event, elemento){
    let key = event.key;    
    if ((elemento.value.length > 3) && (alphabet.indexOf(key) > -1) || (numbers.indexOf(key) > -1)){
        // faz a busca nos parceiros
        let termo = elemento.value.toLowerCase();
        for(let i=0; i < cardsCollection.length; i++){
            let card = cardsCollection[i];
            let parceiro_name = card.getAttribute('data-name').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            if (parceiro_name.indexOf(termo) > -1){
                card.style.display = 'flex';
            }
            else{
                card.style.display = 'none';
            }
        }
    }
    else{
        Array.from(cardsCollection).forEach(element => {
            element.style.display='flex';
        });
    }

}
