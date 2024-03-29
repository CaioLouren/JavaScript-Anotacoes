function* geradora1() {
    // Código qualque...
    yield 'Valor 1';
    // Código qualque...
    yield 'Valor 2';
    // Código qualque...
    yield 'Valor 3';
}

const g1 = geradora1();
for (let i of g1) {
    console.log(i);
}

function* contador() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}
const g2 = contador();
console.log(g2.next().value);

function* gerador3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* gerador3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for (let valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function () {
        console.log('Vim do y1');
    };

    return function () {
        console.log('Vim do return');
    };
    //...

    yield function () {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
