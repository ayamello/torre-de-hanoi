const torre1 = document.getElementById('torre1');
const torre2 = document.getElementById('torre2');
const torre3 = document.getElementById('torre3');
const fim = document.getElementById('msg');

let blocoAtual = '';

const torres = document.querySelectorAll('.torre');
torres.forEach((item) => {
    item.addEventListener("click", escolhaTorre);
});

function escolhaTorre(e) {
    const torreEscolhida = e.target.dataset.torre;
    console.log(torreEscolhida);
    if (blocoAtual === '' && torreEscolhida.childElementCount === 0) {
        console.log('vazio');
    } else if (blocoAtual === '') {
        blocoAtual = torreEscolhida.firstElementChild;
    } else if (torreEscolhida.childElementCount === 0) {
        torreEscolhida.insertAdjacentElement('afterbegin', blocoAtual);
        blocoAtual = '';
    } else if (torreEscolhida.firstElementChild.clientWidth > blocoAtual.clientWidth) {
        torreEscolhida.insertAdjacentElement('afterbegin', blocoAtual);
        blocoAtual = '';
    } else if (torreEscolhida.firstElementChild.clientWidth < blocoAtual.clientWidth) {
        blocoAtual = '';
    } 
}

// torre1.addEventListener('click', () => {
//     if (blocoAtual === '' && torre1.childElementCount === 0) {
//         console.log('vazio');
//     } else if (blocoAtual === '') {
//         blocoAtual = torre1.firstElementChild;
//     } else if (torre1.childElementCount === 0) {
//         torre1.insertAdjacentElement('afterbegin', blocoAtual);
//         blocoAtual = '';
//     } else if (torre1.firstElementChild.clientWidth > blocoAtual.clientWidth) {
//         torre1.insertAdjacentElement('afterbegin', blocoAtual);
//         blocoAtual = '';
//     } else if (torre1.firstElementChild.clientWidth < blocoAtual.clientWidth) {
//         blocoAtual = '';
//     } 
// })

// torre2.addEventListener('click', () => {
//     if (blocoAtual === '' && torre2.childElementCount === 0) {
//         console.log('vazio');
//     } else if (blocoAtual === '') {
//         blocoAtual = torre2.firstElementChild;
//     } else if (torre2.childElementCount === 0) {
//         torre2.insertAdjacentElement('afterbegin', blocoAtual);
//         blocoAtual = '';
//     } else if (torre2.firstElementChild.clientWidth > blocoAtual.clientWidth) {
//         torre2.insertAdjacentElement('afterbegin', blocoAtual);
//         blocoAtual = '';
//     } else if (torre2.firstElementChild.clientWidth < blocoAtual.clientWidth) {
//         blocoAtual = '';
//     } 
// })

// torre3.addEventListener('click', () => {
//     if (blocoAtual === '' && torre3.childElementCount === 0) {
//         console.log('vazio');
//     } else if (blocoAtual === '') {
//         blocoAtual = torre3.firstElementChild;
//     } else if (torre3.childElementCount === 0) {
//         torre3.insertAdjacentElement('afterbegin', blocoAtual);
//         blocoAtual = '';
//     } else if (torre3.firstElementChild.clientWidth > blocoAtual.clientWidth) {
//         torre3.insertAdjacentElement('afterbegin', blocoAtual);
//         blocoAtual = '';
//     } else if (torre3.firstElementChild.clientWidth < blocoAtual.clientWidth) {
//         blocoAtual = '';
//     } 
//     if (torre3.childElementCount === 4) {
//         fim.innerText = 'Finalizou'
//     }
// });

const container = document.getElementById('torre1');
const gerarBlocos = () => {
    container.innertext = '';

    const bloco1 = document.createElement('div');
    const bloco2 = document.createElement('div');
    const bloco3 = document.createElement('div');
    const bloco4 = document.createElement('div');

    bloco1.classList = ('bloco');
    bloco2.classList = ('bloco');
    bloco3.classList = ('bloco');
    bloco4.classList = ('bloco');

    bloco1.id = 'bloco1';
    bloco2.id = 'bloco2';
    bloco3.id = 'bloco3';
    bloco4.id = 'bloco4';

    container.appendChild(bloco1);
    container.appendChild(bloco2);
    container.appendChild(bloco3);
    container.appendChild(bloco4);
}