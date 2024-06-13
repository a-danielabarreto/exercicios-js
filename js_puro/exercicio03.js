/* 
3 - Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:

var nomeAluno;
let curso;
const matricula;

As variáveis nomeAluno e matricula devem estar em um escopo global. A variável curso deve estar dentro de uma função. A função deve retornar uma string que concatene todas as informações do aluno em uma única linha utilizando template literals ${var}.
*/

const matricula = "20240110";
var nomeAluno = "Daniela Barrêto";

const funcaoCurso = () => {
    let curso = "Análise e Desenvolvimento de Sistemas";
    return curso;
}

console.log(`${matricula}: ${nomeAluno} - ${funcaoCurso()}`);
