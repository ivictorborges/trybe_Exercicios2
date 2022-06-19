// PARTE I
// PRIMEIRO
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope}
      ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
} testingScope(true);

// SEGUNDO
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderedArray = (a, b) => {
  return a - b;
};
console.log(`Os números ${oddsAndEvens.sort(orderedArray)} se encontram ordenados de forma crescente!`);

// PARTE II
// PRIMEIRO
const factorial = number => number > 1 ? number * factorial(number - 1) : 1; // TERNARY OPERATOR
console.log(factorial(6));

// SEGUNDO
const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// QUARTO
const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }
  return fraseArray.join(' ');
};

console.log(substituaX('Victor'));

// QUINTO
const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
${func}

  Minhas três principais habilidades são:`;

  skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
    resultado = `${resultado}
    - ${skill}`;
  }); // reatribui e adiciona a skill atual a variável resultado
  return resultado;
};

console.log(minhasSkills(substituaX('Victor')));
