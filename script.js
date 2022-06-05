// REQUISITO 1
var a = 2;
var b = 5;

let sum = a+b;
let sub = a-b;
let mult = a*b;
let div = a/b;
let mod = a%b;

// REQUISITO 2
var numberOne = 18;
var numberTwo = 26;

if (numberOne > numberTwo) {
    console.log(numberOne);
}
else {
    console.log(numberTwo);
}

// REQUISITO 3
var one = 10;
var two = 15;
var three = 40;

if (one > two && one > three) {
    console.log(one);
}
else if (two > one && two > three ) {
    console.log(two);
}
else {console.log(three);}

// REQUISITO 4
var number = 0;

if (number > 0) {
    console.log('Positive');
}
else if (number < 0) {
    console.log('Negative');
}
else {console.log('zero');}

// REQUISITO 5
var angleA = -70;
var angleB = 60;
var angleC = 60;

var triangle = angleA + angleB + angleC;

var trianglePositive = angleA > 0 && angleB > 0 && angleC > 0;

if (trianglePositive) {
    if (triangle === 180) {
        console.log('true');
    }
    else {console.log('false');}
}
else {console.log('Erro');}

