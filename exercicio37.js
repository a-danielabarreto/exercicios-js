/*
37 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja invertida. Utilize a função reverse() para inverter as strings.
*/

const nomes = ["Daniela", "Ana", "Paulo", "João", "Maria", "José"];

function nomesInvertidos(nomes) {
    return nomes.reverse();
}

console.log(nomesInvertidos(nomes));