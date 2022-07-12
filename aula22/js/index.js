function Meuescopo() {
    const form = document.querySelector(`.form`);
    const resultado = document.querySelector(`.resultado`);

    const pessoas = [];

    function RecebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector(`.nome`);
        const sobrenome = form.querySelector(`.sobrenome`);
        const peso = form.querySelector(`.peso`);
        const altura = form.querySelector(`.altura`);

        let Pessoas = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(Pessoas);
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener(`submit`, RecebeEventoForm);
}
Meuescopo();