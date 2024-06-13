/*
25 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas. Utilize a função toUpperCase() para converter as strings.
*/

const linguagens = ["python", "java", "javascript", "go", "php"];

const linguagensLetraMaiuscula = linguagens.map(linguagem => linguagem.toUpperCase());

console.log(linguagensLetraMaiuscula);