//For in -> lê os índices(array(vetor-nesse caso)) ou chaves do objeto
//const frutas = ['Pera', 'Maçã', 'Uva'];
//for (let i in frutas) {
//    console.log(frutas[i]);
//}
const pessoa = {
    nome: `Mario`,
    sobrenome: `Otávio`,
    idade: 30
};

console.log(pessoa.nome);
console.log(pessoa['nome']);//muito útil quando não sabemos qual propriedade vou usar.

for (let chave in pessoa) {
    console.log(pessoa[chave])
}






