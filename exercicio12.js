/*
12 - Crie um script que declare uma variável let altura e atribua a ela um valor numérico. Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado.
*/

const alturaAoQuadrado = () => {
    let altura = 1.58;
    let resultado = altura * altura;
    console.log(resultado.toFixed(2));
}

alturaAoQuadrado();