// Karla Oliveira (karllinha.sousa@gmail.com)
// Projeto Plugowtech


let  CARDS_VISIVEIS = 3;

let ContainerCards = document.getElementById('cards-container');
let Lojas = document.getElementsByClassName("card");
let LojasVirtuais = Array.from(document.getElementsByClassName("card")); // para filtro de lojas
let LojasFiltradas = [];
let CARDS = Lojas.length;
let LojasOcultas = [];

// Para a busca de parceiros
let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let numbers = '1234567890'.split('');
let cardsCollection = document.getElementsByClassName('card');

function between(value, min, max) {
    // Verifica se o valor esta entre dois valores min e max
    return value >= min && value <= max
}

if (between(window.outerWidth, 360, 532)) {
    CARDS_VISIVEIS = 1
}
else if (between(window.outerWidth, 1024, 1195)){
    CARDS_VISIVEIS = 2;
}

function inicia() {
    let index = 0;
    Array.from(Lojas).forEach(card => {
        index ++;
        if(index > CARDS_VISIVEIS){
            ContainerCards.removeChild(card);
            LojasOcultas.push(card);
        }
    })
}

function RolarParaDireita(){
    for (let index = CARDS-1; index >= 0; index--) {
        const card = Lojas[index];
        if (Array.from(ContainerCards.children).indexOf(card) > -1){
            LojasOcultas.push(card);
            ContainerCards.removeChild(card);
            break;
        }
    }
    if (Array.from(ContainerCards.children).length < CARDS_VISIVEIS){
        ContainerCards.insertBefore(LojasOcultas[0], ContainerCards.children[0]);
        LojasOcultas = LojasOcultas.filter(loja => {
            return loja != LojasOcultas[0]
        });
    }
}

function RolarParaEsquerda(){
    for (let index = 0; index < CARDS; index++) {
        const card = Lojas[index];
        if (Array.from(ContainerCards.children).indexOf(card) > -1){
            LojasOcultas.push(card);
            ContainerCards.removeChild(card);
            break;
        }
    }
    if (Array.from(ContainerCards.children).length < CARDS_VISIVEIS){
        ContainerCards.appendChild(LojasOcultas[0]);
        LojasOcultas = LojasOcultas.filter(loja => {
            return loja != LojasOcultas[0]
        });
    }
}

function filterPartners(event, elemento){
    let key = event.key;    
    if ((elemento.value.length >= 3) && (alphabet.indexOf(key) > -1) || (numbers.indexOf(key) > -1)){
        let termo = elemento.value.toLowerCase();
        for (let i=0; i < LojasVirtuais.length; i++) {
            let card = LojasVirtuais[i];
            LojasFiltradas.push(card);
            let parceiro_name = card.getAttribute('data-name').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            if (parceiro_name.indexOf(termo) > -1){
                card.style.display = 'flex';
                ContainerCards.appendChild(card);
            }
            else{
                card.style.display = 'none';
            }
        }
    }
    else{
        Array.from(LojasFiltradas).forEach(element => {
            element.style.display = 'block';
        });

        inicia();
    }

}

inicia();
