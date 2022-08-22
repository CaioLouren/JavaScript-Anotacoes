/*
// UM OBJECT LITERAL É QUANDO FAZEMOS COM {}
const pessoa = {
    //UM OBJETO É COMPOSTO POR UM PAR DE CHAVE E VALOR, EX:
    // CHAVE   VALOR
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
console.log(pessoa.nome);
console.log(pessoa['sobrenome']);
//TANTO FAZ PARA ACESSAR, MAS COM A NOTAÇÃO DE CHAVES, EU POSSO ACESSAR DINAMICAMENTE, POR EX.
const chave = 'sobrenome';
console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
console.log(pessoa1.nome, pessoa1.sobrenome);

console.log(pessoa, pessoa1);

//delete pessoa1.nome;
console.log(pessoa, pessoa1);

pessoa1.falarNome = function () {
    console.log(`${this.nome} está falando seu nome.`);
};

pessoa1.falarNome();

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave);
}
for (let valor in pessoa1) {
    console.log(pessoa1[valor]);
}
*/

//Factory functions / Constructor functions / Classes (Padrão de projetos, para construir obj)

function criaPessoa(nome, sobrenome) {//Factory functions
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa(`Caio`, `Lourenço`);
console.log(p1.nomeCompleto);

//constructo functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// A palavra new ela cria um obj vazio {} <- e atrela a palavra this dentro dessa function 
const p2 = new Pessoa(`Caio`, `Lourenço`);
console.log(p2);
Object.freeze(p2);//isso trava o obj, ele n pode ser alterado.
p2.nome = 'Outra coisa';
console.log(p2);
