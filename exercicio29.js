/*
29 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".
*/

const nomes = ["Ana", "Daniela", "João", "Pedro", "Beatriz", "Allex"];

function nomesComLetraA(nomes) {
    return nomes.filter(nome => nome[0] == "A");
}

console.log(nomesComLetraA(nomes));