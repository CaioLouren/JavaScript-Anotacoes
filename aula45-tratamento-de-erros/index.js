
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(soma(5, 5));
    console.log(soma('a', 2));
}
catch (e) {
    console.log(e);
}
//NO FRONT-END N É PRA LANÇAR OS ERROS DO JEITO Q VEMOS, NUNCA, LANÇA QUALQUER OUTRA COISA, UM ALERT SLA, MAS N O ERROR, ISSO PODE SER PERIGOSO

console.log('---------------------------------------------------');

try {
    console.log(a);
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        //podemos aninhar
        console.log(b);
    }
    catch (e) {
        console.log('Deu error');
    }
    finally {
        console.log('Tambem sou finally')
        //sempre vai ser usado, mas pode ser emitido(geralmente não utilizamos, mas em alguns momentos vão ser usados)
    }
}
catch (e) {
    console.log('Tratando o erro');
}
finally {
    console.log('Eu sempre vou ser executado')
    //sempre vai ser usado, mas pode ser emitido(geralmente não utilizamos, mas em alguns momentos vão ser usados)
}

console.log('------------------------------------------');

function retonaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR')
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retonaHora(data);
    console.log(hora);
}
catch (e) {
    console.log(e);
}
finally {
    console.log('tenha um bom dia')
}
