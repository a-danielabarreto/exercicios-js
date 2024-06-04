/*
7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:

nome: O nome do aluno.
cpf: O CPF do aluno.
cidade: A cidade onde o aluno mora.
notas: Um array com 4 notas do aluno. Imprima o nome, CPF e cidade do aluno. Imprima cada uma das notas do array notas. Calcule a média das notas do aluno e imprima. Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. Utilize template literals para a concatenação de strings.
*/

let aluno = {
    nome: "Daniela Barrêto",
    cpf: "555.555.444-44",
    cidade: "João Pessoa",
    notas: [9.0, 8.0, 10, 9.0]
}

console.log(aluno.nome);
console.log(aluno.cpf);
console.log(aluno.cidade);
console.log(aluno.notas[0]);
console.log(aluno.notas[1]);
console.log(aluno.notas[2]);
console.log(aluno.notas[3]);

const media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / aluno.notas.length;
console.log(`Média das notas: ${media}`);

const notaSorteada = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];
const notaConvertida = notaSorteada * 10;

console.log(`A nota sorteada do aluno é: ${notaConvertida}`);