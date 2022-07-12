let umaString = 'O rato roeu a roupa do rei de roma.';
let umaString1 = 'Uma \\texto"';
let umaString2 = 'Uma \texto"';
//as strings são indexadas(Cada caracter tem um indice)


console.log(umaString);
console.log(umaString1);
console.log(umaString2);
console.log(umaString[5]);// para eu saber qual caracter estar nesse indice eu uso os [].
console.log(umaString.concat(" em um lindo dia."));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.indexOf("texto"));//pra saber aonde começa, se der -1, foi pq não encontrou.
console.log(umaString.lastIndexOf('U'));//de tras pra frente
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace(/Um/, 'Outra coisa'));
console.log(umaString.length);
console.log(umaString.slice(2, 5));
console.log(umaString.slice(-6, umaString.length - 1));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
console.log(umaString.split(' '));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
window.document.body.innerHTML = `Qualquer outra coisa`;// toda vez q chamamos essa função ela apaga oq estava escrito na anterior e pra resolver isso usamos o +=;
document.body.innerHTML += ` é mt bom`;
