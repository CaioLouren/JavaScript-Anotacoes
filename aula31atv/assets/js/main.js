/*const h1 = document.querySelector('.container h1');
let date = new Date();
let diaDaSemanaTexto;
let diaDaSemana = date.getDay();
let diaDoMes = date.getDate();
let mesEmTexto;
let mes = date.getMonth();
let ano = date.getFullYear();
let hora = date.getHours();
let minu = date.getMinutes();

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

switch (diaDaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaDaSemana = '';
}
switch (mes) {
    case 0:
        mesEmTexto = 'Janeiro';
        break;
    case 1:
        mesEmTexto = 'Fevereiro';
        break;
    case 2:
        mesEmTexto = 'Março';
        break;
    case 3:
        mesEmTexto = 'Abril';
        break;
    case 4:
        mesEmTexto = 'Maio';
        break;
    case 5:
        mesEmTexto = 'Junho';
        break;
    case 6:
        mesEmTexto = 'Julho';
        break;
    case 7:
        mesEmTexto = 'Agosto';
        break;
    case 8:
        mesEmTexto = 'Setembro';
        break;
    case 9:
        mesEmTexto = 'Outubro';
        break;
    case 10:
        mesEmTexto = 'Novembro';
        break;
    case 11:
        mesEmTexto = 'Dezembro';
        break;
    default:
        mesEmTexto = '';
}

h1.innerHTML = `${diaSemanaTexto}, ${diaDoMes} de ${mesEmTexto} de ${ano} ${hora}:${minu}`;*/

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });