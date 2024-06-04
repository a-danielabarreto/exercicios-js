/*
1 - Crie um script que tenha três variáveis:

var nome;
let sobreNome;
const cpf;

nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): Nome Sobrenome CPF. Outra linha com uma mensagem concatenando os valores.
*/

const cpf = "555.555.444-44";
var nome = "Daniela";

const funcaoSobreNome = () => {
    let sobreNome = "Barrêto";
    return sobreNome;
}

console.log(`Nome: ${nome}\nSobrenome: ${funcaoSobreNome()}\nCPF: ${cpf}`);
console.log(`${nome} ${funcaoSobreNome()}; CPF: ${cpf};`);

