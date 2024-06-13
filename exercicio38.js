/*
38 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que terminam com a letra "a".
*/

const animais = ["arara", "gato", "cachorro", "pássaro"];

function animaisComLetraA(animais) {
    return animais.filter(animal => animal[0] == "a");
}

console.log(animaisComLetraA(animais));