const pessoa = {
    nome: `Caio`,
    sobrenome: `Lourenço`,
    idade: 20,
    endereco: {
        rua: `Avenida Brasil`,
        numero: 320
    }
};
//Atribuição via desestruturação
//podemos passar um valor padrão tbm, por ex:const { nome = 'Não existe', sobrenome = 'Não existe', idade } = pessoa;
const { nome, sobrenome, idade, endereco: { rua: r = 12345, numero } } = pessoa;
console.log(nome, sobrenome, idade, r, numero);