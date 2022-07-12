// se eu quero criar um array em JS eu simplismente utilizo os colchetes [];
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]);
console.log(alunos[1]);

alunos[0] = 'Caio'; //alterei esse indice
alunos[3] = 'Luiza'; // como esse indice n existe, ele vai ser criado agr
alunos[alunos.length] = 'Camila'; // melhor jeito de add um elemento em um array.//add no fim
alunos.push('Cristian');// (MELHOR MANEIRA)desse jeito vc pode bota um elemento sem precisar saber o tamanho do array, bem mais simples.//add no fim
alunos.unshift('Layla');// add no inicio, e tds vão mudar de indice
const removido = alunos.pop();//remove do final
const removeDoComeco = alunos.shift();
delete alunos[1];//como remover sem alterar os indices.(apagando)


console.log(alunos[0]);
console.log(`-----------------------`);
console.log(alunos);
console.log(`-----------------------`);
console.log(alunos.length);
console.log(`-----------------------`);
console.log(removido);// da pra ver quem foi removido.
console.log(`-----------------------`);
console.log(removeDoComeco);
console.log(`-----------------------`);
console.log(alunos);
console.log(`-----------------------`);
console.log(alunos[1]);
console.log(`-----------------------`);
console.log(alunos[50]);
console.log(`-----------------------`);
console.log(alunos.slice(0, 3));
console.log(`-----------------------`);
console.log(alunos.slice(0, -1));
console.log(`-----------------------`);
console.log(typeof alunos);
console.log(`-----------------------`);
console.log(alunos instanceof Array);