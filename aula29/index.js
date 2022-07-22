//let data = new Date(0);//é uma função construtora, toda vez que usamos a palavra new, estamos falando de uma função construtora
// A data 0 é 01/01/1970(depende do fuso-horario), Timestamp unix ou época unix, se eu quero um valor antes disso, eu uso o número negativo.
//console.log(data.toString())
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
// Estão em milisegundos.
//const data = new Date(2022, 3, 20, 15, 14, 27); // a, m, d, h, M, s, ms
//const data = new Date('2022-04-20 20:20:59'); // Esse é outro formato utilizado
const data = new Date('2022-04-20T15:10:59.950'); // Esse é outro formato utilizado
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth());//Mes comeca com 0
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Minutos", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("Milisegundos", data.getMilliseconds());
console.log(`Dia da semana`, data.getDay())//0 É DOMINGO E 6 É SABADO
console.log(data.toString());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const day = zeroAEsquerda(data.getDate());
    const month = zeroAEsquerda(data.getMonth() + 1);
    const yer = zeroAEsquerda(data.getFullYear());
    const hour = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${day}/${month}/${yer} ${hour}:${min}:${sec}`
}

const daty = new Date();
const dataBrasil = formataData(daty);
console.log(dataBrasil);