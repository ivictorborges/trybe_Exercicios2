// REQUISITO 1
var a = 2;
var b = 5;

let sum = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;

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
else if (two > one && two > three) {
    console.log(two);
}
else { console.log(three); }

// REQUISITO 4
var number = 0;

if (number > 0) {
    console.log('Positive');
}
else if (number < 0) {
    console.log('Negative');
}
else { console.log('zero'); }

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
    else { console.log('false'); }
}
else { console.log('Erro'); }

// REQUISITO 6
let chessPiece = 'cavalo';

switch (chessPiece.toLowerCase()) {
    case 'rainha':
        console.log('Qualquer casa em todas as direções');
        break;
    case 'rei':
        console.log('Uma casa em todas as direções');
        break;
    case 'bispo':
        console.log('Diagonais');
        break;
    case 'cavalo':
        console.log('Anda em "L"');
        break;
    case 'torre':
        console.log('Linha reta em qualquer casa');
        break;
    case 'peão':
        console.log('Apenas uma casa para frente, no primeiro movimento, duas casas');
        break;
    default:
        console.log('Erro, peça inválida');
        break;
}

// REQUISITO 7
let note = 40;

if (note < 0 || note > 100) {
    console.log('Erro');
}
else if (note >= 90) {
    console.log('A');
}
else if (note >= 80) {
    console.log('B');
}
else if (note >= 70) {
    console.log('C');
}
else if (note >= 60) {
    console.log('D');
}
else if (note >= 50) {
    console.log('E');
}
else {
    console.log('F');
}

//REQUISITO 8
const one = 12;
const two = 11;
const three = 15;
let isEven = false;

if (one % 2 === 0 || two % 2 === 0 || three % 2 === 0 ) {
    isEven = true;
}
console.log(isEven);

//REQUISITO 9
const one = 16;
const two = 12;
const three = 14;
let isOdd = false;

if (one % 2 !== 0 || two % 2 !== 0 || three % 2 !== 0) {
    isOdd = true;
}
console.log(isOdd);

//REQUISITO 10
const custo = 1;
const venda = 2;

if (custo < 0 || venda < 0) {
    console.log('Erro');
}
else {
    console.log(((venda) - (custo*1.2))*1000);
}
