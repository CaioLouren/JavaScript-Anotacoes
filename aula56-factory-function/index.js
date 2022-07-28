//Funções que retornam objetos
//Quando a função esta dentro de um obj chamamos ela de método
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //GETTER
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //SETTER(PRA RECEBER VALOR)
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function (assunto) {
            return `${this.nome} está ${assunto}, ele tem ${this.altura} e ${this.peso}kg e o imc é de ${this.imc}`
        },
        altura,
        peso,
        //GETTER(QUANDO SÓ QUER OBTER O VALOR)
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Caio', 'Lourenço', 1.87, 80);
console.log(p1);
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc);
p1.nomeCompleto = `Layla Bianca`
console.log(p1.nomeCompleto);
