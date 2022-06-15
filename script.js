// PARTE I - OBJETOS E FOR/IN
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// REQUISITO 1
// console.log('Bem vinda, ' + info['personagem']);

// REQUISITO 2
// info['recorrente'] = 'Sim';
// console.log(info);

// REQUISITO 3
// for (let i in info) {
//     console.log(i);
// }

// REQUISITO 4
// for (let i in info) {
//     console.log(info[i]);
// }

// REQUISITO 5
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
// }

// for (let i in info) {
//     if (
//         i === 'recorrente' &&
//         info[i] === 'Sim' &&
//         info2[i] === 'Sim')
//          {
//             console.log('Ambos recorrentes');
//         }
//     else {
//         console.log(info[i] + ' e ' + info2[i]);
//     }
// }

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

// REQUISITO 6
// console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + leitor['livrosFavoritos'][0]['titulo']);

// REQUISITO 7
// leitor['livrosFavoritos'].push ({
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
// })
// console.log(leitor['livrosFavoritos'][1]['titulo']);

// REQUISITO 8
// console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos !');

// PARTE II - FUNÇÕES

// REQUISITO 1
// function palindromeVerify (word) {
//     for (let index in word) {
//         if (word[index] != word[(word.length - 1) - index]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(palindromeVerify('arara'));

// REQUISITO 2
// let array = [2, 3, 6, 7, 10, 1];

// function arrayVerify (array) {
//     let maxIndex = 0;
//     for (let index in array) {
//         if (array[index] > array[maxIndex]) {
//             maxIndex = index;
//         }
//     }
//     return maxIndex;
// }
// console.log(arrayVerify(array));

// REQUISITO 3
// let array = [2, 4, 6, 7, 10, 0, -3];

// function arrayVerify(array) {
//     let minIndex = 0;
//     for (let index in array) {
//         if (array[index] < array[minIndex]) {
//             minIndex = index;
//         }
//     }
//     return minIndex;
// }
// console.log(arrayVerify(array));

// REQUISITO 4
// let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function verifyCharacter (array) {
//     let largest = array[0];
//     for (let index in array) {
//         if (array[index].length > largest.length) {
//             largest = array[index];
//         }
//     }
//     return largest;
// }
// console.log(verifyCharacter(array));

// REQUISITO 5
// let array = [2, 3, 2, 5, 8, 2, 3];

// function repeat(array) {
//     let checkRepeat = 0;
//     let checkNumber = 0;
//     let indexNumber = 0;
//     for (let index in array) {
//         let verifyNumber = array[index];
//         for (let index2 in array) {
//             if (verifyNumber === array[index2]) {
//                 checkNumber += 1;
//             }
//         }
//         if (checkNumber > checkRepeat) {
//             checkRepeat = checkNumber;
//             indexNumber = index;
//         }
//         checkNumber = 0;
//     }
//     return array[indexNumber];
// }
// console.log(repeat(array));

// REQUISITO 6
// function somatory(number) {
//     let total = 0;
//     for (let index = 0; index <= number; index += 1) {
//         total = total + index;
//     }
//     return total;
// }
// console.log(somatory(5));

// REQUISITO 7
// function verify (palavra, fimPalavra) {
//     palavra = palavra.split('');
//     fimPalavra = fimPalavra.split('');
//     controle = true;
//     for (let index = 0; index < fimPalavra.length; index += 1) {
//         if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//             controle = false;
//         }
//     }
//     return controle;
// }
// console.log(verify('trybe','be'));

// BÔNUS
// REQUISITO 1
// const numerosRomanos = {
//     i: 1,
//     v: 5,
//     x: 10,
//     l: 50,
//     c: 100,
//     d: 500,
//     m: 1000,
//   };
  
//   function romanoParaDecimal(numero) {
//     numero = numero.toLowerCase();
//     const len = numero.length;
//     let soma = numerosRomanos[numero[len - 1]];
//     let atual = numerosRomanos[numero[len - 1]];
//     for (let i = 2; i <= len; i += 1) {
//       const prox = numerosRomanos[numero[len - i]];
//       if (atual <= prox) {
//         soma += prox;
//       } else {
//         soma -= prox;
//       }
//       atual = prox;
//     }
//     return soma;
//   }
  
//   console.log(romanoParaDecimal('MMXVIII'));

// REQUISITO 2
// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// function arrayOfNumbers(vector) {
//     const result = [];
//     for (let index = 0; index < vector.length; index += 1) {
//         const numbers = vector[index];
//         for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//             const currentNumber = numbers[index2];
//             if ((currentNumber % 2) === 0) {
//                 result.push(currentNumber);
//             }
//         }
//     }
//     return result;
// }
// console.log(arrayOfNumbers(vector));

// REQUISITO 3
// const basket = [
//     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//     'Banana', 'Pera', 'Abacate', 'Uva',
//   ];

// const result = {};

// for (let index = 0; index < basket.length; index += 1) {
//     const fruit = basket[index];
//     if (!result[fruit]) {
//         result[fruit] = 0;
//     } 
//     result[fruit] += 1;
// }
// const summaries = [];

// for (fruit in result) {
//     let message = `${result[fruit]} ${fruit}`;
//     if (result[fruit] > 1) {
//         message += 's';
//         summaries.push(message);
//     }
// }

// console.log(`Sua cesta possui : ${summaries.join(', ')}.`);

// let moradores = {
//     blocoUm: [
//       {
//         nome: 'Luiza',
//         sobrenome: 'Guimarães',
//         andar: 10,
//         apartamento: 1005,
//       },
//       {
//         nome: 'William',
//         sobrenome: 'Albuquerque',
//         andar: 5,
//         apartamento: 502,
//       },
//     ],
//     blocoDois: [
//       {
//         nome: 'Murilo',
//         sobrenome: 'Ferraz',
//         andar: 8,
//         apartamento: 804,
//       },
//       {
//         nome: 'Zoey',
//         sobrenome: 'Brooks',
//         andar: 1,
//         apartamento: 101,
//       },
//     ],
//   };

// // REQUISITO 4
// // let moradoresBlocoDois = moradores.blocoDois;
// // let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

// // console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois['nome'] + ' ' + ultimoMoradorBlocoDois['sobrenome'] + ' mora no ' + ultimoMoradorBlocoDois['andar'] + '° andar, apartamento ' + ultimoMoradorBlocoDois['apartamento']);

// // REQUISITO 5
// for (let index = 0; index < moradores.blocoUm.length; index += 1) {
//     console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
//   }
  
//   for (let index = 0; index < moradores.blocoDois.length; index++) {
//     console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
//   }