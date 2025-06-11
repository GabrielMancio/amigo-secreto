let lista = document.getElementById('lista-amigos');

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    lista = document.getElementById('lista-amigos');
    if (nome == '' || lista.textContent.includes(nome)){
        return;
    }
    if (lista.textContent != ''){
        lista.textContent += ', ';
    }
    lista.textContent += nome;
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    let nomes = lista.textContent.split(', ');
    if (nomes.length < 4){
        alert('Mínimo 4 pessoas para o sorteio!')
        return;
    }
    nomes.sort(() => Math.random() - 0.5);
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';

    for (let i = 0; i < nomes.length; i++){
        let amigo = nomes[i];
        let sorteado = nomes[(i + 1) % nomes.length];
        listaSorteio.innerHTML += `<p>${amigo} -> ${sorteado}</p>`;
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
