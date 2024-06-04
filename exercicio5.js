/*
5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals ${var}. Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".
*/

const carreira = "Desenvolvedora Back-end";

function objetivoCarreira(parCarreira) {
    return `Meu objetivo de carreira é me tornar uma ${parCarreira}`;
}

const objetivoCarreira2 = (parCarreira) => {
    return `Meu objetivo de carreira é me tornar uma ${parCarreira}`;
}

console.log(objetivoCarreira(carreira));
console.log(objetivoCarreira2(carreira));


