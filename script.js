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

const btnStart = document.getElementById('btn-start'); 
const btnRestart = document.getElementById('btn-restart');
const container = document.getElementById('torre1');
const iniciarJogo = () => {
    btnStart.style.display = 'none';
    btnRestart.style.display = 'block';

    for(let i=0; i<torres.length; i++) {
        torres[i].style.display = 'flex';
    }

    for(let i=1; i <= 4; i++) {
        const bloco = document.createElement('div');
        bloco.classList.add('bloco');
        bloco.id = 'bloco'+i;
        container.appendChild(bloco);
    }
}
btnStart.addEventListener('click', iniciarJogo);

const blocos = document.getElementsByClassName('bloco');
const reiniciarJogo = () => {
    for(let i=blocos.length-1; i>=0; i--) {
        torres[0].appendChild(blocos[i]);
        console.log(blocos[i]);
    }
}

btnRestart.addEventListener('click', reiniciarJogo);
