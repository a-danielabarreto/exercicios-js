const numeros = Array.from({ length: 100 }, (_, index) => index + 1);

const numeroEscolhidoPeloPc = numeros[Math.floor(Math.random() * numeros.length)];

const advinhar = () => {
    let numero = parseInt(document.getElementById('numero').value);

    if (numero < numeroEscolhidoPeloPc) {
        return document.getElementById('resultado').innerText = "Tentativa menor que o número escolhido pelo computador";
    } else if (numero = numeroEscolhidoPeloPc) {
        return document.getElementById('resultado').innerText = "Você acertou o número!";
    } else {
        return document.getElementById('resultado').innerText = "Tentativa maior que o número escolhido pelo computador";
    }
}