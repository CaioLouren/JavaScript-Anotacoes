// IIFE - Immediately invoked function expression

(function (idade, peso, altura) {
    const sobrenome = 'Lourenço';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Caio'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(20, 80, 1.87);






