//REQUISITO 7 ( Qual o menor valor )
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lowerNumber = numbers [0];

for ( let index = 1; index < numbers.length; index += 1) {
    if ( numbers[index] < lowerNumber ) {
        lowerNumber = numbers[index]
    };
}

console.log(lowerNumber);

//BÔNUS ( Bubble Sort )
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers);