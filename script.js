const msg = document.getElementById('msg');
const movimentos = document.getElementById('movimentos');

let blocoAtual = '';

let count = 0;

const torres = document.querySelectorAll('.torre');
torres.forEach((item) => {
    item.addEventListener("click", escolhaTorre);
});

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

// BUTTON START GAME
const btnStart = document.getElementById('btn-start');
const iniciarJogo = () => {
    btnStart.style.display = 'none';
    btnRestart.style.display = 'inline-block';

    for (let i = 0; i < torres.length; i++) {
        torres[i].style.display = 'flex';
    }

    for (let i = 1; i <= 4; i++) {
        let bloco = document.createElement('div');
        bloco.classList.add('bloco');
        bloco.id = 'bloco' + i;
        torres[0].appendChild(bloco);
    }

    movimentos.innerText = `Movimentos: ${count}`;
}
btnStart.addEventListener('click', iniciarJogo);

// BUTTON RESTART GAME
const btnRestart = document.getElementById('btn-restart');
const reiniciarJogo = () => {
    torres.forEach((item) => {
        item.innerHTML = '';
    });

    msg.innerText = '';
    count = 0;
    movimentos.innerText = `Movimentos: ${count}`;

    iniciarJogo();
}
btnRestart.addEventListener('click', reiniciarJogo);

const final = () => {
    if (torres[2].childElementCount === 4) {
        mensagem('Parabéns, você conseguiu!', 'green', 3000)

        setTimeout(() => {
            reiniciarJogo();
        }, 3000);
    }
}

const mensagem = (texto, cor, tempo) => {
    msg.innerText = texto;
    msg.style.color = cor;

    setTimeout(() => {
        msg.innerText = '';
    }, tempo);
}
