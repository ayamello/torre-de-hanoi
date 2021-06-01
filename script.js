const torre1 = document.getElementById('torre1');
const torre2 = document.getElementById('torre2');
const torre3 = document.getElementById('torre3');
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
    console.log(torreEscolhida);

    validaJogada(torreEscolhida);
}

const validaJogada = (torreEscolhida) => {
    if (blocoAtual === '' && torreEscolhida.childElementCount !== 0) {
        blocoAtual = torreEscolhida.firstElementChild;
    } 
    
    if (torreEscolhida.childElementCount === 0) {
        torreEscolhida.insertAdjacentElement('afterbegin', blocoAtual);
        count++
        blocoAtual = '';
    } else if (torreEscolhida.firstElementChild.clientWidth > blocoAtual.clientWidth) {
        torreEscolhida.insertAdjacentElement('afterbegin', blocoAtual);
        count++
        blocoAtual = '';
    } else if (torreEscolhida.firstElementChild.clientWidth < blocoAtual.clientWidth) {
        msgErro();
        blocoAtual = '';
    } 

    movimentos.innerText = `Movimentos: ${count}`;
    final();
}

// BUTTON START GAME
const btnStart = document.getElementById('btn-start'); 
const iniciarJogo = () => {
    btnStart.style.display = 'none';
    btnRestart.style.display = 'block';

    for(let i=0; i<torres.length; i++) {
        torres[i].style.display = 'flex';
    }
    
    for(let i=1; i <= 4; i++) {
        let bloco = document.createElement('div');
        bloco.classList.add('bloco');
        bloco.id = 'bloco'+i;
        torres[0].appendChild(bloco);
    }
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
    movimentos.innerText = `Movimentos: ${count}`;;

    iniciarJogo();
}
btnRestart.addEventListener('click', reiniciarJogo);

const final = () => {
    if (torres[2].childElementCount === 4) {
        msg.innerText = 'Conseguiu!!';
        msg.style.color = 'green';
    }
}

const msgErro = () => {
    msg.innerText = 'Jogada Errada';
        msg.style.color = 'red';

        setTimeout(() => {
            msg.innerText = '';
        }, 1000);
}
