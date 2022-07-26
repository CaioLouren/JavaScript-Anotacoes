function relogio() {
    function getTimeFromSecond(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', { timeZone: 'GMT' });
    }

    let relogio = document.querySelector('.relogio');
    let iniciar = document.querySelector('.iniciar');
    let pausar = document.querySelector('.pausar');
    let zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function inicaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSecond(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            inicaRelogio();
        }
        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = "00:00:00";
            segundos = 0;
            relogio.classList.add('pausado');
        }
    });
}

relogio();
