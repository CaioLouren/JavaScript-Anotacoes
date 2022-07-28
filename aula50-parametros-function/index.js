function funcao() { //Só com a function, ou function expresion, que jogamos a function na variavel
    console.log(arguments[0]);//a gnt vai ter uma variavel disponivel chamada arguments(ela suntenta todos os argumentos)

    // consigo fazer uma soma msm sem passar os argumentos.
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);//N da error, que nem nas outras linguagens

function funcao2(a, b = 2, c = 4) {//podemos por valor padrão, caso n seja enviado o valor vai ser oq foi determinado
    console.log(a + b + c);
}

funcao2(2, 10);

function funcao3({ nome, sobrenome, idade }) {// uma outra maneira tambem poderia ser atribuição via desestruturação 
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Caio', sobrenome: 'Lourenco', idade: 20 };
funcao3(obj);

function restOperator(operador, acumulador, ...numeros) {//tem q ser o ultimo parametro
    console.log(operador, acumulador, numeros);
}

restOperator('+', 0, 1, 2, 3, 4, 5);

const conta = function (operador, acumulador, ...numeros) {//function express
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);
