let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    if (nomeAmigo.value == '' || !isNaN(nomeAmigo.value)) {
        alert('Digite um nome valido para o sorteio.');
    } else if (amigos.includes(nomeAmigo.value)) {
        alert('Esse nome já foi adicionado.');
    } else {
        amigos.push(nomeAmigo.value);
        if (listaAmigos.textContent == '') {
            listaAmigos.textContent = nomeAmigo.value;
        } else {
            listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
        }
        nomeAmigo.value = '';
    }
}

function sortear() {
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
    }
    embaralha(amigos);
    let ListaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            ListaSorteio.innerHTML = ListaSorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            ListaSorteio.innerHTML = ListaSorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralha(listaAmigos) {
    for (let indice = listaAmigos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [listaAmigos[indice - 1], listaAmigos[indiceAleatorio]] = 
            [listaAmigos[indiceAleatorio], listaAmigos[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
