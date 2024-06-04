/*
18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. Utilize a função Math.max() para encontrar o maior número.
*/

const numeros = [1, 2, 100, 200, 3, 4];

function maiorNumero(parNumeros) {
    return Math.max(...parNumeros);
}

console.log(`O maior número é: ${maiorNumero(numeros)}`);