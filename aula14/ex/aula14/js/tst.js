const nome = prompt('Digite seu nome completo: ');

document.body.innerHTML = `O seu nome é <strong>${nome}</strong> <br />`;
document.body.innerHTML += `O seu nome tem letras  <strong>${nome.length}</strong> <br />`;
document.body.innerHTML += `A segunda letra do seu nome é:  <strong>${nome[1]}</strong> <br />`;
document.body.innerHTML += `Qual o primeiro indice da letra a no seu nome:  <strong>${nome.indexOf('a')}</strong> <br />`;
document.body.innerHTML += `Qual o último indice da letra a no seu nome:  <strong>${nome.lastIndexOf('a')}</strong> <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são:  <strong>${nome.slice(-3)}</strong> <br />`;
document.body.innerHTML += `As palavras do seu nome são:  <strong>${nome.split(' ')}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas:  <strong>${nome.toUpperCase()}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas:  <strong>${nome.toLowerCase()}</strong> <br />`;