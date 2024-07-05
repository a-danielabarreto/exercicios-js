const somar = () => {
    let numero = parseInt(document.getElementById('numero').value);
    let contador = 0;

    for (let i = 1; i <= numero; i++) {    
        contador = contador + i;
    }

    return document.getElementById('resultado').innerText = `A soma é de ${contador}.`;    
}