// Não posso criar constantes com palavras reservadas, ex: let let, ou let console
// As constantes, precisam ter nomes significativos.
// lembrar da regra dos nomes das constantes, camelCase.
// essas constantes são Case-sensitive: é quando letra maiúscula ou minúscula, não faz diferença.
// NÃO UTILIZAR VAR, UTILIZE CONST
// Não pode modificar o valor de uma constante
// precisa ser criado e inicializada ao msm tempo, e constante não se modifica.
// o JavaScript é uma linguagem de tipagem dinámica
const nome = 'João';
console.log(nome);

const primeiroNumero = 5;// number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado += 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof (primeiroNumero)) // qual é o tipo da const primeiro numero, typeof é um operador de javascript que permite ver o tipo de uma variável
console.log(typeof (primeiroNumero + segundoNumero))