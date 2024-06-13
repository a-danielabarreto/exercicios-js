/*
26 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras minúsculas. Utilize a função toLowerCase() para converter as strings.
*/

const linguagens = ["PYTHON", "Java", "JavaScript", "GO", "PHP"];

const linguagensLetraMinuscula = linguagens.map(linguagem => linguagem.toLowerCase());

console.log(linguagensLetraMinuscula);