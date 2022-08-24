/*
Object.values(ver o valor)
Object.entries(ver o valor como um array)
Object.assign(des, any)(copiar um obj)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)(espalho um obj dentro de outro(copiar))

Já vi
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

/*
PARA COPIAR UM OBJ
//const produto = {nome:'Caneca', preco: 1.8};
//const caneca = { ...produto, material:'porcelana'};
//const caneca = Object.assign({}, produto, {material: 'porcelana'});

caneca.nome = 'outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

*/

/*
const produto = {nome:'Caneca', preco: 1.8};
Object.freeze(produto);
produto.nome = 'Outro nome';
const caneca = { ...produto, material:'porcelana'};
console.log(Object.keys(produto));
*/

/*
const produto = {nome:'Caneca', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable:false,
    configurable:false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outra coisa';
delete produto.nome;
console.log(produto);
*/

/*
const produto = {nome:'Produto', preco: 1.8};
console.log(Object.entries(produto));

for(let entries of Object.entries(produto)){
    console.log(entries);
}
*/

