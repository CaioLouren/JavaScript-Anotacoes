function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}


const time = setInterval(function () { console.log(mostraHora()) }, 1000);

setTimeout(function () {
    clearInterval(time);
}, 5000)