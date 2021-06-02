const main = document.getElementsByTagName('main')[0];
const msg = document.getElementById('msg');
const movimentos = document.getElementById('movimentos');

// CRIAÇÃO DE TORRES E BLOCOS 
function criarTorres() {
    for (let i = 1; i <= 3; i++) {
        const torre = document.createElement('div');
        torre.classList.add('torre');
        torre.id = 'torre' + i;
        main.appendChild(torre);
    }
}
function criarBlocos() {
    for (let i = 1; i <= 4; i++) {
        const bloco = document.createElement('div');
        bloco.classList.add('bloco');
        bloco.id = 'bloco' + i;
        torre1.appendChild(bloco);
    }
}

// BUTTON START GAME
let torres;
const btnStart = document.getElementById('btn-start');
const iniciarJogo = () => {
    btnStart.style.display = 'none';
    btnRestart.style.display = 'inline-block';
    criarTorres();
    criarBlocos();
    movimentos.innerText = `Movimentos: ${count}`;

    torres = document.querySelectorAll('.torre');
    torres.forEach((item) => {
        item.addEventListener("click", escolhaTorre);
    });
}
btnStart.addEventListener('click', iniciarJogo);


let blocoAtual = '';
let count = 0;

function escolhaTorre(e) {
    const torreEscolhida = e.currentTarget;

    validaJogada(torreEscolhida);
}

const validaJogada = (torreEscolhida) => {
    if (blocoAtual === '' && torreEscolhida.childElementCount !== 0) {
        blocoAtual = torreEscolhida.firstElementChild;
    } else if (blocoAtual === '' && torreEscolhida.childElementCount === 0) {
        mensagem('X', 'red', 1000);
    }

     else if (torreEscolhida.childElementCount === 0) {
        torreEscolhida.insertAdjacentElement('afterbegin', blocoAtual);
        count++
        blocoAtual = '';
    } else if (torreEscolhida.firstElementChild.clientWidth > blocoAtual.clientWidth) {
        torreEscolhida.insertAdjacentElement('afterbegin', blocoAtual);
        count++
        blocoAtual = '';
    } else if (torreEscolhida.firstElementChild.clientWidth < blocoAtual.clientWidth) {
        mensagem('X', 'red', 1000);
        blocoAtual = '';
    }

    movimentos.innerText = `Movimentos: ${count}`;
    final();
}

// BUTTON RESTART GAME
const btnRestart = document.getElementById('btn-restart');
const reiniciarJogo = () => {
    torres.forEach((item) => {
        item.innerHTML = '';
    });

    msg.innerText = '';
    count = 0;
    movimentos.innerText = `Movimentos: ${count}`;

    criarBlocos();
}
btnRestart.addEventListener('click', reiniciarJogo);

// MENSAGEM FINAL
const final = () => {
    if (torres[2].childElementCount === 4) {
        mensagem('Parabéns, você conseguiu!', 'green', 3000)

        setTimeout(() => {
            reiniciarJogo();
        }, 3000);
    }
}

// CONFIGURAÇÃO DE MENSAGENS (DE ERRO E FINAL)
const mensagem = (texto, cor, tempo) => {
    msg.innerText = texto;
    msg.style.color = cor;

    setTimeout(() => {
        msg.innerText = '';
    }, tempo);
}
