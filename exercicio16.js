/*
16 - Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos os números do array. Imprima o resultado.
*/

const numeros = [2, 4, 6, 8, 10];
var i = 0;
var soma = 0;

while(i < numeros.length) {
    soma += numeros[i];
    i++;
}

console.log(`A soma dos números é ${soma}`);