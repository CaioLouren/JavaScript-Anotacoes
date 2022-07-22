// OPERAÇÃO TERNARIA, O OPERADOR É SIMPLISMENTE O ? :, A OPERAÇÃO TERNARIA PODE ENCURTAR O CÓDIGO EM PARTES Q VAI SER USADO UM IF E ELSE SÓ.
//(condição(dependendo da condição, pode usar os parenteses)) ? `Valor para verdadeiro` : `Valor para falso`;
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? `Usuário VIP ` : `Usuário normal`;
console.log(nivelUsuario)

const corUsuario = null;
const corPadrao = corUsuario || `Preta`;//falamos informalmente que estamos cetando um valor.
console.log(corPadrao)
/*if (pontuacaoUsuario >= 1000) {
    console.log(`Usuário VIP`)
}
else {
    console.log(`Usuário normal`)
}*/



















