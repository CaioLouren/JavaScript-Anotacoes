function FizzBuzz(i) {
    if (typeof i !== 'number') return i;
    if (i % 3 === 0 && i % 5 === 0) return 'FizzBuzz';
    if (i % 3 === 0) return 'Fizz';
    if (i % 5 === 0) return 'Buzz';
    if (i % 3 !== 0 && i % 5 !== 0) return i;

}

console.log('i', FizzBuzz('i'));
for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i));
}
