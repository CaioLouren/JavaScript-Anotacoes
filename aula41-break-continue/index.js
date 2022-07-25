const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of num) {

    if (numero === 2) {
        continue; // ele vai pular pra proxima interação do laço
    }

    if (numero === 4) {
        break;// para o laço, e o acaba.
    }
    console.log(numero);
}
