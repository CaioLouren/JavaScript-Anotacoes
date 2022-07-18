/*
&& -> AND -> E -> false && true == false "é o valor mesmo"
|| -> OR -> OU
FALSY -> aqui são valor falsy, não é um valor literal, ele avalia em false quando necessario
false -> é um valor literal(0, string vazia''""``, null/undefined, NaN)(Qualquer coisa diferente disso avalia em true no JavaScript)
 */
console.log(`Luiz Otávio` && true && `Maria`);//vai retorna o valor da ultima se for verdadeiro no caso Maria
console.log(`Luiz Otávio` && true && NaN);//vai retorna o valor da false encontrada no caso aqui o NaN
//Em JS tudo pode ser avaliado ou em true ou em false

console.log(`Luiz` && `Maria`);
console.log(`Luiz` && '' && `Maria`);
console.log(`Luiz` && undefined && `Maria`);
console.log(`Luiz` && NaN && `Maria`);

function FalaOi(){
    return `Oi`;
}

let vaiExecutar = false;
vaiExecutar = undefined;//é mesma coisa que não inicializar, mas como ja tinha em cima, ai tive que escrever.
vaiExecutar = `Joãozinho`;//vai ser true
//se não tivesse o curto-circuito, teria que fazer um if e else,(para verificar se é true ou false) e o codigo ficaria um pouco longo, mas como temos, ficaria assim.
console.log(vaiExecutar && FalaOi());
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*O or é mais interessante ainda
|| -> OR -> OU -> true || false -> vai retornar "o valor verdadeiro"
*/
console.log(0 || false || null || `Luiz Otávio` || true);//O Or || ele não que saber oque vem depois do primeiro true, ele só ta procurando, o primeiro q ele achar ele manda.

const corUsuario = `Vermelho`;
const corPadrao = corUsuario || `Preto`;
console.log(corPadrao);