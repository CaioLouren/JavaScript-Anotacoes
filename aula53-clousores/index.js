//O CLOSURES É A HABILIDADE DESSA FUNÇÃO, EM ACESSAR O SEU ESCOPO LÉXICO
//POR QUE CLOSURES, POR QUE ELA TA FECHANDO UM ESCOPO, QUANDO EXECUTO ESSA FUNCTION
function retornaFuncao() {
    const nome = 'Caio';
    return function () {
        return nome;
    }
};

const funcao = retornaFuncao();
console.log(funcao());
console.dir(funcao());//n tem diferança aqui, mas no browser tem.
//ela tem acesso a tres escopos, 1-ela, 2-mãe dela, 3-global
//1- CLOSURE(RETORNAFUNCAO), 2-SCRIPT(FUNCTION), 3-GLOBAL(WINDOWA)