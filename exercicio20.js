/*
20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array.
*/

const numeros = [1, 2, 100, 200, 3, 4];

const media = (parNumeros) => {
    return (parNumeros[0] + parNumeros[1] + parNumeros[2] + parNumeros[3] + parNumeros[4] + parNumeros[5]) / 6;
}

console.log(`A média dos números é de ${media(numeros).toFixed(2)}`);