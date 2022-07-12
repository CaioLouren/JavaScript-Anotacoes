Math.pow(); // Math é um objeto.
let num1 = 9.54578;
let num2 = Math.floor(num1);// estou arredondando para baixo esse número
num2 = Math.ceil(num1);// pra cima esse
console.log(num2)
num2 = Math.round(num1);//para o mais próximo
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, -10, -50, 1500, 9, 8));//pra saber qual o maior número
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, -10, -50, 1500, 9, 8));//pra saber qual o menor número
console.log(Math.random());// números aleatorios entre 0 e , o 1 nunca sera incluido aqui.

const aleatorios = Math.random() * (10 - 5) + 5; //numeros aleatorios entre 10 e 5
console.log(aleatorios.toFixed(2));

// no JavaScript tem como dividir por 0, então é pra ficar ligado, pq as vezes isso pode dar um erro.