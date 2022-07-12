//IEE 754-2008
let num = 10.5218791956184;
let num2 = 2.5;

console.log(num.toString() + num2);
console.log(typeof num)
//num = num.toString(); aqui estou alterando pra sempre, para string.
//console.log(num.toString(2)) pra saber a representação binária do número
//console.log(num.toFixed(2)); quantas casas decimais a pessoa quer.
//console.log(Number.isInteger(num)); pra saber se o número é inteiro. 
//let temp = num * 'ola';
//console.log(Number.isNaN(temp));
//contas abaixo de 0 tem uma certa imprecisão ppor conta do IEEE a melhor maneira de tratar isso esta ai embaixo
num = Number(num.toFixed(2))//é bom converter tbm
num = parseFloat (num);






