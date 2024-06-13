/*
36 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplosDeCinco(numeros) {
    return numeros.filter(numero => numero % 5 == 0);
}

console.log(multiplosDeCinco(numeros));