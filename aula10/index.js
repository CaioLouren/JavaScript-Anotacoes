// Tipo de dados primitivos
const nome = 'Caio';//String
const nome1 = "Caio";//podemos usar dos tres jeitos
const nome2 = `Caio`;// com as crases podemos usar templates strings

const num1 = 10; // number
const num2 = 15.50; // number com ponto flutuante
let nomeAluno;// No caso aqui está declarada mas não inicializada, quando faço isso essa variavel recebe o valor de undefined(indefinido), esse valor não aponta para local nenhum na memória.
let sobrenomeAluno = null; //Nulo-> não aponta pra local nenhum na memória.
// Qual a diferença, o valor null usamos quando queremos desconfigurar uma variavel, colocar como nulo. ex:imagina q tem um site para escoolher um cor e o usuario n escolhe nenhuma, vc vai botar explicitamente pra essa variavel q ela tem valor nulo
// Quando utilizo null eu, explicitamente to dizendo que quero q essa variavel, não aponte pra nenhum local na memória, e undefined quem faz isso é a linguagem o programador nunca coloca esse valor.

const boolean = true;// boolean = true, false.(lógico)
const boolean2 = false;// Sempre que se usa Boolean, a gnt que mudar o fluxo.

// Podemos checar o tipo da variável com, typeof.
console.log(typeof boolean);
console.log(typeof num1, num1); // pra saber o tipo e o valor.
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno);

// tipo de dados primitivo x tipo de dados passado por referencia.
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

// valores por referencia que dizer o seguinte, ex: criei uma var a e uma var b, e depois fiz o valor de b apontar para mesmo local que a aponta, então ambos apontam para o mesmo valor na memória.
// quando é primitivo o valor de a é copiado para b.