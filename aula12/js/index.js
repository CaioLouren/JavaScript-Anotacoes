alert('Com a nossa mensagem.');// É um atalho do window.alert(); o window é o obj, o alert é o método, o obj window ta chamando o método alert, retorna undefined, que que dizer que não aponta para local nenhum da memória.
window.confirm('Deseja realmente apagar?');
let nome = prompt('Digite seu nome');
// Quando uma função está dentro de um obj, chamamos ele de método.

let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');
let num3 = prompt('Digite outro número: ');

num1 = parseInt(num1);
num2 = parseFloat(num2);
num3 = Number(num3);

const resultado = (num1 + num2) * num3;

console.log(resultado);

alert(`${nome} seu resultado foi de: ${resultado}`);