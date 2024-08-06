// script.js

let textoEntrada = "";
let textoSaida = "";
let botaoCopiar = "";
const regex = /[^a-z ]/;

document.getElementById('copiar_texto').style.display = 'none';

function criptografar() {
    let resultado = document.getElementById('resultado');
    textoEntrada = document.querySelector('textarea').value;

    textoSaida = textoEntrada.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    botaoCopiar = textoSaida;           
    resultado.innerHTML = textoSaida;

    document.getElementById('info_mobile').style.display = 'none';
    document.getElementById('copiar_texto').style.display = 'block';
}

function descriptografar() {
    let resultado = document.getElementById('resultado');
    textoEntrada = document.querySelector('textarea').value;

    // Adicionado para depuração
    console.log("Texto de Entrada:", textoEntrada);

    textoSaida = textoEntrada.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    // Adicionado para depuração
    console.log("Texto de Saída:", textoSaida);

    botaoCopiar = textoSaida;
    resultado.innerHTML = textoSaida;

    document.getElementById('info_mobile').style.display = 'none';
    document.getElementById('copiar_texto').style.display = 'block';
}

function copiarTexto() {
    navigator.clipboard.writeText(botaoCopiar)
        .then(() => {
            alert('Texto copiado com sucesso!');
            limparTela(); 
        })
        .catch(err => {
            console.error('Erro ao copiar o texto:', err);
        });
}

function limparTela() {
    document.querySelector('textarea').value = "";
    document.getElementById('resultado').innerHTML = ""; 
    document.getElementById('info_mobile').style.display = 'block'; 
    document.getElementById('copiar_texto').style.display = 'none'; 
    document.getElementById('exclamacao').style.color = '#495057'; 
}

function validacaoCriptografia() {
    textoEntrada = document.querySelector('textarea').value;
 
    if (!textoEntrada.match(regex)) {
        document.getElementById('exclamacao').style.color = '#495057'; 
        criptografar();   
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('info_mobile').style.display = 'block';
        document.getElementById('copiar_texto').style.display = 'none';
        document.getElementById('exclamacao').style.color = '#e63636'; 
    }
}

function validacaoDescriptografia() {
    textoEntrada = document.querySelector('textarea').value;
 
    if (!textoEntrada.match(regex)) {
        document.getElementById('exclamacao').style.color = '#495057'; 
        descriptografar();
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('info_mobile').style.display = 'block';
        document.getElementById('copiar_texto').style.display = 'none';
        document.getElementById('exclamacao').style.color = '#e63636'; 
    }
}

document.getElementById('modoButton').addEventListener('click', () => {
    document.body.classList.toggle('modo-noturno');
    const botoes = document.querySelectorAll('button');
    botoes.forEach(botao => {
        botao.classList.toggle('modo-noturno');
    });
    // Alterar a imagem de acordo com o modo
    const imagemPrincipal = document.querySelector('.resultado__imagem');
    if (document.body.classList.contains('modo-noturno')) {
        imagemPrincipal.src = './assets/icons/pngegg.png'; // Imagem para modo sonic
    } else {
        imagemPrincipal.src = './assets/icons/High quality products 1 1.svg'; // Imagem para modo alura
    }
});
