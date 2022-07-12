/* QUANDO FALAMOS EM TIPOS DE DADOS ESTAMOS FALANDO DO VALOR EM SI
Primitivos (VALORES IMUTÁVEIS) - STRING, NUMBER, BOOLEAN, UNDERFINED, NULL, (AINDA TEM BIGINT, SYMBOL)

REFERÊNCIA (MUTÁVEL) - ARRAY, OBJECT, FUNCTION - PASSADOS POR REFERÊNCIA
*/

/*let nome = 'Caio';
nome[0] = 'R';//o indice da string(a string é indexada) é imutavel.
console.log(nome[0], nome);*/

/*let a = 'A';
let b = a;//quando utilizo dado primitivo eu estou fazendo uma copia.
console.log(a, b);

a = `Outra coisa`;
console.log(a, b);*/

let a = [1, 2, 3];
let b = a;
let c = [...a]//se eu quiser COPIAR MSM eu coloco isso.
console.log(a, b);
//aqui b muda, pq é referencia, aqui a e b APONTA.
a.push(4);
console.log(a, b);
//Quando o valor é copiado ele é totalmente independente
b.pop(4);
console.log(a, b);