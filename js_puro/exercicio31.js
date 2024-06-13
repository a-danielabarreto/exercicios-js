/*
31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize um loop for para imprimir o nome de cada aluno.
*/

const alunos = [
    {
        nome: "Daniela Barrêto",
        idade: 33,
        notas: [8.0, 9.0, 8.5]
    },
    {
        nome: "João Silva",
        idade: 28,
        notas: [7.0, 7.5, 8.0]
    },
    {
        nome: "Ana Dantas",
        idade: 35,
        notas: [10.0, 8.0, 9.0]
    },
    {
        nome: "Pedro Lima",
        idade: 26,
        notas: [8.5, 9.0, 9.5]
    }
];

for(let aluno in alunos) {
    console.log(alunos[aluno].nome);    
}