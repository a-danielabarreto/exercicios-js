/*
33 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função filter() para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. Imprima o novo array.
*/

const alunos = [
    {
        nome: "Daniela Barrêto",
        idade: 17,
        notas: [8.0, 9.0, 8.5]
    },
    {
        nome: "João Silva",
        idade: 28,
        notas: [7.0, 7.5, 8.0]
    },
    {
        nome: "Ana Dantas",
        idade: 18,
        notas: [10.0, 8.0, 9.0]
    },
    {
        nome: "Pedro Lima",
        idade: 26,
        notas: [8.5, 9.0, 9.5]
    }
];

const resultado = alunos.filter(aluno => (aluno.idade >= 18));

console.log(resultado);