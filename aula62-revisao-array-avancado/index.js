//const nomes = ['Eduardo', 'Maria', 'Joana'];
//const nomes = new Array('Eduardo', 'Maria', 'Joana');//POUCO UTILIZADO ESSA FORMA
//nomes[2] = 'João';
//delete nomes[2];//sem alterar os indices
//console.log(nomes);
//Em array, os valores são passados por referencia, ou seja, msm que eu crie outra variavel, e mude ela depois de criada, a alteração vai ser em todas que estejam recebendo a msm refêrencia

/*const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes];//dessa forma, o que eu alterar em novo, n alterarar em nomes

novo.pop();
console.log(nomes);
console.log(novo);

console.log(nomes.length);//isso n é um metodo, é um atributo por isso n botamos (), outra, ele conta os elementos, n os indices.
*/

/*const nomes = ['Eduardo', 'Maria', 'Joana'];
const removido = nomes.pop();//shift tira o primeiro, e desloca os indices.
console.log(nomes, removido);
*/

/*const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes.push('João');// ADD no final do índice
nomes.unshift('Mario');//pouco utilizado, pois pode trazre problemas de performace, pq add no inicio do array, fazendo com q todo os elementos mudem de indice com o deslocamento.
console.log(nomes);
*/
/*const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
const novo = nomes.slice(1, 3);//pode usar numeros negativos
console.log(nomes);
console.log(novo);
*/

/*const nome = 'Caio Lourenço';
const nomes = nome.split(' ');//PRA VIRAR UM ARRAY
console.log(nomes);
*/

const nomes = ['Caio', 'Lourenço'];
const nome = nomes.join(' ');//PRA VIRAR STRING
console.log(nome);
