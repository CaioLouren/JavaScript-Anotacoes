/*const Pessoa1 = {
    nome: `Caio`,
    sobrenome: `Lourenço`,
    idade: 19
};//[] = ARRAY, {} = OBJETO, isso daqui é um objeto literal, tem outra maneira de criar objeto.
//é mais facil criar uma função que cria um objeto.
console.log(Pessoa1.nome);

function CriaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}// chamamos essa função de factory, ela cria, ela retorna objetos.

const Pessoa1 = CriaPessoa('Caio', 'Lourenço', 19);
const Pessoa2 = CriaPessoa('Camila', 'Lourenço', 19);
const Pessoa3 = CriaPessoa('Layla', 'Bianca', 10);
const Pessoa4 = CriaPessoa('Sheila', 'Domingues', 43);
const Pessoa5 = CriaPessoa('Aminadá', 'Lourenço', 57);

console.log(`${Pessoa1.nome} ${Pessoa1.sobrenome} ${Pessoa1.idade}`);
console.log(`${Pessoa2.nome} ${Pessoa2.sobrenome} ${Pessoa2.idade}`);
console.log(`${Pessoa3.nome} ${Pessoa3.sobrenome} ${Pessoa3.idade}`);
console.log(`${Pessoa4.nome} ${Pessoa4.sobrenome} ${Pessoa4.idade}`);
console.log(`${Pessoa5.nome} ${Pessoa5.sobrenome} ${Pessoa5.idade}`);
*/

const Pessoa1 = {
    nome: 'Caio',
    sobrenome: 'Lourenço',
    idade: 19,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} e minha idade atual é ${this.idade} `);
    },//a função dentro do objeto chamamos de método, e não precisa botar o function antes.
    incrementaIdade() {
        this.idade++;
    }
}

Pessoa1.fala();
Pessoa1.incrementaIdade();
Pessoa1.fala();
Pessoa1.incrementaIdade();
Pessoa1.fala();
Pessoa1.incrementaIdade();
Pessoa1.fala();
Pessoa1.incrementaIdade();
Pessoa1.fala();
Pessoa1.incrementaIdade();