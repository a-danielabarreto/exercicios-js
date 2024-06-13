/*
13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. Declare uma função que calcule a largura ao cubo e imprima o resultado.
*/

var largura = 4.00;

const larguraAoCubo = () => {
    return largura * largura * largura;
}

console.log(larguraAoCubo().toFixed(2));