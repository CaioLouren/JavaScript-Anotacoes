//Dobre os números
//ALTERAR O ARRAY, O MAP É O MELHOR
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2);
console.log(dobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];
//ALTERA O OBJ PRINCIPAL, POIS SÃO VALORES PASSADOS POR REFERENCIA
const nome = pessoas.map(nome => nome.nome);
console.log(nome);

const remove = pessoas.map(obj => ({ idade: obj.idade }));
console.log(remove);

const id = pessoas.map(function(obj, indice){
    obj.id = indice + 1;
    return obj;
});
console.log(id);
