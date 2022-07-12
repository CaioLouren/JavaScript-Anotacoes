let n = prompt(`Qual seu número:`);
n = Number(n);
document.body.innerHTML += `<h1><strong>Seu número é ${n}</strong></h1>`;
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(n)}<br>`;
document.body.innerHTML += `${n} é inteiro: ${Number.isInteger(n)}<br>`;// DESSE JEITO MEXE NO BODY TODO
document.body.innerHTML += `é NaN: ${Number.isNaN(n)} <br>`;
document.body.innerHTML += `Arredondando pra baixo: ${Math.floor(n)}<br>`;
document.body.innerHTML += `Arredondando pra cima: ${Math.ceil(n)}<br>`;
document.body.innerHTML += `Com duas casa decimais: ${n.toFixed(2)}<br>`;

const text = document.getElementById('texto');// EM HTML SÓ É PRA TER UM ELEMENTO POR ID NA PAG, EX N PODE TER OUTRO ID TEXTO
texto.innerHTML = `<h1><strong>Seu número é ${n}</strong></h1> <br>`;//Desse jeito, a pessoa so mexe no ID, Melhor desse jeito
texto.innerHTML += `Raiz quadrada: ${Math.sqrt(n)}<br>`;
texto.innerHTML += `${n} é inteiro: ${Number.isInteger(n)}<br>`;
texto.innerHTML += `é NaN: ${Number.isNaN(n)} <br>`;
texto.innerHTML += `Arredondando pra baixo: ${Math.floor(n)}<br>`;
texto.innerHTML += `Arredondando pra cima: ${Math.ceil(n)}<br>`;
texto.innerHTML += `Com duas casa decimais: ${n.toFixed(2)}<br>`;