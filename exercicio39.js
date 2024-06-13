/*
39 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. Utilize a função toFixed() para formatar os números.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numerosComCasasDecimais(numeros) {
    return numeros.map(numero => numero.toFixed(2));
}

console.log(numerosComCasasDecimais(numeros));