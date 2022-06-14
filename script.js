// EXERCÍCIO 3
let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index]
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length) {
        smallestWord = array[index]
    }
}

console.log(biggestWord);
console.log(smallestWord);

// EXERCÍCIO 4
let biggestPrimeNumber = 0;

for (let number = 2; number <= 50; number += 1) {
    let isPrime = true;
    for (let divisor = 2; divisor < number; divisor += 1) {
        if (number % divisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        biggestPrimeNumber = number;
    }

}
console.log(biggestPrimeNumber);

// BÔNUS 1
let n = 5;
let symbol = '*';
let inputLine = '';

for (let i = 0; i < n; i += 1) {
    inputLine = inputLine + symbol;
}
for (let i = 0; i < n; i += 1) {
    console.log(inputLine);
}

// BÔNUS 2
let n = 5;
let symbol = '*';
let inputLine = '';

for (let i = 0; i <= n; i += 1) {
    console.log(inputLine);
    inputLine = inputLine + symbol;
}

// BÔNUS 3
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let line = 0; line <= n; line += 1) {
    for (let column = 0; column <= n; column += 1) {
        if (column < inputPosition) {
            inputLine = inputLine + ' ';
        }
        else {
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
}

// BÔNUS 4
let n = 5;
let symbol = '*';
let inputLine = '';

let midMatrix = (n + 1) / 2;
let controlLeft = midMatrix;
let controlRight = midMatrix;

for (let line = 0; line <= midMatrix; line += 1) {
    for (let column = 0; column <= n; column += 1) {
        if (column > controlLeft && column < controlRight) {
            inputLine = inputLine + symbol
        }
        else {
            inputLine = inputLine + ' ';
        }
    }
    console.log(inputLine);
    inputLine = '';
    controlRight += 1;
    controlLeft -= 1;
}

// BÔNUS 5
let n = 7;
let symbol = '*';
let mid = (n + 1) / 2;
let controlRight = mid;
let controlLeft = mid;

for (let line = 1; line <= mid; line += 1) {
    let output = '';
    for (let column = 1; column <= n; column += 1) {
        if (column == controlLeft || column == controlRight || line == mid) {
            output += symbol;
        }
        else {
            output += ' ';
        }
    }
    controlLeft -= 1;
    controlRight += 1;
    console.log(output);
}

// BÕNUS 6
let divisor = 1;
let numberToCheck = 32;

for (let divisorIndex = 2; divisorIndex <= numberToCheck; divisorIndex += 1) {
    if (numberToCheck % divisorIndex === 0) {
        divisor += 1
    }
}
if (divisor == 2) {
    console.log(numberToCheck + ' é primo.');
}
else {
    console.log(numberToCheck + ' não é primo.');
}