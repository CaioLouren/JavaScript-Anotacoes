//ARRAY(INDEXADO)0  1  2  3  4  5  6  7  8(INDECE)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];//(VALOR)
//const [primeiroNumero, segundoNumero, ...resto] = numeros; tambem tem o spread
//console.log(primeiroNumero, segundoNumero);
//Pegar o resto do array com ...E O NOME DA VARIAVEL Q QUE PEGAR O RESTO DO ARRAY
//console.log(resto);
const [primeiroNumero, , terceiroNumero, , quintoNumero] = numeros;
console.log(primeiroNumero, terceiroNumero, quintoNumero);

//               0          1          2
//            0  1  2    0  1  2    0  1  2
const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1, lista2, lista3] = num;
console.log(lista3[2]);
//console.log(num[1][2]);