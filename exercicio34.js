/*
34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função reduce() para calcular a média das idades dos alunos.
Imprima o resultado.
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
/*
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

Parâmetros: callback(accumulator, currentValue, currentIndex, array)
- accumulator: O acumulador que mantém o resultado acumulado das chamadas de retorno.
- currentValue: O elemento atual sendo processado no array.
- currentIndex (opcional): O índice do elemento atual sendo processado no array.
- array (opcional): O array sobre o qual reduce foi chamado.
*/

const totalIdades = alunos.reduce((soma, aluno) => soma + aluno.idade, 0);
const mediaIdade = totalIdades / alunos.length;

console.log(mediaIdade);
