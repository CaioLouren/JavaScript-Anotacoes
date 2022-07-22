const nome = ['Caio', 'Lourenço', 'Araujo'];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log("---------------------------------------------------")

for (let i in nome) {
    console.log(nome[i]);
    console.log(i);
}

console.log("---------------------------------------------------")

for (let valor of nome) {//quando falo OF vem o valor e não o indice que nem o IN
    console.log(valor);
}

console.log("---------------------------------------------------")

nome.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
})
//com obj n da pra usar for of, pq obj n é interavel


const pessoa = {
    nome: 'Marcos',
    sobrenome: 'Viana'
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

/*for (let valor of pessoa) {//da um error
    console.log(valor);
}*/

