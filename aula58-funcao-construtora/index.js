// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa(new)(obrigatoriamente tem que usar a palavra new) Sempre inicar com letra MAIUSCULA
function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const id = 12345;
    const metodoInterno = function () {

    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Caio', 'Lourenço');
