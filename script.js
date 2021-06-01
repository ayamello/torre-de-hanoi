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
    const torreEscolhida = e.currentTarget;
    console.log(torreEscolhida);

    validaJogada(torreEscolhida);
}

const validaJogada = (torreEscolhida) => {
    if (blocoAtual === '' && torreEscolhida.childElementCount !== 0) {
        blocoAtual = torreEscolhida.firstElementChild;
    } 
    
    if (torreEscolhida.childElementCount === 0) {
        torreEscolhida.insertAdjacentElement('afterbegin', blocoAtual);
        blocoAtual = '';
    } else if (torreEscolhida.firstElementChild.clientWidth > blocoAtual.clientWidth) {
        torreEscolhida.insertAdjacentElement('afterbegin', blocoAtual);
        blocoAtual = '';
    } else if (torreEscolhida.firstElementChild.clientWidth < blocoAtual.clientWidth) {
        blocoAtual = '';
    } 
}

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
