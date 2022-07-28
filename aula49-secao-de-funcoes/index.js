//Declaração de função (Function hoisting(a enginer do JS ira elevar as declaraçoes de funçoes e variaves declaradas com a palavra var, podendo usar a função antes ou depois dela))
falaOi();
function falaOi() {
    console.log(`Oie`);
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {//function anonima, pois ela n tem nome(por isso a variavel se tornou uma função com o nome da variavel)
    console.log(`Sou um dado.`)
};
souUmDado();//a minha variavel recebeu uma função então ela passa a ser um função.
//podemos tratar função como um dado, naturalmente, porque podemos passar ela em outra função, retorna de outra função e etc...

//Arrow function
const funcaoArrow = () => {
    console.log(`Sou uma arrow function`);
};
funcaoArrow();

// Dentro de um obejto posso ter uma função

const obj = {
    falar() {//agr pode fazer sem botar o nome function q ja vira um metodo
        console.log("oi");
    }
};

obj.falar();