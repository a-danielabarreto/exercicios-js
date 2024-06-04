/*
19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. Utilize a função Math.min() para encontrar o menor número.
*/

const numeros = [1, 2, 100, 200, 3, 4];

const menorNumero = (parNumeros) => {
    return Math.min(...parNumeros);
}

console.log(`O menor número é: ${menorNumero(numeros)}`);