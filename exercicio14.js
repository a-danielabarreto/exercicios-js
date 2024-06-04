/*
14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.
*/

const base = 2.00;

const areaTriangulo = (base, altura) => {
    return base * altura / 2;
}

console.log(`A área do triângulo é ${areaTriangulo(base, 4.00)}`);