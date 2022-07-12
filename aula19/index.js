//funçoes executa ações.
/*function saudacao(nome) {
    return `Bom dia! ${nome}`;
}

const variavel = saudacao('Caio');
console.log(variavel);*/
/*function soma(x,y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(5,4));
*/
const raiz = function (n) {
    return n ** 0.5;
}; // função anonima

console.log(raiz(16));

const raiz2 = (n) => {
    return n ** 0.5;
}// essa é um arrow function, elas vinheram para simplificar a vida do programador.

//Quando eu tenho só uma linha eu posso tirar as {} e os ().