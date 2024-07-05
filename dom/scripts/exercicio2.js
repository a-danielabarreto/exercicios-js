/*
Crie uma página que verifique se um número é primo. O usuário deve inserir um número e a página deve exibir se ele é primo ou não.
*/

const numeroPrimo = () => {
    let numero = parseInt(document.getElementById('numero').value);

    if(numero <= 1) {
        return document.getElementById('resultado').innerText = "Não é primo";
    }
    
    if(numero == 2 || numero == 3) {
        return document.getElementById('resultado').innerText = "É primo";
    }
    
    if(numero % 2 == 0 || numero % 3 == 0) {
        return document.getElementById('resultado').innerText = "Não é primo";
    }

    for(let i = 5; i * i <= numero; i += 6) {
        if(numero % i == 0 || numero % (i + 2) == 0) {
            return document.getElementById('resultado').innerText = "Não é primo";
        }
    }

    return document.getElementById('resultado').innerText = "É primo";
}