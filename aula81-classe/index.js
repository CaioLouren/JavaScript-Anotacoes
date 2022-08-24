class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    // ja são automaticamente linkados no prototipe da classe
}

const p1 = new Pessoa('Caio', 'Lourenço');
console.log(p1);
