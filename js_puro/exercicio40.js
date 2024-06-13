/*
40 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 10.
*/

const numeros = [0, 5, 10, 15, 20, 25, 30];

function numerosMaioresDez(numeros) {
    return numeros.filter(numero => numero > 10);
};

console.log(numerosMaioresDez(numeros));
