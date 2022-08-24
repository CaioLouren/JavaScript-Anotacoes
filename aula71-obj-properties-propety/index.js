//COMO TRAVAR SÓ UMA PARTE DO OBJ, COM AS FUNÇÕES, defineProperty -> uma propriedade
//defineProperties -> varias
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, `estoque`, {
        enumerable: true, //MOSTRA A CHAVE
        value: estoque, //MOSTRA O VALOR
        writable: true,//N VAI SER ALTERADO(VALOR)
        configurable: false //PODE APAGAR OU RECONFIGURAR?(n consegue nem apagar uma chave)
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //MOSTRA A CHAVE
            value: nome, //MOSTRA O VALOR
            writable: true,//N VAI SER ALTERADO(VALOR)
            configurable: true
        },
        preco: {
            enumerable: true, //MOSTRA A CHAVE
            value: preco, //MOSTRA O VALOR
            writable: true,//N VAI SER ALTERADO(VALOR)
            configurable: true
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}
