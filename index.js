// Karla Oliveira (karllinha.sousa@gmail.com)
// Projeto Plugowtech

class SlidePagina {
    pagina = 0;
    cards = [];
}

let CARDS_VISIVEIS = 5;
let PAGINAS_CARDS = 0;
let CARDS_POR_PAGINA = 0;

let ContainerCards = document.getElementById('cards-container');
let Lojas = document.getElementsByClassName("card");
let LojasVirtuais = Array.from(document.getElementsByClassName("card")); // para filtro de lojas
let LojasFiltradas = [];
let CARDS = Lojas.length;
let LojasOcultas = [];

// Para paginacao do carrossel
let mod = LojasVirtuais.length % CARDS_VISIVEIS
if (mod > 0) {
    PAGINAS_CARDS = (Lojas.length / CARDS_VISIVEIS);
}

let CARDS_PAGINADOS = [];
let i = 0;
while (i < PAGINAS_CARDS){
    let start = i * CARDS_VISIVEIS;
    let end = start + CARDS_VISIVEIS;
    let pagina = new SlidePagina();
    pagina.pagina = i + 1;
    pagina.cards = Array.from(LojasVirtuais).slice(start, end);
    CARDS_PAGINADOS.push(pagina);
    i++;
}

for (let index = 0; index < CARDS_PAGINADOS.length; index++) {
    let seletor = document.createElement("A");
    seletor.className = 'pagina';
    seletor.innerText = ' ';
    seletor.id = index + 1;
    seletor.addEventListener('click', selecionaPaginaSlide);
    document.getElementById("paginator").appendChild(seletor);
}


// Para a busca de parceiros
let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let numbers = '1234567890'.split('');
let cardsCollection = document.getElementsByClassName('card');

function selecionaPaginaSlide(event){
    event.preventDefault();
    event.target.className = event.target.className + ' selected';
    Array.from(document.getElementsByClassName('pagina')).forEach(element => {
        if (element.id != event.target.id){
            element.className = 'pagina';
        }
    })
    ContainerCards.innerHTML = '';
    let pagina = event.target.id;
    let cards = CARDS_PAGINADOS.filter((item) => {
        return item.pagina == pagina
    })[0];

    for(let index = 0; index < cards.cards.length; index ++){
        ContainerCards.appendChild(cards.cards[index]);
    }

}


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
        let card_visivel = LojasOcultas[0];
        let pagina_do_card = CARDS_PAGINADOS.filter(item => {
            let pagina_procurada = item.cards.filter(c => {
                return c.src === card_visivel.src
            });
            return pagina_procurada.length > 0
            
        });
        let id_seletor = pagina_do_card[0].pagina;
        let _elementos = Array.from(document.getElementsByClassName('pagina'));
        _elementos.forEach(p => {
            if (p.id == parseInt(id_seletor)){
                p.className = 'pagina selected';
            }
            else {
                p.className = 'pagina';
            }
        })

        ContainerCards.insertBefore(LojasOcultas[0], ContainerCards.children[0]);
        LojasOcultas = LojasOcultas.filter(loja => {
            return loja != LojasOcultas[0]
        });
    }
    // Array.from(document.getElementsByClassName('pagina')).forEach(element => {
    //         element.className = 'pagina';
    // })
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
        let card_visivel = LojasOcultas[0];
        let pagina_do_card = CARDS_PAGINADOS.filter(item => {
            let pagina_procurada = item.cards.filter(c => {
                return c.src === card_visivel.src
            });
            return pagina_procurada.length > 0
            
        });
        let id_seletor = pagina_do_card[0].pagina;
        let _elementos = Array.from(document.getElementsByClassName('pagina'));
        _elementos.forEach(p => {
            if (p.id == parseInt(id_seletor)){
                p.className = 'pagina selected';
            }
            else {
                p.className = 'pagina';
            }
        })

        ContainerCards.appendChild(LojasOcultas[0]);
        LojasOcultas = LojasOcultas.filter(loja => {
            return loja != LojasOcultas[0]
        });
    }
    // Array.from(document.getElementsByClassName('pagina')).forEach(element => {
    //         element.className = 'pagina';
    // })    
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
