function fizzBuzz(n) {
    let resultArray = [];

    for (let i = 1; i <= n; i++) {
        let string = '';
        
        if (i % 3 === 0) {
            string += 'Fizz';
        }
        if (i % 5 === 0) {
            string += 'Buzz';
        }
        if (string === '') {
            string += i;
        }
        resultArray.push(string);
    }
    console.log(resultArray);
}

fizzBuzz(15);
