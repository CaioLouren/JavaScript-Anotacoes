let nome = 'Caio';// Declarou e instanciou(inicializando a variável)
let nome1;//só declarou

console.log(nome, 'nasceu em 1984');
nome = 'Otávio' // a variável, varia(eu não posso redeclarar a variavel)
console.log('Em 2000', nome, 'conheceu Maria.');
console.log('João caso-se com Maria em 2012.');
console.log('Maria teve 1 filhoo com', nome,'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');
console.log(nome1);//undefined
// Não posso criar variáveis com palavras reservadas, ex: let let, ou let console
// As variáveis, precisam ter nomes significativos.
// lembrar da regra dos nomes das variáveis, camelCase.
// essas variáveis são Case-sensitive: é quando letra maiúscula ou minúscula, não faz diferença.
// SEMPRE UTILIZAR LET, NÃO UTILIZAR VAR
let nomeCliente = 'Caio';//certa
let nomecliente = 'Lourenço'; //errada
// para o motor do JavaScript essas variáveis são diferentes.
console.log(nomeCliente, nomecliente);
