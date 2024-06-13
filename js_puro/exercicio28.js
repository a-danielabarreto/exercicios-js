/*
28 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.
*/

const numeros = [1, 2, 100, 200, 3, 4];

function multiplosDeTres(numeros) {
    return numeros.filter(numero => numero % 3 == 0);
}

console.log(multiplosDeTres(numeros));