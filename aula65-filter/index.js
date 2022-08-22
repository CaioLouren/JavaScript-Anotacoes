//Filter(VAI SEMPRE RETORNAR UM ARRAY, COM A MESMA QUANTIDADE DE ELEMENTOS OU MENOS)
//FILTRAR UM ARRAY, O FILTER É O MELHOR
// map, reduce
//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*function callbackFilter(valor, indice, array) {
    if (valor > 10) {
        return true;
    }
    else {
        return false;
    }
}*/ //Quando houver uma condição, ja se pode retorna so a condição

/*function callbackFilter(valor) {
    return valor > 10;
}*/

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasNomeGrande = pessoas.filter(nome => nome.nome.length > 5);
console.log(pessoasNomeGrande);

const pessoasIdade = pessoas.filter(idade => idade.idade > 50);
console.log(pessoasIdade);

const pessoasTerminadaEmA = pessoas.filter(nome => nome.nome.toLowerCase().endsWith('a'));
console.log(pessoasTerminadaEmA);
