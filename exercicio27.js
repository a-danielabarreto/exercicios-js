/*
27 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao quadrado.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosAoQuadrado = numeros.map(numero => numero * numero);

console.log(numerosAoQuadrado);