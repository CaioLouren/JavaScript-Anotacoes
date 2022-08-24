const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = velocidade;
    }

    set velocidade(valor) {
        if (typeof valor !== "number") return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if (this.velocidade >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this.velocidade <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca', 0);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Caio', 'Lourenço');
console.log(p1.nomeCompleto);
